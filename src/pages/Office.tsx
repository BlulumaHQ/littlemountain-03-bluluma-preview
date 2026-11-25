import { useI18n } from '@/lib/i18n';
import PageHeader from '@/components/PageHeader';
import officeImg from '@/assets/clinic-treatment-room-wide.webp';
import trustImg1 from '@/assets/clinic-library-reading-area.webp';
import trustImg2 from '@/assets/dentist-and-child-with-tooth-model.webp';

const Office = () => {
  const { t } = useI18n();

  return (
    <>
      <PageHeader title={t('office.title')} subtitle={t('office.subtitle')} />
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <img src={officeImg} alt="Clinic treatment room with a green dental chair" className="rounded-lg w-full h-72 md:h-96 object-cover shadow-md" loading="lazy" />
          <div className="grid grid-cols-2 gap-4">
            <img src={trustImg1} alt="Bookshelves and seating in the clinic library" className="rounded-lg w-full h-full object-cover shadow-sm" loading="lazy" />
            <img src={trustImg2} alt="Dentist showing a model of teeth to a child" className="rounded-lg w-full h-full object-cover shadow-sm" loading="lazy" />
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
