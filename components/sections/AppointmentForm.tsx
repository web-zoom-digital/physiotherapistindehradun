'use client'

import React, { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { SERVICES } from '@/data/services'
import { CONDITIONS } from '@/data/conditions'
import { BRANCHES, CONTACT } from '@/data/clinic'

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  condition: '',
  preferredDate: '',
  preferredBranch: 'rajpur-road',
  visitType: 'clinic',
  message: '',
}

export function AppointmentForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [whatsappUrl, setWhatsappUrl] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const selectedServiceTitle =
    SERVICES.find((s) => s.slug === formData.service)?.shortTitle || formData.service
  const selectedConditionTitle =
    CONDITIONS.find((c) => c.slug === formData.condition)?.shortTitle || formData.condition
  const selectedBranchTitle =
    formData.preferredBranch === 'bhaniyawala'
      ? BRANCHES.bhaniyawala.name
      : BRANCHES.rajpurRoad.name
  const selectedVisitTypeTitle =
    formData.visitType === 'home'
      ? 'Home Visit Physiotherapy'
      : 'In-Clinic Consultation'

  const generateWhatsAppMessage = () => {
    const lines: string[] = [
      'New Appointment / Consultation Request',
      '━━━━━━━━━━━━━━━━━━━━━',
      `Patient Name: ${formData.fullName.trim()}`,
      `Phone Number: ${formData.phone.trim()}`,
    ]

    if (formData.email.trim()) {
      lines.push(`Email: ${formData.email.trim()}`)
    }

    if (formData.preferredDate) {
      lines.push(`Preferred Date: ${formData.preferredDate}`)
    }

    if (selectedServiceTitle) {
      lines.push(`Service Required: ${selectedServiceTitle}`)
    }

    if (selectedConditionTitle) {
      lines.push(`Primary Concern / Condition: ${selectedConditionTitle}`)
    }

    lines.push(`Clinic Branch: ${selectedBranchTitle}`)
    lines.push(`Consultation Type: ${selectedVisitTypeTitle}`)

    if (formData.message.trim()) {
      lines.push(`Symptoms / Details: ${formData.message.trim()}`)
    }

    lines.push('━━━━━━━━━━━━━━━━━━━━━')
    lines.push('Sent via Physiotherapist in Dehradun website')

    return lines.join('\n')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in both your full name and phone number.')
      setStatus('error')
      return
    }

    const phoneDigits = formData.phone.replace(/[^0-9]/g, '')
    if (phoneDigits.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.')
      setStatus('error')
      return
    }

    setErrorMessage('')
    setStatus('submitting')

    const messageText = generateWhatsAppMessage()
    const cleanPhone = CONTACT.whatsapp.replace(/[^0-9]/g, '')
    const targetUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText)}`

    setWhatsappUrl(targetUrl)

    // Open WhatsApp in a new tab immediately in response to the user's submit action
    if (typeof window !== 'undefined') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer')
    }

    setStatus('success')
  }

  const handleReset = () => {
    setStatus('idle')
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-[#E8E4DF]">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#2E2A26]">Book Your Consultation</h3>
        <p className="text-xs text-gray-500 mt-1">
          Fill in your details below. Your exact information will be forwarded directly to WhatsApp for instant scheduling.
        </p>
      </div>

      {status === 'success' ? (
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-emerald-950">
              Appointment Details Prepared!
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
              WhatsApp is opening with your details. If WhatsApp did not open automatically, tap the button below to send:
            </p>
          </div>

          <div className="pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-3.5 px-6 text-sm sm:text-base font-semibold flex items-center justify-center gap-2.5 w-full shadow-md hover:shadow-lg transition-all"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Open WhatsApp &amp; Send Details</span>
            </a>
          </div>

          {/* Details Summary Preview */}
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-emerald-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Submitted Details Preview
              </span>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                Ready on WhatsApp
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-gray-500 block text-[11px]">Patient Name</span>
                <span className="font-semibold text-gray-900">{formData.fullName}</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[11px]">Phone Number</span>
                <span className="font-semibold text-gray-900">{formData.phone}</span>
              </div>
              {formData.email && (
                <div>
                  <span className="text-gray-500 block text-[11px]">Email</span>
                  <span className="font-semibold text-gray-900">{formData.email}</span>
                </div>
              )}
              {formData.preferredDate && (
                <div>
                  <span className="text-gray-500 block text-[11px]">Preferred Date</span>
                  <span className="font-semibold text-gray-900">{formData.preferredDate}</span>
                </div>
              )}
              {selectedServiceTitle && (
                <div>
                  <span className="text-gray-500 block text-[11px]">Service</span>
                  <span className="font-semibold text-gray-900">{selectedServiceTitle}</span>
                </div>
              )}
              {selectedConditionTitle && (
                <div>
                  <span className="text-gray-500 block text-[11px]">Condition / Concern</span>
                  <span className="font-semibold text-gray-900">{selectedConditionTitle}</span>
                </div>
              )}
              <div>
                <span className="text-gray-500 block text-[11px]">Branch</span>
                <span className="font-semibold text-gray-900">{selectedBranchTitle}</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[11px]">Consultation Type</span>
                <span className="font-semibold text-gray-900">{selectedVisitTypeTitle}</span>
              </div>
            </div>

            {formData.message && (
              <div className="border-t border-gray-100 pt-2 text-xs">
                <span className="text-gray-500 block text-[11px]">Symptoms / Message</span>
                <p className="text-gray-800 whitespace-pre-line mt-0.5">{formData.message}</p>
              </div>
            )}
          </div>

          <div className="text-center pt-1">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-[#D97B4F] hover:text-[#B85E37] font-semibold underline underline-offset-2 transition-colors cursor-pointer"
            >
              ← Edit Details or Submit Again
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === 'error' && (
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="form-label">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Sharma"
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="phone" className="form-label">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 98765 43210"
                className="form-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="form-label">
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. name@example.com"
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="preferredDate" className="form-label">
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                min={new Date().toISOString().split('T')[0]}
                value={formData.preferredDate}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="service" className="form-label">
                Select Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">-- Select Service --</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.shortTitle}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="condition" className="form-label">
                Primary Concern / Condition
              </label>
              <select
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">-- Select Condition --</option>
                {CONDITIONS.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.shortTitle}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredBranch" className="form-label">
                Preferred Clinic Branch
              </label>
              <select
                id="preferredBranch"
                name="preferredBranch"
                value={formData.preferredBranch}
                onChange={handleChange}
                className="form-input"
              >
                <option value="rajpur-road">Rajpur Road (Main Branch)</option>
                <option value="bhaniyawala">Bhaniyawala Branch</option>
              </select>
            </div>

            <div>
              <label htmlFor="visitType" className="form-label">
                Consultation Type
              </label>
              <select
                id="visitType"
                name="visitType"
                value={formData.visitType}
                onChange={handleChange}
                className="form-input"
              >
                <option value="clinic">In-Clinic Consultation</option>
                <option value="home">Home Visit Physiotherapy</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="form-label">
              Brief Symptoms or Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your pain, symptoms or recovery goals..."
              className="form-input"
            />
          </div>

          <div className="pt-2 space-y-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-whatsapp w-full py-3.5 text-base font-semibold flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer transition-all"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Send Appointment Request to WhatsApp</span>
            </button>
            <p className="text-[11px] text-gray-500 text-center">
              Your exact entered details will open directly in WhatsApp for immediate confirmation.
            </p>
          </div>
        </form>
      )}
    </div>
  )
}
