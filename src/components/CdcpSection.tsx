import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { BOOKING_URL } from '@/lib/booking';

const CdcpSection = () => {
  const { t } = useI18n();
  const bullets = ['cdcp.bullet1', 'cdcp.bullet2', 'cdcp.bullet3', 'cdcp.bullet4'];

  return (
    <section className="section-padding bg-background">
      <div className="container-site max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green mb-4">
            {t('cdcp.title')}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('cdcp.desc')}
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 bg-secondary/40 rounded-lg p-4">
              <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
              <span className="text-foreground text-sm md:text-base leading-relaxed">{t(b)}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase rounded hover:bg-brand-green-dark transition-colors"
          >
            {t('cta.bookOnline')}
          </a>
          <Link
            to="/faq"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-medium text-sm tracking-wider uppercase rounded hover:bg-primary/5 transition-colors"
          >
            {t('cta.checkCoverage')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CdcpSection;
