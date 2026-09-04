import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CTAButton } from '@/components/ui/CTAButton'
import { LocalBusinessSchema } from '@/components/schema/JsonLd'
import { MapPin, Clock, ExternalLink } from 'lucide-react'
import { FaPhoneAlt } from 'react-icons/fa'
import { BRANCHES, CONTACT } from '@/data/clinic'
import { SERVICES } from '@/data/services'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { FAQS } from '@/data/faqs'

const branch = BRANCHES.bhaniyawala

export const metadata: Metadata = {
  title: `Physiotherapist in Bhaniyawala Dehradun | Branch Clinic`,
  description: `Physiotherapy clinic at Rama Market, Thano Chowk, Bhaniyawala, Dehradun. Orthopedic, neuro & sports rehabilitation. Call ${CONTACT.phone}.`,
}

export default function BhaniyawalaLocationPage() {
  return (
    <>
      <LocalBusinessSchema branch="bhaniyawala" />
      <Breadcrumb
        items={[
          { name: 'Locations', url: '/locations' },
          { name: branch.name, url: `/locations/${branch.slug}` },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="max-w-4xl space-y-4 mb-12">
            <span className="section-label">Branch Clinic</span>
            <h1 className="section-title">
              Physiotherapy Clinic at Bhaniyawala, Dehradun
            </h1>
            <p className="text-base text-[#4A4744] leading-relaxed">
              Our Bhaniyawala branch is located at Rama Market, Thano Chowk, opposite Ranjit Singh Marg, providing accessible clinical care for residents in and around Bhaniyawala.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-[#FAF9F7] rounded-2xl p-6 border border-[#E8E4DF] space-y-4 shadow-sm">
                <h2 className="text-lg font-bold text-[#2E2A26]">Clinic Details & Contact</h2>
                <div className="space-y-2.5 text-xs text-[#4A4744]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#D97B4F] shrink-0 mt-0.5" />
                    <span><strong>Address:</strong> {branch.fullAddress}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FaPhoneAlt className="w-3.5 h-3.5 text-[#D97B4F] shrink-0" />
                    <span><strong>Phone:</strong> {CONTACT.phone}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#D97B4F] shrink-0 mt-0.5" />
                    <span><strong>Operating Hours:</strong> Mon-Sat 9AM-10PM | Sun 10AM-6PM</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2 px-4 text-xs inline-flex items-center gap-2"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#2E2A26]">Services Available at Bhaniyawala Branch</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="p-3 rounded-lg border border-[#E8E4DF] hover:border-[#D97B4F] text-xs font-semibold text-[#2E2A26] hover:text-[#D97B4F] transition-colors"
                    >
                      {s.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-[#2E2A26]">Nearby Areas Served:</h2>
                <div className="flex flex-wrap gap-2">
                  {branch.areas.map((area) => (
                    <span key={area} className="tag text-xs py-1 px-3">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#E8E4DF]">
                <h2 className="text-lg font-bold text-[#2E2A26]">Branch Map Location</h2>
                <div className="rounded-2xl overflow-hidden border border-[#E8E4DF] shadow-md h-80 w-full">
                  <iframe
                    title="Bhaniyawala Clinic Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.0000!2d78.148636!3d30.186417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDExJzExLjEiTiA3OMKwMDgnNTUuMSJF!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8E4DF]">
                <FAQAccordion faqs={FAQS.contact} title="Bhaniyawala Branch FAQs" />
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#FAF9F7] rounded-2xl p-6 border border-[#E8E4DF] space-y-4 sticky top-24">
                <h3 className="text-base font-bold text-[#2E2A26]">Book Session at Bhaniyawala</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Schedule an appointment at our Bhaniyawala clinic or inquire about local home visits.
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
