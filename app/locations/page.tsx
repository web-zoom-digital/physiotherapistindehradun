import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { MapPin, Clock, ExternalLink, ArrowRight } from 'lucide-react'
import { FaPhoneAlt } from 'react-icons/fa'
import { BRANCHES, CONTACT } from '@/data/clinic'
import { FAQS } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Clinic Location in Dehradun | Bhaniyawala Physiotherapy Center',
  description:
    'Physiotherapy clinic location in Dehradun. Address, directions, clinic hours and service areas for our Bhaniyawala center, plus dedicated home visit care.',
}

export default function LocationsHubPage() {
  return (
    <>
      <PageHero
        title="Physiotherapy Clinic Location in Dehradun"
        subtitle="Visit our modern clinic center in Bhaniyawala, Dehradun, serving surrounding residential areas with advanced clinic-based rehabilitation. Dedicated home visit physiotherapy is also provided across Dehradun."
        tag="Verified Clinic Location"
        breadcrumbItems={[{ name: 'Locations', url: '/locations' }]}
      />

      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Home Visit Physiotherapy Service */}
            <div className="card p-8 space-y-6">
              <div>
                <span className="section-label mb-0">Dehradun Home Care</span>
                <h2 className="text-2xl font-bold text-[#2E2A26] mt-1">Home Visit Physiotherapy</h2>
              </div>

              <div className="space-y-3 text-sm text-[#4A4744]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#D97B4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2E2A26] block mb-0.5">Coverage Area:</strong>
                    <span>Serving all residential areas across Dehradun</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-5 h-5 text-[#D97B4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2E2A26] block mb-0.5">Visit Availability:</strong>
                    <span>7 Days a Week (Pre-Booked Appointments)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <FaPhoneAlt className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <div>
                    <strong className="text-[#2E2A26] mr-2">Helpline:</strong>
                    <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-[#D97B4F]">
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#2E2A26] uppercase tracking-wider mb-2">Key Areas Covered:</h3>
                <div className="flex flex-wrap gap-1.5">
                  {['Bhaniyawala', 'Doiwala', 'Jolly Grant', 'Clock Tower', 'Dalanwala', 'Ballupur', 'GMS Road', 'Prem Nagar', 'Dharampur'].map((area) => (
                    <span key={area} className="tag text-xs font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E4DF] flex flex-wrap gap-3">
                <Link
                  href="/services/home-physiotherapy"
                  className="btn-primary py-2.5 px-5 text-sm font-medium"
                >
                  <span>Home Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/book-appointment"
                  className="btn-secondary py-2.5 px-4 text-sm font-medium"
                >
                  <span>Book Home Visit</span>
                </Link>
              </div>
            </div>

            {/* Bhaniyawala Branch */}
            <div className="card p-8 space-y-6">
              <div>
                <span className="section-label mb-0">Branch Clinic</span>
                <h2 className="text-2xl font-bold text-[#2E2A26] mt-1">{BRANCHES.bhaniyawala.name}</h2>
              </div>

              <div className="space-y-3 text-sm text-[#4A4744]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#D97B4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2E2A26] block mb-0.5">Address:</strong>
                    <span>{BRANCHES.bhaniyawala.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-5 h-5 text-[#D97B4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2E2A26] block mb-0.5">Opening Hours:</strong>
                    <span>Mon–Sat: 9:00 AM – 10:00 PM</span>
                    <span className="block">Sunday: 10:00 AM – 6:00 PM</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <FaPhoneAlt className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <div>
                    <strong className="text-[#2E2A26] mr-2">Helpline:</strong>
                    <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-[#D97B4F]">
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#2E2A26] uppercase tracking-wider mb-2">Nearby Areas Served:</h3>
                <div className="flex flex-wrap gap-1.5">
                  {BRANCHES.bhaniyawala.areas.map((area) => (
                    <span key={area} className="tag text-xs font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E4DF] flex flex-wrap gap-3">
                <Link
                  href={`/locations/${BRANCHES.bhaniyawala.slug}`}
                  className="btn-primary py-2.5 px-5 text-sm font-medium"
                >
                  <span>Branch Page & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={BRANCHES.bhaniyawala.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-2.5 px-4 text-sm font-medium"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Locations FAQs */}
          <div className="max-w-4xl mx-auto border-t border-[#E8E4DF] pt-12">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="section-label">Patient Clarifications</span>
              <h2 className="section-title">Location & Branch Access FAQs</h2>
            </div>
            <FAQAccordion faqs={FAQS.locations} title="" />
          </div>
        </div>
      </section>
    </>
  )
}
