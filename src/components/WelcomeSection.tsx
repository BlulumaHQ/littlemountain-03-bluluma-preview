import { useI18n } from '@/lib/i18n';
import officeImg from '@/assets/office-welcome.jpg';

const WelcomeSection = () => {
  const { t } = useI18n();

  return (
    <section className="section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green mb-6">
              {t('welcome.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('welcome.text')}
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={officeImg}
              alt="Little Mountain Dental Centre office"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
