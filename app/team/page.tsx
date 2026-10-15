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
  GraduationCap,
  FileCheck,
} from 'lucide-react'
import { FaWhatsapp, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { PersonSchema } from '@/components/schema/JsonLd'
import {
  CLINIC_NAME,
  SITE_URL,
  CONTACT,
  BRANCHES,
  FOUNDING_YEAR,
  WHATSAPP_URL,
} from '@/data/clinic'
import { TEAM } from '@/data/team'
import { FAQS } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Our Specialist Physiotherapists in Dehradun | Team Credentials & MPT Doctors',
  description:
    'Meet our verified team of Master of Physiotherapy (MPT) specialists in Dehradun. Expert orthopedic, neurological, sports, and pediatric rehabilitation doctors at Bhaniyawala clinic center and home physiotherapy.',
  alternates: {
    canonical: `${SITE_URL}/team`,
  },
  openGraph: {
    title: 'Specialist Physiotherapists in Dehradun | Team Credentials',
    description:
      'Learn about our qualified MPT clinical team in Dehradun. Specialists in Orthopedics, Neurology, Pediatrics, and Sports physical therapy at Bhaniyawala clinic center and home care.',
    url: `${SITE_URL}/team`,
    type: 'website',
  },
}

export default function TeamPage() {
  const breadcrumbItems = [{ name: 'Our Team', url: '/team' }]

  return (
    <>
      {/* Structured data for all verified clinicians */}
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
          SECTION 1: HERO SECTION (Consistent with Home Page & About Us Page)
      ========================================================================= */}
      <section className="relative bg-gradient-to-br from-[#FDF2E9] via-[#FCDEC8] to-[#F9D6BD] pt-8 pb-20 md:pt-12 md:pb-28 overflow-hidden">
        {/* Ambient Decorative Lighting */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D97B4F]/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#F5DCC8]/90 rounded-full blur-3xl -ml-32 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/35 via-transparent to-transparent pointer-events-none" />

        <div className="container-custom relative z-10 space-y-6">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DCC8]/80 border border-[#D97B4F]/25 text-[#2E2A26] text-xs sm:text-sm font-semibold shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>Verified Clinical Team · Master of Physiotherapy (MPT) Clinicians</span>
                </div>
              </div>

              <h1 className="text-[1.85rem] sm:text-3xl md:text-[2.85rem] font-bold text-[#2E2A26] leading-[1.2] tracking-tight">
                Meet Our Specialist{' '}
                <span className="text-[#D97B4F]">Physiotherapy Team</span> in Dehradun
              </h1>

              <p className="text-base text-[#4A4744] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Our clinical team consists of registered, post-graduate Master of Physiotherapy (MPT)
                clinicians specializing across Orthopedics, Neurology, Pediatrics, and Sports
                Rehabilitation. Every consultation is conducted by a qualified doctor committed to
                accurate assessment and evidence-based recovery.
              </p>

              {/* Action Buttons */}
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
                    aria-label="Enquire via WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="btn-secondary flex-1 sm:flex-none justify-center text-center"
                    aria-label="Call clinic directly"
                  >
                    <FaPhoneAlt className="w-4 h-4" />
                    <span>Call Helpline</span>
                  </a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[#E8E4DF] text-xs sm:text-sm text-[#2E2A26]">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>100% Qualified MPT Doctors</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>10+ Years Max Experience</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>In-Clinic &amp; Home Visits</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <Image
                    src="/images/about-clinical-standards.jpg"
                    alt="Senior physiotherapist team conducting clinical evaluation at Dehradun clinic"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A26]/50 via-transparent to-transparent" />
                </div>

                {/* Floating Credential Badge 1 */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-[#E8E4DF] hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2E2A26]">Clinical Specialization</p>
                    <p className="text-[11px] text-[#76726E]">Ortho, Neuro, Sports, Pediatrics</p>
                  </div>
                </div>

                {/* Floating Credential Badge 2 */}
                <div className="absolute -top-4 -right-4 bg-[#2E2A26] text-white rounded-xl p-3 shadow-lg hidden sm:flex items-center gap-2 border border-white/20">
                  <ShieldCheck className="w-4 h-4 text-[#D97B4F]" />
                  <span className="text-xs font-semibold">Registered Clinicians Only</span>
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
          SECTION 2: CLINICAL QUALIFICATIONS & E-E-A-T GUARANTEE STRIP
      ========================================================================= */}
      <section className="py-12 bg-white border-b border-[#E8E4DF]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#FAF9F7] border border-[#E8E4DF] space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#2E2A26] text-sm sm:text-base">
                Post-Graduate (MPT) Degrees
              </h3>
              <p className="text-xs text-[#4A4744] leading-relaxed">
                Consultations and diagnosis are directly led by clinicians with Master of
                Physiotherapy degrees in recognized specialties.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F7] border border-[#E8E4DF] space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#2E2A26] text-sm sm:text-base">
                Council Registration &amp; Ethics
              </h3>
              <p className="text-xs text-[#4A4744] leading-relaxed">
                Registered physical therapy practitioners adhering to strict clinical ethics,
                sanitation protocols, and patient confidentiality.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F7] border border-[#E8E4DF] space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#2E2A26] text-sm sm:text-base">
                Root-Cause Diagnostic Exam
              </h3>
              <p className="text-xs text-[#4A4744] leading-relaxed">
                Comprehensive 45–60 min physical assessments examining posture, biomechanics, joint
                mobility, and neurological reflexes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F7] border border-[#E8E4DF] space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#2E2A26] text-sm sm:text-base">
                Milestone-Driven Progress
              </h3>
              <p className="text-xs text-[#4A4744] leading-relaxed">
                Objective recovery tracking using joint goniometers and functional scales, with zero
                exaggerated instant cure claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: DOCTOR & TEAM CARD GRID (Exact 2-Col Mobile Grid + Filters)
      ========================================================================= */}
      <section className="section-py bg-[#FAF9F7]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="section-label">Our Clinicians</span>
            <h2 className="section-title">Specialist Clinicians Across Every Discipline</h2>
            <p className="text-base text-[#4A4744] leading-relaxed mt-2">
              Browse our team of verified physiotherapists by rehabilitation specialization. Book an
              in-clinic consultation or arrange a home visit session.
            </p>
          </div>

          {/* Interactive Team Grid with 2-Column Mobile Layout */}
          <TeamGrid doctors={TEAM} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY CONSULT AN MPT SPECIALIST (Educational E-E-A-T Section)
      ========================================================================= */}
      <section className="section-py bg-white border-t border-[#E8E4DF]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 text-center sm:text-left">
              <span className="section-label">Clinical Difference</span>
              <h2 className="section-title">Why Consult a Master of Physiotherapy (MPT)?</h2>
              <p className="text-base text-[#4A4744] leading-relaxed">
                Physiotherapy is an advanced medical science that requires comprehensive diagnostic
                knowledge. An MPT clinician undergoes two years of rigorous post-graduate clinical
                training beyond their bachelor&apos;s degree, acquiring specialized expertise in
                differential diagnosis, advanced joint mobilization, and neurological recovery.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D97B4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-[#2E2A26] block">
                      Differential Diagnosis &amp; Safety
                    </strong>
                    <span className="text-xs text-[#4A4744] leading-relaxed">
                      Distinguishing true nerve impingements, ligament tears, and postural fatigue
                      to prevent harmful movements.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D97B4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-[#2E2A26] block">
                      Post-Surgical &amp; Neurological Protocols
                    </strong>
                    <span className="text-xs text-[#4A4744] leading-relaxed">
                      Safe rehabilitation loading following knee replacements, spine surgery,
                      stroke, and severe sports injuries.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D97B4F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-[#2E2A26] block">
                      Individualized Exercise Dosage
                    </strong>
                    <span className="text-xs text-[#4A4744] leading-relaxed">
                      Targeted resistance and stretching frequencies calibrated precisely to your
                      tissue healing stages.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-center sm:justify-start">
                <Link href="/book-appointment" className="btn-primary py-3 px-6 text-sm font-bold">
                  Schedule Assessment with an MPT Doctor
                </Link>
              </div>
            </div>

            {/* Visual Feature Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E4DF] group">
                <Image
                  src="/images/services/orthopedic-1.jpg"
                  alt="MPT specialist physiotherapist treating orthopedic knee patient on plinth"
                  width={800}
                  height={600}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 bg-[#D97B4F] text-white text-xs font-semibold px-3 py-1 rounded-full w-max mb-2 shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Evidence-Based Rehabilitation</span>
                  </div>
                  <h3 className="text-lg font-bold">
                    Hands-On Joint Mobilization &amp; Functional Recovery
                  </h3>
                  <p className="text-xs text-gray-200 mt-1">
                    Direct specialist care at our Bhaniyawala clinic center, plus home
                    visits across Dehradun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FREQUENTLY ASKED QUESTIONS (Team & Doctor Consultations)
      ========================================================================= */}
      <section className="section-py bg-[#FAF9F7] border-t border-[#E8E4DF]">
        <div className="container-custom max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="section-label">Patient Queries</span>
            <h2 className="section-title">Doctor Credentials &amp; Consultation FAQs</h2>
            <p className="text-base text-[#4A4744] leading-relaxed mt-2">
              Common questions about our doctor qualifications, consultations, second opinions, and
              home visit rehabilitation across Dehradun.
            </p>
          </div>

          <FAQAccordion faqs={FAQS.team} title="" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PREMIUM FINAL CTA (Conversion-Focused with Sticky Bar Padding)
      ========================================================================= */}
      <section className="section-py bg-gradient-to-br from-[#2E2A26] to-[#1E1B18] text-white relative overflow-hidden pb-28 lg:pb-20">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D97B4F]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#D97B4F]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F5DCC8] text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-[#D97B4F]" />
            <span>Consult With Our Doctors Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Consult With an Expert <span className="text-[#D97B4F]">MPT Physiotherapist</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Book an appointment at our Bhaniyawala clinic center, or inquire about dedicated
            home visit physiotherapy across Dehradun.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 pt-4">
            <Link
              href="/book-appointment"
              className="btn-primary py-3.5 px-8 text-base font-bold shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              <span>Book an Appointment</span>
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-3.5 px-7 text-base font-bold w-full sm:w-auto justify-center"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/20 py-3.5 px-7 text-base font-bold w-full sm:w-auto justify-center"
            >
              <FaPhoneAlt className="w-4 h-4" />
              <span>{CONTACT.phone}</span>
            </a>
          </div>

          {/* Location & Hours Strip */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#D97B4F]" />
              <span>Bhaniyawala Center (near Jolly Grant)</span>
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
