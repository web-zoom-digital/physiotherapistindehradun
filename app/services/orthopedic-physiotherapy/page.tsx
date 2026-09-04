import React from 'react'
import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent'
import { getServiceBySlug } from '@/data/services'
import { CONDITIONS } from '@/data/conditions'
import { BLOG_POSTS } from '@/data/blog'
import { FAQS } from '@/data/faqs'
import { SERVICE_IMAGES } from '@/data/serviceImages'

const service = getServiceBySlug('orthopedic-physiotherapy')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

export default function OrthopedicPhysiotherapyPage() {
  const relatedConditionsData = CONDITIONS.filter((c) =>
    service.relatedConditions.includes(c.slug)
  )

  const relatedBlogs = BLOG_POSTS.filter((b) =>
    b.relatedServices.includes('orthopedic-physiotherapy')
  )

  const images = SERVICE_IMAGES['orthopedic-physiotherapy']

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.description}
        tag={service.shortTitle}
        breadcrumbItems={[
          { name: 'Services', url: '/services' },
          { name: service.shortTitle, url: `/services/${service.slug}` },
        ]}
      />

      <ServiceDetailContent
        service={service}
        relatedConditionsData={relatedConditionsData}
        relatedBlogs={relatedBlogs}
        faqs={FAQS.backPain}
        faqTitle="Orthopedic & Spine FAQs"
        blogTitle="Orthopedic Health Articles"
        images={images}
      />
    </>
  )
}
