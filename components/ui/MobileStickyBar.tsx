'use client'

import React from 'react'
import Link from 'next/link'
import { FaWhatsapp, FaPhoneAlt, FaRegCalendarAlt } from 'react-icons/fa'
import { CONTACT, WHATSAPP_URL } from '@/data/clinic'

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white shadow-[0_-4px_25px_rgba(0,0,0,0.1)] border-t border-[#E8E4DF] font-sans">
      <div className="flex items-end justify-around px-4 pt-1.5 pb-2 relative">
        {/* Left Action: Call Now */}
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label="Call Clinic Helpline"
          className="flex flex-col items-center justify-center gap-1 group min-w-[70px]"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#F5DCC8]/60 flex items-center justify-center text-[#B85E37] border border-[#F5DCC8] group-active:scale-95 transition-transform shadow-xs">
            <FaPhoneAlt className="w-5 h-5 text-[#B85E37]" />
          </div>
          <span className="text-[10px] font-extrabold text-[#2E2A26] tracking-wide uppercase">
            CALL NOW
          </span>
        </a>

        {/* Center Action: WhatsApp (Elevated Floating Circle) */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex flex-col items-center justify-center -mt-6 group relative z-10 min-w-[80px]"
        >
          <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg ring-4 ring-white group-active:scale-95 transition-transform">
            <FaWhatsapp className="w-8 h-8 text-white" />
          </div>
          <div className="mt-1 bg-white border border-emerald-100 rounded-full px-2.5 py-0.5 shadow-sm">
            <span className="text-[9px] font-black text-[#25D366] tracking-wider uppercase block leading-none">
              WHATSAPP
            </span>
          </div>
        </a>

        {/* Right Action: Book Now */}
        <Link
          href="/book-appointment"
          aria-label="Book Appointment"
          className="flex flex-col items-center justify-center gap-1 group min-w-[70px]"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#F5DCC8]/60 flex items-center justify-center text-[#D97B4F] border border-[#F5DCC8] group-active:scale-95 transition-transform shadow-xs">
            <FaRegCalendarAlt className="w-5 h-5 text-[#D97B4F]" />
          </div>
          <span className="text-[10px] font-extrabold text-[#2E2A26] tracking-wide uppercase">
            BOOK NOW
          </span>
        </Link>
      </div>

      {/* Bottom Accent Bar */}
      <div className="h-1 bg-[#D97B4F] w-full" />
    </div>
  )
}
