import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import implantIcon from '@/assets/icons/implant-icon.svg';
import orthodonticIcon from '@/assets/icons/orthodontic-icon.svg';
import pediatricIcon from '@/assets/icons/pediatric-icon.svg';
import estheticIcon from '@/assets/icons/esthetic-icon.svg';
import restorativeIcon from '@/assets/icons/restorative-icon.svg';
import maintenanceIcon from '@/assets/icons/maintenance-icon.svg';

const services = [
  { key: 'implants', icon: implantIcon, anchor: '#implants' },
  { key: 'orthodontics', icon: orthodonticIcon, anchor: '#orthodontics' },
  { key: 'pediatric', icon: pediatricIcon, anchor: '#pediatric' },
  { key: 'esthetics', icon: estheticIcon, anchor: '#esthetics' },
  { key: 'restoratives', icon: restorativeIcon, anchor: '#restoratives' },
  { key: 'maintenance', icon: maintenanceIcon, anchor: '#maintenance' },
];

const ServicesSection = () => {
  const { t } = useI18n();

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
              to={`/services${s.anchor}`}
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
