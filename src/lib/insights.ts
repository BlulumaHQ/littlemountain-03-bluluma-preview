import cdcpImage from '@/assets/insights/cdcp-coverage-vancouver.jpg';
import childrenImage from '@/assets/insights/children-dental-coverage-bc.jpg';
import costImage from '@/assets/insights/dental-visit-cost-vancouver.jpg';
import bookImage from '@/assets/insights/book-dentist-vancouver.jpg';
import billingImage from '@/assets/insights/direct-billing-vancouver.jpg';
import anxietyImage from '@/assets/insights/dental-anxiety-vancouver.jpg';

export interface ArticleSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  sections: ArticleSection[];
  ctaText: string;
}

export const articles: Article[] = [
  {
    slug: 'cdcp-coverage-vancouver',
    title:
      'CDCP Coverage in Vancouver: What’s Covered, What’s Not, and What You May Still Pay',
    description:
      'A clear guide to what the Canadian Dental Care Plan covers, what it doesn’t, and the out-of-pocket costs Vancouver patients should expect.',
    image: cdcpImage,
    imageAlt:
      'dentist explaining CDCP dental coverage to patient in Vancouver clinic',
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'The Canadian Dental Care Plan (CDCP) has made dental care more accessible for many Canadians. However, many patients are still unsure what is actually covered — and whether they will need to pay anything out of pocket.',
          'This guide explains what patients in Vancouver should realistically expect when using CDCP.',
        ],
      },
      {
        heading: 'What CDCP Typically Covers',
        paragraphs: ['CDCP generally provides partial coverage for:'],
        bullets: [
          'Exams and check-ups',
          'Basic cleanings',
          'X-rays',
          'Some preventive treatments',
        ],
      },
      {
        heading: 'What CDCP May Not Fully Cover',
        paragraphs: ['Patients should be aware that:'],
        bullets: [
          'Not all procedures are covered',
          'Some treatments require pre-approval',
          'Coverage amounts may be lower than standard dental fees',
        ],
      },
      {
        heading: 'Understanding Out-of-Pocket Costs',
        paragraphs: ['Out-of-pocket costs can vary depending on:'],
        bullets: [
          'Type of treatment',
          'Frequency limits',
          'Individual eligibility',
        ],
      },
      {
        heading: 'What Patients Should Do Before Booking',
        paragraphs: ['Before booking an appointment, patients should:'],
        bullets: [
          'Ensure their CDCP coverage is active',
          'Understand renewal requirements',
          'Be prepared for possible co-payments',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Understanding your CDCP coverage can help you avoid surprises and make confident decisions about your dental care. At our clinic, we help verify your coverage and explain any estimated costs before your visit.',
        ],
      },
    ],
    ctaText:
      'Book your appointment online and we’ll help review your coverage before your visit.',
  },
  {
    slug: 'children-dental-coverage-bc',
    title:
      'Children’s Dental Coverage in BC: CDCP vs Healthy Kids — What Parents Need to Know',
    description:
      'How CDCP and the BC Healthy Kids Program work for children, what they cover, and what parents should check before booking.',
    image: childrenImage,
    imageAlt:
      'child dental checkup with dentist and parent in Vancouver dental clinic',
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Many parents in British Columbia are unsure how dental coverage works for their children, especially with both CDCP and Healthy Kids programs available.',
          'Understanding how these programs work can help families make better decisions about their child’s dental care.',
        ],
      },
      {
        heading: 'CDCP for Children',
        paragraphs: [
          'CDCP provides dental coverage for eligible families, including children. It may include:',
        ],
        bullets: [
          'Exams and check-ups',
          'Preventive care',
          'Some basic treatments',
        ],
      },
      {
        heading: 'Healthy Kids Program (BC)',
        paragraphs: [
          'The Healthy Kids Program is designed to support children from low-income families in British Columbia. It may help cover:',
        ],
        bullets: ['Basic dental services', 'Essential treatments'],
      },
      {
        heading: 'Can Both Programs Be Used?',
        paragraphs: [
          'In some cases, children may qualify for both CDCP and Healthy Kids. However:',
        ],
        bullets: [
          'Coverage rules may differ',
          'Not all services overlap',
          'Coordination of benefits may apply',
        ],
      },
      {
        heading: 'Possible Out-of-Pocket Costs',
        paragraphs: ['Even with coverage, families should be aware that:'],
        bullets: [
          'Fee differences may exist',
          'Frequency limits may apply',
          'Some services may not be fully covered',
        ],
      },
      {
        heading: 'What Parents Should Do',
        paragraphs: ['Before booking:'],
        bullets: [
          'Check eligibility for both programs',
          'Understand coverage limits',
          'Confirm what may not be covered',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'A clear understanding of your child’s dental coverage helps avoid confusion and unexpected costs. Our team can help review your child’s coverage and guide you through the process.',
        ],
      },
    ],
    ctaText:
      'Book an appointment and we’ll help you review your child’s coverage before the visit.',
  },
  {
    slug: 'dental-visit-cost-vancouver',
    title:
      'How Much Does a Dental Visit Cost in Vancouver? A Realistic Breakdown with Insurance',
    description:
      'A realistic look at dental visit costs in Vancouver, how insurance and CDCP affect pricing, and how to avoid unexpected charges.',
    image: costImage,
    imageAlt:
      'dental clinic consultation discussing treatment cost and insurance Vancouver',
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'One of the most common concerns for patients is the cost of dental care. Many people delay treatment simply because they are unsure how much they will need to pay.',
          'This guide provides a realistic overview of dental costs in Vancouver and how insurance affects pricing.',
        ],
      },
      {
        heading: 'Typical Cost Factors',
        paragraphs: ['Dental costs vary depending on:'],
        bullets: [
          'Type of treatment',
          'Clinic fees',
          'Insurance coverage',
          'Frequency limits',
        ],
      },
      {
        heading: 'With Insurance or CDCP',
        paragraphs: ['When using insurance or CDCP:'],
        bullets: [
          'A portion of the treatment cost may be covered',
          'Coverage percentages vary',
          'Some treatments may require approval',
        ],
      },
      {
        heading: 'Without Insurance',
        paragraphs: ['For patients without insurance:'],
        bullets: [
          'Full fees apply',
          'Costs depend on treatment complexity',
          'Preventive care is usually more affordable than major procedures',
        ],
      },
      {
        heading: 'Why Costs Feel Unclear',
        paragraphs: ['Many patients feel uncertain because:'],
        bullets: [
          'Fee schedules differ',
          'Coverage rules are complex',
          'Not all clinics explain costs clearly',
        ],
      },
      {
        heading: 'What Patients Should Do',
        paragraphs: ['To avoid surprises:'],
        bullets: [
          'Confirm your coverage',
          'Ask for cost estimates',
          'Understand what is included',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Understanding dental costs helps you plan ahead and make confident decisions. At our clinic, we provide clear explanations before treatment begins.',
        ],
      },
    ],
    ctaText:
      'Book your appointment online and we’ll walk you through your expected costs before your visit.',
  },
  {
    slug: 'book-dentist-vancouver',
    title:
      'How to Book a Dentist in Vancouver: What to Expect Before Your First Visit',
    description:
      'A simple guide to booking a dental appointment in Vancouver, what happens after you book, and what to expect at your first visit.',
    image: bookImage,
    imageAlt:
      'patient booking a dental appointment online from a laptop in Vancouver',
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Booking a dental appointment for the first time can feel uncertain, especially if you’re not sure what to expect.',
          'Many patients delay booking simply because they don’t know how the process works.',
        ],
      },
      {
        heading: 'Booking Options in Vancouver',
        paragraphs: ['Most clinics offer:'],
        bullets: [
          'Online booking systems',
          'Phone booking',
          'Appointment requests',
        ],
      },
      {
        paragraphs: [
          'Online booking is often the fastest and most convenient option.',
        ],
      },
      {
        heading: 'What Happens After You Book',
        paragraphs: ['After booking, patients can expect:'],
        bullets: [
          'Appointment confirmation',
          'Basic information collection',
          'Instructions if needed',
        ],
      },
      {
        paragraphs: [
          'Some clinics may also help review your insurance coverage in advance.',
        ],
      },
      {
        heading: 'Your First Visit',
        paragraphs: ['A typical first visit may include:'],
        bullets: [
          'Examination',
          'Consultation',
          'Discussion of any concerns',
        ],
      },
      {
        paragraphs: [
          'The goal is to understand your needs before recommending treatment.',
        ],
      },
      {
        heading: 'Common Concerns Before Booking',
        paragraphs: ['Patients often worry about:'],
        bullets: [
          'Cost',
          'Insurance coverage',
          'Time commitment',
        ],
      },
      {
        paragraphs: [
          'Understanding these in advance helps reduce hesitation.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Booking your first dental appointment doesn’t have to be complicated.',
        ],
      },
    ],
    ctaText:
      'Book your visit online in just a few minutes — and we’ll guide you through everything else.',
  },
  {
    slug: 'direct-billing-vancouver',
    title:
      'Direct Billing Dental Clinics in Vancouver: How It Works and What to Expect',
    description:
      'A clear explanation of how direct billing works at Vancouver dental clinics, what it covers, and how to prepare for your visit.',
    image: billingImage,
    imageAlt:
      'patient handing insurance card to friendly dental receptionist in Vancouver clinic',
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Direct billing allows dental clinics to submit insurance claims on your behalf, making the process simpler for patients.',
          'However, many people are still unsure how it works.',
        ],
      },
      {
        heading: 'What Is Direct Billing',
        paragraphs: ['Direct billing means:'],
        bullets: [
          'The clinic sends claims directly to your insurance provider',
          'You only pay the remaining balance (if any)',
        ],
      },
      {
        paragraphs: ['This reduces paperwork and upfront costs.'],
      },
      {
        heading: 'What Direct Billing Does Not Mean',
        paragraphs: ['Patients should understand:'],
        bullets: [
          'Not all costs are always covered',
          'Coverage depends on your plan',
          'You may still have co-payments',
        ],
      },
      {
        heading: 'Benefits of Direct Billing',
        paragraphs: ['Direct billing helps patients:'],
        bullets: [
          'Save time',
          'Avoid paperwork',
          'Understand costs more clearly',
        ],
      },
      {
        heading: 'What to Prepare',
        paragraphs: ['Before your visit:'],
        bullets: [
          'Bring insurance information',
          'Confirm your coverage',
          'Be aware of possible limits',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Direct billing makes dental visits more convenient, but it’s still important to understand your coverage.',
        ],
      },
    ],
    ctaText:
      'Book your appointment online and we’ll help guide you through the direct billing process.',
  },
  {
    slug: 'dental-anxiety-vancouver',
    title:
      'Afraid to Visit the Dentist? What Vancouver Patients Should Know Before Booking',
    description:
      'Practical, reassuring guidance for patients with dental anxiety in Vancouver — what to expect and how to make your visit easier.',
    image: anxietyImage,
    imageAlt:
      'calm dentist reassuring an adult patient in a bright Vancouver dental clinic',
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Dental anxiety is more common than many people think.',
          'For some patients, fear or uncertainty can delay dental visits for months or even years.',
        ],
      },
      {
        heading: 'Why Patients Feel Anxious',
        paragraphs: ['Common reasons include:'],
        bullets: [
          'Fear of pain',
          'Uncertainty about procedures',
          'Concerns about cost',
        ],
      },
      {
        heading: 'What Modern Dental Clinics Do Differently',
        paragraphs: ['Today’s clinics focus on:'],
        bullets: [
          'Clear communication',
          'Comfortable environments',
          'Step-by-step explanations',
        ],
      },
      {
        heading: 'What to Expect During Your Visit',
        paragraphs: ['Patients can expect:'],
        bullets: [
          'A calm, supportive approach',
          'Time to ask questions',
          'No pressure decisions',
        ],
      },
      {
        heading: 'How to Make Your Visit Easier',
        paragraphs: ['Simple steps:'],
        bullets: [
          'Book a consultation first',
          'Ask questions in advance',
          'Communicate your concerns',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Dental visits don’t have to be stressful.',
        ],
      },
    ],
    ctaText:
      'Book your visit online and take the first step at your own pace.',
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
