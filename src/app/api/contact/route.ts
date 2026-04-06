import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const brevoApiKey = process.env.BREVO_API_KEY

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  designation: z.string().max(100, 'Designation is too long').optional(),
  email: z.string().email('Invalid email address'),
  companyName: z.string().max(100, 'Company name is too long').optional(),
  phone: z.string().min(5, 'Invalid phone number').max(20, 'Phone number is too long'),
  country: z.string().max(50, 'Country is too long').optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message is too long'),
  turnstileToken: z.string().min(1, 'Captcha verification is required'),
})

type ContactFormData = z.infer<typeof contactSchema>

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

async function sendEmailViaBrevo(data: ContactFormData): Promise<boolean> {
  if (!brevoApiKey) {
    return false
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'noreply@career141.com'
  const senderName = process.env.BREVO_SENDER_NAME || 'Career141'

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${sanitizeInput(data.name)}</p>
    <p><strong>Designation:</strong> ${sanitizeInput(data.designation || 'N/A')}</p>
    <p><strong>Email:</strong> ${sanitizeInput(data.email)}</p>
    <p><strong>Company:</strong> ${sanitizeInput(data.companyName || 'N/A')}</p>
    <p><strong>Phone:</strong> ${sanitizeInput(data.phone)}</p>
    <p><strong>Country:</strong> ${sanitizeInput(data.country || 'N/A')}</p>
    <p><strong>Message:</strong></p>
    <p>${sanitizeInput(data.message).replace(/\n/g, '<br>')}</p>
  `

  const textContent = `
    New Contact Form Submission
    
    Name: ${sanitizeInput(data.name)}
    Designation: ${sanitizeInput(data.designation || 'N/A')}
    Email: ${sanitizeInput(data.email)}
    Company: ${sanitizeInput(data.companyName || 'N/A')}
    Phone: ${sanitizeInput(data.phone)}
    Country: ${sanitizeInput(data.country || 'N/A')}
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
            email: process.env.CONTACT_RECIPIENT_EMAIL || 'sanjeev@career141.com',
            name: 'Career141 Contact',
          },
        ],
        subject: `New Contact Form: ${sanitizeInput(data.name)}`,
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
    
    const validationResult = contactSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.issues },
        { status: 400 }
      )
    }

    const data = validationResult.data

    let isVerified = false
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY

    if (!turnstileSecret) {
      console.warn("TURNSTILE_SECRET_KEY is missing. Bypassing verification for development.")
      isVerified = true
    } else {
      const turnstileFormData = new URLSearchParams()
      turnstileFormData.append('secret', turnstileSecret)
      turnstileFormData.append('response', data.turnstileToken)

      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        body: turnstileFormData,
        method: 'POST',
      })
      
      const turnstileOutcome = await turnstileRes.json()
      if (turnstileOutcome.success) {
        isVerified = true
      } else {
        console.error('Turnstile verification failed:', turnstileOutcome['error-codes'])
      }
    }

    if (!isVerified) {
      return NextResponse.json(
        { error: 'Captcha verification failed' },
        { status: 400 }
      )
    }

    const success = await sendEmailViaBrevo(data)

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
