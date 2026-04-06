'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { CheckCircle2Icon, ChevronRightIcon, InstagramIcon, LinkedinIcon, Loader2, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import PhoneInput from 'react-phone-input-2'
import { Turnstile } from '@marsidev/react-turnstile'
import { withBasePath } from '@/lib/assetPath'
import styles from './ContactInfoAndFormSection.module.css'


type FormData = {
  name: string
  designation: string
  email: string
  companyName: string
  phone: string
  country: string
  message: string
}

const contactPhones = [
  { country: 'Sri Lanka', phone: '+94 75 359 5495', code: 'LK' },
  { country: 'Dubai', phone: '+971 56 530 2484', code: 'AE' },
  { country: 'Singapore', phone: '+65 89 022 082', code: 'SG' },
]

const officeLocations = [
  {
    city: 'Sri Lanka',
    type: 'Headquarters',
    address: 'No. 35/1, Dr Lester James Peris Mawatha, Colombo 05',
    addressHref: 'https://maps.app.goo.gl/JkbbYbNE2MiFev3y9',
    phones: ['+94 75 359 5495', '+94 75 577 8899'],
  },
  {
    city: 'Dubai',
    type: 'Corporate Office',
    address: 'Level 3 One Central, P. O. Box 9573, Dubai United Arab Emirates',
    addressHref: 'https://maps.app.goo.gl/GgEH9oZwwm4ayAoz9',
    phones: ['+971 56 530 2484'],
  },
  {
    city: 'Singapore',
    type: 'Corporate Office',
    address: 'Blk 3023, Ubi Road 3, UbiPlex1, #06-08, Singapore 408663',
    addressHref: 'https://maps.app.goo.gl/fjNQDRRgs2dv2n1k9',
    phones: ['+65 89 022 082'],
  },
]

const countries = [
  'Sri Lanka',
  'United Arab Emirates',
  'Singapore',
  'United Kingdom',
  'United States',
  'Australia',
  'India',
  'Malaysia',
  'Other',
]

function FloatingInput({
  label,
  type = 'text',
  dark = false,
  error,
  ...inputProps
}: {
  label: string
  type?: string
  dark?: boolean
  error?: { message?: string }
  [key: string]: unknown
}) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  return (
    <div className="relative pb-1">
      <input
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={(event) => {
          setFocused(false)
          setHasValue(Boolean(event.target.value))
        }}
        onChange={(event) => setHasValue(Boolean(event.target.value))}
        className={`w-full bg-transparent border-b px-0 py-2.5 text-[14px] font-['Inter',Helvetica] outline-none transition-all placeholder:text-transparent ${
          dark ? 'border-white/20 text-white' : 'border-[#ccc] text-[#333]'
        } ${error ? 'border-red-400' : ''}`}
        placeholder={label}
        autoComplete="off"
        {...inputProps}
      />
      <label
        className={`absolute left-0 transition-all duration-200 pointer-events-none font-['Inter',Helvetica] ${
          focused || hasValue ? 'top-0 text-[10px] opacity-60' : 'top-2.5 text-[14px] opacity-50'
        } ${dark ? 'text-white' : 'text-[#555]'}`}
      >
        {label}
      </label>
      <div
        className={`absolute bottom-1 left-0 h-[2px] transition-all duration-300 ${
          error ? 'bg-red-400' : (focused ? 'bg-[#3b82f6]' : 'bg-[#6abf4b]')
        } ${focused || error ? 'w-full' : 'w-0'}`}
      />
      {error && <span className="text-red-400 text-xs absolute -bottom-4">{error.message}</span>}
    </div>
  )
}

function FloatingTextarea({
  label,
  dark = false,
  error,
  ...textareaProps
}: {
  label: string
  dark?: boolean
  error?: { message?: string }
  [key: string]: unknown
}) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  return (
    <div className="relative pb-1">
      <textarea
        rows={3}
        onFocus={() => setFocused(true)}
        onBlur={(event) => {
          setFocused(false)
          setHasValue(Boolean(event.target.value))
        }}
        onChange={(event) => setHasValue(Boolean(event.target.value))}
        className={`w-full bg-transparent border-b px-0 py-2.5 text-[14px] font-['Inter',Helvetica] outline-none resize-none transition-all placeholder:text-transparent ${
          dark ? 'border-white/20 text-white' : 'border-[#ccc] text-[#333]'
        } ${error ? 'border-red-400' : ''}`}
        placeholder={label}
        {...textareaProps}
      />
      <label
        className={`absolute left-0 transition-all duration-200 pointer-events-none font-['Inter',Helvetica] ${
          focused || hasValue ? 'top-0 text-[10px] opacity-60' : 'top-2.5 text-[14px] opacity-50'
        } ${dark ? 'text-white' : 'text-[#555]'}`}
      >
        {label}
      </label>
      <div
        className={`absolute bottom-1 left-0 h-[2px] transition-all duration-300 ${
          error ? 'bg-red-400' : (focused ? 'bg-[#3b82f6]' : 'bg-[#6abf4b]')
        } ${focused || error ? 'w-full' : 'w-0'}`}
      />
      {error && <span className="text-red-400 text-xs absolute -bottom-4">{error.message}</span>}
    </div>
  )
}

function FloatingSelect({
  label,
  options,
  dark = false,
  ...selectProps
}: {
  label: string
  options: string[]
  dark?: boolean
  [key: string]: unknown
}) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  return (
    <div className="relative pb-1">
      <select
        defaultValue=""
        onFocus={() => setFocused(true)}
        onBlur={(event) => {
          setFocused(false)
          setHasValue(Boolean(event.target.value))
        }}
        onChange={(event) => setHasValue(Boolean(event.target.value))}
        className={`w-full bg-transparent border-b px-0 py-2.5 text-[14px] font-['Inter',Helvetica] outline-none appearance-none cursor-pointer transition-all ${
          dark
            ? 'border-white/20 text-white/50 [&>option]:text-black [&>option]:bg-white'
            : 'border-[#ccc] text-[#555] [&>option]:text-black'
        }`}
        {...selectProps}
      >
        <option value="" disabled hidden />
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label
        className={`absolute left-0 transition-all duration-200 pointer-events-none font-['Inter',Helvetica] ${
          focused || hasValue ? 'top-0 text-[10px] opacity-60' : 'top-2.5 text-[14px] opacity-50'
        } ${dark ? 'text-white' : 'text-[#555]'}`}
      >
        {label}
      </label>
      <div
        className={`absolute bottom-1 left-0 h-[2px] bg-[#6abf4b] transition-all duration-300 ${focused ? 'w-full' : 'w-0'}`}
      />
    </div>
  )
}

function ContactForm({ dark = false }: { dark?: boolean }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const { register, control, handleSubmit, reset, setError, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      phone: '',
      country: '',
    },
  })

  const onSubmit = async (data: any) => {
    if (!turnstileToken) {
      alert("Please complete the CAPTCHA")
      return
    }

    setSubmitting(true)
    try {
      const payload = { ...data, turnstileToken }
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json()
        if (response.status === 400 && (errorData.details || errorData.error === 'Validation failed')) {
          if (errorData.details) {
            errorData.details.forEach((detail: any) => {
              const field = detail.path[0] as keyof FormData
              if (field) {
                setError(field, { type: 'manual', message: detail.message })
              }
            })
          }
          return
        }
        throw new Error(errorData.error || 'Failed to send')
      }

      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 4000)
    } catch (error: any) {
      alert(error.message || 'Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <CheckCircle2Icon className="w-14 h-14 text-[#6abf4b]" />
        <h3 className={`font-['Quicksand',Helvetica] font-bold text-xl ${dark ? 'text-white' : 'text-[#161618]'}`}>
          Message Sent!
        </h3>
        <p className={`text-sm font-['Inter',Helvetica] ${dark ? 'text-white/60' : 'text-[#555]'}`}>
          Thank you for reaching out. Our team will contact you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, (errs) => {
      const errMsgs = Object.values(errs).map(e => e?.message).filter(Boolean);
      alert("Please fix the following errors:\n" + errMsgs.join("\n"));
    })} className={dark ? styles.FormWpformsForm_10038_88_11967 : 'flex flex-col gap-4 w-full'}>
      {dark ? (
        <div className={styles.DivWpformsFieldContainer_88_11968}>
          {/* Row 1: Name & Designation */}
          <div className={styles.DivWpformsLayoutRow_88_11969}>
            <div className={styles.DivWpformsLayoutColumn_88_11970}>
              <div className={styles.InputWpforms_10038Field_2_88_11971}>
                <input
                  {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
                  placeholder="Name"
                  className="w-full bg-transparent border-none text-white text-[15.8px] font-['Inter'] outline-none placeholder:text-white/50 focus:border-blue-400 transition-colors"
                />
                {errors.name && <span className="text-red-400 text-xs block mt-1">{errors.name.message}</span>}
              </div>
            </div>
            <div className={styles.DivWpformsLayoutColumn_88_11974}>
              <div className={styles.InputWpforms_10038Field_3_88_11975}>
                <input
                  {...register('designation')}
                  placeholder="Designation"
                  className="w-full bg-transparent border-none text-white text-[15.4px] font-['Inter'] outline-none placeholder:text-white/50"
                />
                {errors.designation && <span className="text-red-400 text-xs block mt-1">{errors.designation.message}</span>}
              </div>
            </div>
          </div>

          {/* Row 2: Email & Company Name */}
          <div className={styles.DivWpformsLayoutRow_88_11978}>
            <div className={styles.DivWpformsLayoutColumn_88_11979}>
              <div className={styles.InputWpforms_10038Field_5_88_11980}>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email' } })}
                  placeholder="Email"
                  className="w-full bg-transparent border-none text-white text-[15.6px] font-['Inter'] outline-none placeholder:text-white/50 focus:border-blue-400 transition-colors"
                />
                {errors.email && <span className="text-red-400 text-xs block mt-1">{errors.email.message}</span>}
              </div>
            </div>
            <div className={styles.DivWpformsLayoutColumn_88_11983}>
              <div className={styles.InputWpforms_10038Field_6_88_11984}>
                <input
                  {...register('companyName')}
                  placeholder="Company Name"
                  className="w-full bg-transparent border-none text-white text-[15.6px] font-['Inter'] outline-none placeholder:text-white/50"
                />
                {errors.companyName && <span className="text-red-400 text-xs block mt-1">{errors.companyName.message}</span>}
              </div>
            </div>
          </div>

          {/* Row 3: Phone & Country */}
          <div className={styles.DivWpformsLayoutRow_88_11987}>
            <div className={styles.DivWpformsLayoutColumn_88_11988}>
              <div className={styles.DivIti_88_11989}>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: 'Phone number is required', minLength: { value: 5, message: 'Invalid phone number' } }}
                  render={({ field }) => (
                    <PhoneInput
                      country="lk"
                      value={field.value || ''}
                      onChange={(value) => {
                        field.onChange(value)
                      }}
                      enableSearch
                      disableSearchIcon
                      placeholder="Phone Number"
                      containerClass={styles.PhoneInputContainerDark}
                      inputClass={styles.PhoneInputFieldDark}
                      buttonClass={styles.PhoneInputButtonDark}
                      dropdownClass={styles.PhoneInputDropdownDark}
                      searchClass={styles.PhoneInputSearchDark}
                      inputProps={{
                        name: field.name,
                        onBlur: field.onBlur,
                      }}
                    />
                  )}
                />
                {errors.phone && <span className="text-red-400 text-xs block mt-1">{errors.phone.message}</span>}
              </div>
            </div>
            <div className={styles.DivWpformsLayoutColumn_88_11998}>
              <div className={styles.InputWpforms_10038Field_9_88_11999}>
                <select
                  {...register('country')}
                  className="w-full bg-transparent border-none text-white/50 text-[15.6px] font-['Inter'] outline-none [&>option]:text-black"
                >
                  <option value="" disabled>Country</option>
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.country && <span className="text-red-400 text-xs block mt-1">{errors.country.message}</span>}
              </div>
            </div>
          </div>

          {/* Message */}
          <div className={styles.TextareaWpforms_10038Field_10_88_12002}>
            <textarea
              {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
              placeholder="Message"
              rows={2}
              className="w-full bg-transparent border-none text-white text-[15.5px] font-['Inter'] outline-none placeholder:text-white/50 resize-none focus:border-blue-400 transition-colors"
            />
            {errors.message && <span className="text-red-400 text-xs block mt-1">{errors.message.message}</span>}
          </div>
        </div>
      ) : (
        <>
          <FloatingInput label="Name" {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })} error={errors.name} dark={dark} />
          <FloatingInput label="Designation" {...register('designation')} dark={dark} />
          <FloatingInput label="Email" type="email" {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email' } })} error={errors.email} dark={dark} />
          <FloatingInput label="Company Name" {...register('companyName')} dark={dark} />

          <div className="relative pb-1">
            <Controller
              name="phone"
              control={control}
              rules={{ required: 'Phone number is required', minLength: { value: 5, message: 'Invalid phone number' } }}
              render={({ field }) => (
                <PhoneInput
                  country="lk"
                  value={field.value || ''}
                  onChange={(value) => {
                    field.onChange(value)
                  }}
                  enableSearch
                  disableSearchIcon
                  placeholder="Phone Number"
                  containerClass={styles.PhoneInputContainerLight}
                  inputClass={styles.PhoneInputFieldLight}
                  buttonClass={styles.PhoneInputButtonLight}
                  dropdownClass={styles.PhoneInputDropdownLight}
                  searchClass={styles.PhoneInputSearchLight}
                  inputProps={{
                    name: field.name,
                    onBlur: field.onBlur,
                  }}
                />
              )}
            />
          </div>

          <FloatingSelect label="Country" options={countries} {...register('country')} dark={dark} />
          <FloatingTextarea label="Message" {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })} error={errors.message} dark={dark} />
        </>
      )}

      <div className={dark ? styles.WpformsFieldContainer_88_12005 : 'flex flex-col gap-4'}>
        <div style={{ marginBottom: '16px' }}>
          <Turnstile
            siteKey={process.env.NODE_ENV === 'development' ? '1x00000000000000000000AA' : '0x4AAAAAAC1MnbcrrWWcB6e-'}
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => setTurnstileToken(null)}
            onExpire={() => setTurnstileToken(null)}
          />
        </div>
      </div>

      <div className={dark ? styles.DivWpformsSubmitContainer_88_12034 : 'mt-2'}>
        <button
          type="submit"
          disabled={!turnstileToken || submitting}
          className={dark ? styles.ButtonWpformsSubmit_10038_88_12035 : `flex items-center gap-2 px-7 py-3 rounded-full font-['Inter',Helvetica] font-medium text-[13px] tracking-wider transition-all duration-300 ${
            turnstileToken && !submitting
              ? 'bg-[#111] text-white hover:bg-[#6abf4b] cursor-pointer'
              : 'bg-[#ccc] text-white cursor-not-allowed'
          }`}
        >
          {submitting ? (
            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          ) : (
            <span className={dark ? styles.Connect_88_12036 : ''}>{dark ? 'CONNECT' : 'CONNECT'}</span>
          )}
          {!dark && <ChevronRightIcon className="w-3.5 h-3.5" />}
        </button>
      </div>
    </form>
  )
}

export function ContactInfoAndFormSection() {
  return (
    <div className="flex flex-col w-full items-start">
      <section
        id="contact"
        className="lg:hidden flex flex-col w-full relative min-h-screen"
        style={{ background: `url(${withBasePath('/figmaAssets/div.elementor-element.png')}) center center / cover no-repeat` }}
      >
        <div className="absolute inset-0 bg-[#0f3424]/80" />

        <div className="relative z-10 flex flex-col w-full pt-[72px]">
          <div className="px-5 pt-8 pb-6">
            <h1 className="font-['Quicksand',Helvetica] font-bold text-white text-[26px] leading-[1.2] uppercase mb-5">
              <span className="block">
                <span className="text-black">Find</span> your future
              </span>
              <span className="block">
                talent <span className="text-black">with us</span> today
              </span>
            </h1>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/life_at_career141/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex w-9 h-9 items-center justify-center rounded-full border border-white/40 text-white hover:border-[#6abf4b] hover:text-[#6abf4b] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://lk.linkedin.com/company/career-consultants-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex w-9 h-9 items-center justify-center rounded-full border border-white/40 text-white hover:border-[#6abf4b] hover:text-[#6abf4b] transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mx-4 mb-8 bg-[#11593f] rounded-2xl shadow-2xl p-6 border border-white/15">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-['Quicksand',Helvetica] font-bold text-[#6abf4b] text-[30px] leading-none">Hello!</span>
              <span className="font-['Inter',Helvetica] font-medium text-white text-[14px]">We would love to hear from you!</span>
            </div>
            <ContactForm dark />
          </div>
        </div>
      </section>

      <section
        id="contact-desktop"
        className="hidden lg:flex items-center justify-center py-[80px] px-[60px] relative w-full min-h-[80vh]"
        style={{ background: `url(${withBasePath('/figmaAssets/div.elementor-element.png')}) 50% 50% / cover no-repeat` }}
      >
        <div className={styles.DivElementorElement_88_11864}>
          <div className={styles.DivElementorElementMargin_88_11865}>
            <div className={styles.DivElementorElement_88_11866}>
              <div className={styles.DivElementorElement_88_11867}>
                <div className={styles.DivElementorWidgetContainer_88_11868}>
                  <div className={styles.H1ElementorHeadingTitle_88_11869}>
                    <span className={styles.FindYourFutureTalentWithUsToday_88_11870}>
                      <span className={styles.HeadingLine}>
                        <span className={styles.HeadingBlackWord}>Find</span> your future
                      </span>
                      <span className={styles.HeadingLine}>
                        talent <span className={styles.HeadingBlackWord}>with us</span> today
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.DivElementorElement_88_11871}>
                <div className={styles.DivElementorWidgetContainer_88_11872}>
                  <div className={styles.P_88_11873}>
                    <span className={styles.EveryInteractionYourCustomersHaveWithYourCompanySDigitalPropertiesEitherBringsYouCloserOrFartherAwayFromYourBusinessGoals_88_11874}>
                      Every interaction your customers have with your company&apos;s digital properties either brings you closer or farther away from your business goals.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 pl-4">
                <div className={styles.DivElementorElement_88_11875} style={{ marginLeft: '-21px' }}>
                  <div className={styles.DivElementorElement_88_11876}>
                    <div className={styles.DivElementorElement_88_11877}>
                      <div className={styles.DivElementorWidgetContainer_88_11878}>
                        <div className={styles.DivElementorIconWrapper_88_11879}>
                          <div className={styles.DivElementorIcon_88_11880}>
                            <div className={styles.Frame_88_11881}>
                              <PhoneIcon className="w-5 h-5 text-[#37a65e]" />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className={styles.DivElementorElement_88_11883}>
                      <div className={styles.DivElementorElement_88_11884}>
                        <div className={styles.DivElementorWidgetContainer_88_11885}>
                          <span className={styles.SriLanka_88_11886}>Sri Lanka</span>
                        </div>
                      </div>
                      <div className={styles.DivElementorElement_88_11887}>
                        <div className={styles.DivElementorWidgetContainer_88_11888}>
                          <div className={styles.A_88_11889}>
                            <span className={styles._75_359_5495_88_11890}>+94 75 359 5495</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.DivElementorElement_88_11891}>
                    <div className={styles.DivElementorElement_88_11892}>
                      <div className={styles.DivElementorWidgetContainer_88_11893}>
                        <div className={styles.DivElementorIconWrapper_88_11894}>
                          <div className={styles.DivElementorIcon_88_11895}>
                            <div className={styles.Frame_88_11896}>
                              <PhoneIcon className="w-5 h-5 text-[#37a65e]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.DivElementorElement_88_11898}>
                      <div className={styles.DivElementorElement_88_11899}>
                        <div className={styles.DivElementorWidgetContainer_88_11900}>
                          <span className={styles.Dubai_88_11901}>Dubai</span>
                        </div>
                      </div>
                      <div className={styles.DivElementorElement_88_11902}>
                        <div className={styles.DivElementorWidgetContainer_88_11903}>
                          <div className={styles.A_88_11904}>
                            <span className={styles._56_530_2484_88_11905}>+971 56 530 2484</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.DivElementorElement_88_11906}>
                    <div className={styles.DivElementorElement_88_11907}>
                      <div className={styles.DivElementorWidgetContainer_88_11908}>
                        <div className={styles.DivElementorIconWrapper_88_11909}>
                          <div className={styles.DivElementorIcon_88_11910}>
                            <div className={styles.Frame_88_11911}>
                              <PhoneIcon className="w-5 h-5 text-[#37a65e]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.DivElementorElement_88_11913}>
                      <div className={styles.DivElementorElement_88_11914}>
                        <div className={styles.DivElementorWidgetContainer_88_11915}>
                          <span className={styles.Singapore_88_11916}>Singapore</span>
                        </div>
                      </div>
                      <div className={styles.DivElementorElement_88_11917}>
                        <div className={styles.DivElementorWidgetContainer_88_11918}>
                          <div className={styles.A_88_11919}>
                            <span className={styles._89_022_082_88_11920}>+65 89 022 082</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.DivElementorElementMargin_88_11921} style={{ marginLeft: '-21px' }}>
                <div className={styles.DivElementorElement_88_11922}>
                  <div className={styles.DivElementorElement_88_11923}>
                    <div className={styles.DivElementorWidgetContainer_88_11924}>
                      <div className={styles.DivElementorIconWrapper_88_11925}>
                        <div className={styles.DivElementorIcon_88_11926}>
                          <div className={styles.Frame_88_11927}>
                            <MailIcon className="w-5 h-5 text-[#37a65e]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.DivElementorElement_88_11929}>
                    <div className={styles.DivElementorWidgetContainer_88_11930}>
                      <div className={styles.A_88_11931}>
                        <span className={styles.HelloCareer141Com_88_11932}>hello@career141.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.DivElementorElementMargin_88_11933}>
                <div className={styles.DivElementorElement_88_11934}>
                  <div className={styles.DivElementorElement_88_11935}>
                    <div className={styles.DivElementorWidgetContainer_88_11936}>
                      <div className={styles.DivElementorIconWrapper_88_11937}>
                        <div className={styles.AElementorIcon_88_11938}>
                          <div className={styles.Frame_88_11939}>
                            <LinkedinIcon className="w-4 h-4 text-[#37a65e]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.DivElementorElement_88_11942}>
                    <div className={styles.DivElementorWidgetContainer_88_11943}>
                      <div className={styles.DivElementorIconWrapper_88_11944}>
                        <div className={styles.AElementorIcon_88_11945}>
                          <div className={styles.Frame_88_11946}>
                            <InstagramIcon className="w-4 h-4 text-[#37a65e]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.DivElementorElement_88_11949}>
                    <div className={styles.DivElementorWidgetContainer_88_11950}>
                      <div className={styles.DivElementorIconWrapper_88_11951}>
                        <div className={styles.AElementorIcon_88_11952}>
                          <div className={styles.Frame_88_11953}>
                            <MailIcon className="w-4 h-4 text-[#37a65e]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>
          </div>
          <div className={styles.DivElementorElement_88_11956}>
            <div className={styles.DivElementorElementMargin_88_11957}>
              <div className={styles.DivElementorElement_88_11958}>
                <div className={styles.DivElementorElement_88_11959}>
                  <div className={styles.DivElementorWidgetContainer_88_11960}>
                    <span className={styles.Hello_88_11961}>Hello!</span>
                  </div>
                </div>
                <div className={styles.DivElementorElement_88_11962}>
                  <div className={styles.DivElementorWidgetContainer_88_11963}>
                    <span className={styles.WeLoveToHearFromYou_88_11964}>We would love to hear from you!</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.DivElementorElement_88_11965}>
              <div className={styles.DivElementorWidgetContainer_88_11966}>
                <ContactForm dark />
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="md:hidden flex flex-col w-full px-5 py-10 bg-white">
        <div className="flex flex-col items-center w-full mb-6">
          <h2 className="font-['Quicksand',Helvetica] font-bold text-[24px] text-center leading-[1.2]">
            <span className="text-[#161618]">Our </span>
            <span className="text-[#6abf4b]">office </span>
            <span className="text-[#161618]">locations</span>
          </h2>
          <p className="font-['Inter',Helvetica] text-[#333] text-[13px] text-center mt-2">
            Our expert teams work in markets across the World.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {officeLocations.map((location) => (
            <div
              key={location.city}
              className="flex flex-col p-5 rounded-xl border-l-4 border-[#6abf4b] bg-[#1a3829] shadow-lg"
            >
              <div className="flex flex-col mb-3">
                <h3 className="font-['Quicksand',Helvetica] font-bold text-white text-[20px] leading-tight">{location.city}</h3>
                <p className="font-['Quicksand',Helvetica] font-light text-[#6abf4b] text-[12px] mt-0.5">{location.type}</p>
              </div>
              <a href={location.addressHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 mb-4 group">
                <MapPinIcon className="w-3.5 h-3.5 text-[#6abf4b] mt-0.5 shrink-0" />
                <span className="font-['Inter',Helvetica] text-white/80 text-[13px] leading-[1.5] group-hover:text-white transition-colors">
                  {location.address}
                </span>
              </a>
              <div className="flex flex-col gap-2">
                {location.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 group">
                    <PhoneIcon className="w-3.5 h-3.5 text-[#6abf4b] shrink-0" />
                    <span className="font-['Quicksand',Helvetica] font-medium text-white text-[14px] group-hover:text-[#6abf4b] transition-colors">
                      {phone}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hidden md:flex flex-col items-center gap-5 py-[80px] px-[80px] relative w-full bg-white">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none opacity-80"
          alt="World map"
          src={withBasePath('/figmaAssets/--before.png')}
          fill
          sizes="100vw"
        />
        <div className="flex flex-col items-center w-full relative">
          <h2 className="font-['Quicksand',Helvetica] font-bold text-[35px] text-center leading-[1.2]">
            <span className="text-[#161618]">Our </span>
            <span className="text-[#37a65e]">office </span>
            <span className="text-[#161618]">locations</span>
          </h2>
        </div>
        <div className="flex flex-col items-center w-full pb-8 relative">
          <p className="font-['Inter',Helvetica] text-black text-[16.6px] text-center leading-[26px]">
            Our expert teams work in markets across the World.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 w-full relative max-w-[1200px] mx-auto">
          {officeLocations.map((location) => (
            <div
              key={location.city}
              className="flex flex-col items-start justify-between p-[35px] rounded-[20px] min-h-[431px] shadow-lg"
              style={{ background: 'linear-gradient(233deg, rgba(55,166,94,1) 8%, rgba(17,89,63,1) 100%)' }}
            >
              <div className="flex flex-col items-start gap-5 w-full">
                <div className="flex flex-col gap-2">
                  <h3 className="font-['Quicksand',Helvetica] font-bold text-white text-[32px] leading-tight">{location.city}</h3>
                  <p className="font-['Quicksand',Helvetica] font-light text-white/80 text-base">{location.type}</p>
                </div>
                <a href={location.addressHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 group">
                  <MapPinIcon className="w-4 h-4 text-[#cbfc06] mt-1 shrink-0" />
                  <span className="font-['Inter',Helvetica] font-medium text-white text-[16px] leading-[25px] group-hover:text-[#cbfc06] transition-colors">
                    {location.address}
                  </span>
                </a>
              </div>
              <div className="flex flex-col items-start gap-3 w-full mt-8">
                {location.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-3 group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#cbfc06]/20 transition-colors">
                      <PhoneIcon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-['Quicksand',Helvetica] font-medium text-white text-[18px] group-hover:text-[#cbfc06] transition-colors">
                      {phone}
                    </span>
                  </a>
                ))}
                <a
                  href={location.addressHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full text-white text-[12px] font-['Quicksand',Helvetica] font-medium hover:bg-white/10 hover:border-white transition-all group"
                >
                  Get Directions
                  <ChevronRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
