'use client'

import { useState } from 'react'
import { withBasePath } from '@/lib/assetPath'

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
}

const contactLocations = [
  {
    country: 'Sri Lanka',
    phones: ['+94 75 359 5495', '+94 75 577 8899'],
  },
  {
    country: 'Dubai',
    phones: ['+94 11 723 2425'],
  },
  {
    country: 'Singapore',
    phones: ['+94 11 488 4774'],
  },
]

function InputField({
  label,
  required,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  testId,
}: {
  label: string
  required?: boolean
  type?: string
  value: string
  onChange: (v: string) => void
  error?: string
  placeholder?: string
  testId?: string
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="[font-family:'Quicksand',Helvetica] font-normal text-white text-[13px] leading-[19px]">
        {label} {required && <span className="text-[#CBFC06]">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        data-testid={testId}
        className="w-full h-[42px] px-3 bg-white/10 border border-white/40 rounded-[4px] text-white text-[13px] [font-family:'Inter',Helvetica] placeholder:text-white/40 focus:outline-none focus:border-white/80 transition-colors"
      />
      {error && <span className="text-[#CBFC06] text-[11px]">{error}</span>}
    </div>
  )
}

export function MeetingSchedulerSubsection() {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState('')

  function update(field: keyof FormData) {
    return (v: string) => {
      setForm((f) => ({ ...f, [field]: v }))
      if (errors[field as keyof FormErrors]) {
        setErrors((e) => ({ ...e, [field]: undefined }))
      }
    }
  }

  function validate(): boolean {
    const newErrors: FormErrors = {}
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSuccess('')
    if (!validate()) return

    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' })
      setSuccess("Message sent successfully. We'll contact you shortly.")
    }, 1000)
  }

  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${withBasePath('/figmaAssets/section2-outer-bg.jpg')})` }}
      data-testid="section-meeting-scheduler"
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative w-full flex items-center justify-center py-10 lg:py-14 px-4 lg:px-8">
        <div
          className="w-full max-w-[1339px] rounded-[20px] overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${withBasePath('/figmaAssets/section2-inner-bg.jpg')})` }}
        >
          <div className="relative bg-[#0D3B2E]/70 w-full h-full">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-12">
              <div className="flex flex-col gap-8 lg:gap-10 flex-1 min-w-0">
                <h2
                  className="[font-family:'Quicksand',Helvetica] font-bold leading-tight text-[28px] sm:text-[34px] lg:text-[41.6px] text-[#CBFC06]"
                  data-testid="text-meeting-heading"
                >
                  Schedule a talent acquisition meeting
                </h2>

                <div className="flex flex-col gap-5">
                  <p className="[font-family:'Quicksand',Helvetica] font-normal text-white text-[13px] tracking-[0.5px] uppercase">Give us a call</p>

                  <div className="flex flex-col gap-4">
                    {contactLocations.map((loc) => (
                      <div key={loc.country} className="flex flex-col gap-1.5">
                        <span className="[font-family:'Quicksand',Helvetica] font-semibold text-white text-[12px] uppercase tracking-[0.5px]">
                          {loc.country}
                        </span>
                        <div className="flex flex-wrap gap-3">
                          {loc.phones.map((phone) => (
                            <a
                              key={phone}
                              href={`tel:${phone.replace(/\s/g, '')}`}
                              className="[font-family:'Inter',Helvetica] font-medium text-white text-[13px] hover:text-[#CBFC06] transition-colors border-b border-white/30 hover:border-[#CBFC06]/60 pb-0.5"
                              data-testid={`link-phone-${phone.replace(/\s/g, '')}`}
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 min-w-0 lg:max-w-[607px]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full" noValidate>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <InputField
                      label="First Name"
                      required
                      value={form.firstName}
                      onChange={update('firstName')}
                      error={errors.firstName}
                      placeholder="Enter first name"
                      testId="input-first-name"
                    />
                    <InputField
                      label="Last Name"
                      required
                      value={form.lastName}
                      onChange={update('lastName')}
                      error={errors.lastName}
                      placeholder="Enter last name"
                      testId="input-last-name"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <InputField
                      label="Email"
                      required
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      error={errors.email}
                      placeholder="Enter email address"
                      testId="input-email"
                    />
                    <InputField
                      label="Your Phone"
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="Enter phone number"
                      testId="input-phone"
                    />
                  </div>

                  <InputField
                    label="Subject"
                    value={form.subject}
                    onChange={update('subject')}
                    placeholder="Enter subject"
                    testId="input-subject"
                  />

                  <div className="flex flex-col gap-1.5 w-full">
                    <label className="[font-family:'Quicksand',Helvetica] font-normal text-white text-[13px] leading-[19px]">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message')(e.target.value)}
                      placeholder="Enter your message..."
                      rows={4}
                      data-testid="input-message"
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/40 rounded-[4px] text-white text-[13px] [font-family:'Inter',Helvetica] placeholder:text-white/40 focus:outline-none focus:border-white/80 transition-colors resize-none"
                    />
                  </div>

                  {success && (
                    <div className="rounded-[6px] border border-[#CBFC06]/50 bg-[#CBFC06]/15 px-3 py-2 text-[#CBFC06] text-[12px]">{success}</div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="button-submit"
                    className="w-full h-[41px] bg-white hover:bg-white/90 text-black [font-family:'Quicksand',Helvetica] font-semibold text-[14px] tracking-[0.5px] rounded-[100px] transition-all duration-200 disabled:opacity-60 mt-1"
                  >
                    {submitting ? 'Sending...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
