import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'edge'

const brevoApiKey = process.env.BREVO_API_KEY

const meetingSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name is too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name is too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Invalid phone number').max(20, 'Phone number is too long'),
  subject: z.string().min(1, 'Subject is required').max(200, 'Subject is too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message is too long'),
  turnstileToken: z.string().min(1, 'Captcha verification is required'),
})

type MeetingFormData = z.infer<typeof meetingSchema>

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

  if (record.count >= RATE_LIMIT) {
    return false
  }

  record.count++
  return true
}

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim()
}

async function sendEmailViaBrevo(data: MeetingFormData): Promise<boolean> {
  if (!brevoApiKey) {
    return false
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'noreply@career141.com'
  const senderName = process.env.BREVO_SENDER_NAME || 'Career141'

  const htmlContent = `
    <h2>New Meeting Request</h2>
    <p><strong>Name:</strong> ${sanitizeInput(data.firstName)} ${sanitizeInput(data.lastName)}</p>
    <p><strong>Email:</strong> ${sanitizeInput(data.email)}</p>
    <p><strong>Phone:</strong> ${sanitizeInput(data.phone)}</p>
    <p><strong>Subject:</strong> ${sanitizeInput(data.subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${sanitizeInput(data.message).replace(/\n/g, '<br>')}</p>
  `

  const textContent = `
    New Meeting Request
    
    Name: ${sanitizeInput(data.firstName)} ${sanitizeInput(data.lastName)}
    Email: ${sanitizeInput(data.email)}
    Phone: ${sanitizeInput(data.phone)}
    Subject: ${sanitizeInput(data.subject)}
    Message: ${sanitizeInput(data.message)}
  `

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': brevoApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          email: senderEmail,
          name: senderName,
        },
        to: [
          {
            email: process.env.CONTACT_RECIPIENT_EMAIL || 'info@career141.com',
            name: 'Career141 Meeting Request',
          },
        ],
        subject: `Meeting Request: ${sanitizeInput(data.subject)}`,
        htmlContent,
        textContent,
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Brevo API Error:', response.status, errText)
      return false
    }

    return true
  } catch (error) {
    console.error('Brevo API exception:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
    || request.headers.get('x-real-ip') 
    || 'unknown'

  if (!checkRateLimit(clientIP)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  const contentType = request.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    return NextResponse.json(
      { error: 'Invalid content type' },
      { status: 400 }
    )
  }

  try {
    const body = await request.json()
    
    const validationResult = meetingSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.issues },
        { status: 400 }
      )
    }

    const data = validationResult.data

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY || ''
    const turnstileFormData = new URLSearchParams()
    turnstileFormData.append('secret', turnstileSecret)
    turnstileFormData.append('response', data.turnstileToken)

    const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      body: turnstileFormData,
      method: 'POST',
    })
    
    const turnstileOutcome = await turnstileRes.json()
    if (!turnstileOutcome.success) {
      return NextResponse.json(
        { error: 'Captcha verification failed' },
        { status: 400 }
      )
    }

    const success = await sendEmailViaBrevo(data)

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to send request. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Request sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Meeting form API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
