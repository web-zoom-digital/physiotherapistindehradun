export interface VideoMetadata {
  title: string
  category: 'Orthopedic' | 'Spine Care' | 'Neurology' | 'Rehabilitation' | 'Sports Rehab' | 'Home Care' | 'Pain Relief' | 'Assessment'
  description: string
  posterUrl?: string
}

export const VIDEO_METADATA_MAP: Record<string, VideoMetadata> = {
  'IMG_4403.MP4': {
    title: 'Knee Joint Mobilization & Physical Assessment',
    category: 'Orthopedic',
    description: 'Thorough patellofemoral and tibiofemoral joint evaluation, hands-on mobilization, and passive range-of-motion testing.',
    posterUrl: '/images/conditions/knee-pain-1.jpg',
  },
  'IMG_4452.MOV': {
    title: 'Manual Therapy & Myofascial Soft Tissue Release',
    category: 'Manual Therapy' as any,
    description: 'Hands-on clinical manual therapy targeting deep myofascial trigger points to relieve pain and improve tissue compliance.',
    posterUrl: '/images/services/ortho-physio.jpg',
  },
  'IMG_4454.MOV': {
    title: 'Cervical Spine Mobility & Posture Decompression',
    category: 'Spine Care',
    description: 'Gentle neck decompression and guided cervical range-of-motion exercises to alleviate tension headaches and postural strain.',
    posterUrl: '/images/conditions/neck-pain-1.jpg',
  },
  'IMG_4460.MOV': {
    title: 'Post-Operative Lower Limb Rehabilitation Protocol',
    category: 'Rehabilitation',
    description: 'Structured progressive resistance exercises and knee extension retraining following orthopedic surgery.',
    posterUrl: '/images/services/post-surgery.jpg',
  },
  'IMG_4473.MOV': {
    title: 'Shoulder Rotator Cuff Retraining & Stability',
    category: 'Orthopedic',
    description: 'Scapular stabilization exercises and targeted resistance band drills for shoulder impingement and frozen shoulder recovery.',
    posterUrl: '/images/conditions/shoulder-pain-1.jpg',
  },
  'IMG_4475.MOV': {
    title: 'Lumbar Core Stability & Pelvic Alignment Drill',
    category: 'Spine Care',
    description: 'Core muscle activation and pelvic tilt drills designed to support the lower back and relieve sciatica symptoms.',
    posterUrl: '/images/conditions/back-pain-1.jpg',
  },
  'IMG_4479.MOV': {
    title: 'Neurological Balance & Functional Gait Retraining',
    category: 'Neurology',
    description: 'Step coordination and proprioceptive balance exercises tailored for stroke recovery and movement disorders.',
    posterUrl: '/images/services/neuro-physio.jpg',
  },
  'IMG_4564.MOV': {
    title: 'Therapeutic Muscle Activation & Joint Mobility',
    category: 'Rehabilitation',
    description: 'Active-assisted range-of-motion routines and targeted stretching protocols to restore joint flexibility and comfort.',
    posterUrl: '/images/about-clinical-standards.jpg',
  },
  'IMG_4565.MOV': {
    title: 'Advanced Resistance Training & Strength Recovery',
    category: 'Sports Rehab',
    description: 'Progressive elastic resistance band exercises focusing on muscular re-education and functional sports conditioning.',
    posterUrl: '/images/services/sports-physio.jpg',
  },
  'VID-20260901-WA0100.mp4': {
    title: 'Clinical Movement Assessment & Functional Analysis',
    category: 'Assessment',
    description: 'Real-time biomechanical movement evaluation and postural assessment in our Dehradun clinic consultation suite.',
    posterUrl: '/images/heroes/delhi-physio-hero.jpg',
  },
  'VID-20260901-WA0106.mp4': {
    title: 'Personalized Home Exercise Guidance & Education',
    category: 'Home Care',
    description: 'Clinician explaining safe home exercise protocols and ergonomics to accelerate patient recovery between clinic visits.',
    posterUrl: '/images/services/home-physio.jpg',
  },
  'VID-20260902-WA0031.mp4': {
    title: 'Modern Electrotherapy Modality for Pain Management',
    category: 'Pain Relief',
    description: 'Application of therapeutic electrotherapy (TENS / IFT) to modulate pain signals and promote soft tissue healing.',
    posterUrl: '/images/services/pain-management.jpg',
  },
}

export const VIDEO_CATEGORIES = [
  'All',
  'Orthopedic',
  'Spine Care',
  'Neurology',
  'Rehabilitation',
  'Sports Rehab',
  'Home Care',
  'Pain Relief',
] as const
