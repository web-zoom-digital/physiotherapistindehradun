import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity,
  Stethoscope,
  Award,
  Sparkles,
  Calendar,
  Clock,
  HeartPulse,
  Target,
  FileCheck2,
} from 'lucide-react'
import { FaWhatsapp, FaCalendarCheck } from 'react-icons/fa'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { BlogCard } from '@/components/sections/BlogCard'
import { Service, SERVICES } from '@/data/services'
import { Condition } from '@/data/conditions'
import { BlogPost } from '@/data/blog'
import { FAQ } from '@/data/faqs'
import { SERVICE_IMAGES } from '@/data/serviceImages'
import { CONTACT, WHATSAPP_URL } from '@/data/clinic'

interface ServiceDetailContentProps {
  service: Service
  relatedConditionsData: Condition[]
  relatedBlogs: BlogPost[]
  faqs: FAQ[]
  faqTitle: string
  blogTitle: string
  images: [string, string]
}

export function ServiceDetailContent({
  service,
  relatedConditionsData,
  relatedBlogs,
  faqs,
  faqTitle,
  blogTitle,
  images,
}: ServiceDetailContentProps) {
  // Find related services to display in 2-column mobile grid
  const relatedServicesList = SERVICES.filter(
    (s) => s.slug !== service.slug && service.relatedServices.includes(s.slug)
  ).slice(0, 4)

  return (
    <div className="bg-white">
      {/* =========================================================================
          SECTION 1: CLINICAL OVERVIEW & WHO MAY BENEFIT (Image 1 Right)
      ========================================================================= */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center sm:text-left">
              {/* Who May Benefit - 2-Column Mobile Grid */}
              <div className="space-y-3 sm:space-y-4">
                <span className="section-label">Patient Candidates</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2E2A26] leading-tight">
                  Who May Benefit from {service.shortTitle}
                </h2>
                <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed">
                  Tailored physical rehabilitation for acute pain, chronic musculoskeletal stiffness, and functional impairment:
                </p>

                {/* 2-Column Grid on Mobile */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
                  {service.whoCanBenefit.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 p-3 sm:p-3.5 rounded-2xl bg-[#FAF9F7] border border-[#E8E4DF] text-xs text-[#4A4744] hover:border-[#D97B4F]/40 transition-colors shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0 sm:mt-0.5" />
                      <span className="font-semibold sm:font-medium leading-snug line-clamp-3">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assessment Workflow */}
              <div className="space-y-3 pt-4 border-t border-[#E8E4DF]">
                <span className="section-label">Clinical Workflow</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#2E2A26]">
                  Diagnostic Evaluation &amp; Treatment Architecture
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed">
                  During your initial {service.shortTitle.toLowerCase()} evaluation, our senior Master of Physiotherapy (MPT) specialists evaluate your joint alignment, muscle activation, neural mobility, and pain mechanics. We identify the root biomechanical drivers rather than merely masking localized symptoms.
                </p>
                <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed hidden sm:block">
                  Each session combines dedicated manual mobilization, targeted therapeutic exercises, modern electrotherapy modalities, and self-care coaching for sustained daily recovery.
                </p>
              </div>
            </div>

            {/* Right Healthcare Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E4DF] group aspect-[4/3] w-full bg-gray-50">
                <Image
                  src={images[0]}
                  alt={`Clinical photo of ${service.title} consultation and diagnostic evaluation in Dehradun`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white pointer-events-none">
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-[#D97B4F] text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full w-max mb-1.5 sm:mb-2 shadow-xs">
                    <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Clinical Assessment</span>
                  </div>
                  <h4 className="text-sm sm:text-lg font-bold leading-snug">
                    Specialized Physical Evaluation &amp; Diagnostics
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-200 mt-0.5 sm:mt-1 line-clamp-2">
                    Individualized joint range assessment, muscle testing &amp; postural mapping by registered MPT clinicians.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 4-STEP TREATMENT PROCESS (Exact 2-Col Mobile Grid, 4-Col Desktop)
      ========================================================================= */}
      <section className="section-py bg-[#FAF9F7] border-y border-[#E8E4DF]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="section-label">Patient Recovery Journey</span>
            <h2 className="section-title">Our Structured 4-Step {service.shortTitle} Protocol</h2>
            <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed mt-1.5">
              Clear clinical stages designed to provide early pain relief, restore normal movement patterns, and protect long-term physical strength.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {/* Step 1 */}
            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow rounded-2xl bg-white">
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
                  Comprehensive 45-minute clinical evaluation of joint mobility, nerve tension, and trigger points.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E8E4DF] text-[10px] sm:text-[11px] font-semibold text-[#D97B4F]">
                Root-Cause Diagnosis
              </div>
            </div>

            {/* Step 2 */}
            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow rounded-2xl bg-white">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-[#D97B4F]/30">02</span>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  2. Targeted Protocol
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Customized blueprint combining hands-on joint mobilisation, electrotherapy, and progressive load training.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E8E4DF] text-[10px] sm:text-[11px] font-semibold text-[#D97B4F]">
                Tailored Care Plan
              </div>
            </div>

            {/* Step 3 */}
            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow rounded-2xl bg-white">
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
                  Direct supervised rehabilitation sessions focused on pain relief, muscle activation, and movement refinement.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E8E4DF] text-[10px] sm:text-[11px] font-semibold text-[#D97B4F]">
                Hands-On Therapy
              </div>
            </div>

            {/* Step 4 */}
            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow rounded-2xl bg-white">
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
          SECTION 3: MODALITIES & CONDITIONS ADDRESSED (Image 2 Left)
      ========================================================================= */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Healthcare Visual Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E4DF] group aspect-[4/3] w-full bg-gray-50">
                <Image
                  src={images[1]}
                  alt={`Clinical photo of ${service.title} manual mobilization and electrotherapy session in Dehradun`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white pointer-events-none">
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-[#D97B4F] text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full w-max mb-1.5 sm:mb-2 shadow-xs">
                    <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Therapeutic Rehabilitation</span>
                  </div>
                  <h4 className="text-sm sm:text-lg font-bold leading-snug">
                    Evidence-Backed Modalities &amp; Exercise
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-200 mt-0.5 sm:mt-1 line-clamp-2">
                    Skilled hands-on manual mobilization, therapeutic electrotherapy, and progressive strength conditioning.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 order-1 lg:order-2 text-center sm:text-left">
              {/* Therapeutic Modalities */}
              <div className="space-y-3 sm:space-y-4">
                <span className="section-label">Evidence-Based Treatment</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2E2A26] leading-tight">
                  Therapeutic Modalities &amp; Manual Techniques
                </h2>
                <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed">
                  We integrate proven clinical modalities calibrated precisely to your pain tolerance and tissue healing phase:
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2 pt-1">
                  {service.techniques.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#FAF9F7] border border-[#E8E4DF] text-[#2E2A26] text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-lg shadow-xs hover:border-[#D97B4F] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Conditions Addressed - 2-Column Mobile Grid */}
              <div className="space-y-3 pt-4 border-t border-[#E8E4DF]">
                <span className="section-label">Clinical Indications</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#2E2A26]">
                  {service.shortTitle} Conditions Evaluated
                </h3>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {relatedConditionsData.map((cond) => (
                    <Link
                      key={cond.slug}
                      href={`/conditions/${cond.slug}`}
                      className="p-3 sm:p-3.5 rounded-2xl border border-[#E8E4DF] bg-white hover:border-[#D97B4F] text-xs font-semibold text-[#2E2A26] hover:text-[#D97B4F] transition-all flex items-center justify-between shadow-xs hover:shadow-sm"
                    >
                      <span className="truncate pr-1">{cond.shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D97B4F] shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: RELATED PHYSIOTHERAPY SERVICES (Exact 2-Col Mobile Grid)
      ========================================================================= */}
      {relatedServicesList.length > 0 && (
        <section className="section-py bg-[#FAF9F7] border-y border-[#E8E4DF]">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <span className="section-label">Complementary Care</span>
              <h2 className="section-title">Related Physiotherapy Services in Dehradun</h2>
              <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed mt-1.5">
                Explore interdisciplinary rehabilitation programs frequently combined with {service.shortTitle} for comprehensive recovery.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {relatedServicesList.map((relService) => {
                const relImage = SERVICE_IMAGES[relService.slug]?.[0] || '/images/about-clinical-standards.jpg'

                return (
                  <div
                    key={relService.slug}
                    className="card flex flex-col justify-between overflow-hidden bg-white border border-[#E8E4DF] hover:border-[#D97B4F]/40 hover:shadow-md transition-all rounded-2xl group"
                  >
                    <div>
                      {/* Thumbnail with 4:3 Aspect Ratio */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 border-b border-[#E8E4DF]">
                        <Image
                          src={relImage}
                          alt={`${relService.title} in Dehradun`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 bg-[#D97B4F] text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                          {relService.shortTitle.split(' ')[0]} Care
                        </div>
                      </div>

                      <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                        <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] group-hover:text-[#D97B4F] transition-colors leading-snug line-clamp-1">
                          {relService.shortTitle}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-2">
                          {relService.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 pt-0">
                      <Link
                        href={`/services/${relService.slug}`}
                        className="btn-secondary min-h-[40px] sm:min-h-[44px] py-1.5 sm:py-2 px-3 text-[11px] sm:text-xs font-bold w-full justify-center text-center gap-1"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 5: IN-PAGE CONVERSION BANNER (Standardized Touch Targets)
      ========================================================================= */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="bg-[#FAF9F7] rounded-2xl p-6 sm:p-10 border border-[#E8E4DF] max-w-4xl mx-auto text-center space-y-4 shadow-xs">
            <div className="inline-flex items-center gap-2 bg-[#F5DCC8] text-[#D97B4F] px-3.5 py-1 rounded-full text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Consult Registered MPT Clinicians</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2E2A26]">
              Schedule Your {service.shortTitle} Assessment in Dehradun
            </h3>

            <p className="text-xs sm:text-sm text-[#4A4744] max-w-2xl mx-auto leading-relaxed">
              Visit our Rajpur Road clinic near Clock Tower or our Bhaniyawala branch near Jolly Grant, or request dedicated home physiotherapy visits across Dehradun.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <Link
                href="/book-appointment"
                className="btn-primary min-h-[46px] py-2.5 px-7 text-sm font-bold shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Clinic Appointment</span>
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp min-h-[46px] py-2.5 px-6 text-sm font-bold w-full sm:w-auto justify-center"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp Helpline</span>
              </a>

              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="btn-secondary min-h-[46px] py-2.5 px-6 text-sm font-bold w-full sm:w-auto justify-center"
              >
                <span>Call {CONTACT.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HEALTH ARTICLES & SERVICE FAQS (With Sticky Bar Clearance)
      ========================================================================= */}
      <section className="section-py bg-[#FAF9F7] border-t border-[#E8E4DF] pb-28 lg:pb-20">
        <div className="container-custom max-w-4xl space-y-14 sm:space-y-16">
          {/* Centered Health Articles */}
          {relatedBlogs.length > 0 && (
            <div className="space-y-6 sm:space-y-8 text-center">
              <div className="max-w-2xl mx-auto space-y-2">
                <span className="section-label">Educational Insights</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2E2A26]">
                  {blogTitle}
                </h2>
                <p className="text-xs sm:text-sm text-[#4A4744]">
                  Clinical guides and recovery advice authored by our senior physiotherapy team.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 text-left">
                {relatedBlogs.map((b) => (
                  <BlogCard key={b.slug} post={b} />
                ))}
              </div>
            </div>
          )}

          {/* Centered FAQs */}
          <div className="space-y-6 sm:space-y-8 text-center">
            <div className="max-w-2xl mx-auto space-y-2">
              <span className="section-label">Patient FAQ Guide</span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2E2A26]">
                {faqTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#4A4744]">
                Transparent answers regarding assessment procedures, treatment duration, and rehabilitation milestones.
              </p>
            </div>

            <div className="text-left max-w-3xl mx-auto">
              <FAQAccordion faqs={faqs} title="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
