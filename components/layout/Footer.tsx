import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Clock, Activity } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { CLINIC_NAME, CONTACT, BRANCHES, SOCIAL, WHATSAPP_URL } from '@/data/clinic'

export function Footer() {
  return (
    <footer className="bg-[#2E2A26] text-white pt-14 pb-24 lg:pb-10 border-t border-[#D97B4F]/30">
      <div className="container-custom">
        {/* Main Grid: 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-[#443F3B]">
          
          {/* Column 1: Brand Logo, Description & Social Icons */}
          <div className="lg:col-span-3 space-y-5">
            <Link href="/" className="inline-block group" aria-label="RonEx Physiotherapy Home">
              <div className="bg-white px-3.5 py-2 rounded-xl inline-flex items-center shadow-md transition-all group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="RonEx Physiotherapy & Rehabilitation Center"
                  width={170}
                  height={66}
                  className="h-11 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-white leading-relaxed pr-2">
              RonEx Physiotherapy is a multi-speciality physiotherapy and rehabilitation centre in Dehradun, offering orthopedic, neuro, sports, pediatric, women&apos;s health and exercise-based rehabilitation services.
            </p>

            {/* Social Icons with Circular Borders */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SOCIAL.facebook || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-9 h-9 rounded-full border border-[#443F3B] flex items-center justify-center text-white hover:bg-[#D97B4F] hover:border-[#D97B4F] transition-all duration-300 shadow-xs"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL.instagram || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-full border border-[#443F3B] flex items-center justify-center text-white hover:bg-[#D97B4F] hover:border-[#D97B4F] transition-all duration-300 shadow-xs"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full border border-[#443F3B] flex items-center justify-center text-white hover:bg-[#D97B4F] hover:border-[#D97B4F] transition-all duration-300 shadow-xs"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="w-9 h-9 rounded-full border border-[#443F3B] flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 shadow-xs"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links (h2 Tag in White) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border-b border-[#443F3B] pb-2">
              <h2 className="text-base font-bold text-white tracking-wide">
                Quick Links
              </h2>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Doctors</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/video" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Videos &amp; Media</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>FAQ&apos;s</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (h2 Tag in White) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border-b border-[#443F3B] pb-2">
              <h2 className="text-base font-bold text-white tracking-wide">
                Our Services
              </h2>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/orthopedic-physiotherapy" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Orthopedic Physio</span>
                </Link>
              </li>
              <li>
                <Link href="/services/neuro-physiotherapy" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Neuro Physio</span>
                </Link>
              </li>
              <li>
                <Link href="/services/sports-physiotherapy" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Sports Rehab</span>
                </Link>
              </li>
              <li>
                <Link href="/services/pediatric-physiotherapy" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Pediatric Rehab</span>
                </Link>
              </li>
              <li>
                <Link href="/services/womens-health-physiotherapy" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Women&apos;s Health</span>
                </Link>
              </li>
              <li>
                <Link href="/services/home-physiotherapy" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Home Physio</span>
                </Link>
              </li>
              <li>
                <Link href="/conditions/back-pain" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Back Pain Care</span>
                </Link>
              </li>
              <li>
                <Link href="/services/pain-management" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Pain Management</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Locations (h2 Tag in White) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border-b border-[#443F3B] pb-2">
              <h2 className="text-base font-bold text-white tracking-wide">
                Our Locations
              </h2>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/locations/bhaniyawala" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Bhaniyawala Clinic Center</span>
                </Link>
              </li>
              <li>
                <Link href="/services/home-physiotherapy" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Home Visits Care</span>
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Clinic Directions</span>
                </Link>
              </li>
              <li>
                <Link href="/locations/bhaniyawala" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Thano Chowk Area</span>
                </Link>
              </li>
              <li>
                <Link href="/locations/bhaniyawala" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>Doiwala &amp; Jolly Grant</span>
                </Link>
              </li>
              <li>
                <Link href="/services/home-physiotherapy" className="text-white hover:text-[#D97B4F] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D97B4F] font-bold">›</span>
                  <span>All Dehradun Areas</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us (h2 Tag in White) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="border-b border-[#443F3B] pb-2">
              <h2 className="text-base font-bold text-white tracking-wide">
                Contact Us
              </h2>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="w-4 h-4 text-[#D97B4F] shrink-0" />
                <a href={`tel:${CONTACT.phoneRaw}`} className="text-white hover:text-[#D97B4F] transition-colors font-medium">
                  {CONTACT.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D97B4F] shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-white hover:text-[#D97B4F] transition-colors">
                  {CONTACT.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D97B4F] shrink-0 mt-0.5" />
                <div className="text-white text-xs space-y-0.5">
                  <p>Mon–Sat: 9:00 AM – 10:00 PM</p>
                  <p>Sun: 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#443F3B] space-y-3 text-xs">
              <div>
                <span className="text-[#D97B4F] font-bold uppercase tracking-wider block mb-1">
                  Bhaniyawala Clinic Center
                </span>
                <div className="flex items-start gap-2 text-white">
                  <MapPin className="w-4 h-4 text-[#D97B4F] shrink-0 mt-0.5" />
                  <p className="leading-snug">
                    {BRANCHES.bhaniyawala.fullAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Google Map */}
        <div className="pt-8 pb-4">
          <div className="max-w-3xl mx-auto">

            {/* Bhaniyawala Map Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#443F3B] shadow-lg group">
              <div className="absolute top-3 left-3 z-10 bg-[#2E2A26]/90 text-white font-bold text-xs uppercase px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md shadow-md flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D97B4F]" />
                <span>Bhaniyawala Branch</span>
              </div>
              <div className="w-full h-56 sm:h-64">
                <iframe
                  title="Bhaniyawala Branch Google Map"
                  src="https://maps.google.com/maps?q=30.186417,78.148636&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter brightness-95 contrast-105 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Quick Summary Strip */}
        

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 border-t border-[#443F3B] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white">
          <p>© {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.</p>

          <div className="flex items-center gap-4 font-medium text-white">
            <Link href="/privacy-policy" className="hover:text-[#D97B4F] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#D97B4F] transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-[#D97B4F] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
