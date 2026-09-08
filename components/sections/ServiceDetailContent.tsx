import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, ShieldCheck, Activity, Stethoscope } from 'lucide-react'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTAButton } from '@/components/ui/CTAButton'
import { Service } from '@/data/services'
import { Condition } from '@/data/conditions'
import { BlogPost } from '@/data/blog'
import { FAQ } from '@/data/faqs'

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
  return (
    <section className="section-py bg-white">
      <div className="container-custom">
        {/* BLOCK 1: Content on LEFT (2 Sections), Image 1 on RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-8">
            {/* Section 1: Who May Benefit */}
            <div className="space-y-4">
              <span className="section-label">Patient Candidates</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#2E2A26] leading-tight">
                Who May Benefit from {service.shortTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.whoCanBenefit.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#FAF9F7] border border-[#E8E4DF] text-xs text-[#4A4744] hover:border-[#D97B4F]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Clinical Assessment Approach */}
            <div className="space-y-3 pt-4 border-t border-[#E8E4DF]">
              <span className="section-label">Clinical Workflow</span>
              <h3 className="text-xl font-bold text-[#2E2A26]">
                Our Clinical Assessment &amp; Rehabilitation Approach
              </h3>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                During your initial {service.shortTitle.toLowerCase()} assessment at our Dehradun clinic, our registered Master of Physiotherapy (MPT) specialists conduct a comprehensive physical evaluation. We analyze joint mechanics, muscle imbalances, movement restrictions, and spinal posture to design an individualized recovery plan.
              </p>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                Every treatment session combines hands-on manual mobilization, therapeutic exercises, state-of-the-art electrotherapy, and ergonomic education to prevent recurrence.
              </p>
            </div>
          </div>

          {/* First Image on RIGHT Side */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E4DF] group">
              <Image
                src={images[0]}
                alt={`Clinical photo of ${service.title} consultation and clinical assessment in Dehradun`}
                width={800}
                height={600}
                className="w-full h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 bg-[#D97B4F] text-white text-xs font-semibold px-3 py-1 rounded-full w-max mb-2 shadow-sm">
                  <Stethoscope className="w-4 h-4" />
                  <span>Clinical Assessment View</span>
                </div>
                <h4 className="text-lg font-bold">Specialized Evaluation &amp; Diagnostics</h4>
                <p className="text-xs text-gray-200 mt-1">
                  Individualized movement assessment &amp; diagnostic evaluation by MPT specialists.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 2: Image 2 on LEFT, Content on RIGHT (2 Sections) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Second Image on LEFT Side */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E4DF] group">
              <Image
                src={images[1]}
                alt={`Clinical photo of ${service.title} manual therapy and exercise rehabilitation`}
                width={800}
                height={600}
                className="w-full h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 bg-[#D97B4F] text-white text-xs font-semibold px-3 py-1 rounded-full w-max mb-2 shadow-sm">
                  <Activity className="w-4 h-4" />
                  <span>Therapeutic Rehabilitation</span>
                </div>
                <h4 className="text-lg font-bold">Evidence-Backed Modalities &amp; Exercise</h4>
                <p className="text-xs text-gray-200 mt-1">
                  Targeted manual therapy, electrotherapy, and progressive therapeutic movement.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            {/* Section 3: Modalities & Techniques */}
            <div className="space-y-4">
              <span className="section-label">Evidence-Based Treatment</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#2E2A26] leading-tight">
                Therapeutic Modalities &amp; Manual Techniques
              </h2>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                We apply clinical protocols tailored to your recovery goals using modern rehabilitation techniques:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {service.techniques.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#FAF9F7] border border-[#E8E4DF] text-[#2E2A26] text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-xs hover:border-[#D97B4F] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Section 4: Conditions Addressed */}
            <div className="space-y-4 pt-4 border-t border-[#E8E4DF]">
              <span className="section-label">Conditions Managed</span>
              <h3 className="text-xl font-bold text-[#2E2A26]">
                {service.shortTitle} Conditions Addressed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedConditionsData.map((cond) => (
                  <Link
                    key={cond.slug}
                    href={`/conditions/${cond.slug}`}
                    className="p-3.5 rounded-xl border border-[#E8E4DF] bg-white hover:border-[#D97B4F] text-xs font-semibold text-[#2E2A26] hover:text-[#D97B4F] transition-all flex items-center justify-between shadow-xs hover:shadow-sm"
                  >
                    <span>{cond.shortTitle}</span>
                    <ArrowRight className="w-4 h-4 text-[#D97B4F]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner Card: Book Assessment */}
        <div className="bg-[#FAF9F7] rounded-2xl p-8 border border-[#E8E4DF] max-w-4xl mx-auto text-center space-y-4 mb-20 shadow-sm">
          <div className="inline-flex items-center gap-2 bg-[#F5DCC8] text-[#D97B4F] px-3.5 py-1 rounded-full text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Consult MPT Specialists</span>
          </div>
          <h3 className="text-2xl font-bold text-[#2E2A26]">
            Book {service.shortTitle} Assessment
          </h3>
          <p className="text-sm text-[#4A4744] max-w-2xl mx-auto leading-relaxed">
            Consult our senior MPT specialists at our Rajpur Road or Bhaniyawala clinic in Dehradun, or request dedicated home physiotherapy visits.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <CTAButton variant="primary" className="px-8 py-3 text-sm">
              Book Appointment
            </CTAButton>
            <CTAButton variant="whatsapp" className="px-8 py-3 text-sm">
              WhatsApp Inquiry
            </CTAButton>
          </div>
        </div>

        {/* BLOCK 3: CENTERED Health Articles & CENTERED FAQs */}
        <div className="max-w-4xl mx-auto space-y-16 border-t border-[#E8E4DF] pt-16">
          {/* Centered Health Articles */}
          {relatedBlogs.length > 0 && (
            <div className="space-y-8 text-center">
              <div className="max-w-2xl mx-auto space-y-2">
                <span className="section-label">Educational Insights</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#2E2A26]">
                  {blogTitle}
                </h2>
                <p className="text-sm text-[#4A4744]">
                  Read expert guides and advice from our senior physiotherapy team.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {relatedBlogs.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/blog/${b.slug}`}
                    className="block p-6 rounded-2xl border border-[#E8E4DF] bg-white hover:border-[#D97B4F] transition-all hover:shadow-md space-y-2"
                  >
                    <span className="text-[11px] font-bold text-[#D97B4F] uppercase tracking-wider">Article</span>
                    <h3 className="text-base font-bold text-[#2E2A26] line-clamp-2 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-xs text-[#4A4744] line-clamp-3 leading-relaxed">
                      {b.excerpt}
                    </p>
                    <div className="pt-2 flex items-center text-xs font-bold text-[#D97B4F] gap-1">
                      Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Centered FAQs */}
          <div className="space-y-8 text-center">
            <div className="max-w-2xl mx-auto space-y-2">
              <span className="section-label">Patient FAQ Guide</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#2E2A26]">
                {faqTitle}
              </h2>
              <p className="text-sm text-[#4A4744]">
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
