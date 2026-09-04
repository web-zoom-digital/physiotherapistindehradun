import React from 'react'
import Link from 'next/link'
import { Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CONTACT, WHATSAPP_URL } from '@/data/clinic'

interface PageHeroProps {
  title: string
  subtitle: string
  tag?: string
  breadcrumbItems: { name: string; url: string }[]
}

export function PageHero({ title, subtitle, tag = 'Physiotherapy in Dehradun', breadcrumbItems }: PageHeroProps) {
  return (
    <section className="relative bg-[#FAF9F7] border-b border-[#E8E4DF] pt-6 pb-12 md:pb-16 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D97B4F]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F5DCC8]/40 rounded-full blur-2xl -ml-16 pointer-events-none" />

      <div className="container-custom relative z-10 space-y-6">
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DCC8]/70 border border-[#D97B4F]/20 text-[#2E2A26] text-sm font-semibold shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#D97B4F]" />
            <span>{tag}</span>
          </div>

          <h1 className="text-3xl md:text-[3rem] font-bold text-[#2E2A26] leading-[1.2] tracking-tight">
            {title}
          </h1>

          <p className="text-base text-[#4A4744] leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href="/book-appointment"
              className="btn-primary py-3 px-6 text-base font-medium shadow-md hover:shadow-lg gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-3 px-5 text-base font-medium gap-2"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="btn-secondary py-3 px-5 text-base font-medium gap-2"
            >
              <FaPhoneAlt className="w-3.5 h-3.5" />
              <span>Call Clinic</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium text-[#2E2A26]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
              <span>2 Dehradun Clinics</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
              <span>MPT Specialist Doctors</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97B4F]" />
              <span>Home Visits Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
