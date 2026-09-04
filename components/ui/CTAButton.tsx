import React from 'react'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { CONTACT, WHATSAPP_URL } from '@/data/clinic'

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'white' | 'whatsapp' | 'phone'
  href?: string
  children?: React.ReactNode
  className?: string
  icon?: boolean
}

export function CTAButton({
  variant = 'primary',
  href,
  children,
  className = '',
  icon = true,
}: CTAButtonProps) {
  if (variant === 'whatsapp') {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-whatsapp ${className}`}
        aria-label="WhatsApp Us"
      >
        {icon && <FaWhatsapp className="w-4 h-4" />}
        <span>{children || 'WhatsApp Us'}</span>
      </a>
    )
  }

  if (variant === 'phone') {
    return (
      <a
        href={`tel:${CONTACT.phoneRaw}`}
        className={`btn-secondary ${className}`}
        aria-label="Call Now"
      >
        {icon && <FaPhoneAlt className="w-4 h-4" />}
        <span>{children || 'Call Now'}</span>
      </a>
    )
  }

  const btnClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'secondary'
      ? 'btn-secondary'
      : 'btn-white'

  const targetHref = href || '/book-appointment'

  return (
    <Link href={targetHref} className={`${btnClass} ${className}`}>
      {icon && <Calendar className="w-4 h-4" />}
      <span>{children || 'Book Appointment'}</span>
    </Link>
  )
}
