import { useI18n } from '@/lib/i18n';
import { CalendarCheck } from 'lucide-react';

const BOOKING_URL = 'https://can4.recallmax.com/rsm/request/public/bookOnline/patient/layout.html?a=4I2a1Em7OEBY8Ctshkcy5vQAG_ERIToVBa1';

const StickyBookNow = () => {
  const { t } = useI18n();

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 text-primary-foreground text-xs font-semibold tracking-wider uppercase px-3 py-6 rounded-l-md shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', backgroundColor: 'hsl(150 50% 14%)' }}
    >
      <CalendarCheck size={16} className="hidden md:block rotate-90" />
      {t('nav.bookNow')}
    </a>
  );
};

export default StickyBookNow;
