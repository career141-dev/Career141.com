'use client'

import { useState } from 'react'
import { MessageCircleIcon, XIcon } from 'lucide-react'
import { Navbar } from '@/components/common'
import { ContactFooterSection, ContactInfoAndFormSection } from './sections'

function FloatingChatButton() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (!message.trim()) return

    setSent(true)
    setTimeout(() => {
      setSent(false)
      setMessage('')
      setOpen(false)
    }, 1800)
  }

  return (
    <>
      {open && (
        <div className="fixed right-5 bottom-[76px] md:right-10 md:bottom-[90px] w-[290px] md:w-[310px] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-[#e5e7eb]">
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#37a65e] to-[#11593f]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#cbfc06] animate-pulse" />
              <span className="font-['Quicksand',Helvetica] font-bold text-white text-sm">Career141 Support</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4">
            {sent ? (
              <div className="text-center py-4">
                <p className="font-['Quicksand',Helvetica] font-bold text-[#37a65e] text-sm">Message sent!</p>
                <p className="text-[#555] text-xs mt-1 font-['Inter',Helvetica]">We will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="bg-[#f0fdf4] rounded-xl px-3 py-2 mb-4">
                  <p className="font-['Inter',Helvetica] text-[#333] text-[13px] leading-[1.5]">Hi there! How can we help you today?</p>
                </div>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.shiftKey) {
                      event.preventDefault()
                      handleSend()
                    }
                  }}
                  placeholder="Type your message..."
                  rows={3}
                  className="w-full border border-[#e5e7eb] rounded-lg px-3 py-2 text-[13px] font-['Inter',Helvetica] text-[#333] outline-none focus:border-[#37a65e] resize-none transition-colors"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className={`mt-2 w-full py-2 rounded-lg font-['Quicksand',Helvetica] font-bold text-sm transition-all ${
                    message.trim() ? 'bg-[#37a65e] hover:bg-[#11593f] text-white' : 'bg-[#f4f4f4] text-[#aaa] cursor-not-allowed'
                  }`}
                >
                  Send Message
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`fixed right-5 bottom-5 md:right-10 md:bottom-6 w-[54px] h-[54px] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 z-50 ${
          open ? 'bg-[#11593f]' : 'bg-gradient-to-br from-[#37a65e] to-[#11593f] hover:scale-110'
        }`}
        aria-label="Open chat"
      >
        {open ? (
          <XIcon className="w-5 h-5 text-white" />
        ) : (
          <>
            <MessageCircleIcon className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#cbfc06] rounded-full flex items-center justify-center text-[8px] font-bold text-[#11593f]">
              1
            </span>
          </>
        )}
      </button>
    </>
  )
}

export function ContactPage() {
  return (
    <main className="flex flex-col items-start relative bg-white w-full">
      <Navbar variant="solid" />
      <div className="w-full h-[60px] md:h-[89px]" />
      <ContactInfoAndFormSection />
      <ContactFooterSection />
      <FloatingChatButton />
    </main>
  )
}
