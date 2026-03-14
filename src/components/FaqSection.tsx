import { useI18n } from '@/lib/i18n';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'];

const FaqSection = () => {
  const { t } = useI18n();

  return (
    <section className="section-padding">
      <div className="container-site max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green text-center mb-10">
          {t('faq.title')}
        </h2>

        <Accordion type="single" collapsible defaultValue="q1">
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
      </div>
    </section>
  );
};

export default FaqSection;
