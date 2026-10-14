export interface TeamMember {
  slug: string
  name: string
  title: string
  qualification: string
  specialization: string
  experience: string
  bio: string
  focus: string[]
  imageUrl: string
  services: string[]
  linkedinUrl?: string
}

// All team members verified from ronexphysiotherapy.com and physiotherapyindehradun.in
export const TEAM: TeamMember[] = [
  {
    slug: 'dr-om-prakash',
    name: 'Dr. Om Prakash',
    title: 'Senior Consultant Physiotherapist',
    qualification: 'BPT, MPT (Orthopaedics)',
    specialization: 'Orthopedic Physiotherapy',
    experience: '10+ years',
    bio: 'Dr. Om Prakash brings over a decade of clinical experience in orthopedic physiotherapy. He specialises in managing back pain, knee pain, post-surgical recovery, sports injuries and chronic musculoskeletal conditions using evidence-based manual therapy, therapeutic exercises and structured rehabilitation programmes. His approach emphasises accurate assessment, patient education and functional recovery.',
    focus: [
      'Back Pain & Disc Conditions',
      'Knee Pain & Osteoarthritis',
      'Post-Surgery Rehabilitation',
      'Musculoskeletal Disorders',
      'Manual Therapy',
    ],
    imageUrl: '/images/doctors/om-prakash.jpg',
    services: ['orthopedic-physiotherapy', 'post-surgery-rehabilitation', 'pain-management'],
  },
  {
    slug: 'dr-nawal-soni',
    name: 'Dr. Nawal Soni',
    title: 'Neurological Physiotherapy Specialist',
    qualification: 'BPT, MPT (Neurology)',
    specialization: 'Neuro Physiotherapy',
    experience: '6 years',
    bio: 'Dr. Nawal Soni is a specialist in neurological rehabilitation with six years of focused clinical practice. He works with patients recovering from stroke, Parkinson\'s disease, spinal cord injury and balance disorders, using evidence-based techniques including Bobath and PNF concepts to support motor recovery and independence. He also provides home-based neuro physiotherapy for patients who cannot travel to the clinic.',
    focus: [
      'Stroke Rehabilitation',
      "Parkinson's Disease",
      'Spinal Cord Injury',
      'Balance & Coordination Disorders',
      'Gait Training',
    ],
    imageUrl: '/images/doctors/nawal-soni.jpg',
    services: ['neuro-physiotherapy', 'home-physiotherapy'],
  },
  {
    slug: 'dr-razia-khatoon',
    name: 'Dr. Razia Khatoon',
    title: 'Paediatric Physiotherapy Specialist',
    qualification: 'BPT, MPT (Paediatrics)',
    specialization: 'Paediatric Physiotherapy',
    experience: '8 years',
    bio: 'Dr. Razia Khatoon is a dedicated paediatric physiotherapy specialist with eight years of experience working with children of all ages. She creates child-friendly, goal-focused treatment plans for cerebral palsy, developmental delays, autism-related motor challenges, brachial plexus injuries and birth-related conditions. She works closely with families to support consistent progress both in the clinic and at home.',
    focus: [
      'Cerebral Palsy Rehabilitation',
      'Developmental Delay Therapy',
      'Autism Motor Support',
      'Birth Injury Recovery',
      'Paediatric Sensory Integration',
    ],
    imageUrl: '/images/doctors/razia-khatoon.jpg',
    services: ['pediatric-physiotherapy', 'home-physiotherapy'],
  },
  {
    slug: 'dr-sonali-rawat',
    name: 'Dr. Sonali Rawat',
    title: 'Sports Physiotherapy Consultant',
    qualification: 'BPT, MPT (Sports)',
    specialization: 'Sports Physiotherapy',
    experience: '3 years',
    bio: 'Dr. Sonali Rawat is a sports physiotherapy specialist who works with athletes and active individuals to support recovery from sports injuries, improve physical performance and plan safe return-to-sport pathways after injury or surgery. She applies biomechanical analysis and sport-specific rehabilitation principles to help patients regain function and confidence in their physical activity.',
    focus: [
      'Sports Injury Rehabilitation',
      'ACL & Ligament Recovery',
      'Tendon & Muscle Injuries',
      'Return-to-Sport Planning',
      'Athletic Performance',
    ],
    imageUrl: '/images/doctors/sonali-rawat.jpg',
    services: ['sports-physiotherapy', 'post-surgery-rehabilitation'],
  },
  {
    slug: 'dr-shaurya-chhetri',
    name: 'Dr. Shaurya Chhetri',
    title: 'Sports Physiotherapist & Strength Specialist',
    qualification: 'BPT, MPT (Sports)',
    specialization: 'Sports Physiotherapy & Conditioning',
    experience: '3 years',
    bio: 'Dr. Shaurya Chhetri combines sports science principles and physiotherapy expertise to manage tendon injuries, ligament sprains, ankle instability and complex sports injuries. He designs structured return-to-sport programmes and strength and conditioning protocols for competitive and recreational athletes, helping them return to peak performance safely and effectively.',
    focus: [
      'Ligament Reconstruction Rehab',
      'Tendon Injury Management',
      'Ankle & Knee Stability',
      'Strength & Conditioning',
      'Athletic Conditioning',
    ],
    imageUrl: '/images/doctors/shaurya-chhetri.jpg',
    services: ['sports-physiotherapy', 'pain-management'],
    linkedinUrl: 'https://www.linkedin.com/in/shaurya-chhetri-b9a571356/',
  },
]
