export interface FAQ {
  question: string
  answer: string
}

export interface FAQSection {
  page: string
  faqs: FAQ[]
}

export const FAQS: Record<string, FAQ[]> = {
  home: [
    {
      question: 'What physiotherapy services do you offer in Dehradun?',
      answer: 'We offer orthopedic physiotherapy, neuro physiotherapy, sports physiotherapy, paediatric physiotherapy, women\'s health physiotherapy, home physiotherapy, post-surgery rehabilitation and pain management. Sessions are available at our Rajpur Road and Bhaniyawala clinics, as well as at home for suitable patients.',
    },
    {
      question: 'Where is the physiotherapy clinic located in Dehradun?',
      answer: 'Our main clinic is at 13, Rajpur Road, near New Empire Cinema Complex, Clock Tower, Chukkuwala, Dehradun. We also have a second branch at Rama Market, Thano Chowk, opposite Ranjit Singh Marg, Bhaniyawala, Dehradun.',
    },
    {
      question: 'Do you provide home physiotherapy in Dehradun?',
      answer: 'Yes, home physiotherapy is available for patients who are unable to travel to the clinic due to mobility limitations, post-surgical recovery or neurological conditions. Our team carries portable electrotherapy equipment for home sessions. Please contact us to discuss suitability and arrange a home visit.',
    },
    {
      question: 'How can I book a physiotherapy appointment?',
      answer: 'You can call us on +91 92862 44489 or send a WhatsApp message to book an appointment. Walk-in appointments are welcome, though booked sessions are prioritised.',
    },
    {
      question: 'What are the clinic opening hours?',
      answer: 'Both clinics are open Monday to Saturday, 9:00 AM to 10:00 PM, and Sunday 10:00 AM to 6:00 PM.',
    },
    {
      question: 'Do you offer neuro physiotherapy for stroke patients?',
      answer: 'Yes, neurological physiotherapy is available for stroke survivors, including home-based rehabilitation for patients who cannot travel. Our neuro physiotherapy team uses evidence-based approaches to support motor recovery, balance and gait rehabilitation.',
    },
    {
      question: 'Is paediatric physiotherapy available?',
      answer: 'Yes, paediatric physiotherapy is available for children with cerebral palsy, developmental delays, brachial plexus injuries, autism-related motor challenges and birth injuries. Sessions are adapted to be child-friendly and age-appropriate.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept payment by cash, credit or debit card and UPI. Consultation fees start from ₹400. Please contact us for current fee information.',
    },
  ],
  services: [
    {
      question: 'Which physiotherapy service is right for me?',
      answer: 'The most appropriate service depends on your condition, symptoms and goals. A physiotherapy assessment is the best starting point — your physiotherapist will evaluate your situation and recommend the most suitable treatment approach. If you are unsure, contact us and describe your main concern.',
    },
    {
      question: 'Do I need a doctor\'s referral to see a physiotherapist?',
      answer: 'In most cases, you do not need a referral to see a physiotherapist in India. You can contact us directly to book an appointment. If you have relevant medical reports, scans or letters from your doctor, it is helpful to bring these to your first appointment.',
    },
    {
      question: 'How many physiotherapy sessions will I need?',
      answer: 'The number of sessions depends on your condition, its severity and how you respond to treatment. Your physiotherapist will discuss expectations at your first appointment. Some conditions improve over a few sessions, while others benefit from a longer programme.',
    },
    {
      question: 'Can physiotherapy help with chronic pain?',
      answer: 'Physiotherapy can be an effective approach for managing chronic pain conditions. Treatment focuses on identifying contributing factors, reducing pain through targeted techniques and exercise, and helping you develop self-management strategies for the long term.',
    },
  ],
  backPain: [
    {
      question: 'Can physiotherapy help with lower back pain?',
      answer: 'Physiotherapy is one of the most commonly recommended approaches for managing back pain. Depending on the cause of your back pain, treatment may include manual therapy, core strengthening exercises, postural correction and electrotherapy. An individual assessment helps determine the most appropriate treatment for your specific situation.',
    },
    {
      question: 'When should I see a physiotherapist for back pain?',
      answer: 'It is worth seeking a physiotherapy assessment if your back pain has lasted more than two to three weeks, if pain is spreading into your leg or foot, if daily activities or sleep are significantly affected, or if you have had repeated episodes of back pain.',
    },
    {
      question: 'What does a back pain assessment involve?',
      answer: 'A back pain assessment includes a detailed history of your symptoms, an examination of your posture and spinal movement, muscle strength testing and specific clinical tests to identify the likely cause of your pain. Your physiotherapist will then explain their findings and discuss the treatment options.',
    },
    {
      question: 'Is exercise part of physiotherapy for back pain?',
      answer: 'Yes. Exercise is one of the most evidence-supported approaches for managing back pain. Your physiotherapist will prescribe exercises matched to your condition and current level of fitness, and progress them as you improve. The exercises are designed to strengthen supporting muscles and improve movement quality.',
    },
    {
      question: 'How long does back pain physiotherapy take?',
      answer: 'This varies depending on the cause and duration of your back pain. Many people notice improvement over four to eight sessions with consistent treatment and home exercises. Chronic conditions may benefit from a longer programme and ongoing self-management.',
    },
  ],
  neuro: [
    {
      question: 'How can neuro physiotherapy support stroke rehabilitation?',
      answer: 'Neuro physiotherapy for stroke focuses on rebuilding motor function, improving balance and gait, reducing spasticity and helping the patient regain independence in daily activities. Evidence-based approaches including task-specific training, Bobath concepts and gait retraining are used to support neuroplasticity and motor recovery.',
    },
    {
      question: 'What does gait training involve?',
      answer: 'Gait training is a targeted form of physiotherapy that focuses on improving the quality and safety of walking. It may include exercises to improve strength and balance, practice of specific walking patterns, use of assistive devices where appropriate and strategies for managing common gait problems such as foot drop or altered walking speed.',
    },
    {
      question: 'Is home neuro physiotherapy available in Dehradun?',
      answer: 'Yes. Home neurological physiotherapy is available in Dehradun for patients with stroke, Parkinson\'s disease, spinal cord injury and other conditions that make clinic visits difficult. Our neuro physiotherapy team can provide assessment and treatment at home, with portable equipment where needed.',
    },
    {
      question: 'How early should physiotherapy begin after stroke?',
      answer: 'Early rehabilitation after stroke is associated with better outcomes. Physiotherapy typically begins in hospital, once the patient is medically stable. On discharge, continuing physiotherapy — either in the clinic or at home — is important for ongoing recovery. Please contact us to discuss community rehabilitation options.',
    },
  ],
  sports: [
    {
      question: 'When can I return to sport after an injury?',
      answer: 'Return to sport is guided by achieving specific rehabilitation milestones rather than simply a fixed time period. These may include restoration of full range of motion, achieving sufficient strength compared to the uninjured side, adequate balance and proprioception, and successful completion of sport-specific movement testing. Your physiotherapist will guide this process.',
    },
    {
      question: 'What happens during sports injury rehabilitation?',
      answer: 'Sports injury rehabilitation is a phased process that begins with managing acute pain and swelling, progresses through restoring range of motion and strength, and advances to sport-specific movement and return-to-sport training. Each phase has specific goals and criteria before progressing.',
    },
    {
      question: 'Can physiotherapy help after an ACL injury?',
      answer: 'Physiotherapy is a central part of ACL injury management, whether the decision is made for conservative (non-surgical) management or following ACL reconstruction surgery. A structured, phased rehabilitation programme addresses quadriceps and hamstring strength, knee stability, balance and return-to-sport criteria.',
    },
  ],
  contact: [
    {
      question: 'How do I get to the Rajpur Road clinic?',
      answer: 'The Rajpur Road clinic is at 13, Rajpur Road, near New Empire Cinema Complex, Clock Tower, Chukkuwala, Dehradun. It is accessible from the main Rajpur Road and is near Clock Tower, which is a central landmark in Dehradun.',
    },
    {
      question: 'What is the best way to contact the clinic?',
      answer: 'The quickest way to reach us is by calling or sending a WhatsApp message to +91 92862 44489. You can also use the enquiry form on our website and our team will respond promptly.',
    },
    {
      question: 'Is parking available at the clinic?',
      answer: 'Street parking is available near the Rajpur Road clinic. Please contact us for specific parking guidance.',
    },
  ],
  about: [
    {
      question: 'What is the clinical philosophy of your physiotherapy practice in Dehradun?',
      answer: 'Our philosophy revolves around patient-centered, evidence-based care. We prioritize root-cause diagnostic evaluations over temporary symptom relief, creating individualized rehabilitation programs tailored to your daily life, work, and mobility goals.',
    },
    {
      question: 'Are all your physiotherapists qualified and certified?',
      answer: 'Yes, absolutely. All consultations and treatment planning are led by registered physiotherapists holding Master of Physiotherapy (MPT) and Bachelor of Physiotherapy (BPT) degrees with specialized expertise in Orthopedics, Neurology, Sports Medicine, and Pediatrics.',
    },
    {
      question: 'Do you promise instant cures or guaranteed non-surgical recovery?',
      answer: 'We adhere strictly to ethical clinical guidelines. We do not offer exaggerated promises or guaranteed shortcuts. Rehabilitation requires systematic effort, guided exercise progression, and time. We provide realistic expectations and measurable recovery milestones.',
    },
    {
      question: 'How do you ensure hygiene and patient safety at your clinics?',
      answer: 'Patient safety is paramount. All electrotherapy equipment, treatment tables, and exercise areas at both our Rajpur Road and Bhaniyawala branches are thoroughly sanitized after every patient session following strict medical hygiene protocols.',
    },
    {
      question: 'What should I expect during my first physiotherapy appointment?',
      answer: 'Your first session begins with a comprehensive 45–60 minute physical examination. Your MPT clinician will discuss your medical history, perform joint range-of-motion and muscle tests, analyze posture, pinpoint pain triggers, and clearly explain your diagnosis before commencing initial therapy.',
    },
    {
      question: 'How is an individualized rehabilitation plan developed?',
      answer: 'Rather than using pre-set exercise sheets, we create each care plan based on your specific functional goals, daily lifestyle, and clinical severity. We integrate manual joint mobilization, targeted electrotherapy, and progressive strengthening tailored to your pace.',
    },
    {
      question: 'What should I bring to my physiotherapy consultation?',
      answer: 'Please bring any recent medical reports, X-rays, MRI scans, or doctor referral slips related to your condition. We also recommend wearing comfortable, loose-fitting clothing that allows easy movement and examination of the affected joint or limb.',
    },
    {
      question: 'Where are your clinics located and do you provide home visits in Dehradun?',
      answer: 'Our main clinic is located at 13, Rajpur Road, near Clock Tower, Chukkuwala, Dehradun, and our second branch is at Rama Market, Thano Chowk, Bhaniyawala. We also provide dedicated home visit physiotherapy across Dehradun for post-surgical, elderly, and neurological patients who cannot travel.',
    },
  ],
  team: [
    {
      question: 'How do I choose the right specialist doctor for my condition?',
      answer: 'Our clinical team includes MPT specialists in Orthopedics (spine & joint pain), Neurology (stroke & paralysis), Sports Medicine (ligaments & muscle tears), and Pediatrics. When you contact us, our team guides you to the specialist best suited for your diagnosis.',
    },
    {
      question: 'Can I get a second opinion on my physiotherapy or surgical advice?',
      answer: 'Yes, we frequently provide second opinions on musculoskeletal, spinal, and neurological rehabilitation plans. Bring your MRI scans, X-rays, and doctor notes to your consultation for a thorough review.',
    },
    {
      question: 'Do your physiotherapists conduct sessions at home?',
      answer: 'Yes, our senior physiotherapists conduct home visit rehabilitation for patients with acute mobility restrictions, post-surgical recovery, or neurological conditions across Dehradun.',
    },
  ],
  testimonials: [
    {
      question: 'Are patient reviews and ratings on this website verified?',
      answer: 'Yes, all testimonials reflect authentic feedback shared by verified patients who received treatment at our Rajpur Road or Bhaniyawala clinics, or via home visit care. You can also view our live Google Business Profile reviews.',
    },
    {
      question: 'Can I speak to a former patient before starting my treatment?',
      answer: 'We respect patient privacy and medical confidentiality under healthcare guidelines. However, you can read detailed patient recovery case studies and verified Google reviews on our website.',
    },
  ],
  locations: [
    {
      question: 'Which clinic branch should I visit in Dehradun?',
      answer: 'If you reside near Central Dehradun, Dalanwala, Rajpur Road, or Clock Tower, our Rajpur Road clinic is most convenient. If you are near Doiwala, Jolly Grant, or Thano, our Bhaniyawala branch is ideal.',
    },
    {
      question: 'Is home visit physiotherapy available near my area in Dehradun?',
      answer: 'Our home visit physiotherapy team covers all major areas including Rajpur Road, Dalanwala, GMS Road, Ballupur, Prem Nagar, Dharampur, Race Course, and Bhaniyawala. Contact us to verify coverage for your specific location.',
    },
  ],
  conditions: [
    {
      question: 'What types of pain or movement problems do you treat?',
      answer: 'We assess and treat a comprehensive range of conditions including lower back pain, sciatica, slip disc, cervical neck pain, frozen shoulder, knee osteoarthritis, stroke rehabilitation, balance disorders, and sports injuries.',
    },
    {
      question: 'How soon should I seek physiotherapy after developing joint or back pain?',
      answer: 'We recommend booking an evaluation if pain persists for more than 2-3 weeks, interferes with your sleep or work, or radiates into your arms or legs. Early intervention prevents acute issues from becoming chronic.',
    },
  ],
  appointment: [
    {
      question: 'What should I bring to my first physiotherapy appointment?',
      answer: 'Please bring any relevant medical records, X-rays, MRI reports, or doctor prescription letters. Wear comfortable, loose-fitting clothing that allows easy examination of the affected joint or area.',
    },
    {
      question: 'How long does an initial physiotherapy evaluation take?',
      answer: 'An initial consultation typically lasts 45 to 60 minutes. It includes a comprehensive physical assessment, postural evaluation, diagnostic testing, and your initial hands-on treatment session.',
    },
  ],
  blog: [
    {
      question: 'Are the health guides written by qualified physiotherapists?',
      answer: 'Yes. All health articles and guides on our blog are authored or clinically reviewed by registered Master of Physiotherapy (MPT) specialists to ensure medical accuracy and evidence-based guidance.',
    },
    {
      question: 'Can I use these articles as medical advice for my condition?',
      answer: 'Our articles are provided for educational purposes to help you understand physical conditions and recovery processes. They are not a replacement for an in-person clinical assessment by a qualified doctor or physiotherapist.',
    },
  ],
}
