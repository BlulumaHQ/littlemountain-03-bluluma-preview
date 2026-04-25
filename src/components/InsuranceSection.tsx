import { useI18n } from '@/lib/i18n';

const InsuranceSection = () => {
  const { t } = useI18n();

  return (
    <section className="py-12 md:py-16 bg-brand-cream">
      <div className="container-site text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-brand-green mb-3 md:mb-4">
          {t('insurance.title')}
        </h2>
        <p className="font-heading text-base md:text-xl font-light text-foreground/80 mb-3 md:mb-4">
          {t('insurance.subtitle')}
        </p>
        <p className="text-sm md:text-base font-medium text-brand-green/90">
          {t('insurance.cta')}
        </p>
      </div>
    </section>
  );
};

export default InsuranceSection;
