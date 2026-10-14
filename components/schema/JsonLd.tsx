import React from 'react'
import { CLINIC_NAME, SITE_URL, CONTACT, BRANCHES, HOURS, FOUNDING_YEAR } from '@/data/clinic'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${SITE_URL}/#organization`,
    name: CLINIC_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    foundingDate: FOUNDING_YEAR.toString(),
    description: 'Leading physiotherapy clinic in Dehradun offering orthopedic, neurological, sports, pediatric and home physiotherapy.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BRANCHES.rajpurRoad.address,
      addressLocality: BRANCHES.rajpurRoad.city,
      addressRegion: BRANCHES.rajpurRoad.state,
      postalCode: BRANCHES.rajpurRoad.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BRANCHES.rajpurRoad.geo.lat,
      longitude: BRANCHES.rajpurRoad.geo.lng,
    },
    openingHoursSpecification: HOURS.schema,
    priceRange: '₹₹',
    medicalSpecialty: [
      'Physiotherapy',
      'Orthopedic Rehabilitation',
      'Neurological Rehabilitation',
      'Sports Rehabilitation',
      'Pediatric Rehabilitation',
      'Women\'s Health Physiotherapy',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema({ branch = 'rajpurRoad' }: { branch?: 'rajpurRoad' | 'bhaniyawala' }) {
  const branchData = BRANCHES[branch]
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'LocalBusiness'],
    '@id': `${SITE_URL}/#localBusiness-${branchData.slug}`,
    name: `${CLINIC_NAME} - ${branchData.name}`,
    description: `Specialized physiotherapy clinic at ${branchData.name}, Dehradun. Expert orthopedic, neuro, sports and home physical therapy.`,
    url: `${SITE_URL}/locations/${branchData.slug}`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: branchData.address,
      addressLocality: branchData.city,
      addressRegion: branchData.state,
      postalCode: branchData.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: branchData.geo.lat,
      longitude: branchData.geo.lng,
    },
    openingHoursSpecification: HOURS.schema,
    priceRange: '₹₹',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (faqs||[]).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function PersonSchema({
  name,
  jobTitle,
  qualification,
  specialization,
  description,
  imageUrl,
}: {
  name: string
  jobTitle: string
  qualification: string
  specialization: string
  description: string
  imageUrl: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: `${name}, PT`,
    jobTitle: `${jobTitle} (${qualification})`,
    description: description,
    image: imageUrl,
    medicalSpecialty: specialization,
    worksFor: {
      '@type': 'MedicalClinic',
      name: CLINIC_NAME,
      url: SITE_URL,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BRANCHES.rajpurRoad.address,
      addressLocality: BRANCHES.rajpurRoad.city,
      addressRegion: BRANCHES.rajpurRoad.state,
      postalCode: BRANCHES.rajpurRoad.pincode,
      addressCountry: 'IN',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function AboutPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: `About Us | ${CLINIC_NAME}`,
    description: 'Learn about RonEx Physiotherapy in Dehradun. Meet our team of MPT specialist doctors in Orthopedic, Neuro, Pediatric, and Sports rehabilitation with clinics at Rajpur Road and Bhaniyawala.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: CLINIC_NAME,
    },
    about: {
      '@type': 'MedicalClinic',
      name: CLINIC_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      telephone: CONTACT.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BRANCHES.rajpurRoad.address,
        addressLocality: BRANCHES.rajpurRoad.city,
        addressRegion: BRANCHES.rajpurRoad.state,
        postalCode: BRANCHES.rajpurRoad.pincode,
        addressCountry: 'IN',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({
  name,
  description,
  url,
  imageUrl,
}: {
  name: string
  description: string
  url: string
  imageUrl?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: name,
    description: description,
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    ...(imageUrl && { image: imageUrl.startsWith('http') ? imageUrl : `${SITE_URL}${imageUrl}` }),
    procedureType: 'https://schema.org/PhysicalTherapy',
    provider: {
      '@type': 'MedicalClinic',
      name: CLINIC_NAME,
      url: SITE_URL,
      telephone: CONTACT.phone,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

