import { useI18n } from '@/lib/i18n';
import PageHeader from '@/components/PageHeader';
import officeImg from '@/assets/office-welcome.jpg';
import trustImg1 from '@/assets/office-trust-1.jpg';
import trustImg2 from '@/assets/office-trust-2.jpg';

const Office = () => {
  const { t } = useI18n();

  return (
    <>
      <PageHeader title={t('office.title')} subtitle={t('office.subtitle')} />
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <img src={officeImg} alt="Office" className="rounded-lg w-full h-72 md:h-96 object-cover shadow-md" loading="lazy" />
          <div className="grid grid-cols-2 gap-4">
            <img src={trustImg1} alt="Treatment room" className="rounded-lg w-full h-full object-cover shadow-sm" loading="lazy" />
            <img src={trustImg2} alt="Equipment" className="rounded-lg w-full h-full object-cover shadow-sm" loading="lazy" />
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green mb-6">
            {t('welcome.title')}
          </h2>
          <p className="text-muted-foreground leading-relaxed">{t('welcome.text')}</p>
        </div>
      </div>
    </>
  );
};

export default Office;
