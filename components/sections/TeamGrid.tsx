'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Award,
  Calendar,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { FaWhatsapp, FaCalendarCheck } from 'react-icons/fa'
import { TeamMember } from '@/data/team'
import { CONTACT, WHATSAPP_URL } from '@/data/clinic'

interface TeamGridProps {
  doctors: TeamMember[]
}

const CATEGORIES = [
  { id: 'all', label: 'All Specialists' },
  { id: 'ortho', label: 'Orthopedics & Spine' },
  { id: 'neuro', label: 'Neurology & Stroke' },
  { id: 'pediatric', label: 'Pediatric Care' },
  { id: 'sports', label: 'Sports & Performance' },
]

export function TeamGrid({ doctors }: TeamGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredDoctors = doctors.filter((doc) => {
    if (selectedCategory === 'all') return true
    if (selectedCategory === 'ortho')
      return doc.specialization.toLowerCase().includes('ortho')
    if (selectedCategory === 'neuro')
      return doc.specialization.toLowerCase().includes('neuro')
    if (selectedCategory === 'pediatric')
      return doc.specialization.toLowerCase().includes('paediatric') || doc.specialization.toLowerCase().includes('pediatric')
    if (selectedCategory === 'sports')
      return doc.specialization.toLowerCase().includes('sports')
    return true
  })

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Category Filter Pills (Mobile-friendly horizontal scroll) */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#D97B4F] text-white shadow-md shadow-[#D97B4F]/20'
                  : 'bg-white hover:bg-[#FAF9F7] text-[#2E2A26] border border-[#E8E4DF] hover:border-[#D97B4F]/40'
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Doctor & Team Grid: Exactly 2 cards per row on mobile (grid-cols-2), 3 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {filteredDoctors.map((doctor) => {
          const whatsappDocUrl = `https://wa.me/${CONTACT.whatsapp}?text=Hello%20RonEx%20Physiotherapy%2C%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(
            doctor.name
          )}%20for%20physiotherapy%20care.`

          return (
            <div
              key={doctor.slug}
              className="card flex flex-col justify-between overflow-hidden bg-white border border-[#E8E4DF] hover:border-[#D97B4F]/40 hover:shadow-xl transition-all duration-300 group rounded-2xl"
            >
              <div>
                {/* Doctor Portrait Image Container with 4:5 Portrait Aspect Ratio */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50 border-b border-[#E8E4DF]">
                  <Image
                    src={doctor.imageUrl}
                    alt={`${doctor.name} - ${doctor.title} at RonEx Physiotherapy Dehradun`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority={doctor.slug === 'dr-om-prakash'}
                  />

                  {/* Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Specialization Badge Floating Top-Left */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-[#D97B4F] text-white text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-xs truncate max-w-[85%]">
                    {doctor.specialization.split(' ')[0]} Care
                  </div>

                  {/* Experience Badge Floating Bottom-Right */}
                  <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-white/95 backdrop-blur-xs text-[#2E2A26] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shadow-xs border border-[#E8E4DF]">
                    {doctor.experience} Exp.
                  </div>
                </div>

                {/* Doctor Credentials & Details */}
                <div className="p-3 sm:p-5 space-y-2 sm:space-y-3">
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold text-[#2E2A26] group-hover:text-[#D97B4F] transition-colors leading-snug line-clamp-1">
                      {doctor.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-semibold text-[#D97B4F] tracking-wide mt-0.5 line-clamp-1">
                      {doctor.qualification}
                    </p>
                    <p className="text-[10px] sm:text-xs font-medium text-gray-500 mt-0.5 line-clamp-1">
                      {doctor.title}
                    </p>
                  </div>

                  {/* Clinical Focus Badges */}
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#2E2A26] uppercase tracking-wider block mb-1">
                      Clinical Focus:
                    </span>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {doctor.focus.slice(0, 2).map((f, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-[9px] sm:text-[11px] bg-[#FAF9F7] border border-[#E8E4DF] text-[#4A4744] px-1.5 sm:px-2 py-0.5 rounded-md font-medium truncate max-w-[130px] sm:max-w-none"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Short Bio Snippet (Visible on Tablet & Desktop) */}
                  <p className="text-xs text-[#4A4744] line-clamp-2 leading-relaxed hidden sm:block">
                    {doctor.bio}
                  </p>
                </div>
              </div>

              {/* Standardized Card Actions Footer */}
              <div className="p-3 sm:p-5 pt-0 border-t border-gray-100 mt-2 space-y-2">
                <Link
                  href={`/book-appointment?doctor=${doctor.slug}`}
                  className="btn-primary py-2 sm:py-2.5 px-2 sm:px-3 text-[11px] sm:text-xs font-bold w-full text-center flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <FaCalendarCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>Book Consultation</span>
                </Link>

                <div className="flex items-center justify-between gap-1.5 pt-0.5">
                  <a
                    href={whatsappDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp py-1.5 px-2 text-[10px] sm:text-xs font-semibold flex-1 justify-center text-center gap-1"
                    aria-label={`WhatsApp Dr. ${doctor.name}`}
                  >
                    <FaWhatsapp className="w-3 h-3 shrink-0" />
                    <span>WhatsApp</span>
                  </a>

                  {doctor.linkedinUrl ? (
                    <a
                      href={doctor.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FAF9F7] hover:bg-[#F5DCC8] border border-[#E8E4DF] text-[#4A4744] hover:text-[#D97B4F] flex items-center justify-center transition-colors shrink-0"
                      aria-label={`${doctor.name} LinkedIn Profile`}
                    >
                      <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
