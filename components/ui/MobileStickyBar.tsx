'use client'

import React from 'react'
import Link from 'next/link'
import { FaWhatsapp, FaPhoneAlt, FaRegCalendarAlt } from 'react-icons/fa'
import { CONTACT, WHATSAPP_URL } from '@/data/clinic'

export function MobileStickyBar() {
  return (
    <nav
      aria-label="Quick Mobile Actions"
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-md border-t border-[#E8E4DF] shadow-[0_-2px_14px_rgba(46,42,38,0.07)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="grid grid-cols-3 h-[58px] items-stretch max-w-md mx-auto px-2">
        {/* 1. Call Now */}
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label={`Call Clinic Helpline ${CONTACT.phone}`}
          className="flex flex-col items-center justify-center gap-1 text-[#2E2A26] active:bg-[#FAF9F7] active:scale-95 transition-all text-center select-none py-1"
        >
          <div className="w-7 h-7 rounded-full bg-[#F5DCC8]/60 flex items-center justify-center text-[#B85E37]">
            <FaPhoneAlt className="w-3.5 h-3.5 text-[#B85E37]" />
          </div>
          <span className="text-[10.5px] font-bold text-[#2E2A26] tracking-tight leading-none">
            Call Us
          </span>
        </a>

        {/* 2. WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex flex-col items-center justify-center gap-1 text-[#25D366] active:bg-[#FAF9F7] active:scale-95 transition-all text-center select-none py-1"
        >
          <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
            <FaWhatsapp className="w-4 h-4 text-white" />
          </div>
          <span className="text-[10.5px] font-bold text-[#1ebe5d] tracking-tight leading-none">
            WhatsApp
          </span>
        </a>

        {/* 3. Book Now */}
        <Link
          href="/book-appointment"
          aria-label="Book In-Clinic Consultation"
          className="flex flex-col items-center justify-center gap-1 text-[#D97B4F] active:bg-[#FAF9F7] active:scale-95 transition-all text-center select-none py-1"
        >
          <div className="w-7 h-7 rounded-full bg-[#F5DCC8]/60 flex items-center justify-center text-[#D97B4F]">
            <FaRegCalendarAlt className="w-3.5 h-3.5 text-[#D97B4F]" />
          </div>
          <span className="text-[10.5px] font-bold text-[#D97B4F] tracking-tight leading-none">
            Book Now
          </span>
        </Link>
      </div>
    </nav>
  )
}
