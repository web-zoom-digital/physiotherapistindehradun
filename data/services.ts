export interface Service {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  conditions: string[]
  techniques: string[]
  whoCanBenefit: string[]
  relatedServices: string[]
  relatedConditions: string[]
  icon: string
  metaTitle: string
  metaDescription: string
}

export const SERVICES: Service[] = [
  {
    slug: 'orthopedic-physiotherapy',
    title: 'Orthopedic Physiotherapy in Dehradun',
    shortTitle: 'Orthopedic Physiotherapy',
    tagline: 'Expert care for bones, joints and muscles',
    description: 'Orthopedic physiotherapy focuses on conditions affecting the musculoskeletal system — your bones, joints, muscles, tendons and ligaments. Whether you are dealing with chronic joint pain, recovering from a fracture or managing a long-standing spinal condition, an individualised orthopedic physiotherapy programme may help improve your movement, reduce discomfort and support gradual return to daily activities.',
    conditions: ['Back Pain', 'Knee Pain', 'Shoulder Pain', 'Neck Pain', 'Joint Pain', 'Frozen Shoulder', 'Post-Fracture Stiffness', 'Sciatica', 'Slip Disc'],
    techniques: ['Manual Joint Mobilisation', 'Therapeutic Exercise', 'Electrotherapy (IFT, TENS, Ultrasound)', 'Dry Needling', 'Kinesiology Taping', 'Postural Correction', 'Soft Tissue Therapy'],
    whoCanBenefit: [
      'People with chronic back or neck pain',
      'Those recovering from fractures or orthopaedic surgery',
      'Individuals with arthritis or joint stiffness',
      'Patients with disc-related conditions',
      'Anyone with muscle strain or ligament sprains',
    ],
    relatedServices: ['sports-physiotherapy', 'post-surgery-rehabilitation', 'pain-management', 'home-physiotherapy'],
    relatedConditions: ['back-pain', 'knee-pain', 'neck-pain', 'shoulder-pain', 'joint-pain', 'frozen-shoulder', 'sciatica', 'slip-disc'],
    icon: 'Bone',
    metaTitle: 'Orthopedic Physiotherapy in Dehradun | Joint & Muscle Rehabilitation',
    metaDescription: 'Orthopedic physiotherapy in Dehradun for back pain, knee pain, joint pain, shoulder pain and post-fracture recovery. Personalised assessment and treatment at Rajpur Road & Bhaniyawala.',
  },
  {
    slug: 'neuro-physiotherapy',
    title: 'Neuro Physiotherapy in Dehradun',
    shortTitle: 'Neuro Physiotherapy',
    tagline: 'Rehabilitation for neurological conditions',
    description: 'Neuro physiotherapy — also called neurological physiotherapy or neuro rehabilitation — involves assessment and treatment of conditions affecting the nervous system. This includes the brain, spinal cord and peripheral nerves. A structured neurological rehabilitation programme may help improve motor function, balance, coordination, strength and independence following a neurological event or diagnosis.',
    conditions: ['Stroke', 'Parkinson\'s Disease', 'Spinal Cord Injury', 'Balance Disorders', 'Peripheral Nerve Injuries', 'Multiple Sclerosis', 'Traumatic Brain Injury', 'Cerebral Palsy (Adult)'],
    techniques: ['Bobath Concept', 'Proprioceptive Neuromuscular Facilitation (PNF)', 'Gait Training', 'Balance Therapy', 'Functional Electrical Stimulation', 'Task-Specific Training', 'Mirror Therapy'],
    whoCanBenefit: [
      'Stroke survivors working on motor recovery',
      'People with Parkinson\'s disease managing mobility',
      'Patients with spinal cord injuries',
      'Those with balance and coordination disorders',
      'Individuals recovering from peripheral nerve injuries',
    ],
    relatedServices: ['home-physiotherapy', 'orthopedic-physiotherapy', 'post-surgery-rehabilitation'],
    relatedConditions: ['stroke-rehabilitation', 'parkinsons-rehabilitation', 'balance-disorders'],
    icon: 'Brain',
    metaTitle: 'Neuro Physiotherapy in Dehradun | Neurological Rehabilitation',
    metaDescription: 'Neuro physiotherapy in Dehradun for stroke rehabilitation, Parkinson\'s, spinal cord injury and balance disorders. Home and clinic-based neurological rehabilitation available.',
  },
  {
    slug: 'sports-physiotherapy',
    title: 'Sports Physiotherapy in Dehradun',
    shortTitle: 'Sports Physiotherapy',
    tagline: 'Recovery and performance for active individuals',
    description: 'Sports physiotherapy addresses injuries and conditions that occur as a result of physical activity and sport. Whether you are a competitive athlete or an active recreational individual, a sports-focused physiotherapy programme may help you recover from injury, manage pain and plan a safe, structured return to your sport or physical training. The approach includes assessment of your movement patterns, strength and sport-specific demands.',
    conditions: ['Muscle Strains', 'Ligament Sprains', 'ACL & Knee Injuries', 'Ankle Sprains', 'Shoulder Dislocations', 'Tendinopathy', 'Stress Fractures', 'Runner\'s Knee', 'Tennis Elbow'],
    techniques: ['Sports-Specific Rehabilitation', 'Functional Movement Analysis', 'Kinesiology Taping', 'Dry Needling', 'Strength & Conditioning', 'Return-to-Sport Protocols', 'Manual Therapy'],
    whoCanBenefit: [
      'Competitive athletes recovering from sports injuries',
      'Active individuals managing chronic exercise-related pain',
      'People recovering from ligament or tendon injuries',
      'Those returning to sport after surgery',
      'Anyone with exercise-related muscle or joint problems',
    ],
    relatedServices: ['orthopedic-physiotherapy', 'post-surgery-rehabilitation', 'pain-management'],
    relatedConditions: ['sports-injury', 'knee-pain', 'shoulder-pain', 'joint-pain'],
    icon: 'Zap',
    metaTitle: 'Sports Physiotherapy in Dehradun | Sports Injury Rehabilitation',
    metaDescription: 'Sports physiotherapy in Dehradun for ACL injuries, muscle strains, ankle sprains, tendinopathy and return-to-sport programmes. Expert sports rehabilitation at Rajpur Road clinic.',
  },
  {
    slug: 'pediatric-physiotherapy',
    title: 'Paediatric Physiotherapy in Dehradun',
    shortTitle: 'Paediatric Physiotherapy',
    tagline: 'Child-centred rehabilitation and developmental support',
    description: 'Paediatric physiotherapy involves assessment and treatment of infants, children and adolescents with conditions affecting their movement, development and physical function. A child-focused physiotherapy programme may support motor milestone development, improve strength and coordination and help children participate more fully in daily activities. Sessions are structured to be engaging, age-appropriate and sensitive to each child\'s individual needs.',
    conditions: ['Cerebral Palsy', 'Developmental Delay', 'Brachial Plexus Injury', 'Torticollis', 'Autism-Related Motor Challenges', 'Birth Injuries', 'Muscle Weakness', 'Gait Abnormalities'],
    techniques: ['Sensory Integration Therapy', 'Neurodevelopmental Therapy (NDT)', 'Bobath for Children', 'Therapeutic Play', 'Hydrotherapy Exercises', 'Positioning & Handling', 'Parent/Carer Education'],
    whoCanBenefit: [
      'Children with cerebral palsy',
      'Infants with birth-related injuries',
      'Children with developmental delays',
      'Children with autism-related motor challenges',
      'Adolescents recovering from orthopaedic injuries',
    ],
    relatedServices: ['neuro-physiotherapy', 'home-physiotherapy', 'orthopedic-physiotherapy'],
    relatedConditions: ['balance-disorders'],
    icon: 'Heart',
    metaTitle: 'Paediatric Physiotherapy in Dehradun | Child Rehabilitation',
    metaDescription: 'Paediatric physiotherapy in Dehradun for cerebral palsy, developmental delays, brachial plexus injury and birth-related conditions. Child-focused rehabilitation in a safe clinical environment.',
  },
  {
    slug: 'womens-health-physiotherapy',
    title: "Women's Health Physiotherapy in Dehradun",
    shortTitle: "Women's Health Physiotherapy",
    tagline: 'Specialist physiotherapy for women at every stage of life',
    description: "Women's health physiotherapy addresses conditions and concerns specific to women's anatomy, function and life stages. This includes support during and after pregnancy, pelvic floor rehabilitation, management of chronic pelvic pain and physiotherapy for conditions that disproportionately affect women. Assessment and treatment are provided in a private, respectful and professional environment.",
    conditions: ['Pregnancy-Related Back Pain', 'Pelvic Floor Dysfunction', 'Post-Partum Recovery', 'Urinary Incontinence', 'Pelvic Pain', 'Diastasis Recti', 'Osteoporosis-Related Pain'],
    techniques: ['Pelvic Floor Exercises', 'Pelvic Floor Rehabilitation', 'Core Stability Training', 'Manual Therapy', 'Posture Correction', 'Breathing Exercises', 'Education & Self-Management'],
    whoCanBenefit: [
      'Women experiencing back pain during pregnancy',
      'New mothers recovering post-delivery',
      'Women with pelvic floor concerns',
      'Those with chronic pelvic or hip pain',
      'Women managing incontinence-related symptoms',
    ],
    relatedServices: ['orthopedic-physiotherapy', 'home-physiotherapy', 'pain-management'],
    relatedConditions: ['back-pain', 'joint-pain'],
    icon: 'Shield',
    metaTitle: "Women's Health Physiotherapy in Dehradun | Pelvic & Maternity Physio",
    metaDescription: "Women's health physiotherapy in Dehradun for pregnancy back pain, pelvic floor rehabilitation, post-partum recovery and incontinence. Private, professional care from specialist physiotherapists.",
  },
  {
    slug: 'home-physiotherapy',
    title: 'Home Physiotherapy in Dehradun',
    shortTitle: 'Home Physiotherapy',
    tagline: 'Professional physiotherapy in the comfort of your home',
    description: 'Home physiotherapy brings professional rehabilitation to patients who are unable or find it difficult to attend a clinic due to mobility limitations, recovery from surgery or neurological conditions. The home physiotherapy team carries portable electrotherapy equipment (TENS, IFT, Ultrasound) to deliver safe and effective treatment at your home, within the areas served across Dehradun.',
    conditions: ['Stroke Rehabilitation', 'Post-Surgery Recovery', 'Paralysis Rehabilitation', 'Elderly Mobility Issues', 'Bed-Bound Patient Care', 'Post-Orthopaedic Surgery', 'Neurological Conditions'],
    techniques: ['Portable Electrotherapy (TENS, IFT, Ultrasound)', 'Manual Therapy', 'Therapeutic Exercise Programmes', 'Passive Range of Motion', 'Gait & Mobility Training', 'Carer Education'],
    whoCanBenefit: [
      'Stroke patients undergoing rehabilitation at home',
      'Post-surgical patients unable to travel',
      'Elderly individuals with limited mobility',
      'Patients with spinal cord or neurological conditions',
      'Those managing long-term disability or weakness',
    ],
    relatedServices: ['neuro-physiotherapy', 'orthopedic-physiotherapy', 'post-surgery-rehabilitation', 'pediatric-physiotherapy'],
    relatedConditions: ['stroke-rehabilitation', 'back-pain', 'knee-pain', 'parkinsons-rehabilitation'],
    icon: 'Home',
    metaTitle: 'Home Physiotherapy in Dehradun | Home Visit Physiotherapy Service',
    metaDescription: 'Home physiotherapy in Dehradun for stroke rehabilitation, post-surgery recovery, elderly care and mobility issues. Professional physiotherapists with portable equipment across Dehradun.',
  },
  {
    slug: 'post-surgery-rehabilitation',
    title: 'Post-Surgery Rehabilitation in Dehradun',
    shortTitle: 'Post-Surgery Rehabilitation',
    tagline: 'Structured recovery after orthopaedic and other surgeries',
    description: 'Post-surgery rehabilitation is a structured programme designed to support recovery, restore movement and rebuild strength following surgery. Whether you have had a knee replacement, hip replacement, spinal surgery, ACL reconstruction or rotator cuff repair, a physiotherapy-led rehabilitation programme may help reduce pain, swelling and stiffness while improving functional recovery in line with your surgical team\'s guidance.',
    conditions: ['Post Knee Replacement', 'Post Hip Replacement', 'Post ACL Surgery', 'Post Spinal Surgery', 'Post Rotator Cuff Surgery', 'Post Fracture Surgery', 'Post Cardiac Surgery Mobility'],
    techniques: ['Phased Exercise Progression', 'Manual Therapy', 'Electrotherapy', 'Range of Motion Exercises', 'Muscle Strengthening', 'Balance & Proprioception Training', 'Scar Management'],
    whoCanBenefit: [
      'Patients recovering from knee or hip replacement',
      'Those returning to activity after ACL surgery',
      'Individuals post-spinal surgery or disc operation',
      'Patients after rotator cuff or shoulder surgery',
      'Anyone seeking structured recovery guidance after surgery',
    ],
    relatedServices: ['orthopedic-physiotherapy', 'sports-physiotherapy', 'home-physiotherapy', 'pain-management'],
    relatedConditions: ['knee-pain', 'back-pain', 'shoulder-pain', 'sports-injury'],
    icon: 'Activity',
    metaTitle: 'Post-Surgery Rehabilitation in Dehradun | Recovery After Surgery',
    metaDescription: 'Post-surgery rehabilitation in Dehradun for knee replacement, hip replacement, ACL surgery, spinal surgery and more. Structured physiotherapy recovery programmes aligned with surgical guidance.',
  },
  {
    slug: 'pain-management',
    title: 'Physiotherapy for Pain Management in Dehradun',
    shortTitle: 'Pain Management',
    tagline: 'Addressing chronic and acute pain through physiotherapy',
    description: 'Pain management physiotherapy involves assessment and treatment of both acute and chronic pain conditions. Rather than relying solely on pain medication, physiotherapy-based pain management focuses on understanding the underlying causes, reducing pain through targeted treatment and building the patient\'s capacity to self-manage. Treatment approaches are tailored to the individual and may include hands-on therapy, specific exercises and education about pain and recovery.',
    conditions: ['Chronic Back Pain', 'Fibromyalgia', 'Chronic Neck Pain', 'Headaches & Migraines', 'Chronic Joint Pain', 'Nerve Pain', 'Post-Injury Chronic Pain'],
    techniques: ['Manual Therapy', 'Dry Needling', 'TENS & Electrotherapy', 'Therapeutic Exercise', 'Pain Education', 'Posture & Movement Correction', 'Mindful Movement'],
    whoCanBenefit: [
      'People with chronic pain that hasn\'t responded to other treatments',
      'Those with widespread musculoskeletal pain',
      'Individuals with nerve-related pain',
      'Patients seeking drug-free pain management options',
      'Anyone with persistent post-injury pain',
    ],
    relatedServices: ['orthopedic-physiotherapy', 'neuro-physiotherapy', 'home-physiotherapy'],
    relatedConditions: ['back-pain', 'neck-pain', 'knee-pain', 'shoulder-pain', 'joint-pain', 'sciatica'],
    icon: 'Thermometer',
    metaTitle: 'Pain Management Physiotherapy in Dehradun | Chronic Pain Relief',
    metaDescription: 'Pain management physiotherapy in Dehradun for chronic back pain, neck pain, joint pain, nerve pain and fibromyalgia. Evidence-based, personalised pain treatment at our Dehradun clinics.',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(s => s.slug === slug)
}
