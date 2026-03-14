import { useI18n } from '@/lib/i18n';
import trustImg1 from '@/assets/trust-img-1.webp';
import trustImg2 from '@/assets/trust-img-2.webp';

const TrustSection = () => {
  const { t } = useI18n();

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={trustImg1}
              alt="Dental office environment"
              className="rounded-lg w-full h-64 object-cover shadow-sm"
              loading="lazy"
            />
            <img
              src={trustImg2}
              alt="Dental equipment"
              className="rounded-lg w-full h-64 object-cover shadow-sm mt-8"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green mb-6">
              {t('trust.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('trust.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
