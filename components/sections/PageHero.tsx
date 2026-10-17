import React from 'react'
import Image from 'next/image'
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
  heroImage?: string
  heroImageAlt?: string
  primaryCta?: {
    text: string
    href: string
    icon?: React.ReactNode
  }
}

export function PageHero({
  title,
  subtitle,
  tag = 'Physiotherapy in Dehradun',
  breadcrumbItems,
  heroImage,
  heroImageAlt,
  primaryCta,
}: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#FDF2E9] via-[#FCDEC8] to-[#F9D6BD] pt-6 pb-16 md:pb-24 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#D97B4F]/25 rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5DCC8]/90 rounded-full blur-3xl -ml-28 pointer-events-none" />

      <div className="container-custom relative z-10 space-y-6">
        <Breadcrumb items={breadcrumbItems} />

        <div className={`grid grid-cols-1 ${heroImage ? 'lg:grid-cols-12 gap-8 lg:gap-12' : ''} items-center`}>
          {/* Main Content Column */}
          <div className={`${heroImage ? 'lg:col-span-7' : 'max-w-3xl'} space-y-4 text-center sm:text-left`}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DCC8]/80 border border-[#D97B4F]/25 text-[#2E2A26] text-xs sm:text-sm font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#D97B4F] shrink-0" />
              <span>{tag}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-[2.85rem] font-bold text-[#2E2A26] leading-[1.2] tracking-tight">
              {title}
            </h1>

            <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed max-w-2xl mx-auto sm:mx-0">
              {subtitle}
            </p>

            {/* Standardized 44-48px Touch Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3 pt-2">
              <Link
                href={primaryCta?.href || "/book-appointment"}
                className="btn-primary min-h-[46px] py-2.5 px-6 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg gap-2 w-full sm:w-auto justify-center"
              >
                {primaryCta?.icon || <Calendar className="w-4 h-4" />}
                <span>{primaryCta?.text || "Book Consultation"}</span>
              </Link>

              <div className="flex gap-2.5 w-full sm:w-auto">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp min-h-[46px] py-2.5 px-4 text-sm sm:text-base font-semibold gap-2 flex-1 sm:flex-none justify-center"
                  aria-label="WhatsApp clinic"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="btn-secondary min-h-[46px] py-2.5 px-4 text-sm sm:text-base font-semibold gap-2 flex-1 sm:flex-none justify-center"
                  aria-label="Call clinic directly"
                >
                  <FaPhoneAlt className="w-3.5 h-3.5" />
                  <span>Call Helpline</span>
                </a>
              </div>
            </div>

            {/* Trust Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 border-t border-[#E8E4DF] text-xs sm:text-sm text-[#2E2A26]">
              <div className="flex items-center justify-center sm:justify-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                <span>2 Dehradun Clinics</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                <span>MPT Specialists Only</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                <span>Home Visits Available</span>
              </div>
            </div>
          </div>

          {/* Optional Hero Image Column */}
          {heroImage && (
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white aspect-[4/3] w-full group">
                  <Image
                    src={heroImage}
                    alt={heroImageAlt || title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Curved Bottom Edge */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30C360 60 1080 0 1440 30V60H0V30Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  )
}
