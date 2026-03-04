import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';

const StickyBookNow = () => {
  const { t } = useI18n();

  return (
    <Link
      to="/contact"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-primary text-primary-foreground text-xs font-semibold tracking-wider uppercase px-3 py-6 rounded-l-md shadow-lg hover:bg-brand-green-dark transition-colors"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      {t('nav.bookNow')}
    </Link>
  );
};

export default StickyBookNow;
