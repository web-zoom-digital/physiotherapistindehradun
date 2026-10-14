export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  authorRole: string
  publishedDate: string
  updatedDate: string
  readTime: string
  relatedServices: string[]
  relatedConditions: string[]
  metaTitle: string
  metaDescription: string
  tags: string[]
  imageUrl?: string
}

export const BLOG_IMAGES: Record<string, string> = {
  'when-to-see-physiotherapist-back-pain': '/images/conditions/back-pain-1.jpg',
  'physiotherapy-knee-pain-dehradun': '/images/conditions/knee-pain-1.jpg',
  'first-physiotherapy-session-what-to-expect': '/images/about-clinical-standards.jpg',
  'stroke-rehabilitation-physiotherapy': '/images/conditions/stroke-rehabilitation-1.jpg',
  'home-physiotherapy-dehradun-guide': '/images/services/home-physio-1.jpg',
  'physiotherapy-neck-pain-cervical': '/images/conditions/neck-pain-1.jpg',
  'sports-injury-rehabilitation-dehradun': '/images/services/sports-1.jpg',
  'frozen-shoulder-treatment-physio': '/images/conditions/frozen-shoulder-1.jpg',
}

export function getBlogImage(slug: string): string {
  return BLOG_IMAGES[slug] || '/images/about-clinical-standards.jpg'
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'when-to-see-physiotherapist-back-pain',
    title: 'When Should You See a Physiotherapist for Back Pain?',
    excerpt: 'Not all back pain needs physiotherapy, but there are clear signs that professional assessment and treatment may help. Here is what to look for and when to seek help.',
    category: 'Back Pain',
    author: 'Dr. Om Prakash',
    authorRole: 'Senior Consultant Physiotherapist, BPT, MPT (Orthopaedics)',
    publishedDate: '2025-01-15',
    updatedDate: '2025-06-01',
    readTime: '5 min read',
    relatedServices: ['orthopedic-physiotherapy', 'pain-management', 'home-physiotherapy'],
    relatedConditions: ['back-pain', 'sciatica', 'slip-disc'],
    tags: ['back pain', 'physiotherapy', 'Dehradun', 'lower back pain'],
    metaTitle: 'When to See a Physiotherapist for Back Pain | Dehradun Physio Guide',
    metaDescription: 'Find out when back pain needs professional physiotherapy assessment. Signs, symptoms and guidance from a Dehradun physiotherapist on managing back pain effectively.',
    content: `
Back pain is something most adults will experience at some point in their lives. For many people, it resolves on its own within a few days or weeks with rest, gentle movement and over-the-counter pain relief. But for others, back pain persists, worsens or begins to affect daily life in significant ways.

So when should you stop waiting and book a physiotherapy assessment?

## Signs That Physiotherapy May Help

**1. Your pain has lasted more than two to three weeks**
Acute back pain — the kind that comes on suddenly after lifting something awkwardly or sleeping in an uncomfortable position — often settles with time. If your pain is still bothering you after two to three weeks and is not clearly improving, it is worth seeking a professional assessment.

**2. Your pain is affecting your sleep, work or daily activities**
If back pain is stopping you from doing normal things — getting dressed, sitting comfortably at work, carrying out household tasks or sleeping through the night — this is a clear signal that you would benefit from help.

**3. The pain is spreading into your leg or foot**
Pain, tingling or numbness that travels from the lower back into the buttock, leg or foot may suggest nerve involvement, such as sciatica. This type of pain often responds well to physiotherapy, but does benefit from an accurate assessment to understand what is driving the symptoms.

**4. You have had previous episodes of back pain**
If your back pain keeps coming back, physiotherapy can help address the underlying factors — whether that is posture, core strength, movement habits or muscle imbalances — that make you more susceptible to repeated flare-ups.

**5. You are avoiding activities you enjoy**
If fear of pain is stopping you from exercising, taking walks or participating in activities you enjoy, a physiotherapist can help you understand your pain and develop a plan to safely return to the things you value.

## What Does Physiotherapy Actually Involve?

Physiotherapy for back pain typically begins with a detailed assessment. Your physiotherapist will ask about the history of your pain, your daily activities and any factors that make it better or worse. They will assess your posture, your movement and identify which structures may be contributing to your symptoms.

Treatment may include:
- Manual therapy to improve joint and soft tissue mobility
- Specific exercises to strengthen the muscles supporting your spine
- Guidance on posture, ergonomics and daily activities
- Education about pain and how to manage it long-term
- Electrotherapy (such as TENS or IFT) where appropriate for pain relief

## What Physiotherapy Cannot Do

It is important to be realistic. Physiotherapy is not a quick fix for back pain, and results depend on many factors including the nature of the condition, how long it has been present, your activity levels and how consistently you follow your home exercise programme.

Physiotherapy also cannot — and does not — guarantee permanent cure, instant pain relief or avoidance of surgery in all cases. What it can do is provide you with a clear understanding of your condition, guide an evidence-based recovery programme and support you in taking an active role in your own health.

## When to Seek Urgent Care

If you experience any of the following, seek urgent medical attention rather than waiting for a physiotherapy appointment:
- Bladder or bowel problems accompanying back pain
- Significant weakness in both legs
- Back pain following a serious fall or accident
- Back pain with unexplained weight loss, fever or night sweats

## Physiotherapy in Dehradun

If you are looking for physiotherapy assessment and treatment for back pain in Dehradun, sessions are available at our clinics on Rajpur Road and at Bhaniyawala, with home physiotherapy available for patients who cannot travel.

A physiotherapist can carry out a thorough assessment, discuss your symptoms and help you understand whether physiotherapy is the right option for you at this stage.

*This article is for general information purposes and does not constitute medical advice. If you have concerns about your symptoms, please consult a qualified healthcare professional.*
    `,
  },
  {
    slug: 'physiotherapy-knee-pain-dehradun',
    title: 'Physiotherapy for Knee Pain: What to Expect',
    excerpt: 'Knee pain is one of the most common reasons people seek physiotherapy. Here is a clear, practical guide to what physiotherapy for knee pain involves and how it may help.',
    category: 'Orthopedic Physiotherapy',
    author: 'Dr. Om Prakash',
    authorRole: 'Senior Consultant Physiotherapist, BPT, MPT (Orthopaedics)',
    publishedDate: '2025-02-10',
    updatedDate: '2025-06-01',
    readTime: '6 min read',
    relatedServices: ['orthopedic-physiotherapy', 'sports-physiotherapy', 'post-surgery-rehabilitation'],
    relatedConditions: ['knee-pain', 'joint-pain', 'sports-injury'],
    tags: ['knee pain', 'physiotherapy', 'Dehradun', 'knee rehabilitation'],
    metaTitle: 'Physiotherapy for Knee Pain in Dehradun | Knee Pain Treatment Guide',
    metaDescription: 'What to expect from physiotherapy for knee pain. A practical guide from a Dehradun physiotherapist covering assessment, treatment and recovery for common knee conditions.',
    content: `
Knee pain is something our physiotherapy team sees frequently at both the Rajpur Road and Bhaniyawala clinics. It affects people of all ages — from young athletes with ligament sprains to older adults managing osteoarthritis. Physiotherapy can be helpful for many types of knee pain, though the approach will vary depending on what is causing your symptoms.

## Common Causes of Knee Pain

Understanding the cause of your knee pain is the first step in effective management. Common conditions we assess and treat include:

- **Knee osteoarthritis** — wear and tear that affects the joint cartilage, common in people over 45
- **Patellofemoral pain** — pain around the kneecap, often related to muscle imbalances or training load
- **Ligament sprains** — partial or complete tears of the medial collateral ligament (MCL) or anterior cruciate ligament (ACL)
- **Meniscus injuries** — damage to the cartilage pads inside the knee
- **Patellar tendinopathy** — overuse of the tendon connecting the kneecap to the shinbone
- **IT band syndrome** — often seen in runners and cyclists

## What Happens at Your First Appointment?

Your first appointment will focus on understanding your symptoms and the way your knee is moving. Your physiotherapist will:

- Take a detailed history of your knee pain — when it started, what makes it better or worse, whether there was a specific injury
- Assess the range of motion in your knee and hip
- Check the strength of the muscles around your knee, hip and lower limb
- Assess your walking pattern and balance
- Perform specific tests to identify which structures may be involved

This assessment helps build a clear clinical picture and guides the treatment plan.

## What Might Treatment Include?

Treatment for knee pain varies depending on the diagnosis. For most knee conditions, physiotherapy includes:

**Exercise therapy** — Strengthening the quadriceps, hamstrings, glutes and hip muscles is a central part of knee rehabilitation. These muscles support and protect the knee joint. Your physiotherapist will prescribe exercises matched to your current level and help you progress them safely.

**Manual therapy** — Hands-on techniques to improve joint mobility, reduce muscle tension and address stiffness in the knee or surrounding joints.

**Kinesiology taping** — Tape can be applied to support the patella or provide proprioceptive feedback, particularly useful during sports or physical activity.

**Electrotherapy** — TENS, IFT or ultrasound may be used for pain management, particularly in the early stages of treatment.

**Activity guidance** — Advice on how to modify your activities during recovery while staying as active as possible.

## How Long Does Recovery Take?

Recovery depends on the severity and nature of the condition:
- Mild muscle strains or overuse conditions may improve within four to six weeks with consistent physiotherapy
- Osteoarthritis management is an ongoing process — physiotherapy helps maintain function and quality of life rather than providing a cure
- Post-ACL surgery rehabilitation typically takes six to twelve months with a structured programme

Your physiotherapist will set realistic expectations at your first appointment based on your specific diagnosis.

## Knee Physiotherapy in Dehradun

If you are managing knee pain in Dehradun, physiotherapy assessment is available at our Rajpur Road clinic and the Bhaniyawala branch. Home physiotherapy is also available for patients who find it difficult to travel, including those recovering from knee surgery.

*This article is for general information only and is not a substitute for professional medical advice.*
    `,
  },
  {
    slug: 'first-physiotherapy-session-what-to-expect',
    title: 'What to Expect During Your First Physiotherapy Session',
    excerpt: 'Coming to your first physiotherapy appointment can feel uncertain. Here is a straightforward guide to what happens during a physiotherapy assessment and why it matters.',
    category: 'General Physiotherapy',
    author: 'Dr. Nawal Soni',
    authorRole: 'Neurological Physiotherapy Specialist, BPT, MPT (Neurology)',
    publishedDate: '2025-03-05',
    updatedDate: '2025-06-01',
    readTime: '4 min read',
    relatedServices: ['orthopedic-physiotherapy', 'neuro-physiotherapy', 'sports-physiotherapy'],
    relatedConditions: ['back-pain', 'knee-pain', 'shoulder-pain'],
    tags: ['physiotherapy', 'first session', 'Dehradun', 'physiotherapy assessment'],
    metaTitle: 'What to Expect at Your First Physiotherapy Session in Dehradun',
    metaDescription: 'A guide to your first physiotherapy appointment. What happens during assessment, what to bring and what questions to ask at your Dehradun physiotherapy clinic.',
    content: `
If you are coming for physiotherapy for the first time, it is completely natural to be unsure about what to expect. Most people arrive with some questions in mind: Will it be painful? What will the physiotherapist do? Will I need to do exercises? This guide should help you feel more prepared.

## Before Your Appointment

Try to note down a few things before you arrive:
- When your symptoms started and how they began (sudden injury, gradual onset)
- Which activities make the symptoms worse or better
- Any previous treatment you have had
- Any scans, X-rays or medical reports related to the condition
- A list of any medications you are taking

Wearing or bringing loose, comfortable clothing is helpful — you may need to expose the area being assessed.

## What Happens at the First Appointment?

### The Assessment

The first session is primarily an assessment. Your physiotherapist will spend time understanding your symptoms before examining you. This conversation is important — the clinical history often provides as much useful information as the physical examination.

You will be asked about:
- Your main complaint and current symptoms
- The history of the problem — when it started, how it developed
- What makes it worse and what provides relief
- How your symptoms affect your daily activities, work and sleep
- Your general health, any relevant medical history and previous similar problems

### The Physical Examination

After the history, your physiotherapist will carry out a physical assessment. This may include:
- Observing your posture and how you move
- Assessing the range of motion in the affected area
- Testing strength and muscle function
- Palpating (feeling) the area to identify tenderness or restrictions
- Specific clinical tests relevant to your condition

The examination should not be excessively painful, though some gentle pressure or movement may be temporarily uncomfortable. Your physiotherapist will check in with you throughout.

### The Diagnosis and Plan

After the assessment, your physiotherapist will explain their findings in straightforward language. They will outline:
- What they believe is contributing to your symptoms
- The proposed treatment approach
- A realistic expectation for recovery
- What your involvement will be — including any home exercises or activity modifications

You should feel free to ask any questions at this stage.

## Will I Have Treatment at the First Session?

This depends on the clinic and the physiotherapist's assessment of your situation. At many appointments, some treatment does begin in the first session — for example, gentle manual therapy, an initial exercise demonstration or advice on activity modification. In other cases, particularly for complex conditions, the first session focuses entirely on assessment.

## What Should You Bring?

- Any relevant medical reports, scans or referral letters
- Comfortable clothing appropriate for movement
- Your list of current medications
- Any questions you want to ask

## Physiotherapy Consultations in Dehradun

Physiotherapy consultations are available at our Rajpur Road and Bhaniyawala clinics. Sessions are available seven days a week. If you are unable to travel, home physiotherapy visits can also be arranged. For initial enquiries, you can call or send a WhatsApp message to our team.

*This article is for general information only and is not a substitute for individual clinical advice.*
    `,
  },
  {
    slug: 'stroke-rehabilitation-physiotherapy',
    title: 'Stroke Rehabilitation and the Role of Physiotherapy',
    excerpt: 'Physiotherapy is a central part of stroke rehabilitation. This guide explains the stages of stroke recovery, what physiotherapy involves and how home rehabilitation can support recovery.',
    category: 'Neuro Rehabilitation',
    author: 'Dr. Nawal Soni',
    authorRole: 'Neurological Physiotherapy Specialist, BPT, MPT (Neurology)',
    publishedDate: '2025-01-28',
    updatedDate: '2025-06-01',
    readTime: '7 min read',
    relatedServices: ['neuro-physiotherapy', 'home-physiotherapy'],
    relatedConditions: ['stroke-rehabilitation', 'balance-disorders', 'parkinsons-rehabilitation'],
    tags: ['stroke rehabilitation', 'neuro physiotherapy', 'Dehradun', 'neurological rehabilitation'],
    metaTitle: 'Stroke Rehabilitation Physiotherapy in Dehradun | Neuro Physio Guide',
    metaDescription: 'How physiotherapy supports stroke rehabilitation. A guide to neuro rehabilitation after stroke — from early recovery to home physiotherapy in Dehradun.',
    content: `
A stroke can have a profound impact on a person's ability to move, communicate and carry out everyday activities. Recovery after stroke is a gradual process that can continue for months or even years, depending on the severity of the stroke and the consistency of rehabilitation. Physiotherapy plays a central role in this process.

## Understanding Stroke Recovery

When a stroke occurs, part of the brain is deprived of oxygen and brain cells in that area die. The extent of recovery depends on which part of the brain was affected and how large the area of damage was. However, the brain has a remarkable ability to adapt and reorganise — a property called neuroplasticity. Consistent, task-specific rehabilitation is thought to help the brain form new pathways to compensate for damaged areas.

Recovery from stroke is often divided into stages:
- **Acute phase** (immediately after stroke, typically in hospital)
- **Early rehabilitation phase** (weeks following the stroke)
- **Long-term rehabilitation phase** (months to years, often in the community or at home)

Physiotherapy is relevant and valuable at every stage.

## What Does Stroke Rehabilitation Physiotherapy Involve?

### Movement and Motor Recovery

One of the most common effects of stroke is weakness or paralysis on one side of the body (hemiplegia). Physiotherapy for stroke focuses on helping the affected side regain movement and function. This typically includes:

**Task-specific training** — Practising real tasks, such as reaching for objects, standing from a chair or walking, is one of the most effective approaches for regaining motor function after stroke.

**Gait retraining** — Many stroke survivors experience difficulty with walking — either due to weakness, altered muscle tone (spasticity) or balance problems. Gait retraining helps improve the quality and safety of walking.

**Balance therapy** — Standing balance and dynamic balance are often affected after stroke. Progressive balance exercises reduce the risk of falls and improve confidence.

**Upper limb rehabilitation** — For those with arm or hand weakness, specific exercises and activities focus on recovering arm use for daily tasks.

### Managing Spasticity

Spasticity — increased muscle stiffness and resistance to movement — is common after stroke. Physiotherapy helps manage spasticity through stretching, positioning, movement therapy and, where appropriate, coordination with medical management.

### Neurological Physiotherapy Approaches

At our clinic, neurological physiotherapy for stroke uses approaches including:
- **Bobath concept** — A widely used approach focusing on movement quality and postural control
- **Proprioceptive neuromuscular facilitation (PNF)** — Uses specific movement patterns and resistance to facilitate motor recovery
- **Task-specific and repetitive training** — Evidence supports high-repetition practice of functional tasks

## Home Physiotherapy for Stroke Patients in Dehradun

For many stroke patients, travelling to a clinic is difficult or impossible, particularly in the early stages of recovery. Home physiotherapy allows a qualified neurological physiotherapist to come to your home and provide treatment in a familiar environment.

Home physiotherapy for stroke may include:
- Hands-on rehabilitation exercises
- Assistance with mobility and transfers
- Exercises for strength, balance and functional recovery
- Education for family members or carers
- Portable electrotherapy where appropriate

If a stroke patient in Dehradun or the surrounding area is unable to attend our clinic, our team can discuss suitable home visit arrangements.

## Realistic Expectations

It is important to have realistic expectations about stroke recovery. Physiotherapy does not guarantee complete recovery of function, and the extent of recovery varies enormously between individuals. What physiotherapy can do is help maximise recovery potential, improve function and quality of life, and support families and carers in providing appropriate ongoing care.

Consistent participation in physiotherapy and following a home exercise programme are important factors in achieving the best possible outcome.

*This article is for general information purposes and should not be used as a substitute for professional medical or clinical advice. If you or a family member has had a stroke, please consult the relevant medical team regarding rehabilitation.*
    `,
  },
  {
    slug: 'home-physiotherapy-dehradun-guide',
    title: 'Home Physiotherapy in Dehradun: A Complete Guide',
    excerpt: 'Who benefits from home physiotherapy, what it involves and which areas of Dehradun are served. A practical guide to physiotherapy at home.',
    category: 'Home Physiotherapy',
    author: 'Dr. Nawal Soni',
    authorRole: 'Neurological Physiotherapy Specialist, BPT, MPT (Neurology)',
    publishedDate: '2025-04-12',
    updatedDate: '2025-06-01',
    readTime: '5 min read',
    relatedServices: ['home-physiotherapy', 'neuro-physiotherapy', 'orthopedic-physiotherapy'],
    relatedConditions: ['stroke-rehabilitation', 'back-pain', 'parkinsons-rehabilitation'],
    tags: ['home physiotherapy', 'Dehradun', 'home visit physiotherapy', 'physiotherapy at home'],
    metaTitle: 'Home Physiotherapy in Dehradun | Home Visit Physiotherapy Guide',
    metaDescription: 'Everything you need to know about home physiotherapy in Dehradun. Who it helps, what is involved, equipment used and areas served. Book a home physiotherapy visit.',
    content: `
Home physiotherapy — also called home visit physiotherapy — is a service that brings professional physiotherapy to patients at their own home. It is particularly valuable for people who find it difficult or impossible to travel to a clinic due to physical limitations, recovery from surgery or a neurological condition.

## Who Can Benefit from Home Physiotherapy?

Home physiotherapy may be suitable for:

**Stroke patients** — Especially in the early and intermediate stages of recovery, when mobility and travel are significantly limited. A physiotherapist can work on mobility, balance, strength and daily activities in the patient's own home environment.

**Post-surgery patients** — Following knee replacement, hip replacement, spinal surgery or other major procedures, many patients are advised to rest and limit travel. Home physiotherapy allows rehabilitation to begin promptly without the need for the patient to arrange transport to a clinic.

**Elderly individuals with limited mobility** — Older adults who cannot safely travel alone may benefit from physiotherapy in the home, addressing fall prevention, mobility, strength and pain management.

**Patients with Parkinson's disease or other neurological conditions** — Home-based neurological physiotherapy can address gait, balance and movement in a familiar environment, which can be particularly meaningful for some patients.

**Bed-bound or housebound patients** — For those who are unable to leave their home for health reasons, home physiotherapy can still provide meaningful treatment, including passive exercises, positioning and carer education.

**Children with developmental conditions** — Paediatric physiotherapy at home can be more comfortable and effective for some children, particularly those who may find clinical environments stressful.

## What Does a Home Physiotherapy Session Involve?

A home physiotherapy session follows a similar structure to a clinic appointment. The physiotherapist will:

1. Carry out an assessment (at the first visit) or review progress (at subsequent visits)
2. Carry out hands-on treatment as appropriate — this may include manual therapy, exercise guidance and soft tissue work
3. Use portable electrotherapy equipment where appropriate (TENS, IFT, Ultrasound units)
4. Design and demonstrate home exercises for the patient to carry out between sessions
5. Educate family members or carers on how to support the patient's progress

## What Equipment Does the Physiotherapist Bring?

Our home physiotherapy team carries portable, clinical-grade equipment including:
- TENS machines (Transcutaneous Electrical Nerve Stimulation) for pain management
- Interferential therapy (IFT) units
- Portable therapeutic ultrasound
- Exercise materials as needed

## Areas Covered by Home Physiotherapy in Dehradun

Home physiotherapy visits are available across Dehradun, including Rajpur Road, Clock Tower, Chukkuwala, Dalanwala, GMS Road, Patel Nagar, Sahastradhara Road and other areas. For enquiries about coverage in specific parts of Dehradun or the surrounding region, please contact our team directly.

## How to Book a Home Physiotherapy Visit

To book a home physiotherapy session in Dehradun, you can call our clinic number or send a message on WhatsApp. Our team will discuss your situation, confirm availability and arrange a suitable visit time.

*This article is for general information and is not a substitute for individual professional advice.*
    `,
  },
  {
    slug: 'physiotherapy-neck-pain-cervical',
    title: 'Physiotherapy for Neck Pain and Cervical Spondylosis',
    excerpt: 'Neck pain is increasingly common, especially among people who spend long hours at screens. Here is how physiotherapy can help and what treatment typically involves.',
    category: 'Back Pain',
    author: 'Dr. Om Prakash',
    authorRole: 'Senior Consultant Physiotherapist, BPT, MPT (Orthopaedics)',
    publishedDate: '2025-05-01',
    updatedDate: '2025-06-01',
    readTime: '5 min read',
    relatedServices: ['orthopedic-physiotherapy', 'pain-management'],
    relatedConditions: ['neck-pain', 'back-pain', 'shoulder-pain'],
    tags: ['neck pain', 'cervical spondylosis', 'physiotherapy', 'Dehradun'],
    metaTitle: 'Neck Pain Physiotherapy in Dehradun | Cervical Spondylosis Treatment',
    metaDescription: 'Physiotherapy for neck pain and cervical spondylosis in Dehradun. Treatment approaches, exercises and advice from a specialist Dehradun physiotherapist.',
    content: `
Neck pain has become one of the most common musculoskeletal complaints, partly due to the amount of time many of us spend sitting at desks, using smartphones and looking at screens. In Dehradun, as elsewhere, it is one of the conditions our physiotherapy team regularly assesses and treats.

## Why Does Neck Pain Develop?

Neck pain can develop for a number of reasons:

**Postural strain** — Prolonged sitting in a forward head position — whether at a computer, looking at a phone or driving — places increased load on the cervical spine and supporting muscles. Over time, this can lead to muscle fatigue, stiffness and pain.

**Cervical spondylosis** — This is age-related wear and tear of the cervical spine, including changes to the vertebrae and discs. It is very common and does not always cause symptoms, but when it does, physiotherapy can help manage them.

**Whiplash** — A sudden movement of the head, typically in a road traffic accident, can strain the muscles, ligaments and joints of the cervical spine.

**Disc-related conditions** — A cervical disc herniation or bulge can irritate nearby nerves and cause pain, tingling or weakness in the arm.

**Muscle tension and stress** — Anxiety and stress commonly manifest as muscle tightness in the neck and upper shoulder area.

## What Does Physiotherapy for Neck Pain Involve?

### Assessment

Your physiotherapist will take a detailed history of your neck pain, assess your posture and the movement of your cervical spine, and carry out tests to identify any nerve involvement or specific structural issues. This guides the treatment plan.

### Manual Therapy

Hands-on treatment for the neck may include:
- Gentle joint mobilisation to improve cervical spine movement
- Soft tissue release and massage for tight muscles
- Traction (gentle stretching of the cervical spine) in some cases

### Exercise

Specific exercises are a key part of neck pain rehabilitation:
- **Cervical stabilisation exercises** — to strengthen the deep muscles that support the neck
- **Shoulder and upper back strengthening** — to reduce load on the cervical spine
- **Flexibility exercises** — to improve the range of motion and reduce stiffness

### Postural and Ergonomic Advice

Your physiotherapist will discuss your daily habits and workspace setup. Simple adjustments — such as raising your screen height, adjusting your chair and taking regular movement breaks — can make a significant difference to neck symptoms, particularly in postural cases.

## When Should You Seek Help for Neck Pain?

You should consider seeing a physiotherapist if:
- Your neck pain has been present for more than a few weeks
- You have arm pain, tingling or numbness alongside neck symptoms
- Your symptoms are interfering with sleep or daily activities
- You have had a previous neck injury and symptoms have returned or worsened

If your neck pain is accompanied by severe or rapidly progressing arm weakness, significant balance problems or difficulty swallowing, seek urgent medical attention.

## Physiotherapy for Neck Pain in Dehradun

Physiotherapy assessment for neck pain is available at our Rajpur Road and Bhaniyawala clinics in Dehradun. Home visits can also be arranged for patients who are unable to travel.

*This article is for general information only. Please consult a qualified physiotherapist or healthcare professional for individual advice about your symptoms.*
    `,
  },
  {
    slug: 'sports-injury-rehabilitation-dehradun',
    title: 'Sports Injury Rehabilitation: Recovery and Return to Sport',
    excerpt: 'A guide to sports injury rehabilitation — what it involves, how long recovery takes and how physiotherapy supports safe return to sport and physical activity.',
    category: 'Sports Physiotherapy',
    author: 'Dr. Sonali Rawat',
    authorRole: 'Sports Physiotherapy Consultant, BPT, MPT (Sports)',
    publishedDate: '2025-02-25',
    updatedDate: '2025-06-01',
    readTime: '6 min read',
    relatedServices: ['sports-physiotherapy', 'orthopedic-physiotherapy', 'post-surgery-rehabilitation'],
    relatedConditions: ['sports-injury', 'knee-pain', 'shoulder-pain'],
    tags: ['sports injury', 'physiotherapy', 'Dehradun', 'sports rehabilitation', 'return to sport'],
    metaTitle: 'Sports Injury Rehabilitation in Dehradun | Return to Sport Guide',
    metaDescription: 'Sports injury rehabilitation guide from a Dehradun sports physiotherapist. Recovery, return to sport and what to expect from sports physio for ACL, muscle and joint injuries.',
    content: `
Sports injuries range from minor muscle strains that resolve within days to significant ligament injuries that require months of structured rehabilitation before a safe return to sport. Whatever the nature of the injury, how you manage the rehabilitation phase has a significant impact on recovery and the risk of re-injury.

## The Stages of Sports Injury Rehabilitation

Sports injury rehabilitation is typically divided into phases, each with specific goals:

### Phase 1: Acute Management
The immediate priority after a sports injury is to manage pain and swelling and protect the injured area. The RICE principle (Rest, Ice, Compression, Elevation) is a useful starting point for many acute injuries. Early physiotherapy input at this stage helps assess the severity of the injury and guide appropriate management.

### Phase 2: Restoring Range of Motion
Once acute pain and swelling have settled, the focus shifts to restoring normal range of motion in the affected joint or body part. Gentle exercises, manual therapy and soft tissue work are typically used at this stage.

### Phase 3: Rebuilding Strength
Strengthening the muscles around the injured area is a critical part of sports rehabilitation. Weakness in surrounding muscles is both a consequence of injury and a risk factor for re-injury. Progressive strengthening exercises, guided by your physiotherapist, form the foundation of this phase.

### Phase 4: Neuromuscular Control and Balance
The nervous system's ability to control movement — proprioception — is often disrupted by injury. Exercises to improve balance, coordination and movement control are an important part of preparing the body for return to sport.

### Phase 5: Sport-Specific Rehabilitation
This phase bridges the gap between clinical recovery and the demands of your specific sport. Exercises become more dynamic and sport-specific, preparing the body for the movements, loads and speeds required in competitive activity.

### Phase 6: Return to Sport
Return to sport is guided by objective criteria — not simply time from injury. Your physiotherapist will assess strength symmetry, movement quality and sport-specific performance before clearing you for full participation.

## Common Sports Injuries Seen in Dehradun

In our sports physiotherapy practice in Dehradun, we regularly see:
- ACL injuries and ligament sprains (knee and ankle)
- Muscle strains (hamstring, quadriceps, calf)
- Tendinopathy (Achilles, patellar, rotator cuff)
- Shoulder injuries and dislocations
- Runner's knee and IT band syndrome
- Stress fractures

## How Long Does Sports Rehabilitation Take?

Recovery time varies significantly:
- Mild muscle strains: 1–3 weeks
- Moderate ligament sprains: 4–8 weeks
- ACL reconstruction: 6–12 months of structured rehabilitation
- Rotator cuff repair: 3–6 months

These are general estimates. Your physiotherapist will provide more specific guidance based on your individual assessment.

## Physiotherapy for Sports Injuries in Dehradun

Our sports physiotherapy team at Rajpur Road provides assessment and rehabilitation for a wide range of sports injuries. Whether you are a competitive athlete or someone who exercises for health and enjoyment, we can develop a rehabilitation plan suited to your injury and your goals.

*This article is for general information and education. It is not a substitute for individual professional advice from a qualified physiotherapist.*
    `,
  },
  {
    slug: 'frozen-shoulder-treatment-physio',
    title: 'Frozen Shoulder: What It Is and How Physiotherapy May Help',
    excerpt: 'Frozen shoulder can be a frustrating and painful condition. This guide explains what it is, the stages it goes through and how physiotherapy can support recovery.',
    category: 'Orthopedic Physiotherapy',
    author: 'Dr. Om Prakash',
    authorRole: 'Senior Consultant Physiotherapist, BPT, MPT (Orthopaedics)',
    publishedDate: '2025-03-20',
    updatedDate: '2025-06-01',
    readTime: '5 min read',
    relatedServices: ['orthopedic-physiotherapy', 'pain-management'],
    relatedConditions: ['frozen-shoulder', 'shoulder-pain', 'joint-pain'],
    tags: ['frozen shoulder', 'adhesive capsulitis', 'physiotherapy', 'Dehradun', 'shoulder pain'],
    metaTitle: 'Frozen Shoulder Physiotherapy in Dehradun | Adhesive Capsulitis Guide',
    metaDescription: 'Understanding frozen shoulder and how physiotherapy can help. A guide to stages, treatment and recovery for frozen shoulder from a Dehradun physiotherapist.',
    content: `
Frozen shoulder — medically known as adhesive capsulitis — is a condition that causes pain and gradually worsening stiffness in the shoulder joint. It can be a frustrating experience because it tends to develop slowly and can last for a considerable period without appropriate management.

## What Is Frozen Shoulder?

The shoulder joint is surrounded by a capsule of connective tissue. In frozen shoulder, this capsule becomes inflamed and thickened, leading to a significant reduction in the volume inside the joint and a corresponding loss of movement. The exact cause is not always clear, but it is more common in people aged 40 to 60, in women, and in people with certain conditions such as diabetes or thyroid problems.

## The Three Stages of Frozen Shoulder

Frozen shoulder typically progresses through three stages:

**Stage 1 — Freezing (Painful Phase)**
This stage is characterised by a gradual increase in shoulder pain, often worse at night. Movement becomes more limited over time. This phase can last from two to nine months.

**Stage 2 — Frozen (Adhesive Phase)**
Pain may begin to reduce, but the shoulder becomes significantly stiff. Range of motion is markedly reduced, making daily tasks — such as dressing, reaching overhead or behind the back — difficult. This stage can last four to twelve months.

**Stage 3 — Thawing (Recovery Phase)**
Movement gradually returns, though this can take several months. Full recovery is possible in many cases, though some people retain a slight reduction in range of motion.

## How Can Physiotherapy Help?

Physiotherapy for frozen shoulder is tailored to the stage of the condition:

### During the Painful Phase
- Gentle range of motion exercises within a comfortable range
- Pain management strategies — including electrotherapy (TENS), heat or cold
- Education on positioning and activity modification to avoid aggravating the condition
- Pendulum exercises to maintain some joint movement

### During the Frozen Phase
- Gradual stretching and mobilisation exercises to encourage improved range of motion
- Manual therapy — joint mobilisation to help restore movement
- Progressive exercise programme as tolerated
- Continued pain management

### During the Recovery Phase
- Active strengthening of the rotator cuff and shoulder stabilisers
- Progressive return to full daily activities
- Sport-specific rehabilitation if returning to athletic activity

## What Should You Expect?

Progress with frozen shoulder can be slow and it is important to have realistic expectations. Physiotherapy does not cure frozen shoulder overnight, but it can help maintain movement, manage pain and support the natural recovery process. People who engage consistently with physiotherapy and their home exercise programme generally do better than those who avoid movement due to pain.

## When to See a Physiotherapist for Shoulder Pain

If your shoulder has become progressively stiffer and more painful over the past weeks or months, it is worth having it assessed. Other causes of shoulder stiffness and pain — such as rotator cuff tears or arthritis — can be identified during a thorough clinical assessment and may need different management.

## Shoulder Physiotherapy in Dehradun

Physiotherapy assessment for frozen shoulder and other shoulder conditions is available at our Rajpur Road and Bhaniyawala clinics. Home visits can be arranged for patients who cannot travel to the clinic.

*This article is for general information only and does not constitute medical advice.*
    `,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug)
}
