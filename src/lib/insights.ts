export interface ArticleSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
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
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
