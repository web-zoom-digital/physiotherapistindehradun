import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { CONTACT, WHATSAPP_URL, BRANCHES } from '@/data/clinic'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#FDF2E9] via-[#FCDEC8] to-[#F9D6BD] pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D97B4F]/25 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#F5DCC8]/90 rounded-full blur-3xl -ml-32 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DCC8]/70 border border-[#D97B4F]/20 text-[#2E2A26] text-xs sm:text-sm font-semibold shadow-xs text-center">
                <ShieldCheck className="w-4 h-4 text-[#D97B4F] shrink-0" />
                <span>Evidence-Based Physiotherapy &amp; Rehabilitation · Dehradun</span>
              </div>
            </div>

            <h1 className="text-[1.85rem] sm:text-3xl md:text-[3rem] font-bold text-[#2E2A26] leading-[1.2] tracking-tight text-center lg:text-left">
              Physiotherapist in <span className="text-[#D97B4F]">Dehradun</span>
            </h1>

            <p className="text-base text-[#4A4744] leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              Personalized physiotherapy and rehabilitation care for back pain, knee pain, neurological conditions, sports injuries, pediatric challenges and post-surgery recovery. Convenient clinic consultations at Rajpur Road and Bhaniyawala, plus dedicated home visit physiotherapy.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/book-appointment"
                className="btn-primary shadow-md hover:shadow-lg justify-center text-center w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book a Consultation</span>
              </Link>

              <div className="flex gap-2.5 sm:gap-3 justify-center w-full sm:w-auto">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp flex-1 sm:flex-none justify-center text-center"
                >
                  <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="btn-secondary flex-1 sm:flex-none justify-center text-center"
                >
                  <FaPhoneAlt className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Verified Trust Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[#E8E4DF] text-xs sm:text-sm text-[#2E2A26]">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                <span>2 Verified Clinics in Dehradun</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                <span>MPT Specialist Doctors</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                <span>Home Visit Service Available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Healthcare Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/images/heroes/delhi-physio-hero.jpg"
                  alt="Professional Indian physiotherapist providing rehabilitation therapy in modern clinic"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A26]/40 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-[#E8E4DF] hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2E2A26]">Rajpur Rd & Bhaniyawala</p>
                  <p className="text-[11px] text-[#76726E]">Serving All Dehradun Areas</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-4 -right-4 bg-[#2E2A26] text-white rounded-xl p-3 shadow-lg hidden sm:flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D97B4F]" />
                <span className="text-xs font-semibold">Rajpur Road Main Clinic</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom Edge */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 30C360 60 1080 0 1440 30V60H0V30Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  )
}
