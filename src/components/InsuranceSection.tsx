import { useI18n } from '@/lib/i18n';

const InsuranceSection = () => {
  const { t } = useI18n();

  return (
    <section className="py-10 md:py-14 bg-brand-cream">
      <div className="container-site text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green mb-2">
          {t('insurance.title')}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          {t('insurance.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default InsuranceSection;
