import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { CTAButton } from '@/components/ui/CTAButton'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react'
import { getConditionBySlug } from '@/data/conditions'
import { SERVICES } from '@/data/services'
import { FAQS } from '@/data/faqs'

const condition = getConditionBySlug('joint-pain')!

export const metadata: Metadata = {
  title: condition.metaTitle,
  description: condition.metaDescription,
}

export default function JointPainConditionPage() {
  const relatedServicesData = SERVICES.filter((s) =>
    condition.relatedServices.includes(s.slug)
  )

  return (
    <>
      <PageHero
        title={condition.title}
        subtitle={condition.description}
        tag={condition.shortTitle}
        breadcrumbItems={[
          { name: 'Conditions', url: '/conditions' },
          { name: condition.shortTitle, url: `/conditions/${condition.slug}` },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-custom">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#2E2A26]">Common Symptoms</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {condition.symptoms.map((sym, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF9F7] border border-[#E8E4DF] text-xs text-[#4A4744]">
                      <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#2E2A26]">How Physiotherapy May Help</h2>
                <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed">
                  {condition.howPhysioHelps}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#2E2A26]">Treatment Approach for Arthritis & Joint Pain</h2>
                <ul className="space-y-2 text-xs sm:text-sm text-[#4A4744]">
                  {condition.treatmentApproach.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#D97B4F] shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 p-6 bg-amber-50/60 border border-amber-200 rounded-xl">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
                  <span>When to Seek Help</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-900">
                  {condition.whenToSeekHelp.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#E8E4DF]">
                <h2 className="text-xl font-bold text-[#2E2A26]">Related Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedServicesData.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="p-3 rounded-lg border border-[#E8E4DF] hover:border-[#D97B4F] text-xs font-semibold text-[#2E2A26] hover:text-[#D97B4F] transition-colors flex items-center justify-between"
                    >
                      <span>{s.shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8E4DF]">
                <FAQAccordion faqs={FAQS.services} title="Joint Pain FAQs" />
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#FAF9F7] rounded-2xl p-6 border border-[#E8E4DF] space-y-4 sticky top-24">
                <h3 className="text-base font-bold text-[#2E2A26]">Book Joint Pain Assessment</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Consult senior physical therapy specialists for joint arthritis management & strengthening protocols.
                </p>
                <div className="space-y-2">
                  <CTAButton variant="primary" className="w-full">
                    Book Appointment
                  </CTAButton>
                  <CTAButton variant="whatsapp" className="w-full justify-center">
                    WhatsApp Inquiry
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
