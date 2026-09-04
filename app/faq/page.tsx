import React from 'react'
import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTAButton } from '@/components/ui/CTAButton'
import { FAQS } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Physiotherapy FAQ Dehradun | Frequently Asked Questions',
  description:
    'Find answers to common questions about physiotherapy in Dehradun. Fees, home visits, stroke rehabilitation, back pain treatment and clinic details.',
}

export default function FAQPage() {
  const allFaqs = [
    ...FAQS.home,
    ...FAQS.services,
    ...FAQS.backPain,
    ...FAQS.neuro,
    ...FAQS.sports,
    ...FAQS.contact,
  ]

  return (
    <>
      <Breadcrumb items={[{ name: 'FAQ', url: '/faq' }]} />

      <section className="section-py bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <span className="section-label">Common Questions</span>
            <h1 className="section-title">
              Frequently Asked Questions About Physiotherapy in Dehradun
            </h1>
            <p className="text-sm text-[#4A4744] leading-relaxed max-w-2xl mx-auto">
              Clear, straightforward answers to help you understand our clinical services, appointment process, fees and home visit availability.
            </p>
          </div>

          <FAQAccordion faqs={allFaqs} title="" />

          <div className="mt-16 p-8 bg-[#FAF9F7] rounded-2xl border border-[#E8E4DF] text-center space-y-4">
            <h2 className="text-lg font-bold text-[#2E2A26]">Have a Question Not Listed Here?</h2>
            <p className="text-xs text-[#4A4744] max-w-lg mx-auto">
              Our clinical coordinator is available to answer any specific questions about your condition or appointment options.
            </p>
            <div className="flex justify-center gap-3">
              <CTAButton variant="primary">Submit Enquiry</CTAButton>
              <CTAButton variant="whatsapp">WhatsApp Support</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
