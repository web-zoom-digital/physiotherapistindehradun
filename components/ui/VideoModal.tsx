'use client'

import React, { useEffect, useRef } from 'react'
import { X, Play, Calendar, ExternalLink, ShieldCheck, Film } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { VideoItem } from '@/lib/videos'
import { WHATSAPP_URL } from '@/data/clinic'
import Link from 'next/link'

interface VideoModalProps {
  video: VideoItem | null
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // Pause playback when modal closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isOpen])

  if (!isOpen || !video) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Dialog Container */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#1E1B18] text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#2E2A26]/80 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#D97B4F]/20 text-[#D97B4F] flex items-center justify-center shrink-0">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#D97B4F] uppercase tracking-wider block">
                {video.category}
              </span>
              <h2
                id="video-modal-title"
                className="text-sm sm:text-base font-bold text-white truncate max-w-[260px] sm:max-w-md md:max-w-xl"
              >
                {video.title}
              </h2>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close video player"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative bg-black flex items-center justify-center aspect-video w-full max-h-[60vh] shrink-0">
          <video
            ref={videoRef}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="w-full h-full object-contain"
          >
            <source src={video.url} type={video.mimeType} />
            <source src={video.url} type="video/mp4" />
            <source src={video.url} type="video/quicktime" />
            Your browser does not support HTML5 video playback for this file.
          </video>
        </div>

        {/* Video Information & CTA Footer (Scrollable if needed) */}
        <div className="p-5 sm:p-6 bg-[#25221F] overflow-y-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="space-y-1.5 max-w-2xl">
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {video.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {video.description}
              </p>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-2 text-[11px] text-gray-400 shrink-0">
              <span className="px-2.5 py-1 rounded-md bg-white/10 text-gray-200 font-mono font-medium">
                {video.extension} • {video.sizeFormatted}
              </span>
              <span className="text-gray-400">RonEx Physiotherapy Dehradun</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-gray-300">
              {/* <ShieldCheck className="w-4 h-4 text-[#D97B4F] shrink-0" /> */}
              <span>Demonstrated by qualified MPT Physiotherapists</span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <Link
                href="/book-appointment"
                onClick={onClose}
                className="btn-primary py-2 px-4 text-xs sm:text-sm font-semibold flex-1 sm:flex-none justify-center gap-1.5 shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Evaluation</span>
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp py-2 px-4 text-xs sm:text-sm font-semibold flex-1 sm:flex-none justify-center gap-1.5"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
