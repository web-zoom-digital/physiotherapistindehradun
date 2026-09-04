import React from 'react'
import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { AppointmentForm } from '@/components/sections/AppointmentForm'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { CONTACT, BRANCHES, HOURS } from '@/data/clinic'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { FAQS } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Contact Our Physiotherapy Clinic in Dehradun | Address & Phone',
  description:
    'Contact details for our physiotherapy clinic in Dehradun. Addresses for Rajpur Road and Bhaniyawala branches, phone, email, Google Maps directions and enquiry form.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Our Physiotherapy Clinics in Dehradun"
        subtitle="Have questions about our physiotherapy services, consultation fees, or home visit availability? Reach out to our team by phone, WhatsApp, or via the contact form."
        tag="Get in Touch"
        breadcrumbItems={[{ name: 'Contact Us', url: '/contact' }]}
      />

      <section className="section-py bg-white">
        <div className="container-custom">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Rajpur Road Branch */}
              <div className="bg-[#FAF9F7] rounded-2xl p-6 border border-[#E8E4DF] space-y-3 shadow-sm">
                <span className="text-xs font-bold text-[#D97B4F] uppercase tracking-wider block">Main Clinic</span>
                <h2 className="text-lg font-bold text-[#2E2A26]">{BRANCHES.rajpurRoad.name}</h2>
                <div className="space-y-2 text-xs text-[#4A4744]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#D97B4F] shrink-0 mt-0.5" />
                    <span>{BRANCHES.rajpurRoad.fullAddress}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#D97B4F] shrink-0" />
                    <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-[#D97B4F]">
                      {CONTACT.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#D97B4F] shrink-0" />
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-[#D97B4F]">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BRANCHES.rajpurRoad.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2 px-4 text-xs w-full text-center justify-center"
                  >
                    <span>Google Maps Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Bhaniyawala Branch */}
              <div className="bg-[#FAF9F7] rounded-2xl p-6 border border-[#E8E4DF] space-y-3 shadow-sm">
                <span className="text-xs font-bold text-[#D97B4F] uppercase tracking-wider block">Branch Clinic</span>
                <h2 className="text-lg font-bold text-[#2E2A26]">{BRANCHES.bhaniyawala.name}</h2>
                <div className="space-y-2 text-xs text-[#4A4744]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#D97B4F] shrink-0 mt-0.5" />
                    <span>{BRANCHES.bhaniyawala.fullAddress}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#D97B4F] shrink-0" />
                    <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-[#D97B4F]">
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BRANCHES.bhaniyawala.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2 px-4 text-xs w-full text-center justify-center"
                  >
                    <span>Google Maps Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Clinic Timings */}
              <div className="bg-white rounded-2xl p-6 border border-[#E8E4DF] space-y-3">
                <div className="flex items-center gap-2 text-[#2E2A26]">
                  <Clock className="w-5 h-5 text-[#D97B4F]" />
                  <h3 className="text-sm font-bold">Clinic Operating Hours</h3>
                </div>
                <div className="space-y-1 text-xs text-gray-600">
                  <p><strong>Monday – Saturday:</strong> 9:00 AM – 10:00 PM</p>
                  <p><strong>Sunday:</strong> 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Appointment Form Column */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>
          </div>

          {/* Embedded Google Maps */}
          <div className="space-y-4 mb-16">
            <h2 className="text-xl font-bold text-[#2E2A26]">Google Map Directions</h2>
            <div className="rounded-2xl overflow-hidden border border-[#E8E4DF] shadow-md h-96 w-full">
              <iframe
                title="Clinic Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.8967!2d78.0322!3d30.3255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c546b4129b%3A0x2899478f77395ef3!2sClock%20Tower%2C%20Dehradun!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact FAQs */}
          <div className="max-w-4xl mx-auto">
            <FAQAccordion faqs={FAQS.contact} title="Contact & Location FAQs" />
          </div>
        </div>
      </section>
    </>
  )
}
