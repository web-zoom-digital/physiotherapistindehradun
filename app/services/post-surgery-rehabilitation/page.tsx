import React from 'react'
import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent'
import { getServiceBySlug } from '@/data/services'
import { CONDITIONS } from '@/data/conditions'
import { BLOG_POSTS } from '@/data/blog'
import { FAQS } from '@/data/faqs'
import { SERVICE_IMAGES } from '@/data/serviceImages'

const service = getServiceBySlug('post-surgery-rehabilitation')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

export default function PostSurgeryRehabilitationPage() {
  const relatedConditionsData = CONDITIONS.filter((c) =>
    service.relatedConditions.includes(c.slug)
  )

  const relatedBlogs = BLOG_POSTS.filter((b) =>
    b.relatedServices.includes('post-surgery-rehabilitation')
  )

  const images = SERVICE_IMAGES['post-surgery-rehabilitation']

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
        faqTitle="Post-Surgery Rehabilitation FAQs"
        blogTitle="Post-Surgical Recovery Articles"
        images={images}
      />
    </>
  )
}
