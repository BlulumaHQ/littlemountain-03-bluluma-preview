import { useI18n } from '@/lib/i18n';
import { BOOKING_URL } from '@/lib/booking';
import Seo from '@/components/Seo';
import PageHeader from '@/components/PageHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface CatDef {
  titleKey: string;
  items: { q: string; a: string }[];
}

const categories: CatDef[] = [
  {
    titleKey: 'faqPage.cat1',
    items: [
      { q: 'faqPage.c1q1', a: 'faqPage.c1a1' },
      { q: 'faqPage.c1q2', a: 'faqPage.c1a2' },
    ],
  },
  {
    titleKey: 'faqPage.cat2',
    items: [
      { q: 'faqPage.c2q1', a: 'faqPage.c2a1' },
    ],
  },
  {
    titleKey: 'faqPage.cat3',
    items: [
      { q: 'faqPage.c3q1', a: 'faqPage.c3a1' },
      { q: 'faqPage.c3q2', a: 'faqPage.c3a2' },
      { q: 'faqPage.c3q3', a: 'faqPage.c3a3' },
    ],
  },
  {
    titleKey: 'faqPage.cat4',
    items: [
      { q: 'faqPage.c4q1', a: 'faqPage.c4a1' },
      { q: 'faqPage.c4q2', a: 'faqPage.c4a2' },
      { q: 'faqPage.c4q3', a: 'faqPage.c4a3' },
    ],
  },
  {
    titleKey: 'faqPage.cat5',
    items: [
      { q: 'faqPage.c5q1', a: 'faqPage.c5a1' },
      { q: 'faqPage.c5q2', a: 'faqPage.c5a2' },
      { q: 'faqPage.c5q3', a: 'faqPage.c5a3' },
      { q: 'faqPage.c5q4', a: 'faqPage.c5a4' },
    ],
  },
];

const FaqPage = () => {
  const { t } = useI18n();

  // JSON-LD structured data for FAQ
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: categories.flatMap((c) =>
      c.items.map((it) => ({
        '@type': 'Question',
        name: t(it.q),
        acceptedAnswer: { '@type': 'Answer', text: t(it.a) },
      }))
    ),
  };

  return (
    <>
      <Seo
        title="Dental FAQs | Little Mountain Dental Centre Vancouver"
        description="Find answers about booking, first visits, emergency appointments, clinic location, and what to expect at Little Mountain Dental Centre in Vancouver."
        canonicalPath="/faq"
      />
      <PageHeader title={t('faqPage.title')} />

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <p className="text-center text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            {t('faqPage.desc')}
          </p>
          <div className="flex justify-center mb-12">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase rounded hover:bg-brand-green-dark transition-colors"
            >
              {t('cta.bookOnline')}
            </a>
          </div>

          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.titleKey}>
                <h2 className="font-heading text-xl md:text-2xl font-semibold text-brand-green mb-4">
                  {t(cat.titleKey)}
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={cat.items[0]?.q}
                >
                  {cat.items.map((it) => (
                    <AccordionItem key={it.q} value={it.q}>
                      <AccordionTrigger className="text-left font-heading text-base md:text-lg font-medium">
                        {t(it.q)}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {it.a === 'faqPage.c5a1' ? (
                          <a
                            href="https://maps.google.com/?q=620+East+Broadway,+Vancouver,+BC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {t(it.a)}
                          </a>
                        ) : (
                          t(it.a)
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/40">
        <div className="container-site max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green mb-3">
            {t('faqPage.stillTitle')}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t('faqPage.stillText')}
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase rounded hover:bg-brand-green-dark transition-colors"
          >
            {t('cta.bookOnline')}
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
};

export default FaqPage;
