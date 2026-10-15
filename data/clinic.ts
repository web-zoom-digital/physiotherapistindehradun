// Verified clinic information from reference websites
// Source: ronexphysiotherapy.com and physiotherapyindehradun.in

export const SITE_URL = 'https://physiotherapistindehradun.com'
export const SITE_NAME = 'Physiotherapist in Dehradun'
export const CLINIC_NAME = 'Physiotherapist in Dehradun'

export const CONTACT = {
  phone: '+91 92862 44489',
  phoneRaw: '+919286244489',
  whatsapp: '+919286244489',
  email: 'info@ronexphysiotherapy.com',
  whatsappMessage: 'Hello%2C%20I%20want%20to%20book%20a%20physiotherapy%20appointment%20in%20Dehradun.',
}

export const BRANCHES = {
  bhaniyawala: {
    name: 'Bhaniyawala Clinic Center',
    address: 'Rama Market, Thano Chowk, opposite Ranjit Singh Marg, Bhaniyawala',
    city: 'Dehradun',
    state: 'Uttarakhand',
    pincode: '248140',
    country: 'India',
    fullAddress: 'Rama Market, Thano Chowk, opposite Ranjit Singh Marg, Bhaniyawala, Dehradun, Uttarakhand 248140',
    geo: { lat: 30.186417, lng: 78.148636 },
    mapsUrl: 'https://www.google.com/maps?q=30.186417,78.148636',
    directionsUrl: 'https://www.google.com/maps/dir//Rama+Market,+Thano+Chowk,+opposite+Ranjit+Singh+Marg,+Bhaniyawala,+Dehradun',
    slug: 'bhaniyawala',
    areas: ['Bhaniyawala', 'Thano Chowk', 'Ranjit Singh Marg', 'Doiwala', 'Rishikesh Road', 'Haridwar Bypass'],
    isMain: true,
  },
}

export const HOURS = {
  weekdays: { open: '09:00', close: '22:00', label: 'Mon–Sat: 9:00 AM – 10:00 PM' },
  sunday: { open: '10:00', close: '18:00', label: 'Sunday: 10:00 AM – 6:00 PM' },
  schema: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '22:00' },
    { dayOfWeek: ['Sunday'], opens: '10:00', closes: '18:00' },
  ],
}

export const FOUNDING_YEAR = 2018

export const SOCIAL = {
  facebook: 'https://www.facebook.com/people/RonEx-Physiotherapy-Rehabilitation-centre/61582957640581/',
  instagram: 'https://www.instagram.com/ronex_physiotherapy/',
  linkedin: 'https://www.linkedin.com/in/shaurya-chhetri-b9a571356/',
}

export const PAYMENT = {
  methods: ['Cash', 'Credit Card', 'UPI'],
  consultationFrom: '₹400',
  currency: 'INR',
  priceRange: '₹₹',
}

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${CONTACT.whatsappMessage}`
