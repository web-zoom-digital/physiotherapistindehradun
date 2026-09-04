'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { FAQSchema } from '@/components/schema/JsonLd'

export interface FAQItem {
  question: string
  answer: string
}

export function FAQAccordion({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="space-y-4">
      <FAQSchema faqs={faqs} />
      {title && (
        <h2 className="text-2xl font-extrabold text-[#2E2A26] mb-6 tracking-tight">
          {title}
        </h2>
      )}
      <div className="space-y-3">
        {(faqs||[]).map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div key={idx} className="faq-item">
              <button
                onClick={() => toggle(idx)}
                className="faq-question"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-[#D97B4F] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#D97B4F] shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
