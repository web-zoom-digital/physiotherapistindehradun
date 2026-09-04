import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTAButton } from '@/components/ui/CTAButton'
import { ExternalLink } from 'lucide-react'
import { PersonSchema } from '@/components/schema/JsonLd'
import { TEAM } from '@/data/team'
import { FAQS } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Our Specialist Physiotherapists in Dehradun | Team Credentials',
  description:
    'Meet the verified team of MPT physiotherapists in Dehradun. Specialists in orthopedic, neurological, sports and pediatric rehabilitation.',
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Meet Our Specialist Physiotherapists in Dehradun"
        subtitle="Our team consists of registered, Master of Physiotherapy (MPT) qualified clinicians with verified experience across orthopedic, neurological, sports and pediatric rehabilitation."
        tag="Qualified Clinical Team"
        breadcrumbItems={[{ name: 'Our Team', url: '/team' }]}
      />

      {TEAM.map((doctor) => (
        <PersonSchema
          key={doctor.slug}
          name={doctor.name}
          jobTitle={doctor.title}
          qualification={doctor.qualification}
          specialization={doctor.specialization}
          description={doctor.bio}
          imageUrl={doctor.imageUrl}
        />
      ))}

      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="space-y-12 mb-16">
            {TEAM.map((doctor, idx) => (
              <div
                key={doctor.slug}
                className="card p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-4">
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-100 border border-[#E8E4DF] shadow-sm">
                    <img
                      src={doctor.imageUrl}
                      alt={`${doctor.name} - ${doctor.title}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="section-label mb-0">
                        {doctor.specialization}
                      </span>
                      <h2 className="text-2xl font-bold text-[#2E2A26] mt-0.5">{doctor.name}</h2>
                      <p className="text-xs font-semibold text-gray-500">{doctor.qualification} • {doctor.experience} clinical experience</p>
                    </div>

                    {doctor.linkedinUrl && (
                      <a
                        href={doctor.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#D97B4F] hover:text-[#B85E37] flex items-center gap-1 font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>LinkedIn Profile</span>
                      </a>
                    )}
                  </div>

                  <p className="text-base text-[#4A4744] leading-relaxed">
                    {doctor.bio}
                  </p>

                  <div>
                    <h3 className="text-xs font-bold text-[#2E2A26] uppercase tracking-wider mb-2">
                      Key Clinical Focus Areas:
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.focus.map((item, fIdx) => (
                        <span key={fIdx} className="tag text-xs font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    <CTAButton variant="primary">Book Consultation with {doctor.name.split(' ')[1]}</CTAButton>
                    <CTAButton variant="whatsapp">WhatsApp Enquiry</CTAButton>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto border-t border-[#E8E4DF] pt-12">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="section-label">Patient Clarifications</span>
              <h2 className="section-title">Doctor Credentials & Consultation FAQs</h2>
            </div>
            <FAQAccordion faqs={FAQS.team} title="" />
          </div>
        </div>
      </section>
    </>
  )
}
