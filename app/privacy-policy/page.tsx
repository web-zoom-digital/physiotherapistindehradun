import React from 'react'
import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CLINIC_NAME, CONTACT } from '@/data/clinic'

export const metadata: Metadata = {
  title: 'Privacy Policy | Physiotherapist in Dehradun',
  description: 'Privacy policy and patient data protection information for Physiotherapist in Dehradun website.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />

      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl prose-content">
          <h1 className="text-3xl font-extrabold text-[#2E2A26] mb-6">Privacy Policy</h1>
          <p>
            This Privacy Policy describes how <strong>{CLINIC_NAME}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and protects personal information submitted through our website.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            When you submit an appointment booking form or contact enquiry on our website, we may collect personal information including:
          </p>
          <ul>
            <li>Full Name</li>
            <li>Phone Number</li>
            <li>Email Address</li>
            <li>Preferred consultation type and branch</li>
            <li>Brief details regarding your health concern or symptoms</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            The information you provide is strictly used for clinical coordination, including:
          </p>
          <ul>
            <li>Contacting you to confirm or reschedule your physiotherapy consultation</li>
            <li>Answering your inquiries about services or home visits</li>
            <li>Maintaining basic patient contact records for clinical reference</li>
          </ul>

          <h2>3. Data Protection and Confidentiality</h2>
          <p>
            We respect patient privacy and medical confidentiality. We do not sell, rent, share or trade your personal information with third-party advertisers or external data brokers.
          </p>

          <h2>4. Cookies and Website Analytics</h2>
          <p>
            Our website may use standard technical cookies or privacy-compliant analytics tools to evaluate page loading speed and improve navigation performance. These analytics do not collect personally identifiable medical data.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy or wish to update your contact details, please contact us:
          </p>
          <p>
            Email: {CONTACT.email}<br />
            Phone: {CONTACT.phone}
          </p>
        </div>
      </section>
    </>
  )
}
