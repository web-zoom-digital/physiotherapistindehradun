import React from 'react'
import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { AppointmentForm } from '@/components/sections/AppointmentForm'
import { ShieldCheck } from 'lucide-react'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { CONTACT, WHATSAPP_URL } from '@/data/clinic'
import { FAQS } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Book a Physiotherapy Appointment in Dehradun | Online Booking',
  description:
    'Schedule a consultation with a qualified physiotherapist in Dehradun. Choose clinic consultation at Bhaniyawala or request home physiotherapy across Dehradun.',
}

export default function BookAppointmentPage() {
  return (
    <>
      <PageHero
        title="Book a Physiotherapy Appointment in Dehradun"
        subtitle="Schedule your clinical consultation at our Bhaniyawala center, or request home visit physiotherapy care."
        tag="Online Appointment Booking"
        breadcrumbItems={[{ name: 'Book Appointment', url: '/book-appointment' }]}
      />

      <section className="section-py bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
            <div className="md:col-span-8">
              <AppointmentForm />
            </div>

            <div className="md:col-span-4 space-y-4">
              <div className="bg-[#FAF9F7] rounded-2xl p-6 border border-[#E8E4DF] space-y-3">
                <h3 className="text-base font-semibold text-[#2E2A26]">Direct Phone & WhatsApp</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Prefer to speak with us right away? Call our main clinic line or send a message on WhatsApp.
                </p>
                <div className="pt-2 space-y-2">
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="btn-primary w-full py-2.5 text-sm font-medium text-center justify-center gap-2 flex items-center"
                  >
                    <FaPhoneAlt className="w-3.5 h-3.5" />
                    <span>Call {CONTACT.phone}</span>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full py-2.5 text-sm font-medium text-center justify-center gap-2 flex items-center"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E8E4DF] space-y-3">
                <div className="flex items-center gap-2 text-[#2E2A26]">
                  <ShieldCheck className="w-5 h-5 text-[#D97B4F]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider">Patient Privacy</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Your personal and health information is kept strictly confidential in accordance with medical ethics standards.
                </p>
              </div>
            </div>
          </div>

          {/* Appointment FAQs */}
          <div className="max-w-4xl mx-auto border-t border-[#E8E4DF] pt-12">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="section-label">Patient Clarifications</span>
              <h2 className="section-title">Appointment & Consultation FAQs</h2>
            </div>
            <FAQAccordion faqs={FAQS.appointment} title="" />
          </div>
        </div>
      </section>
    </>
  )
}
