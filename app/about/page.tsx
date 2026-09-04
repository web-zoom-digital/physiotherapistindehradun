import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/sections/PageHero'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTAButton } from '@/components/ui/CTAButton'
import { CheckCircle2, ArrowRight, ShieldCheck, Activity, Bone, Brain, HeartHandshake, Stethoscope } from 'lucide-react'
import { CLINIC_NAME, FOUNDING_YEAR } from '@/data/clinic'
import { TEAM } from '@/data/team'
import { FAQS } from '@/data/faqs'
import { SERVICES } from '@/data/services'
import { CONDITIONS } from '@/data/conditions'
import { CounterStats } from '@/components/ui/CounterStats'

export const metadata: Metadata = {
  title: 'About Our Physiotherapy Clinic in Dehradun | Services, Conditions & E-E-A-T Guarantees',
  description:
    'Learn about our physiotherapy clinic in Dehradun. Explore our specialized services, conditions treated, MPT specialists, and evidence-based rehabilitation care.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Our Physiotherapy Practice in Dehradun"
        subtitle="Combining experienced Master of Physiotherapy (MPT) specialists, transparent clinical communication, and evidence-backed rehabilitation."
        tag={`Established ${FOUNDING_YEAR}`}
        breadcrumbItems={[{ name: 'About Us', url: '/about' }]}
      />

      <CounterStats />

      <section className="section-py bg-white">
        <div className="container-custom">
          {/* Patient-First Philosophy + Realistic DSLR Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-4">
              <span className="section-label">Patient-Centered Care</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#2E2A26] leading-tight">
                Our Patient-First Rehabilitation Philosophy
              </h2>
              <p className="text-base text-[#4A4744] leading-relaxed">
                At {CLINIC_NAME}, our practice is built on the core belief that physical rehabilitation should always prioritize the individual patient&apos;s specific needs, daily routines and functional recovery goals.
              </p>
              <p className="text-base text-[#4A4744] leading-relaxed">
                We avoid generic one-size-fits-all routines. Instead, every patient undergoes a thorough clinical evaluation by a qualified Master of Physiotherapy (MPT) clinician. We examine posture, movement quality, joint mobility and muscle strength to pinpoint the factors contributing to pain or movement restriction.
              </p>
              <p className="text-base text-[#4A4744] leading-relaxed">
                Our treatments blend hands-on manual therapy, targeted therapeutic exercise, state-of-the-art electrotherapy modalities and patient education to support long-term recovery and self-management.
              </p>
            </div>

            {/* Realistic DSLR Photo of Clinic & Practice (Replaces the plain text box) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E4DF] group">
                <Image
                  src="/images/about-clinical-standards.jpg"
                  alt="Realistic DSLR photo of qualified physiotherapists conducting patient knee and joint evaluation in Dehradun clinic"
                  width={800}
                  height={600}
                  className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 bg-[#D97B4F] text-white text-xs font-semibold px-3 py-1 rounded-full w-max mb-2 shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Evidence-Based Clinical Practice</span>
                  </div>
                  <h3 className="text-lg font-bold">Comprehensive Rehabilitation &amp; Diagnostic Excellence</h3>
                  <p className="text-xs text-gray-200 mt-1">
                    Hands-on manual therapy, evidence-based physical assessment &amp; patient education in Dehradun.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Standards & E-E-A-T Guarantees Strip */}
          <div className="bg-[#FAF9F7] rounded-2xl p-8 border border-[#E8E4DF] mb-16 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="section-label">Our Commitment</span>
              <h3 className="text-xl font-bold text-[#2E2A26]">Clinical Standards &amp; E-E-A-T Guarantees</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-5 rounded-xl border border-[#E8E4DF] space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[#2E2A26] text-sm">Qualified Practitioners</h4>
                <p className="text-xs text-[#4A4744] leading-relaxed">
                  All consultations &amp; treatment plans are led by registered MPT &amp; BPT specialists.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E8E4DF] space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[#2E2A26] text-sm">Evidence-Based Methods</h4>
                <p className="text-xs text-[#4A4744] leading-relaxed">
                  Clinical protocols strictly aligned with international physical therapy research.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E8E4DF] space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[#2E2A26] text-sm">Hygiene &amp; Safety</h4>
                <p className="text-xs text-[#4A4744] leading-relaxed">
                  Equipment and therapy spaces disinfected per medical hygiene standards.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#E8E4DF] space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[#2E2A26] text-sm">No Exaggerated Claims</h4>
                <p className="text-xs text-[#4A4744] leading-relaxed">
                  Transparent expectations without promising false instant cures.
                </p>
              </div>
            </div>
          </div>

          {/* Core Services Section */}
          <div className="pt-8 border-t border-gray-100 mb-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="section-label">Our Specializations</span>
              <h2 className="section-title">Specialized Physiotherapy Services</h2>
              <p className="text-base text-[#4A4744] leading-relaxed mt-1">
                We provide multi-speciality rehabilitation tailored to orthopedic, neurological, pediatric, and athletic needs across Dehradun.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((service) => (
                <div key={service.slug} className="card p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                      {service.slug.includes('ortho') ? <Bone className="w-5 h-5" /> : service.slug.includes('neuro') ? <Brain className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
                    </div>
                    <h3 className="text-base font-semibold text-[#2E2A26]">{service.shortTitle}</h3>
                    <p className="text-xs text-[#4A4744] line-clamp-3 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.conditions.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="text-[10px] bg-[#FAF9F7] border border-[#E8E4DF] text-[#4A4744] px-2 py-0.5 rounded-md">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 mt-2 border-t border-gray-100">
                    <Link href={`/services/${service.slug}`} className="inline-flex items-center text-xs font-bold text-[#D97B4F] hover:underline gap-1">
                      Explore Service Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/services" className="btn-secondary py-2.5 px-6 text-sm font-medium">
                View All {SERVICES.length} Specialized Services
              </Link>
            </div>
          </div>

          {/* Conditions Treated Section */}
          <div className="pt-8 border-t border-gray-100 mb-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="section-label">Conditions We Treat</span>
              <h2 className="section-title">Common Conditions We Rehabilitate</h2>
              <p className="text-base text-[#4A4744] leading-relaxed mt-1">
                From acute sports injuries and back pain to post-stroke recovery and joint stiffness, our MPT doctors design target recovery plans.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CONDITIONS.map((cond) => (
                <div key={cond.slug} className="card p-6 flex flex-col justify-between bg-white border border-[#E8E4DF] hover:border-[#D97B4F]/40 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                      <h3 className="text-base font-semibold text-[#2E2A26]">{cond.shortTitle}</h3>
                    </div>
                    <p className="text-xs text-[#4A4744] line-clamp-3 leading-relaxed">{cond.description}</p>
                    <div className="pt-1">
                      <span className="text-[11px] font-semibold text-gray-500">Common Symptoms:</span>
                      <ul className="mt-1 space-y-1">
                        {cond.symptoms.slice(0, 2).map((symptom, sIdx) => (
                          <li key={sIdx} className="text-xs text-[#4A4744] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D97B4F]/60"></span>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4 mt-2 border-t border-gray-100">
                    <Link href={`/conditions/${cond.slug}`} className="inline-flex items-center text-xs font-bold text-[#D97B4F] hover:underline gap-1">
                      Read Condition Care Plan <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/conditions" className="btn-secondary py-2.5 px-6 text-sm font-medium">
                Explore All Conditions Treated
              </Link>
            </div>
          </div>

          {/* Team Expertise Overview */}
          <div className="pt-8 border-t border-gray-100">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="section-label">Clinical Expertise</span>
              <h2 className="section-title">Meet Our Specialist Clinical Team</h2>
              <p className="text-base text-[#4A4744] leading-relaxed mt-1">
                Our physiotherapists hold specialist MPT qualifications across Orthopedics, Neurology, Pediatrics and Sports Rehabilitation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEAM.slice(0, 3).map((doctor) => (
                <div key={doctor.slug} className="card p-6 space-y-3">
                  <span className="text-xs font-bold text-[#D97B4F]">{doctor.qualification}</span>
                  <h3 className="text-lg font-semibold text-[#2E2A26]">{doctor.name}</h3>
                  <p className="text-xs text-gray-500 font-medium">{doctor.title}</p>
                  <p className="text-sm text-[#4A4744] line-clamp-3 leading-relaxed">{doctor.bio}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/team" className="btn-secondary py-2.5 px-6 text-base font-medium">
                View Full Team Bios &amp; Credentials
              </Link>
            </div>
          </div>

          {/* Location Accessibility in Dehradun */}
          <div className="mt-16 bg-[#F5DCC8]/60 rounded-2xl p-8 border border-[#E8E4DF] mb-16">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="section-title">Dehradun Branch Accessibility</h2>
              <p className="text-base text-[#4A4744] leading-relaxed">
                Our main clinic at <strong>Rajpur Road, Clock Tower (Chukkuwala)</strong> and our branch at <strong>Bhaniyawala</strong> are situated for easy accessibility from major residential and commercial sectors in Dehradun. Both locations feature comfortable treatment spaces and flexible operating hours.
              </p>
              <div className="pt-2 flex justify-center gap-4">
                <CTAButton variant="primary">Book Appointment</CTAButton>
                <CTAButton variant="phone">Call Us</CTAButton>
              </div>
            </div>
          </div>

          {/* About FAQs */}
          <div className="max-w-4xl mx-auto border-t border-[#E8E4DF] pt-12">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="section-label">Common Queries</span>
              <h2 className="section-title">About Our Clinic FAQs</h2>
            </div>
            <FAQAccordion faqs={FAQS.about} title="" />
          </div>
        </div>
      </section>
    </>
  )
}

