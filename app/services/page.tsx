import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTAButton } from '@/components/ui/CTAButton'
import { SERVICES } from '@/data/services'
import { FAQS } from '@/data/faqs'
import { ArrowRight, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Physiotherapy Services in Dehradun | Multi-Speciality Care',
  description:
    'Explore our comprehensive physiotherapy services in Dehradun. Orthopedic, neuro, sports, pediatric, women\'s health, post-surgery and home physiotherapy.',
}

export default function ServicesHubPage() {
  return (
    <>
      <PageHero
        title="Our Physiotherapy & Rehabilitation Services in Dehradun"
        subtitle="We provide structured, evidence-based physiotherapy across eight major clinical specialties. Select any service to view specialized treatment approaches."
        tag="Multi-Speciality Care"
        breadcrumbItems={[{ name: 'Services', url: '/services' }]}
      />

      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.slug} className="card p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <Activity className="w-6 h-6" />
                  </div>
                  <span className="section-label mb-0">
                    Specialist Category
                  </span>
                  <h2 className="text-xl font-semibold text-[#2E2A26]">
                    <Link href={`/services/${service.slug}`} className="hover:text-[#D97B4F] transition-colors">
                      {service.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-[#4A4744] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <h3 className="text-xs font-bold text-[#2E2A26] uppercase tracking-wider mb-2">
                      Key Conditions Addressed:
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {service.conditions.slice(0, 4).map((cond, idx) => (
                        <span key={idx} className="tag text-xs font-medium">
                          {cond}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E4DF] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="btn-primary py-2 px-4 text-sm font-medium"
                  >
                    <span>Explore Service Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#FAF9F7] rounded-2xl p-8 border border-[#E8E4DF] text-center space-y-4 mb-16">
            <h2 className="section-title">Unsure Which Service You Need?</h2>
            <p className="text-base text-[#4A4744] leading-relaxed max-w-xl mx-auto">
              Our clinical team will carry out a detailed evaluation during your initial appointment and guide you to the most appropriate rehabilitation pathway.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <CTAButton variant="primary">Book an Assessment</CTAButton>
              <CTAButton variant="whatsapp">Ask on WhatsApp</CTAButton>
            </div>
          </div>

          {/* Services FAQs */}
          <div className="max-w-4xl mx-auto border-t border-[#E8E4DF] pt-12">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="section-label">Patient Clarifications</span>
              <h2 className="section-title">Physiotherapy Services FAQs</h2>
            </div>
            <FAQAccordion faqs={FAQS.services} title="" />
          </div>
        </div>
      </section>
    </>
  )
}
