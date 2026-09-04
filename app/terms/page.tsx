import React from 'react'
import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CLINIC_NAME, CONTACT } from '@/data/clinic'

export const metadata: Metadata = {
  title: 'Terms of Use | Physiotherapist in Dehradun',
  description: 'Terms of use and medical disclaimers for Physiotherapist in Dehradun website.',
}

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Terms of Use', url: '/terms' }]} />

      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl prose-content">
          <h1 className="text-3xl font-extrabold text-[#2E2A26] mb-6">Terms of Use</h1>
          <p>
            Welcome to the official website of <strong>{CLINIC_NAME}</strong>. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2>1. Medical Disclaimer</h2>
          <p>
            The content, articles, service descriptions and educational materials published on this website are provided for general informational purposes only. <strong>This content does not constitute medical advice, medical diagnosis or formal treatment recommendations.</strong>
          </p>
          <p>
            Always seek the advice of a registered physiotherapist or other qualified healthcare provider regarding any medical condition or physical injury. Never disregard professional medical advice or delay seeking it because of something you have read on this website.
          </p>

          <h2>2. No Medical Guarantees</h2>
          <p>
            Physiotherapy outcomes vary between individuals depending on diagnosis, severity, patient age, general health and adherence to prescribed exercises. We do not offer or imply any guarantees regarding instant recovery, 100% cure, or complete avoidance of surgical intervention.
          </p>

          <h2>3. Appointments and Consultations</h2>
          <p>
            Submitting an appointment booking request through this website does not automatically establish a formal practitioner-patient relationship until confirmed by our clinic coordinator and evaluated by a clinician during an initial consultation.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All original text, clinical summaries, logos, design assets and structure published on this website are the intellectual property of {CLINIC_NAME} unless otherwise credited.
          </p>

          <h2>5. Contact Information</h2>
          <p>
            For questions regarding these Terms of Use, please contact us:<br />
            Email: {CONTACT.email}<br />
            Phone: {CONTACT.phone}
          </p>
        </div>
      </section>
    </>
  )
}
