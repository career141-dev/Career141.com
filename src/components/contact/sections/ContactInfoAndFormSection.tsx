'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { CheckCircle2Icon, ChevronRightIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import { withBasePath } from '@/lib/assetPath'

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
  ...inputProps
}: {
  label: string
  type?: string
  dark?: boolean
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
        className={`w-full bg-transparent border-b px-0 py-2.5 text-[14px] font-['Inter',Helvetica] outline-none transition-all placeholder-transparent ${
          dark ? 'border-white/20 text-white' : 'border-[#ccc] text-[#333]'
        }`}
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
        className={`absolute bottom-1 left-0 h-[2px] bg-[#6abf4b] transition-all duration-300 ${focused ? 'w-full' : 'w-0'}`}
      />
    </div>
  )
}

function FloatingTextarea({
  label,
  dark = false,
  ...textareaProps
}: {
  label: string
  dark?: boolean
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
        className={`w-full bg-transparent border-b px-0 py-2.5 text-[14px] font-['Inter',Helvetica] outline-none resize-none transition-all placeholder-transparent ${
          dark ? 'border-white/20 text-white' : 'border-[#ccc] text-[#333]'
        }`}
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
        className={`absolute bottom-1 left-0 h-[2px] bg-[#6abf4b] transition-all duration-300 ${focused ? 'w-full' : 'w-0'}`}
      />
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
  const [captchaChecked, setCaptchaChecked] = useState(false)
  const { register, handleSubmit, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    if (!captchaChecked) return

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    console.log('Form submitted:', data)
    setSubmitting(false)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 4000)
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
      <FloatingInput label="Name" {...register('name')} dark={dark} />
      <FloatingInput label="Designation" {...register('designation')} dark={dark} />
      <FloatingInput label="Email" type="email" {...register('email')} dark={dark} />
      <FloatingInput label="Company Name" {...register('companyName')} dark={dark} />

      <div className="relative pb-1">
        <div className={`flex items-center border-b ${dark ? 'border-white/20' : 'border-[#ccc]'} py-2.5`}>
          <span className={`text-[13px] mr-1 font-['Inter',Helvetica] ${dark ? 'text-white/50' : 'text-[#555]'}`}>+94</span>
          <input
            type="tel"
            {...register('phone')}
            placeholder="Phone Number"
            className={`flex-1 bg-transparent text-[14px] font-['Inter',Helvetica] outline-none placeholder:opacity-50 ${
              dark ? 'text-white placeholder:text-white' : 'text-[#333] placeholder:text-[#555]'
            }`}
          />
        </div>
      </div>

      <FloatingSelect label="Country" options={countries} {...register('country')} dark={dark} />
      <FloatingTextarea label="Message" {...register('message')} dark={dark} />

      <div className="flex items-center gap-3 bg-[#f9f9f9] rounded-[3px] border border-[#d3d3d3] p-3 shadow-sm">
        <button
          type="button"
          onClick={() => setCaptchaChecked(!captchaChecked)}
          className={`w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
            captchaChecked ? 'bg-[#6abf4b] border-[#6abf4b]' : 'bg-white border-[#aaa] hover:border-[#6abf4b]'
          }`}
        >
          {captchaChecked && (
            <svg viewBox="0 0 12 10" className="w-3 h-3" aria-hidden="true">
              <polyline
                points="1.5 6 4.5 9 10.5 1"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <span className="font-['Inter',Helvetica] text-black text-sm flex-1">I&apos;m not a robot</span>
        <div className="flex flex-col items-center gap-1">
          <Image
            className="w-7 h-7"
            alt="reCAPTCHA"
            src={withBasePath('/figmaAssets/div-rc-anchor-logo-img.png')}
            width={28}
            height={28}
          />
          <span className="text-[#555] text-[8px] font-['Inter',Helvetica]">reCAPTCHA</span>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={!captchaChecked || submitting}
          className={`flex items-center gap-2 px-7 py-3 rounded-full font-['Inter',Helvetica] font-medium text-[13px] tracking-wider transition-all duration-300 ${
            captchaChecked && !submitting
              ? dark
                ? 'bg-white text-[#111] hover:bg-[#6abf4b] hover:text-white cursor-pointer'
                : 'bg-[#111] text-white hover:bg-[#6abf4b] cursor-pointer'
              : 'bg-[#ccc] text-white cursor-not-allowed'
          }`}
        >
          {submitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              CONNECT
              <ChevronRightIcon className="w-3.5 h-3.5" />
            </>
          )}
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
        className="md:hidden flex flex-col w-full relative min-h-screen"
        style={{ background: `url(${withBasePath('/figmaAssets/div-elementor-element.png')}) center center / cover no-repeat` }}
      >
        <div className="absolute inset-0 bg-[#0f3424]/80" />

        <div className="relative z-10 flex flex-col w-full pt-[72px]">
          <div className="px-5 pt-8 pb-6">
            <h1 className="font-['Quicksand',Helvetica] font-bold text-white text-[26px] leading-[1.2] uppercase mb-5">
              Find your future talent
              <br />
              with us today
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
              <span className="font-['Inter',Helvetica] font-medium text-white text-[14px]">We love to hear from you!</span>
            </div>
            <ContactForm dark />
          </div>
        </div>
      </section>

      <section
        id="contact-desktop"
        className="hidden md:flex items-center justify-center py-[140px] px-[60px] relative w-full min-h-screen"
        style={{ background: `url(${withBasePath('/figmaAssets/div-elementor-element.png')}) 50% 50% / cover no-repeat` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50" />

        <div className="flex items-stretch justify-center gap-0 relative w-full max-w-[1100px] mx-auto">
          <div className="flex-1 max-w-[480px]">
            <div className="flex flex-col items-start gap-6 p-10 bg-white/95 backdrop-blur-sm rounded-l-[28px] h-full shadow-2xl">
              <div className="flex flex-col items-start w-full">
                <h2 className="font-['Quicksand',Helvetica] font-bold text-[38px] leading-[1.2]">
                  <span className="text-[#161618]">Find </span>
                  <span className="text-[#37a65e]">
                    your future
                    <br />
                    talent
                  </span>
                  <span className="text-[#161618]"> with us </span>
                  <span className="text-[#37a65e]">today</span>
                </h2>
              </div>
              <p className="font-['Inter',Helvetica] text-[#252525] text-[15px] leading-6">
                Every interaction your customers have with your company&apos;s digital properties either brings you closer or farther away from your business goals.
              </p>
              <div className="flex flex-col items-start gap-4 w-full">
                {contactPhones.map((item) => (
                  <a
                    key={item.phone}
                    href={`tel:${item.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 w-full group hover:bg-[#f0fdf4] rounded-xl p-2 -mx-2 transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#37a65e]/10 text-[11px] font-bold text-[#37a65e] shrink-0">
                      {item.code}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-['Inter',Helvetica] text-black text-[11px]">{item.country}</span>
                      <span className="font-['Quicksand',Helvetica] font-semibold text-[#383838] text-[17px] group-hover:text-[#37a65e] transition-colors">
                        {item.phone}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              <a
                href="mailto:hello@career141.com"
                className="flex items-center gap-4 w-full group hover:bg-[#f0fdf4] rounded-xl p-2 -mx-2 transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#37a65e]/10 shrink-0">
                  <MailIcon className="w-5 h-5 text-[#37a65e]" />
                </div>
                <span className="font-['Quicksand',Helvetica] font-semibold text-[#383838] text-[17px] group-hover:text-[#37a65e] transition-colors">
                  hello@career141.com
                </span>
              </a>
            </div>
          </div>

          <div
            className="flex-1 max-w-[520px] flex flex-col pt-10 pb-8 px-10 rounded-r-[28px] shadow-2xl"
            style={{ background: 'linear-gradient(213deg, rgba(203,252,6,1) 0%, rgba(17,89,63,1) 56%)' }}
          >
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-['Quicksand',Helvetica] font-bold text-[#cbfc06] text-[36px] leading-none">Hello!</span>
              <span className="font-['Inter',Helvetica] font-medium text-white text-[16px]">We love to hear from you!</span>
            </div>
            <ContactForm dark />
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

      <section className="hidden md:flex flex-col items-center gap-5 py-[120px] px-[80px] relative w-full bg-[#f6f8f6]">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none opacity-60"
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
