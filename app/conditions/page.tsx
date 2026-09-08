import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTAButton } from '@/components/ui/CTAButton'
import { CONDITIONS } from '@/data/conditions'
import { FAQS } from '@/data/faqs'
import { CONDITION_IMAGES } from '@/data/conditionImages'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conditions Treated | Physiotherapist in Dehradun',
  description:
    'Comprehensive guide to physical conditions treated at our Dehradun physiotherapy clinic. Back pain, neck pain, sciatica, knee pain, stroke rehab, frozen shoulder and more.',
}

export default function ConditionsHubPage() {
  return (
    <>
      <PageHero
        title="Conditions We Assess & Treat in Dehradun"
        subtitle="Below is an index of common musculoskeletal, spine, joint and neurological conditions managed by our physiotherapy team. Select any condition to read dedicated patient guides."
        tag="Comprehensive Patient Guides"
        breadcrumbItems={[{ name: 'Conditions', url: '/conditions' }]}
      />

      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONDITIONS.map((condition) => {
              const conditionImg = CONDITION_IMAGES[condition.slug]?.[0] || '/images/conditions/back-pain-1.jpg'
              return (
                <div key={condition.slug} className="card overflow-hidden flex flex-col justify-between group">
                  <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden border-b border-[#E8E4DF]">
                    <img
                      src={conditionImg}
                      alt={`Physiotherapy ${condition.shortTitle} treatment in Dehradun`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 bg-[#D97B4F] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                      {condition.shortTitle}
                    </span>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-[#2E2A26] group-hover:text-[#D97B4F] transition-colors leading-tight">
                        <Link href={`/conditions/${condition.slug}`}>
                          {condition.title}
                        </Link>
                      </h2>
                      <p className="text-sm text-[#4A4744] line-clamp-3 leading-relaxed">
                        {condition.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E8E4DF] space-y-2">
                      <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        Key Symptoms:
                      </h3>
                      <ul className="text-xs text-[#4A4744] space-y-1">
                        {condition.symptoms.slice(0, 3).map((sym, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D97B4F] shrink-0" />
                            <span className="truncate">{sym}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#E8E4DF] flex items-center justify-between">
                      <Link
                        href={`/conditions/${condition.slug}`}
                        className="btn-primary py-2 px-4 text-xs font-semibold"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 bg-[#FAF9F7] rounded-2xl p-8 border border-[#E8E4DF] text-center space-y-4 mb-16">
            <h2 className="section-title">Need an Assessment for Your Pain?</h2>
            <p className="text-base text-[#4A4744] leading-relaxed max-w-xl mx-auto">
              Schedule a clinical evaluation with our senior physiotherapists to determine the cause of your pain and establish a personalized recovery plan.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <CTAButton variant="primary">Book Appointment</CTAButton>
              <CTAButton variant="whatsapp">WhatsApp Support</CTAButton>
            </div>
          </div>

          {/* Conditions FAQs */}
          <div className="max-w-4xl mx-auto border-t border-[#E8E4DF] pt-12">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="section-label">Patient Clarifications</span>
              <h2 className="section-title">Condition Assessment FAQs</h2>
            </div>
            <FAQAccordion faqs={FAQS.conditions} title="" />
          </div>
        </div>
      </section>
    </>
  )
}
