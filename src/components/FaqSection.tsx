import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { BOOKING_URL } from '@/lib/booking';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqKeys = ['q1', 'q2', 'q3'];

const FaqSection = () => {
  const { t } = useI18n();

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-site max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green text-center mb-10">
          {t('faq.title')}
        </h2>

        <Accordion type="single" collapsible className="mb-8">
          {faqKeys.map((key) => (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger className="text-left font-heading text-base md:text-lg font-medium">
                {t(`faq.${key}`)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {t(`faq.a${key.slice(1)}`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase rounded hover:bg-brand-green-dark transition-colors"
          >
            {t('cta.bookOnline')}
          </a>
          <Link
            to="/faq"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-medium text-sm tracking-wider uppercase rounded hover:bg-primary/5 transition-colors"
          >
            {t('nav.faq')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
