import { Check } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { BOOKING_URL } from '@/lib/booking';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const bullets = ['cdcp.bullet1', 'cdcp.bullet2', 'cdcp.bullet3', 'cdcp.bullet4'];
const faqKeys = ['q1', 'q2', 'q3'];

const CdcpSection = () => {
  const { t } = useI18n();

  return (
    <section className="section-padding bg-secondary/40">
      <div className="container-site max-w-3xl">
        {/* Headline + subheadline */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green mb-4">
            {t('cdcp.title')}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('cdcp.desc')}
          </p>
        </div>

        {/* Trust bullets */}
        <ul className="grid sm:grid-cols-2 gap-3 mb-10">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border/60"
            >
              <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
              <span className="text-foreground text-sm md:text-base leading-snug">
                {t(b)}
              </span>
            </li>
          ))}
        </ul>

        {/* Mini FAQ */}
        <div className="bg-background rounded-lg border border-border/60 px-5 md:px-6 mb-10">
          <Accordion type="single" collapsible>
            {faqKeys.map((key) => (
              <AccordionItem key={key} value={key} className="last:border-b-0">
                <AccordionTrigger className="text-left font-heading text-base md:text-lg font-medium">
                  {t(`faq.${key}`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t(`faq.a${key.slice(1)}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Single primary CTA */}
        <div className="flex justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-semibold text-base md:text-lg tracking-wider uppercase rounded-md shadow-lg hover:bg-brand-green-dark hover:shadow-xl transition-all"
          >
            {t('cta.bookOnline')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CdcpSection;
