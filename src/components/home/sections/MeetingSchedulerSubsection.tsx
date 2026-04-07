'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Turnstile } from '@marsidev/react-turnstile'
import { withBasePath } from '@/lib/assetPath'
import { getTurnstileSiteKey } from '@/lib/turnstile'

const imgDivElementorElement = withBasePath("/figmaAssets/testimonial/032702031c80235a48f8edff72693cef0a9031ec.png");
const imgDivElementorElement1 = withBasePath("/figmaAssets/testimonial/f5fc7d0a8ab3374cd43c8bfed2b6b9ba03f8d49d.png");
const imgDivRcAnchorLogoImg = withBasePath("/figmaAssets/testimonial/4736508c795667dcea21f8d864233031223b7832.png");

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function InputField({ 
  label, 
  placeholder, 
  isRequired = false, 
  type = "text", 
  value, 
  onChange,
  error,
  onBlur 
}: { 
  label: string
  placeholder: string
  isRequired?: boolean
  type?: string
  value: string
  onChange: (v: string) => void
  error?: string
  onBlur?: () => void
}) {
  const [focused, setFocused] = useState(false)
  
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-['Quicksand',sans-serif] font-normal text-white text-[16px]">
        {label} {isRequired && <span className="text-red-400">*</span>}
      </label>
      <div 
        className="relative w-full border-b pb-2 pt-2 transition-all"
        style={{ 
          borderColor: error ? '#ef4444' : (focused ? '#CBFC06' : 'rgba(255,255,255,0.3)'),
        }}
      >
        <input 
            type={type}
            placeholder={focused ? '' : placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => {
              setFocused(false)
              onBlur?.()
            }}
            onFocus={() => setFocused(true)}
            className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/30 font-['Inter',sans-serif] font-normal text-[15.1px]"
        />
      </div>
      {error && (
        <span className="text-red-400 text-xs font-['Inter',sans-serif] mt-1">{error}</span>
      )}
    </div>
  );
}

function ContactMethod({ country, phones }: { country: string; phones: string[] }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="font-['Inter',sans-serif] font-semibold text-white text-[12px] uppercase opacity-80">{country}</div>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
                {phones.map((phone, i) => (
                    <div key={i} className="font-['Quicksand',sans-serif] font-semibold text-white text-[17.6px]">{phone}</div>
                ))}
            </div>
        </div>
    );
}

export function MeetingSchedulerSubsection() {
  const turnstileSiteKey = getTurnstileSiteKey()

  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitting, setSubmitting] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  const update = (field: keyof FormData) => (v: string) => {
    let finalValue = v
    if (field === 'phone') {
      // Only allow digits, spaces, and basic phone symbols (+ - ( ) .)
      finalValue = v.replace(/[^\d+()\-\s.]/g, '')
    }
    setForm(f => ({ ...f, [field]: finalValue }))
    if (touched[field]) {
      validateField(field, finalValue)
    }
  }

  const handleBlur = (field: keyof FormData) => () => {
    setTouched(t => ({ ...t, [field]: true }))
    validateField(field, form[field])
  }

  const validateField = (field: keyof FormData, value: string) => {
    let error: string | undefined

    switch (field) {
      case 'firstName':
        if (!value.trim()) error = 'First name is required'
        else if (value.trim().length < 2) error = 'First name must be at least 2 characters'
        break
      case 'lastName':
        if (!value.trim()) error = 'Last name is required'
        else if (value.trim().length < 2) error = 'Last name must be at least 2 characters'
        break
      case 'email':
        if (!value.trim()) error = 'Email is required'
        else if (!validateEmail(value)) error = 'Please enter a valid email address'
        break
      case 'phone':
        if (!value.trim()) error = 'Phone number is required'
        else if (value.trim().length < 5) error = 'Please enter a valid phone number'
        break
      case 'subject':
        if (!value.trim()) error = 'Subject is required'
        else if (value.trim().length < 3) error = 'Subject must be at least 3 characters'
        break
      case 'message':
        if (!value.trim()) error = 'Message is required'
        else if (value.trim().length < 10) error = 'Message must be at least 10 characters'
        break
    }

    setErrors(e => ({ ...e, [field]: error }))
  }

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {}

    if (!form.firstName.trim()) newErrors.firstName = 'First name is required'
    else if (form.firstName.trim().length < 2) newErrors.firstName = 'First name must be at least 2 characters'

    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required'
    else if (form.lastName.trim().length < 2) newErrors.lastName = 'Last name must be at least 2 characters'

    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!validateEmail(form.email)) newErrors.email = 'Please enter a valid email address'

    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (form.phone.trim().length < 5) newErrors.phone = 'Please enter a valid phone number'

    if (!form.subject.trim()) newErrors.subject = 'Subject is required'
    else if (form.subject.trim().length < 3) newErrors.subject = 'Subject must be at least 3 characters'

    if (!form.message.trim()) newErrors.message = 'Message is required'
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters'

    setErrors(newErrors)
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    })

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateAll()) {
      return
    }

    if (!turnstileToken) {
      alert('Please complete the CAPTCHA')
      return
    }
    
    setSubmitting(true)
    
    try {
      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: `Subject: ${form.subject}\n\n${form.message}`,
        turnstileToken,
      }
      
      const response = await fetch('/api/meeting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        let errorData: any = {}
        try {
          errorData = await response.json()
        } catch (e) {}
        
        if (response.status === 400) {
          if (errorData?.details) {
            const newValidationErrors: FormErrors = { ...errors }
            errorData.details.forEach((detail: any) => {
              const field = detail.path[0] as keyof FormErrors
              if (field) {
                newValidationErrors[field] = detail.message
              }
            })
            setErrors(newValidationErrors)
          }
          return
        }
        
        throw new Error(errorData?.error || 'Failed to send')
      }

      const successData = await response.json()

      alert('Message sent! We will contact you shortly.')
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setTouched({})
      setErrors({})
    } catch (error: any) {
      alert(error.message || 'Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="relative w-full py-[80px] lg:py-[120px] px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden bg-[#0d1f15]">
      <div className="absolute inset-0 z-0">
          <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60" src={imgDivElementorElement} loading="lazy" decoding="async" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto rounded-[18px] overflow-hidden border border-white/20 shadow-2xl bg-white/10 backdrop-blur-md">
          <div className="relative w-full min-h-[700px] flex flex-col lg:flex-row">
              <img alt="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-60" src={imgDivElementorElement1} loading="lazy" decoding="async" />
              
              <div className="relative z-10 flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-12">
                  <h2 className="font-['Quicksand',sans-serif] font-bold text-[#CBFC06] text-[32px] md:text-[41.6px] leading-tight">
                    Schedule a talent acquisition meeting
                  </h2>
                  
                  <div className="flex flex-col gap-8">
                       <div className="font-['Inter',sans-serif] font-normal text-white text-[14.8px] opacity-100">Give us a call</div>
                       <ContactMethod country="Sri Lanka" phones={["+94 11 488 4774", "+94 11 723 2425"]} />
                       <ContactMethod country="Dubai" phones={["+971 52 232 5425"]} />
                       <ContactMethod country="Singapore" phones={["+65 824 456 500"]} />
                  </div>
              </div>

              <div className="relative z-10 flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <InputField 
                            label="First Name" 
                            placeholder="First name with initials" 
                            isRequired 
                            value={form.firstName} 
                            onChange={update('firstName')}
                            onBlur={handleBlur('firstName')}
                            error={errors.firstName} 
                          />
                          <InputField 
                            label="Last Name" 
                            placeholder="Last Name" 
                            isRequired 
                            value={form.lastName} 
                            onChange={update('lastName')}
                            onBlur={handleBlur('lastName')}
                            error={errors.lastName} 
                          />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <InputField 
                            label="Email" 
                            placeholder="example@email.com" 
                            isRequired 
                            type="email" 
                            value={form.email} 
                            onChange={update('email')}
                            onBlur={handleBlur('email')}
                            error={errors.email} 
                          />
                          <InputField 
                            label="Your Phone" 
                            placeholder="+94 1234 12345" 
                            type="tel" 
                            value={form.phone} 
                            onChange={update('phone')}
                            onBlur={handleBlur('phone')}
                            error={errors.phone} 
                          />
                      </div>

                      <InputField 
                        label="Subject" 
                        placeholder="I want help with recruitment" 
                        value={form.subject} 
                        onChange={update('subject')}
                        onBlur={handleBlur('subject')}
                        error={errors.subject} 
                      />
                      
                      <div className="flex flex-col gap-1 w-full">
                        <label className="font-['Quicksand',sans-serif] font-normal text-white text-[16px]">Message</label>
                        <div 
                          className="relative w-full border-b pb-2 mt-2 transition-all"
                          style={{ 
                            borderColor: errors.message ? '#ef4444' : 'rgba(255,255,255,0.3)',
                            boxShadow: errors.message ? '0 0 0 2px rgba(239,68,68,0.2)' : 'none'
                          }}
                        >
                           <textarea 
                             placeholder="Tell us how we can help you today"
                             rows={3}
                             value={form.message}
                             onChange={(e) => update('message')(e.target.value)}
                             onBlur={handleBlur('message')}
                             className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/50 font-['Inter',sans-serif] font-normal text-[14.8px] resize-none"
                           />
                        </div>
                        {errors.message && (
                          <span className="text-red-400 text-xs font-['Inter',sans-serif]">{errors.message}</span>
                        )}
                      </div>

                      <div style={{ marginBottom: '16px' }}>
                        {turnstileSiteKey ? (
                          <Turnstile
                            siteKey={turnstileSiteKey}
                            onSuccess={(token) => setTurnstileToken(token)}
                            onError={() => {
                              console.error('Turnstile error: Failed to load widget')
                              setTurnstileToken(null)
                            }}
                            onExpire={() => setTurnstileToken(null)}
                          />
                        ) : (
                          <p className="text-white/80 text-sm">
                            Captcha is not configured. Please set NEXT_PUBLIC_TURNSTILE_SITE_KEY.
                          </p>
                        )}
                      </div>

                      <button 
                        type="submit"
                        disabled={!turnstileToken || submitting}
                        className="bg-white text-black font-['Quicksand',sans-serif] font-bold py-3 rounded-full hover:bg-gray-100 transition-colors text-[16px] w-full disabled:opacity-50"
                      >
                        {submitting ? 'Sending...' : 'Submit'}
                      </button>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}
