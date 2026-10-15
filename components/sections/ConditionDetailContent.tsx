import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, ShieldCheck, Activity, Stethoscope, AlertTriangle } from 'lucide-react'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTAButton } from '@/components/ui/CTAButton'
import { BlogCard } from '@/components/sections/BlogCard'
import { Condition } from '@/data/conditions'
import { Service } from '@/data/services'
import { BlogPost } from '@/data/blog'
import { FAQ } from '@/data/faqs'

interface ConditionDetailContentProps {
  condition: Condition
  relatedServicesData: Service[]
  relatedBlogs: BlogPost[]
  faqs: FAQ[]
  faqTitle: string
  blogTitle: string
  images: [string, string]
}

export function ConditionDetailContent({
  condition,
  relatedServicesData,
  relatedBlogs,
  faqs,
  faqTitle,
  blogTitle,
  images,
}: ConditionDetailContentProps) {
  return (
    <section className="section-py bg-white">
      <div className="container-custom">
        {/* BLOCK 1: Content on LEFT (2 Sections), Image 1 on RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center sm:text-left">
            {/* Section 1: Common Symptoms (2-Col Mobile Grid) */}
            <div className="space-y-3 sm:space-y-4">
              <span className="section-label">Symptom Overview</span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2E2A26] leading-tight">
                Common Symptoms of {condition.shortTitle}
              </h2>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
                {condition.symptoms.map((sym, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 p-3 sm:p-3.5 rounded-2xl bg-[#FAF9F7] border border-[#E8E4DF] text-xs text-[#4A4744] hover:border-[#D97B4F]/40 transition-colors shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0 sm:mt-0.5" />
                    <span className="font-semibold sm:font-medium leading-snug line-clamp-3">{sym}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: How Physiotherapy Helps */}
            <div className="space-y-3 pt-4 border-t border-[#E8E4DF]">
              <span className="section-label">Therapeutic Impact</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#2E2A26]">
                How Specialized Physiotherapy May Help
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed">
                {condition.howPhysioHelps}
              </p>
            </div>
          </div>

          {/* First Image on RIGHT Side with 4:3 Aspect Ratio */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E4DF] group aspect-[4/3] w-full bg-gray-50">
              <Image
                src={images[0]}
                alt={`Clinical photo of ${condition.title} clinical assessment in Dehradun`}
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
                <h4 className="text-sm sm:text-lg font-bold leading-snug">{condition.shortTitle} Clinical Evaluation</h4>
                <p className="text-[11px] sm:text-xs text-gray-200 mt-0.5 sm:mt-1 line-clamp-2">
                  Thorough posture, mobility &amp; spinal biomechanics check by senior MPT clinicians.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 2: Image 2 on LEFT, Content on RIGHT (2 Sections) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Second Image on LEFT Side with 4:3 Aspect Ratio */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E4DF] group aspect-[4/3] w-full bg-gray-50">
              <Image
                src={images[1]}
                alt={`Clinical photo of ${condition.title} exercise rehabilitation and treatment`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white pointer-events-none">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-[#D97B4F] text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full w-max mb-1.5 sm:mb-2 shadow-xs">
                  <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Therapeutic Recovery</span>
                </div>
                <h4 className="text-sm sm:text-lg font-bold leading-snug">Targeted Manual Therapy &amp; Mobilization</h4>
                <p className="text-[11px] sm:text-xs text-gray-200 mt-0.5 sm:mt-1 line-clamp-2">
                  Evidence-based spine care, pain relief, and progressive movement therapy.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 sm:space-y-8 order-1 lg:order-2 text-center sm:text-left">
            {/* Section 3: Our Treatment Approach */}
            <div className="space-y-3 sm:space-y-4">
              <span className="section-label">Clinical Protocol</span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2E2A26] leading-tight">
                Our Proven Treatment Approach
              </h2>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-[#4A4744] text-left">
                {condition.treatmentApproach.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When to Seek Help Warning Card */}
            <div className="space-y-2 sm:space-y-3 p-4 sm:p-5 bg-amber-50/70 border border-amber-200 rounded-2xl text-left">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs sm:text-sm">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 shrink-0" />
                <span>When to Consult a Professional</span>
              </div>
              <ul className="space-y-1 text-xs text-amber-900 leading-relaxed pl-1">
                {condition.whenToSeekHelp.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Related Services in 2-Column Mobile Grid */}
            <div className="space-y-3 pt-2 border-t border-[#E8E4DF]">
              <span className="section-label font-semibold">Related Services</span>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {relatedServicesData.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="p-3 sm:p-3.5 rounded-2xl border border-[#E8E4DF] bg-white hover:border-[#D97B4F] text-xs font-semibold text-[#2E2A26] hover:text-[#D97B4F] transition-all flex items-center justify-between shadow-xs hover:shadow-sm"
                  >
                    <span className="truncate pr-1">{s.shortTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D97B4F] shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner Card: Book Assessment */}
        <div className="bg-[#FAF9F7] rounded-3xl p-6 sm:p-10 border border-[#E8E4DF] max-w-4xl mx-auto text-center space-y-4 mb-16 sm:mb-20 shadow-xs">
          <div className="inline-flex items-center gap-2 bg-[#F5DCC8] text-[#D97B4F] px-3.5 py-1 rounded-full text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Consult MPT Specialists</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2E2A26]">
            Book {condition.shortTitle} Assessment in Dehradun
          </h3>
          <p className="text-xs sm:text-sm text-[#4A4744] max-w-2xl mx-auto leading-relaxed">
            Consult our senior MPT specialists at our Bhaniyawala clinic in Dehradun, or request dedicated home physiotherapy visits across Dehradun.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <CTAButton variant="primary" className="px-7 py-3 text-sm min-h-[46px]">
              Book Appointment
            </CTAButton>
            <CTAButton variant="whatsapp" className="px-7 py-3 text-sm min-h-[46px]">
              WhatsApp Inquiry
            </CTAButton>
          </div>
        </div>

        {/* BLOCK 3: CENTERED Health Articles (2-Col Mobile Grid) & FAQs */}
        <div className="max-w-4xl mx-auto space-y-14 sm:space-y-16 border-t border-[#E8E4DF] pt-14 sm:pt-16 pb-28 lg:pb-20">
          {/* Centered Health Articles in Exact 2-Column Mobile Grid */}
          {relatedBlogs.length > 0 && (
            <div className="space-y-6 sm:space-y-8 text-center">
              <div className="max-w-2xl mx-auto space-y-2">
                <span className="section-label">Educational Insights</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2E2A26]">
                  {blogTitle}
                </h2>
                <p className="text-xs sm:text-sm text-[#4A4744]">
                  Read expert guides and advice from our senior physiotherapy team.
                </p>
              </div>

              {/* 2-Column Mobile Grid for Blog Cards */}
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
                Answers to common queries about symptoms, treatment sessions, and recovery expectations.
              </p>
            </div>

            <div className="text-left max-w-3xl mx-auto">
              <FAQAccordion faqs={faqs} title="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
