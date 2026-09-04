import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/sections/PageHero'
import { CTAButton } from '@/components/ui/CTAButton'
import { getBlogPostBySlug, BLOG_POSTS } from '@/data/blog'
import { SERVICES } from '@/data/services'
import { CONDITIONS } from '@/data/conditions'
import { Clock, User, Calendar, ArrowRight } from 'lucide-react'
import { SITE_URL } from '@/data/clinic'

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

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author],
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

  const relatedServicesData = SERVICES.filter((s) =>
    post.relatedServices.includes(s.slug)
  )

  const relatedConditionsData = CONDITIONS.filter((c) =>
    post.relatedConditions.includes(c.slug)
  )

  // Article JSON-LD Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
    },
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    publisher: {
      '@type': 'Organization',
      name: 'Physiotherapist in Dehradun',
      url: SITE_URL,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        tag={post.category}
        breadcrumbItems={[
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Article Content Column */}
            <article className="lg:col-span-8 space-y-6">
              <div className="space-y-3">
                {/* E-E-A-T Author & Reviewer Metadata */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 py-3 border-y border-[#E8E4DF]">
                  <div className="flex items-center gap-1.5 font-semibold text-[#2E2A26]">
                    <User className="w-4 h-4 text-[#D97B4F]" />
                    <span>Written by {post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Published: {post.publishedDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 italic">
                  Author Qualification: {post.authorRole}
                </p>
              </div>

              {/* Main Article Body */}
              <div className="prose-content pt-4">
                {post.content.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={pIdx} className="text-xl font-bold text-[#2E2A26] mt-6 mb-3">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={pIdx} className="text-lg font-bold text-[#2E2A26] mt-4 mb-2">
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  }
                  return (
                    <p key={pIdx} className="text-xs sm:text-sm text-[#4A4744] leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  )
                })}
              </div>

              {/* SILO Internal Links */}
              {(relatedServicesData.length > 0 || relatedConditionsData.length > 0) && (
                <div className="pt-8 border-t border-[#E8E4DF] space-y-6">
                  {relatedServicesData.length > 0 && (
                    <div>
                      <h3 className="text-sm font-bold text-[#2E2A26] uppercase tracking-wider mb-3">
                        Related Physiotherapy Services
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {relatedServicesData.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="p-2.5 rounded-lg border border-[#E8E4DF] hover:border-[#D97B4F] text-xs font-semibold text-[#2E2A26] hover:text-[#D97B4F] inline-flex items-center gap-1"
                          >
                            <span>{s.shortTitle}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {relatedConditionsData.length > 0 && (
                    <div>
                      <h3 className="text-sm font-bold text-[#2E2A26] uppercase tracking-wider mb-3">
                        Related Conditions
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {relatedConditionsData.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/conditions/${c.slug}`}
                            className="p-2.5 rounded-lg border border-[#E8E4DF] hover:border-[#D97B4F] text-xs font-semibold text-[#2E2A26] hover:text-[#D97B4F] inline-flex items-center gap-1"
                          >
                            <span>{c.shortTitle}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#FAF9F7] rounded-2xl p-6 border border-[#E8E4DF] space-y-4 sticky top-24">
                <h3 className="text-base font-bold text-[#2E2A26]">Need Clinical Guidance?</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Book an individual consultation with our clinical team at Rajpur Road or Bhaniyawala clinic.
                </p>
                <div className="space-y-2">
                  <CTAButton variant="primary" className="w-full">
                    Book Appointment
                  </CTAButton>
                  <CTAButton variant="whatsapp" className="w-full justify-center">
                    WhatsApp Inquiry
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
