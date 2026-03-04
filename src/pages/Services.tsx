import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import PageHeader from '@/components/PageHeader';

const serviceData = [
  {
    id: 'implants',
    titleKey: 'services.implants',
    descKey: 'service.implants.desc',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
  },
  {
    id: 'orthodontics',
    titleKey: 'services.orthodontics',
    descKey: 'service.orthodontics.desc',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
  },
  {
    id: 'pediatric',
    titleKey: 'services.pediatric',
    descKey: 'service.pediatric.desc',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
  },
  {
    id: 'esthetics',
    titleKey: 'services.esthetics',
    descKey: 'service.esthetics.desc',
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=80',
  },
  {
    id: 'restoratives',
    titleKey: 'services.restoratives',
    descKey: 'service.restoratives.desc',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
  },
  {
    id: 'maintenance',
    titleKey: 'services.maintenance',
    descKey: 'service.maintenance.desc',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
  },
];

const Services = () => {
  const { t } = useI18n();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const headerOffset = 80;
          const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <PageHeader title={t('services.title')} subtitle={t('services.subtitle')} />
      <div className="container-site section-padding">
        <div className="space-y-20">
          {serviceData.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? 'md:[direction:rtl]' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green mb-4">
                  {t(s.titleKey)}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{t(s.descKey)}</p>
              </div>
              <div className={`rounded-lg overflow-hidden shadow-md ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                <img
                  src={s.image}
                  alt={t(s.titleKey)}
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
