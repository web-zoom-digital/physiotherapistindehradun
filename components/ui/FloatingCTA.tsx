'use client'

import React from 'react'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { CONTACT, WHATSAPP_URL } from '@/data/clinic'

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-center gap-3 font-sans">
      {/* WhatsApp Floating Button (Top) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </a>

      {/* Phone Call Floating Button (Bottom) */}
      <a
        href={`tel:${CONTACT.phoneRaw}`}
        aria-label="Call Clinic Helpline"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#B85E37] text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </a>
    </div>
  )
}
