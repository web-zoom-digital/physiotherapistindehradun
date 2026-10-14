import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Calendar,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Award,
  ArrowRight,
  Clock,
  Sparkles,
  HeartHandshake,
  Activity,
  Bone,
  Brain,
  Zap,
  Home as HomeIcon,
  Stethoscope,
  BookOpen,
  HeartPulse,
  Users,
  Target,
  Eye,
  FileText,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  Building2,
  Check,
} from 'lucide-react'
import { FaWhatsapp, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CounterStats } from '@/components/ui/CounterStats'
import { TestimonialSlider } from '@/components/sections/TestimonialSlider'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { AboutPageSchema, PersonSchema } from '@/components/schema/JsonLd'
import {
  CLINIC_NAME,
  SITE_URL,
  CONTACT,
  BRANCHES,
  HOURS,
  FOUNDING_YEAR,
  WHATSAPP_URL,
} from '@/data/clinic'
import { TEAM } from '@/data/team'
import { SERVICES } from '@/data/services'
import { CONDITIONS } from '@/data/conditions'
import { FAQS } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'About Us | RonEx Physiotherapy & Rehabilitation Clinic in Dehradun',
  description:
    'Discover RonEx Physiotherapy in Dehradun. Meet our qualified team of Master of Physiotherapy (MPT) specialists in Orthopedic, Neuro, Pediatric, and Sports care. Clinics at Rajpur Road & Bhaniyawala.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About RonEx Physiotherapy Clinic in Dehradun | MPT Specialists',
    description:
      'Learn about our patient-first philosophy, clinical standards, and qualified MPT physiotherapists in Dehradun. 2 clinics at Rajpur Road and Bhaniyawala, plus dedicated home care.',
    url: `${SITE_URL}/about`,
    type: 'website',
  },
}

export default function AboutPage() {
  const breadcrumbItems = [{ name: 'About Us', url: '/about' }]

  return (
    <>
      <AboutPageSchema />

      {/* Structured data for verified clinicians */}
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

      {/* =========================================================================
          SECTION 1: PREMIUM ABOUT HERO (Matching Homepage Aesthetics & Palette)
      ========================================================================= */}
      <section className="relative bg-gradient-to-br from-[#FDF2E9] via-[#FCDEC8] to-[#F9D6BD] pt-8 pb-20 md:pt-12 md:pb-28 overflow-hidden">
        {/* Subtle Ambient Decorative Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D97B4F]/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#F5DCC8]/90 rounded-full blur-3xl -ml-32 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/35 via-transparent to-transparent pointer-events-none" />

        <div className="container-custom relative z-10 space-y-6">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DCC8]/80 border border-[#D97B4F]/25 text-[#2E2A26] text-xs sm:text-sm font-semibold shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>About Our Clinical Practice · Established {FOUNDING_YEAR}</span>
                </div>
              </div>

              <h1 className="text-[1.85rem] sm:text-3xl md:text-[2.85rem] font-bold text-[#2E2A26] leading-[1.2] tracking-tight">
                Dedicated to Restoring Movement, Relieving Pain &amp; Empowering{' '}
                <span className="text-[#D97B4F]">Long-Term Mobility</span>
              </h1>

              <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At RonEx Physiotherapy, recovery is personal. Guided by experienced Master of
                Physiotherapy (MPT) clinicians, our evidence-informed practice combines hands-on
                manual therapy, modern electrotherapy modalities, and tailored movement retraining
                across our two Dehradun clinics and dedicated home visits.
              </p>

              {/* Action Buttons with Standardized 44-48px Touch Heights */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <Link
                  href="/book-appointment"
                  className="btn-primary min-h-[46px] shadow-md hover:shadow-lg justify-center text-center w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Book an Appointment</span>
                </Link>

                <Link
                  href="/services"
                  className="btn-secondary min-h-[46px] justify-center text-center w-full sm:w-auto gap-2"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex gap-2.5 sm:gap-3 justify-center w-full sm:w-auto">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp min-h-[46px] flex-1 sm:flex-none justify-center text-center"
                    aria-label="Contact clinic via WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="btn-secondary min-h-[46px] flex-1 sm:flex-none justify-center text-center"
                    aria-label="Call clinic directly"
                  >
                    <FaPhoneAlt className="w-4 h-4" />
                    <span>Call Helpline</span>
                  </a>
                </div>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[#E8E4DF] text-xs sm:text-sm text-[#2E2A26]">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>2 Physical Clinics in Dehradun</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>Specialist MPT Clinicians</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>Evidence-Based Protocols</span>
                </div>
              </div>
            </div>

            {/* Right Healthcare Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Image Frame with 4:3 Aspect Ratio */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group aspect-[4/3] w-full">
                  <Image
                    src="/images/about-clinical-standards.jpg"
                    alt="Qualified Indian physiotherapists conducting thorough knee and joint evaluation in modern clinic"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A26]/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Badge 1 (Bottom Left - Hidden on small mobile to avoid overflow) */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-[#E8E4DF] hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2E2A26]">Rajpur Rd &amp; Bhaniyawala</p>
                    <p className="text-[11px] text-[#76726E]">Serving All Dehradun Areas</p>
                  </div>
                </div>

                {/* Floating Badge 2 (Top Right - Hidden on small mobile to avoid overflow) */}
                <div className="absolute -top-4 -right-4 bg-[#2E2A26] text-white rounded-xl p-3 shadow-lg hidden sm:flex items-center gap-2 border border-white/20">
                  <ShieldCheck className="w-4 h-4 text-[#D97B4F]" />
                  <span className="text-xs font-semibold">Diagnostic &amp; Clinical Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Wave Bottom Divider */}
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30C360 60 1080 0 1440 30V60H0V30Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* =========================================================================
          TRUST & STATS STRIP (Dynamic Count-Up Animation)
      ========================================================================= */}
      <CounterStats />

      {/* =========================================================================
          SECTION 2: OUR STORY & PURPOSE (Heritage, Founding Principles & Growth)
      ========================================================================= */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="section-label">Our Heritage &amp; Purpose</span>
            <h2 className="section-title">Built on Clinical Excellence &amp; Patient Dignity</h2>
            <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed mt-2">
              How our practice grew from a clinical desire for individualized physical therapy into
              two dedicated rehabilitation centres serving patients across Dehradun.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Story Text & Milestones */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-center sm:text-left">
              <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed">
                Founded in {FOUNDING_YEAR} on Rajpur Road near Clock Tower in Dehradun,{' '}
                <strong>RonEx Physiotherapy</strong> was established with a singular mission: to
                move away from the rushed, assembly-line model where patients are attached to generic
                machines with minimal physical assessment.
              </p>
              <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed">
                We believe that pain is complex, personal, and multifaceted. Whether recovering from
                a complex spinal herniation, knee replacement surgery, neurological stroke, or sports
                injury, every individual requires an accurate diagnostic evaluation by a specialized
                Master of Physiotherapy (MPT) clinician before any treatment commences.
              </p>
              <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed">
                As patient demand grew, we established our second branch at Bhaniyawala to provide
                accessible clinical rehabilitation for residents near Jolly Grant, Thano Chowk, and
                Ranjit Singh Marg. Today, our multidisciplinary team provides in-clinic consultations
                as well as dedicated home visit physiotherapy for bedbound, elderly, and post-op
                individuals across Dehradun.
              </p>

              {/* 4 Milestones Cards in Exact 2-Column Mobile Grid */}
              <div className="pt-2 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#FAF9F7] p-3.5 sm:p-4 rounded-2xl border border-[#E8E4DF] text-center sm:text-left">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#D97B4F] block">
                    2018
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#2E2A26] block mt-0.5">
                    Founded in Dehradun
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#76726E] block mt-0.5">
                    Rajpur Road near Clock Tower
                  </span>
                </div>

                <div className="bg-[#FAF9F7] p-3.5 sm:p-4 rounded-2xl border border-[#E8E4DF] text-center sm:text-left">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#D97B4F] block">
                    2 Branches
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#2E2A26] block mt-0.5">
                    Physical Clinics
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#76726E] block mt-0.5">
                    Rajpur Rd &amp; Bhaniyawala
                  </span>
                </div>

                <div className="bg-[#FAF9F7] p-3.5 sm:p-4 rounded-2xl border border-[#E8E4DF] text-center sm:text-left">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#D97B4F] block">
                    10,000+
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#2E2A26] block mt-0.5">
                    Clinical Sessions
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#76726E] block mt-0.5">
                    Restoring mobility &amp; strength
                  </span>
                </div>

                <div className="bg-[#FAF9F7] p-3.5 sm:p-4 rounded-2xl border border-[#E8E4DF] text-center sm:text-left">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#D97B4F] block">
                    100%
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#2E2A26] block mt-0.5">
                    MPT Specialists
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#76726E] block mt-0.5">
                    Registered clinicians only
                  </span>
                </div>
              </div>
            </div>

            {/* Story Visual & Philosophy Quote Card */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E4DF] group aspect-[4/3] w-full">
                <Image
                  src="/images/services/orthopedic-1.jpg"
                  alt="Indian female physiotherapist evaluating a patient joint mobility in clinic"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white pointer-events-none">
                  <div className="flex items-center gap-2 bg-[#D97B4F] text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full w-max mb-2 shadow-sm">
                    <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Our Patient Promise</span>
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold leading-snug">
                    &ldquo;We treat the patient who has the condition, not just the scan on the
                    screen.&rdquo;
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-200 mt-1 line-clamp-2">
                    Hands-on manual therapy, evidence-informed exercise prescription, and empathetic
                    clinical care.
                  </p>
                </div>
              </div>

              {/* Verified Clinical Standard Tag */}
              <div className="bg-[#FAF9F7] rounded-xl p-3.5 sm:p-4 border border-[#E8E4DF] flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center shrink-0 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs text-[#4A4744] leading-relaxed">
                  <strong className="text-[#2E2A26] block text-xs sm:text-sm">
                    Clinical Standards &amp; Ethical Healthcare
                  </strong>
                  No unnecessary visits, no false guarantees, and transparent recovery milestones
                  measured at every stage.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MISSION, VISION & CORE VALUES (Exact 2-Col Mobile Grid)
      ========================================================================= */}
      <section className="section-py bg-[#FAF9F7] border-y border-[#E8E4DF]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="section-label">Our Guiding Compass</span>
            <h2 className="section-title">Mission, Vision &amp; Core Clinical Values</h2>
            <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed mt-2">
              The fundamental healthcare ethics and professional standards that govern every
              consultation, manual therapy session, and rehabilitation program at our clinics.
            </p>
          </div>

          {/* Mission & Vision Dual Cards in 2-Column Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-10">
            <div className="bg-white rounded-2xl p-4 sm:p-7 border border-[#E8E4DF] shadow-xs space-y-2 sm:space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-[#2E2A26]">Our Mission</h3>
                <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed line-clamp-4 sm:line-clamp-none">
                  To deliver accessible, evidence-informed physiotherapy and physical rehabilitation
                  that restores functional movement, alleviates pain, and educates every patient for
                  sustainable long-term independence.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-7 border border-[#E8E4DF] shadow-xs space-y-2 sm:space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-[#2E2A26]">Our Vision</h3>
                <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed line-clamp-4 sm:line-clamp-none">
                  To stand as Dehradun and Uttarakhand&apos;s most trusted physical rehabilitation
                  centre, celebrated for clinical rigor, specialized MPT-led care, and
                  uncompromising integrity across all physical therapy disciplines.
                </p>
              </div>
            </div>
          </div>

          {/* 6 Core Value Cards in Exact 2-Column Mobile Grid, 3-Col Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {/* Value 1 */}
            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 hover:border-[#D97B4F]/50 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  1. Patient-Centred Care
                </h4>
                <p className="text-[11px] sm:text-sm text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Customized treatment programs that integrate seamlessly with your daily routine,
                  occupational ergonomics, and functional goals.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 hover:border-[#D97B4F]/50 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  2. Evidence-Informed Methods
                </h4>
                <p className="text-[11px] sm:text-sm text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Rooted in proven orthopedic, neurological, and sports biomechanics research,
                  avoiding unsupported practices.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 hover:border-[#D97B4F]/50 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  3. Compassion &amp; Respect
                </h4>
                <p className="text-[11px] sm:text-sm text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Pain causes emotional and physical distress. We provide a supportive, empathetic,
                  and respectful healing environment.
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 hover:border-[#D97B4F]/50 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <Bone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  4. Hands-On Manual Therapy
                </h4>
                <p className="text-[11px] sm:text-sm text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  We emphasize skilled joint mobilization, myofascial release, and passive stretching
                  over simply attaching machines.
                </p>
              </div>
            </div>

            {/* Value 5 */}
            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 hover:border-[#D97B4F]/50 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  5. Ethical Transparency
                </h4>
                <p className="text-[11px] sm:text-sm text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Clear explanations of your diagnosis and realistic timelines, without promising
                  unrealistic instant cures.
                </p>
              </div>
            </div>

            {/* Value 6 */}
            <div className="card p-3.5 sm:p-6 space-y-2 sm:space-y-3 hover:border-[#D97B4F]/50 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  6. Education for Self-Care
                </h4>
                <p className="text-[11px] sm:text-sm text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Empowering you with ergonomic habits and home exercise routines to protect your
                  mobility long after discharge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR APPROACH TO PATIENT CARE (Exact 2-Col Mobile Grid)
      ========================================================================= */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="section-label">Clinical Process</span>
            <h2 className="section-title">Our Structured 5-Step Approach to Recovery</h2>
            <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed mt-2">
              From your initial diagnostic evaluation to functional milestone re-assessments and
              graduating to independent mobility.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 relative">
            {/* Step 1 */}
            <div className="card p-3.5 sm:p-6 space-y-2.5 sm:space-y-4 relative flex flex-col justify-between hover:shadow-md transition-shadow rounded-2xl">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-[#D97B4F]/30">01</span>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  1. Comprehensive Assessment
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Detailed examination of posture, joint mobility, neurological reflexes, and pain
                  trigger points to identify root causes.
                </p>
              </div>
              <div className="pt-2 sm:pt-3 border-t border-[#E8E4DF] text-[10px] sm:text-[11px] font-semibold text-[#D97B4F]">
                45–60 Min Deep Exam
              </div>
            </div>

            {/* Step 2 */}
            <div className="card p-3.5 sm:p-6 space-y-2.5 sm:space-y-4 relative flex flex-col justify-between hover:shadow-md transition-shadow rounded-2xl">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-[#D97B4F]/30">02</span>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  2. Goal Setting &amp; Mapping
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Defining meaningful milestones—whether sleeping pain-free, climbing stairs, or
                  returning to sports.
                </p>
              </div>
              <div className="pt-2 sm:pt-3 border-t border-[#E8E4DF] text-[10px] sm:text-[11px] font-semibold text-[#D97B4F]">
                Patient-Centred Goals
              </div>
            </div>

            {/* Step 3 */}
            <div className="card p-3.5 sm:p-6 space-y-2.5 sm:space-y-4 relative flex flex-col justify-between hover:shadow-md transition-shadow rounded-2xl">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-[#D97B4F]/30">03</span>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  3. Individualized Care Plan
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Tailored mix of manual therapy, electrotherapy (IFT, ultrasound, traction), and
                  targeted exercise progressions.
                </p>
              </div>
              <div className="pt-2 sm:pt-3 border-t border-[#E8E4DF] text-[10px] sm:text-[11px] font-semibold text-[#D97B4F]">
                Multi-Modality Plan
              </div>
            </div>

            {/* Step 4 */}
            <div className="card p-3.5 sm:p-6 space-y-2.5 sm:space-y-4 relative flex flex-col justify-between hover:shadow-md transition-shadow rounded-2xl">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-[#D97B4F]/30">04</span>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  4. Supervised Rehabilitation
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Direct one-on-one sessions guiding you through joint mobilizations and muscle
                  re-education at your comfort level.
                </p>
              </div>
              <div className="pt-2 sm:pt-3 border-t border-[#E8E4DF] text-[10px] sm:text-[11px] font-semibold text-[#D97B4F]">
                1-on-1 Hands-On Care
              </div>
            </div>

            {/* Step 5 (Spans 2 cols on mobile for balanced grid alignment) */}
            <div className="card p-3.5 sm:p-6 space-y-2.5 sm:space-y-4 relative flex flex-col justify-between hover:shadow-md transition-shadow rounded-2xl col-span-2 sm:col-span-1 lg:col-span-1">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-[#D97B4F]/30">05</span>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#2E2A26] leading-snug">
                  5. Milestone Re-Testing
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Continuous re-evaluations measuring range of motion and strength gains, graduating
                  you into a customized home maintenance routine.
                </p>
              </div>
              <div className="pt-2 sm:pt-3 border-t border-[#E8E4DF] text-[10px] sm:text-[11px] font-semibold text-[#D97B4F]">
                Measurable Recovery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: MEET OUR PHYSIOTHERAPY TEAM (2-Column Mobile Grid via TeamGrid)
      ========================================================================= */}
      <section className="section-py bg-[#FAF9F7] border-y border-[#E8E4DF]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="section-label">Clinical Leadership</span>
            <h2 className="section-title">Meet Our Specialist Physiotherapy Team</h2>
            <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed mt-2">
              Our clinicians hold recognized Master of Physiotherapy (MPT) post-graduate degrees
              across Orthopedics, Neurology, Pediatrics, and Sports Medicine.
            </p>
          </div>

          {/* Render TeamGrid with Exact 2-Column Mobile Grid and Local 4:5 Portraits */}
          <TeamGrid doctors={TEAM} />

          <div className="text-center pt-8 sm:pt-10">
            <Link href="/team" className="btn-secondary py-3 px-7 text-sm font-semibold gap-2">
              <span>View All Clinician Biographies &amp; Registrations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHY PATIENTS CHOOSE US (Exact 2-Col Mobile Grid, 3-Col Desktop)
      ========================================================================= */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="section-label">Genuine Differentiators</span>
            <h2 className="section-title">Why Patients Across Dehradun Trust Our Care</h2>
            <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed mt-2">
              We stand apart through specialist MPT clinical leadership, dedicated one-on-one
              time, and measurable rehabilitation outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {/* Diff 1 */}
            <div className="card p-3.5 sm:p-7 space-y-2 sm:space-y-3.5 hover:border-[#D97B4F]/40 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs sm:text-lg font-bold text-[#2E2A26] leading-snug">
                  1. Post-Graduate MPT Clinicians
                </h3>
                <p className="text-[11px] sm:text-sm text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Your consultation and therapy plan are led directly by specialized Master of
                  Physiotherapy (MPT) clinicians.
                </p>
              </div>
            </div>

            {/* Diff 2 */}
            <div className="card p-3.5 sm:p-7 space-y-2 sm:space-y-3.5 hover:border-[#D97B4F]/40 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs sm:text-lg font-bold text-[#2E2A26] leading-snug">
                  2. Dedicated 1-on-1 Sessions
                </h3>
                <p className="text-[11px] sm:text-sm text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  We schedule adequate time for thorough physical examination, skilled manual
                  mobilization, and supervised exercise.
                </p>
              </div>
            </div>

            {/* Diff 3 */}
            <div className="card p-3.5 sm:p-7 space-y-2 sm:space-y-3.5 hover:border-[#D97B4F]/40 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs sm:text-lg font-bold text-[#2E2A26] leading-snug">
                  3. Advanced Modalities
                </h3>
                <p className="text-[11px] sm:text-sm text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Modern electrotherapy (IFT, ultrasound, TENS, cervical/lumbar traction) integrated
                  with active movement retraining.
                </p>
              </div>
            </div>

            {/* Diff 4 */}
            <div className="card p-3.5 sm:p-7 space-y-2 sm:space-y-3.5 hover:border-[#D97B4F]/40 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs sm:text-lg font-bold text-[#2E2A26] leading-snug">
                  4. 2 Accessible Clinics
                </h3>
                <p className="text-[11px] sm:text-sm text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Central clinic at Rajpur Road near Clock Tower and spacious branch at Bhaniyawala
                  serving outer corridors.
                </p>
              </div>
            </div>

            {/* Diff 5 */}
            <div className="card p-3.5 sm:p-7 space-y-2 sm:space-y-3.5 hover:border-[#D97B4F]/40 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs sm:text-lg font-bold text-[#2E2A26] leading-snug">
                  5. Dedicated Home Visit Care
                </h3>
                <p className="text-[11px] sm:text-sm text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Bringing specialized therapy tables and portable electrotherapy directly to
                  elderly, post-op, and stroke patients.
                </p>
              </div>
            </div>

            {/* Diff 6 */}
            <div className="card p-3.5 sm:p-7 space-y-2 sm:space-y-3.5 hover:border-[#D97B4F]/40 transition-all hover:shadow-md flex flex-col justify-between rounded-2xl">
              <div className="space-y-2">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs sm:text-lg font-bold text-[#2E2A26] leading-snug">
                  6. Measurable Recovery Milestones
                </h3>
                <p className="text-[11px] sm:text-sm text-[#4A4744] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Tracking joint angles with goniometers and functional scales so you can measure
                  real mobility improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLINIC ENVIRONMENT & PATIENT CARE (Exact 2-Col Mobile Grid Gallery)
      ========================================================================= */}
      <section className="section-py bg-[#FAF9F7] border-y border-[#E8E4DF]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="section-label">Modern Infrastructure</span>
            <h2 className="section-title">Inside Our Dehradun Rehabilitation Clinics</h2>
            <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed mt-2">
              Hygienic, comfortable, and fully equipped spaces designed for focused manual therapy,
              advanced electrotherapy, and progressive movement training.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {/* Gallery Image 1 */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group border border-[#E8E4DF] bg-white aspect-[4/3] w-full">
              <Image
                src="/images/about-clinical-standards.jpg"
                alt="Comprehensive patient physical evaluation and diagnostic assessment in clinic"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 sm:p-4 text-white pointer-events-none">
                <span className="text-xs sm:text-sm font-bold block line-clamp-1">
                  Diagnostic Evaluation
                </span>
                <span className="text-[9px] sm:text-xs text-gray-200 line-clamp-1">
                  Comprehensive joint assessment
                </span>
              </div>
            </div>

            {/* Gallery Image 2 */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group border border-[#E8E4DF] bg-white aspect-[4/3] w-full">
              <Image
                src="/images/services/pain-management-1.jpg"
                alt="Modern electrotherapy and therapeutic ultrasound equipment for acute pain relief"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 sm:p-4 text-white pointer-events-none">
                <span className="text-xs sm:text-sm font-bold block line-clamp-1">
                  Electrotherapy Suite
                </span>
                <span className="text-[9px] sm:text-xs text-gray-200 line-clamp-1">
                  IFT, TENS &amp; ultrasound probe
                </span>
              </div>
            </div>

            {/* Gallery Image 3 */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group border border-[#E8E4DF] bg-white aspect-[4/3] w-full">
              <Image
                src="/images/conditions/stroke-rehabilitation-1.jpg"
                alt="Active neuro-rehabilitation gym bay with parallel walking bars for balance and gait training"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 sm:p-4 text-white pointer-events-none">
                <span className="text-xs sm:text-sm font-bold block line-clamp-1">
                  Gait &amp; Balance Gym
                </span>
                <span className="text-[9px] sm:text-xs text-gray-200 line-clamp-1">
                  Parallel bars &amp; neuro-rehab
                </span>
              </div>
            </div>

            {/* Gallery Image 4 */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group border border-[#E8E4DF] bg-white aspect-[4/3] w-full">
              <Image
                src="/images/heroes/delhi-physio-hero.jpg"
                alt="Private consultation and spinal therapy room in Dehradun clinic"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 sm:p-4 text-white pointer-events-none">
                <span className="text-xs sm:text-sm font-bold block line-clamp-1">
                  Consultation Suite
                </span>
                <span className="text-[9px] sm:text-xs text-gray-200 line-clamp-1">
                  Private treatment couches
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PATIENT TESTIMONIALS & TRUST SIGNALS (Verified Feedback)
      ========================================================================= */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="section-label">Verified Experiences</span>
            <h2 className="section-title">Patient Testimonials &amp; Trust Signals</h2>
            <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed mt-2">
              Authentic recovery journeys shared by patients treated at our Rajpur Road clinic,
              Bhaniyawala branch, and through our home visit rehabilitation program.
            </p>
          </div>

          <TestimonialSlider />

          <div className="text-center pt-8">
            <Link
              href="/testimonials"
              className="btn-secondary min-h-[46px] py-2.5 px-6 text-sm font-semibold inline-flex items-center gap-2"
            >
              <span>Explore All Verified Patient Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS (About Us Specific)
      ========================================================================= */}
      <section className="section-py bg-[#FAF9F7] border-t border-[#E8E4DF]">
        <div className="container-custom max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="section-label">Common Queries</span>
            <h2 className="section-title">Frequently Asked Questions About Our Clinic</h2>
            <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed mt-2">
              Clear, transparent answers about our clinical philosophy, qualifications, what to
              bring, clinic locations, and booking procedures.
            </p>
          </div>

          <FAQAccordion faqs={FAQS.about} title="" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: PREMIUM FINAL CTA (Conversion-Focused with Mobile Padding)
      ========================================================================= */}
      <section className="section-py bg-gradient-to-br from-[#2E2A26] to-[#1E1B18] text-white relative overflow-hidden pb-28 lg:pb-20">
        {/* Subtle Decorative Ambient Lighting */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D97B4F]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#D97B4F]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F5DCC8] text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-[#D97B4F]" />
            <span>Start Your Recovery Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Take the Next Step Towards <span className="text-[#D97B4F]">Better Movement</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Schedule a comprehensive evaluation at our Rajpur Road or Bhaniyawala clinic, or inquire
            about home visit physiotherapy across Dehradun.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 pt-4">
            <Link
              href="/book-appointment"
              className="btn-primary min-h-[48px] py-3.5 px-8 text-base font-bold shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              <span>Book an Appointment</span>
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp min-h-[48px] py-3.5 px-7 text-base font-bold w-full sm:w-auto justify-center"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="btn-secondary min-h-[48px] bg-white/10 hover:bg-white/20 text-white border-white/20 py-3.5 px-7 text-base font-bold w-full sm:w-auto justify-center"
            >
              <FaPhoneAlt className="w-4 h-4" />
              <span>{CONTACT.phone}</span>
            </a>
          </div>

          {/* Location Badges & Hours Strip */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#D97B4F]" />
              <span>Rajpur Road (near Clock Tower)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#D97B4F]" />
              <span>Bhaniyawala (near Jolly Grant)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D97B4F]" />
              <span>Mon–Sat: 9AM–10PM · Sun: 10AM–6PM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HomeIcon className="w-4 h-4 text-[#D97B4F]" />
              <span>Dehradun-Wide Home Visits</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
