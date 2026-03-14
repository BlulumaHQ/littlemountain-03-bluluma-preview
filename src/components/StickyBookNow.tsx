import { useI18n } from '@/lib/i18n';
import { CalendarCheck } from 'lucide-react';

const StickyBookNow = () => {
  const { t } = useI18n();

  const handleClick = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      const headerOffset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 text-primary-foreground text-xs font-semibold tracking-wider uppercase px-3 py-6 rounded-l-md shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', backgroundColor: 'hsl(150 50% 14%)' }}
    >
      <CalendarCheck size={16} className="hidden md:block rotate-90" />
      {t('nav.bookNow')}
    </button>
  );
};

export default StickyBookNow;
