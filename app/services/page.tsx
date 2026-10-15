import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Calendar,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Activity,
  Bone,
  Brain,
  Zap,
  Home as HomeIcon,
  HeartPulse,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  MapPin,
  Clock,
  Award,
  ChevronRight,
  FileCheck2,
  Target,
} from 'lucide-react'
import { FaWhatsapp, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CounterStats } from '@/components/ui/CounterStats'
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
import { SERVICES } from '@/data/services'
import { FAQS } from '@/data/faqs'
import { SERVICE_IMAGES } from '@/data/serviceImages'

export const metadata: Metadata = {
  title: 'Physiotherapy Services in Dehradun | MPT Specialist Care',
  description:
    'Comprehensive physiotherapy services in Dehradun. Orthopedic, neuro, sports, pediatric, women\'s health, post-surgery, pain management and home care. Bhaniyawala clinic & home visits across Dehradun.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'Physiotherapy Services in Dehradun | RonEx Physiotherapy Clinic',
    description:
      'Explore evidence-informed physiotherapy across 8 major clinical disciplines. Consult qualified MPT specialists in Dehradun or schedule dedicated home care visits.',
    url: `${SITE_URL}/services`,
    type: 'website',
  },
}

export default function ServicesHubPage() {
  const breadcrumbItems = [{ name: 'Services', url: '/services' }]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={FAQS.services} />

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
                  <ShieldCheck className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>Multi-Speciality Clinical Practice · 8 Clinical Disciplines</span>
                </div>
              </div>

              <h1 className="text-[1.85rem] sm:text-3xl md:text-[2.85rem] font-bold text-[#2E2A26] leading-[1.2] tracking-tight">
                Specialized Physiotherapy &amp; Rehabilitation Services in{' '}
                <span className="text-[#D97B4F]">Dehradun</span>
              </h1>

              <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At RonEx Physiotherapy, recovery is personalized and clinically rigorous. Guided by
                experienced Master of Physiotherapy (MPT) clinicians, we deliver evidence-informed manual
                therapy, modern electrotherapy modalities, and functional movement retraining across
                our two physical clinics and dedicated home care across Dehradun.
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
                    aria-label="Contact clinic via WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="btn-secondary min-h-[46px] flex-1 sm:flex-none justify-center text-center"
                    aria-label="Call clinic helpline"
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
                  <span>2 Physical Clinics in Dehradun</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>MPT Specialist Clinicians</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>Dehradun-Wide Home Visits</span>
                </div>
              </div>
            </div>

            {/* Right Healthcare Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group aspect-[4/3] w-full">
                  <Image
                    src="/images/services/orthopedic-1.jpg"
                    alt="Indian physiotherapist conducting thorough knee and joint evaluation in modern clinic"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A26]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Trust Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-[#E8E4DF] hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2E2A26]">Bhaniyawala, Dehradun</p>
                    <p className="text-[11px] text-[#76726E]">Serving All Dehradun Areas</p>
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
          SECTION 2: PRIMARY SERVICES GRID (Exact 2-Col Mobile, 4-Col Desktop)
      ========================================================================= */}
      <section className="section-py bg-white" id="all-services">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="section-label">Clinical Directory</span>
            <h2 className="section-title">Explore Our 8 Physiotherapy Specialties</h2>
            <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed mt-2">
              Every discipline is directed by qualified MPT specialists utilizing modern modalities,
              focused manual therapy, and progressive functional retraining.
            </p>
          </div>

          {/* Exact 2-Column Mobile Grid, 2-Col Tablet, 4-Col Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {SERVICES.map((service) => {
              const serviceImg = SERVICE_IMAGES[service.slug]?.[0] || '/images/about-clinical-standards.jpg'

              return (
                <div
                  key={service.slug}
                  className="card flex flex-col justify-between overflow-hidden bg-white border border-[#E8E4DF] hover:border-[#D97B4F]/40 hover:shadow-xl transition-all duration-300 group rounded-2xl"
                >
                  <div>
                    {/* Responsive Image Container with 4:3 Aspect Ratio */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 border-b border-[#E8E4DF]">
                      <Image
                        src={serviceImg}
                        alt={`${service.title} in Dehradun`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Category Badge Floating Top-Left */}
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-[#D97B4F] text-white text-[9px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-xs truncate max-w-[85%]">
                        {service.shortTitle.split(' ')[0]} Care
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-3 sm:p-5 space-y-2 sm:space-y-3">
                      <div>
                        <h2 className="text-xs sm:text-base font-bold text-[#2E2A26] group-hover:text-[#D97B4F] transition-colors leading-snug line-clamp-1">
                          <Link href={`/services/${service.slug}`} className="hover:underline">
                            {service.shortTitle}
                          </Link>
                        </h2>
                        <p className="text-[11px] sm:text-xs font-semibold text-[#D97B4F] mt-0.5 line-clamp-1">
                          {service.tagline}
                        </p>
                      </div>

                      <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-2">
                        {service.description}
                      </p>

                      {/* Key Conditions Addressed Badges */}
                      <div className="pt-1">
                        <span className="text-[9px] sm:text-[10px] font-bold text-[#76726E] uppercase tracking-wider block mb-1">
                          Common Cases:
                        </span>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {service.conditions.slice(0, 2).map((c, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-[9px] sm:text-[10px] bg-[#FAF9F7] border border-[#E8E4DF] text-[#4A4744] px-1.5 sm:px-2 py-0.5 rounded-md font-medium truncate max-w-[120px] sm:max-w-none"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Standardized Card Actions Footer */}
                  <div className="p-3 sm:p-5 pt-0 border-t border-gray-100 mt-2 space-y-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="btn-primary min-h-[40px] sm:min-h-[44px] py-1.5 sm:py-2 px-3 text-[11px] sm:text-xs font-bold w-full justify-center text-center gap-1.5 shadow-xs"
                    >
                      <span>Explore Service Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/book-appointment?service=${service.slug}`}
                      className="btn-secondary min-h-[38px] sm:min-h-[40px] py-1 sm:py-1.5 px-3 text-[10px] sm:text-xs font-semibold w-full justify-center text-center gap-1 text-[#2E2A26]"
                    >
                      <FaCalendarCheck className="w-3 h-3 text-[#D97B4F]" />
                      <span>Book Evaluation</span>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CLINICAL DIFFERENTIATORS (Exact 2-Col Mobile Grid, 4-Col Desktop)
      ========================================================================= */}
      <section className="section-py bg-[#FAF9F7] border-y border-[#E8E4DF]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="section-label">Clinical Standards</span>
            <h2 className="section-title">Why Our Specialized Care Model Works</h2>
            <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed mt-2">
              Unlike generic clinics that attach patients to machines without assessment, our
              practice emphasizes diagnostic precision, dedicated one-on-one time, and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 hover:border-[#D97B4F]/40 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl bg-white">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  1. MPT Post-Graduates
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Your care plan is formulated and overseen directly by specialized Master of Physiotherapy clinicians.
                </p>
              </div>
            </div>

            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 hover:border-[#D97B4F]/40 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl bg-white">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <Bone className="w-5 h-5" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  2. Skilled Manual Therapy
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  We prioritize joint mobilisation, myofascial release, and passive tissue stretches over unattended machines.
                </p>
              </div>
            </div>

            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 hover:border-[#D97B4F]/40 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl bg-white">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  3. Advanced Modalities
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Modern electrotherapy (IFT, ultrasound, TENS, cervical/lumbar traction) integrated into active rehabilitation.
                </p>
              </div>
            </div>

            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 hover:border-[#D97B4F]/40 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl bg-white">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <HomeIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  4. Clinic &amp; Home Visits
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Consult at our Bhaniyawala clinic center, or schedule dedicated home care anywhere in Dehradun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: STRUCTURED 4-STEP RECOVERY PROCESS (Exact 2-Col Mobile Grid)
      ========================================================================= */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="section-label">Patient Pathway</span>
            <h2 className="section-title">Our Structured 4-Step Rehabilitation Journey</h2>
            <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed mt-2">
              From your initial diagnostic assessment to milestone testing and graduating into independent self-care.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow rounded-2xl">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-[#D97B4F]/30">01</span>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  1. Deep Assessment
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Comprehensive 45-minute clinical evaluation of joint mobility, posture, nerve tension, and trigger points.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E8E4DF] text-[10px] sm:text-[11px] font-semibold text-[#D97B4F]">
                Root-Cause Diagnosis
              </div>
            </div>

            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow rounded-2xl">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-[#D97B4F]/30">02</span>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  2. Targeted Plan
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Customized blueprint combining hands-on joint mobilisation, electrotherapy, and progressive load exercises.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E8E4DF] text-[10px] sm:text-[11px] font-semibold text-[#D97B4F]">
                Tailored Care Blueprint
              </div>
            </div>

            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow rounded-2xl">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-[#D97B4F]/30">03</span>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  3. 1-on-1 Guided Care
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Supervised rehabilitation sessions focused on pain relief, movement refinement, and strength progression.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E8E4DF] text-[10px] sm:text-[11px] font-semibold text-[#D97B4F]">
                Hands-On Therapy
              </div>
            </div>

            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow rounded-2xl">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <FileCheck2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-[#D97B4F]/30">04</span>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  4. Milestone Testing
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Objective range of motion and strength measurements, graduating to independent maintenance routines.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E8E4DF] text-[10px] sm:text-[11px] font-semibold text-[#D97B4F]">
                Measured Outcomes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CLINICAL TRIAGE ASSISTANCE (Unsure Which Service You Need?)
      ========================================================================= */}
      <section className="section-py bg-[#FAF9F7] border-y border-[#E8E4DF]">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8E4DF] max-w-4xl mx-auto text-center space-y-4 shadow-sm">
            <div className="inline-flex items-center gap-2 bg-[#F5DCC8] text-[#D97B4F] px-3.5 py-1 rounded-full text-xs font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Need Guidance?</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2E2A26]">
              Unsure Which Physiotherapy Service Fits Your Condition?
            </h2>

            <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed max-w-2xl mx-auto">
              You don&apos;t need to know the medical terminology. Our clinical team carries out a thorough
              diagnostic assessment on your first visit and aligns you with the most effective specialty pathway.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <Link
                href="/book-appointment"
                className="btn-primary min-h-[46px] py-2.5 px-7 text-sm font-bold shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book First Assessment</span>
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp min-h-[46px] py-2.5 px-6 text-sm font-bold w-full sm:w-auto justify-center"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>

              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="btn-secondary min-h-[46px] py-2.5 px-6 text-sm font-bold w-full sm:w-auto justify-center"
              >
                <span>Call Helpline: {CONTACT.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FREQUENTLY ASKED QUESTIONS (Services Specific)
      ========================================================================= */}
      <section className="section-py bg-white border-b border-[#E8E4DF]">
        <div className="container-custom max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="section-label">Patient Clarifications</span>
            <h2 className="section-title">Physiotherapy Services FAQs</h2>
            <p className="text-sm text-[#4A4744] leading-relaxed mt-2">
              Common questions about session duration, treatment combinations, what to bring, and home visit availability.
            </p>
          </div>

          <FAQAccordion faqs={FAQS.services} title="" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PREMIUM FINAL CTA (Conversion-Focused with Mobile Sticky Bar Clearance)
      ========================================================================= */}
      <section className="section-py bg-gradient-to-br from-[#2E2A26] to-[#1E1B18] text-white relative overflow-hidden pb-28 lg:pb-20">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D97B4F]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#D97B4F]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F5DCC8] text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-[#D97B4F]" />
            <span>Restore Your Mobility Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Consult Specialist Physiotherapists in <span className="text-[#D97B4F]">Dehradun</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Book an in-clinic evaluation at Bhaniyawala, or schedule dedicated home care physiotherapy across Dehradun.
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
