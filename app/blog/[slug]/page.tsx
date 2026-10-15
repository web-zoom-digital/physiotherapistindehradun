import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  Clock,
  User,
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Share2,
  BookOpen,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { FaWhatsapp, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa'
import { PageHero } from '@/components/sections/PageHero'
import { BlogCard } from '@/components/sections/BlogCard'
import { BreadcrumbSchema } from '@/components/schema/JsonLd'
import { getBlogPostBySlug, BLOG_POSTS, getBlogImage } from '@/data/blog'
import { SERVICES } from '@/data/services'
import { CONDITIONS } from '@/data/conditions'
import { CLINIC_NAME, SITE_URL, CONTACT, WHATSAPP_URL } from '@/data/clinic'

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  const postImage = post.imageUrl || getBlogImage(post.slug)

  return {
    title: `${post.metaTitle} | ${CLINIC_NAME}`,
    description: post.metaDescription,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author],
      images: [
        {
          url: `${SITE_URL}${postImage}`,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return notFound()
  }

  const postImage = post.imageUrl || getBlogImage(post.slug)

  const relatedServicesData = SERVICES.filter((s) =>
    post.relatedServices.includes(s.slug)
  )

  const relatedConditionsData = CONDITIONS.filter((c) =>
    post.relatedConditions.includes(c.slug)
  )

  // Find 2-3 related blog posts for the bottom 2-column mobile grid
  const relatedBlogs = BLOG_POSTS.filter((b) => b.slug !== post.slug)
    .filter(
      (b) =>
        b.category === post.category ||
        b.relatedServices.some((s) => post.relatedServices.includes(s))
    )
    .slice(0, 2)

  const breadcrumbItems = [
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]

  // Article JSON-LD Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${postImage}`,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
    },
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    publisher: {
      '@type': 'MedicalClinic',
      name: CLINIC_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  }

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        tag={post.category}
        breadcrumbItems={breadcrumbItems}
        heroImage={postImage}
        heroImageAlt={post.title}
      />

      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Main Long-Form Article Content (Single Readable Column) */}
            <article className="lg:col-span-8 space-y-6">
              {/* E-E-A-T Author & Reviewer Metadata Strip */}
              <div className="bg-[#FAF9F7] rounded-2xl p-4 sm:p-5 border border-[#E8E4DF] space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 pb-3 border-b border-[#E8E4DF]">
                  <div className="flex items-center gap-2 font-semibold text-[#2E2A26]">
                    <div className="w-8 h-8 rounded-full bg-[#F5DCC8] text-[#D97B4F] flex items-center justify-center font-bold">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#2E2A26]">{post.author}</span>
                      <span className="block text-[11px] text-gray-500 font-normal">
                        {post.authorRole}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>{post.publishedDate}</span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#4A4744]">
                  <ShieldCheck className="w-4 h-4 text-[#D97B4F] shrink-0" />
                  <span>
                    Medically written &amp; reviewed by registered Master of Physiotherapy (MPT) clinicians.
                  </span>
                </div>
              </div>

              {/* Featured In-Article Image Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md border border-[#E8E4DF] bg-gray-50">
                <Image
                  src={postImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Main Article Body */}
              <div className="prose-content pt-2 space-y-4">
                {post.content.split('\n\n').map((paragraph, pIdx) => {
                  const trimmed = paragraph.trim()
                  if (!trimmed) return null

                  if (trimmed.startsWith('## ')) {
                    return (
                      <h2
                        key={pIdx}
                        className="text-lg sm:text-2xl font-bold text-[#2E2A26] pt-4 pb-1 border-b border-gray-100 leading-snug"
                      >
                        {trimmed.replace('## ', '')}
                      </h2>
                    )
                  }

                  if (trimmed.startsWith('### ')) {
                    return (
                      <h3
                        key={pIdx}
                        className="text-base sm:text-xl font-bold text-[#2E2A26] pt-3 pb-0.5 leading-snug"
                      >
                        {trimmed.replace('### ', '')}
                      </h3>
                    )
                  }

                  if (trimmed.startsWith('- ')) {
                    const listItems = trimmed.split('\n').filter((item) => item.startsWith('- '))
                    return (
                      <ul key={pIdx} className="space-y-2 my-3 pl-2">
                        {listItems.map((li, liIdx) => (
                          <li
                            key={liIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4744] leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#D97B4F] shrink-0 mt-0.5" />
                            <span>{li.replace('- ', '')}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  }

                  if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
                    return (
                      <p
                        key={pIdx}
                        className="text-xs text-gray-500 italic bg-[#FAF9F7] p-3.5 rounded-xl border border-[#E8E4DF] leading-relaxed"
                      >
                        {trimmed.replace(/^\*|\*$/g, '')}
                      </p>
                    )
                  }

                  return (
                    <p
                      key={pIdx}
                      className="text-xs sm:text-sm text-[#4A4744] leading-relaxed mb-3"
                    >
                      {trimmed}
                    </p>
                  )
                })}
              </div>

              {/* SILO Internal Links Strip */}
              {(relatedServicesData.length > 0 || relatedConditionsData.length > 0) && (
                <div className="pt-6 border-t border-[#E8E4DF] space-y-5">
                  {relatedServicesData.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-[#2E2A26] uppercase tracking-wider">
                        Related Physiotherapy Services in Dehradun:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {relatedServicesData.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="p-2 sm:p-2.5 rounded-xl border border-[#E8E4DF] bg-white hover:border-[#D97B4F] text-xs font-semibold text-[#2E2A26] hover:text-[#D97B4F] inline-flex items-center gap-1.5 transition-all shadow-xs"
                          >
                            <span>{s.shortTitle}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#D97B4F]" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {relatedConditionsData.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-[#2E2A26] uppercase tracking-wider">
                        Related Condition &amp; Treatment Guides:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {relatedConditionsData.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/conditions/${c.slug}`}
                            className="p-2 sm:p-2.5 rounded-xl border border-[#E8E4DF] bg-white hover:border-[#D97B4F] text-xs font-semibold text-[#2E2A26] hover:text-[#D97B4F] inline-flex items-center gap-1.5 transition-all shadow-xs"
                          >
                            <span>{c.shortTitle}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#D97B4F]" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>

            {/* Sidebar Sticky Appointment CTA Card */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-[#FAF9F7] rounded-3xl p-5 sm:p-7 border border-[#E8E4DF] space-y-4 lg:sticky lg:top-24 shadow-xs">
                <div className="inline-flex items-center gap-1.5 bg-[#F5DCC8] text-[#D97B4F] px-3 py-1 rounded-full text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Clinical Care</span>
                </div>

                <h3 className="text-lg font-bold text-[#2E2A26] leading-snug">
                  Struggling with Pain or Restricted Mobility?
                </h3>

                <p className="text-xs text-[#4A4744] leading-relaxed">
                  Get evaluated by senior Master of Physiotherapy (MPT) specialists at our Bhaniyawala
                  clinic center or via home care across Dehradun.
                </p>

                <div className="space-y-2.5 pt-2">
                  <Link
                    href="/book-appointment"
                    className="btn-primary min-h-[46px] w-full justify-center text-center text-xs sm:text-sm font-bold shadow-md hover:shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Clinic Appointment</span>
                  </Link>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp min-h-[46px] w-full justify-center text-center text-xs sm:text-sm font-bold"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="btn-secondary min-h-[46px] w-full justify-center text-center text-xs sm:text-sm font-semibold text-[#2E2A26]"
                  >
                    <FaPhoneAlt className="w-3.5 h-3.5 text-[#D97B4F]" />
                    <span>Call Helpline: {CONTACT.phone}</span>
                  </a>
                </div>

                {/* Clinic Quick Info */}
                <div className="pt-4 border-t border-[#E8E4DF] space-y-2 text-[11px] text-[#76726E]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D97B4F] shrink-0" />
                    <span>Bhaniyawala, Dehradun</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D97B4F] shrink-0" />
                    <span>Mon–Sat: 9AM–10PM · Sun: 10AM–6PM</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: RELATED CLINICAL GUIDES (Exact 2-Col Mobile Grid)
      ========================================================================= */}
      {relatedBlogs.length > 0 && (
        <section className="section-py bg-[#FAF9F7] border-t border-[#E8E4DF] pb-28 lg:pb-20">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <span className="section-label">Recommended Reading</span>
              <h2 className="section-title">Related Physiotherapy &amp; Health Guides</h2>
              <p className="text-xs sm:text-sm text-[#4A4744] leading-relaxed mt-1.5">
                Continue learning about pain relief, joint mechanics, and safe physical exercise from our clinicians.
              </p>
            </div>

            {/* 2-Column Mobile Grid, 2-Col Desktop */}
            <div className="grid grid-cols-2 md:grid-cols-2 max-w-3xl mx-auto gap-3 sm:gap-6">
              {relatedBlogs.map((b) => (
                <BlogCard key={b.slug} post={b} />
              ))}
            </div>

            <div className="text-center pt-8">
              <Link href="/blog" className="btn-secondary py-2.5 px-6 text-xs sm:text-sm font-semibold gap-2">
                <span>Browse All Physiotherapy Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
