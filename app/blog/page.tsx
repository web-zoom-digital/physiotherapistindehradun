import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Calendar,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  Home as HomeIcon,
} from 'lucide-react'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CounterStats } from '@/components/ui/CounterStats'
import { BlogListing } from '@/components/sections/BlogListing'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { BreadcrumbSchema, FAQSchema } from '@/components/schema/JsonLd'
import {
  CLINIC_NAME,
  SITE_URL,
  CONTACT,
  BRANCHES,
  HOURS,
  FOUNDING_YEAR,
  WHATSAPP_URL,
} from '@/data/clinic'
import { BLOG_POSTS } from '@/data/blog'
import { FAQS } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Physiotherapy Blog & Patient Health Guides | Dehradun',
  description:
    'Evidence-based health guides on back pain, knee rehabilitation, stroke recovery, sports injuries and home physiotherapy written by Dehradun physiotherapists.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Physiotherapy Blog & Clinical Health Guides | RonEx Physiotherapy Dehradun',
    description:
      'Explore evidence-informed articles authored and clinically reviewed by Master of Physiotherapy (MPT) specialists in Dehradun.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
}

export default function BlogHubPage() {
  const breadcrumbItems = [{ name: 'Blog', url: '/blog' }]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={FAQS.blog} />

      {/* =========================================================================
          SECTION 1: HERO (Matching Homepage & About Us Palette & Typography)
      ========================================================================= */}
      <section className="relative bg-gradient-to-br from-[#FDF2E9] via-[#FCDEC8] to-[#F9D6BD] pt-8 pb-20 md:pt-12 md:pb-28 overflow-hidden">
        {/* Ambient Decorative Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D97B4F]/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#F5DCC8]/90 rounded-full blur-3xl -ml-32 pointer-events-none" />

        <div className="container-custom relative z-10 space-y-6">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DCC8]/80 border border-[#D97B4F]/25 text-[#2E2A26] text-xs sm:text-sm font-semibold shadow-xs">
                  <BookOpen className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>Clinical Health Insights · Authored by MPT Specialists</span>
                </div>
              </div>

              <h1 className="text-[1.85rem] sm:text-3xl md:text-[2.85rem] font-bold text-[#2E2A26] leading-[1.2] tracking-tight">
                Physiotherapy, Injury Recovery &amp;{' '}
                <span className="text-[#D97B4F]">Patient Health Guides</span>
              </h1>

              <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Explore evidence-informed articles on spinal pain, joint rehabilitation, stroke
                recovery, sports conditioning, and home therapy. Authored and medically reviewed by our
                licensed Master of Physiotherapy (MPT) clinicians in Dehradun.
              </p>

              {/* Standardized 44-48px Touch Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <Link
                  href="/book-appointment"
                  className="btn-primary min-h-[46px] shadow-md hover:shadow-lg justify-center text-center w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Book Clinical Assessment</span>
                </Link>

                <div className="flex gap-2.5 sm:gap-3 justify-center w-full sm:w-auto">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp min-h-[46px] flex-1 sm:flex-none justify-center text-center"
                    aria-label="Ask questions on WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="btn-secondary min-h-[46px] flex-1 sm:flex-none justify-center text-center"
                    aria-label="Call clinic directly"
                  >
                    <FaPhoneAlt className="w-4 h-4" />
                    <span>Call Helpline</span>
                  </a>
                </div>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[#E8E4DF] text-xs sm:text-sm text-[#2E2A26]">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>Evidence-Based Articles</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>Clinically Reviewed</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>Practical Self-Care Tips</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group aspect-[4/3] w-full">
                  <Image
                    src="/images/about-clinical-standards.jpg"
                    alt="Indian physiotherapist guiding patient rehabilitation in Dehradun clinic"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A26]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-[#E8E4DF] hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2E2A26]">Patient Education Library</p>
                    <p className="text-[11px] text-[#76726E]">Empowering Long-Term Mobility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Wave Bottom Divider */}
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30C360 60 1080 0 1440 30V60H0V30Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* Trust & Stats Strip */}
      <CounterStats />

      {/* =========================================================================
          SECTION 2: INTERACTIVE BLOG LISTING (2-Col Mobile Grid, 3-Col Desktop)
      ========================================================================= */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <BlogListing posts={BLOG_POSTS} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FREQUENTLY ASKED QUESTIONS (Blog & Education FAQs)
      ========================================================================= */}
      <section className="section-py bg-[#FAF9F7] border-t border-[#E8E4DF]">
        <div className="container-custom max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="section-label">Patient Clarifications</span>
            <h2 className="section-title">Health Articles &amp; Guidance FAQs</h2>
            <p className="text-sm text-[#4A4744] leading-relaxed mt-2">
              Common questions about clinical authorship, applying advice at home, and booking physical therapy assessments.
            </p>
          </div>

          <FAQAccordion faqs={FAQS.blog} title="" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FINAL CONVERSION CTA (With Mobile Sticky Bar Clearance)
      ========================================================================= */}
      <section className="section-py bg-gradient-to-br from-[#2E2A26] to-[#1E1B18] text-white relative overflow-hidden pb-28 lg:pb-20">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D97B4F]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#D97B4F]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F5DCC8] text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-[#D97B4F]" />
            <span>Consult Our Specialists</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Need Individualized Medical Guidance? <span className="text-[#D97B4F]">We&apos;re Here to Help</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Online articles provide general knowledge, but every injury is unique. Schedule an
            accurate physical assessment at our Bhaniyawala clinic center or request a home visit.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 pt-4">
            <Link
              href="/book-appointment"
              className="btn-primary min-h-[48px] py-3.5 px-8 text-base font-bold shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp min-h-[48px] py-3.5 px-7 text-base font-bold w-full sm:w-auto justify-center"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="btn-secondary min-h-[48px] bg-white/10 hover:bg-white/20 text-white border-white/20 py-3.5 px-7 text-base font-bold w-full sm:w-auto justify-center"
            >
              <FaPhoneAlt className="w-4 h-4" />
              <span>{CONTACT.phone}</span>
            </a>
          </div>

          {/* Locations & Hours Strip */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#D97B4F]" />
              <span>Bhaniyawala Center (near Jolly Grant)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D97B4F]" />
              <span>Mon–Sat: 9AM–10PM · Sun: 10AM–6PM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HomeIcon className="w-4 h-4 text-[#D97B4F]" />
              <span>Dehradun-Wide Home Visits</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
