import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

const brevoApiKey = process.env.BREVO_API_KEY

const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5
const RATE_LIMIT_WINDOW = 60 * 1000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimit.get(ip)
  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }
  if (record.count >= RATE_LIMIT) return false
  record.count++
  return true
}

function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, '').replace(/javascript:/gi, '').replace(/on\w+=/gi, '').trim()
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  const chunkSize = 0x8000

  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize)
    binary += String.fromCharCode(...chunk)
  }

  return btoa(binary)
}

async function sendEmailViaBrevo(fields: Record<string, string>, fileName: string, fileBase64: string): Promise<boolean> {
  if (!brevoApiKey) return false

  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'noreply@career141.com'
  const senderName = process.env.BREVO_SENDER_NAME || 'Career141'

  const htmlContent = `
    <h2>New Job Application</h2>
    <p><strong>Job:</strong> ${sanitizeInput(fields.jobTitle)}</p>
    <p><strong>Name:</strong> ${sanitizeInput(fields.firstName)} ${sanitizeInput(fields.lastName)}</p>
    <p><strong>Email:</strong> ${sanitizeInput(fields.email)}</p>
    <p><strong>Phone:</strong> ${sanitizeInput(fields.phone)}</p>
    <p><strong>Age:</strong> ${sanitizeInput(fields.age)}</p>
    <p><strong>Current Designation:</strong> ${sanitizeInput(fields.designation || 'N/A')}</p>
    <p><strong>Attachment:</strong> ${sanitizeInput(fileName)}</p>
  `

  const textContent = `
    New Job Application

    Job: ${sanitizeInput(fields.jobTitle)}
    Name: ${sanitizeInput(fields.firstName)} ${sanitizeInput(fields.lastName)}
    Email: ${sanitizeInput(fields.email)}
    Phone: ${sanitizeInput(fields.phone)}
    Age: ${sanitizeInput(fields.age)}
    Current Designation: ${sanitizeInput(fields.designation || 'N/A')}
    Attachment: ${sanitizeInput(fileName)}
  `

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': brevoApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email: 'sanjeev@career141.com', name: 'Sanjeev - Career141' }],
        subject: `Job Application: ${sanitizeInput(fields.jobTitle)} — ${sanitizeInput(fields.firstName)} ${sanitizeInput(fields.lastName)}`,
        htmlContent,
        textContent,
        attachment: [{ name: fileName, content: fileBase64 }],
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Brevo API Error:', response.status, errText)
      return false
    }
    return true
  } catch (error) {
    console.error('Brevo send error:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown'

  if (!checkRateLimit(clientIP)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  try {
    const formData = await request.formData()

    const firstName = formData.get('firstName')?.toString() || ''
    const lastName = formData.get('lastName')?.toString() || ''
    const email = formData.get('email')?.toString() || ''
    const phone = formData.get('phone')?.toString() || ''
    const age = formData.get('age')?.toString() || ''
    const designation = formData.get('designation')?.toString() || ''
    const jobTitle = formData.get('jobTitle')?.toString() || ''
    const turnstileToken = formData.get('turnstileToken')?.toString() || ''
    const file = formData.get('file') as File | null

    const errors: string[] = []
    if (firstName.length < 2) errors.push('First name must be at least 2 characters')
    if (lastName.length < 2) errors.push('Last name must be at least 2 characters')
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required')
    if (!phone || phone.length < 5) errors.push('Valid phone number is required')
    if (!age || Number(age) < 18) errors.push('Age must be 18 or above')
    if (!jobTitle) errors.push('Job title is required')
    if (!file) errors.push('CV/resume file is required')
    if (!turnstileToken) errors.push('Captcha is required')

    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) errors.push('Only PDF, DOC, and DOCX files are allowed')
      if (file.size > 5 * 1024 * 1024) errors.push('File size must be under 5MB')
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join('. ') }, { status: 400 })
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY || ''
    const turnstileFormData = new URLSearchParams()
    turnstileFormData.append('secret', turnstileSecret)
    turnstileFormData.append('response', turnstileToken)

    const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      body: turnstileFormData,
      method: 'POST',
    })
    const turnstileOutcome = await turnstileRes.json()
    if (!turnstileOutcome.success) {
      return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 })
    }

    const fileBuffer = await file!.arrayBuffer()
    const fileBase64 = arrayBufferToBase64(fileBuffer)

    const fields = { firstName, lastName, email, phone, age, designation, jobTitle }
    const success = await sendEmailViaBrevo(fields, file!.name, fileBase64)

    if (!success) {
      return NextResponse.json({ error: 'Failed to send application. Please try again later.' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Application sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Apply form API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
