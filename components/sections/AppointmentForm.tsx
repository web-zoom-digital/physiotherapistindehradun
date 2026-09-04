'use client'

import React, { useState } from 'react'
import { Calendar, CheckCircle, AlertCircle, Send, MessageSquare } from 'lucide-react'
import { SERVICES } from '@/data/services'
import { CONDITIONS } from '@/data/conditions'
import { BRANCHES, WHATSAPP_URL } from '@/data/clinic'

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    condition: '',
    preferredDate: '',
    preferredBranch: 'rajpur-road',
    visitType: 'clinic',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.phone) {
      setErrorMessage('Please fill in your name and phone number.')
      setStatus('error')
      return
    }

    setStatus('submitting')

    // Simulate submission / client side validation
    setTimeout(() => {
      setStatus('success')
    }, 800)
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-[#E8E4DF]">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#2E2A26]">Book Your Consultation</h3>
        <p className="text-xs text-gray-500 mt-1">
          Fill in your details below and our clinic coordinator will contact you promptly to confirm your schedule.
        </p>
      </div>

      {status === 'success' ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
          <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-bold text-emerald-900">Appointment Request Received!</h4>
          <p className="text-xs text-emerald-700 leading-relaxed">
            Thank you, {formData.fullName}. Our physiotherapy clinic team will call you back shortly on {formData.phone} to finalize your consultation time.
          </p>
          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-2.5 px-5 text-xs inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Or WhatsApp Us Instantly</span>
            </a>
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

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full py-3.5 text-base flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <span>Submitting Request...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Appointment Request</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
