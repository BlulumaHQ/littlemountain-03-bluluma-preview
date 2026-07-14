import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import implantIcon from '@/assets/icons/implant-icon.svg';
import orthodonticIcon from '@/assets/icons/orthodontic-icon.svg';
import pediatricIcon from '@/assets/icons/pediatric-icon.svg';
import estheticIcon from '@/assets/icons/esthetic-icon.svg';
import restorativeIcon from '@/assets/icons/restorative-icon.svg';
import maintenanceIcon from '@/assets/icons/maintenance-icon.svg';

type ServiceItem = {
  key: string;
  icon: string;
  to: string;
  ariaKey?: string;
};

const services: ServiceItem[] = [
  { key: 'implants', icon: implantIcon, to: '/services/dental-implants', ariaKey: 'services.implants.aria' },
  { key: 'orthodontics', icon: orthodonticIcon, to: '/services#orthodontics' },
  { key: 'pediatric', icon: pediatricIcon, to: '/services#pediatric' },
  { key: 'esthetics', icon: estheticIcon, to: '/services#esthetics' },
  { key: 'restoratives', icon: restorativeIcon, to: '/services#restoratives' },
  { key: 'maintenance', icon: maintenanceIcon, to: '/services#maintenance' },
];

const IMPLANT_ARIA: Record<string, string> = {
  en: 'Learn more about Dental Implants',
  zh: '了解更多人工植牙資訊',
  ja: 'インプラントの詳細はこちら',
};

const ServicesSection = () => {
  const { t, lang } = useI18n();

  return (
    <section className="py-8 md:py-10 pb-4 md:pb-6">
      <div className="container-site text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green mb-3">
          {t('services.title')}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          {t('services.subtitle')}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {services.map((s) => (
            <Link
              key={s.key}
              to={s.to}
              aria-label={s.key === 'implants' ? IMPLANT_ARIA[lang] ?? IMPLANT_ARIA.en : undefined}
              onClick={
                s.key === 'implants'
                  ? () => {
                      try {
                        const w = window as unknown as { gtag?: (...a: unknown[]) => void; dataLayer?: unknown[] };
                        if (typeof w.gtag === 'function') {
                          w.gtag('event', 'implant_home_icon_click', {
                            clinic: 'Little Mountain Dental Centre',
                            language: lang,
                            page_path: '/services/dental-implants',
                          });
                        } else if (Array.isArray(w.dataLayer)) {
                          w.dataLayer.push({ event: 'implant_home_icon_click', clinic: 'Little Mountain Dental Centre', language: lang });
                        }
                      } catch { /* noop */ }
                    }
                  : undefined
              }
              className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-brand-cream transition-colors"
            >
              <img src={s.icon} alt={t(`services.${s.key}`)} className="w-16 h-16 md:w-20 md:h-20" />
              <span className="font-heading text-base font-medium text-foreground group-hover:text-primary transition-colors">
                {t(`services.${s.key}`)}
              </span>
              <span className="text-xs text-muted-foreground leading-snug">
                {t(`services.${s.key}.short`)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
