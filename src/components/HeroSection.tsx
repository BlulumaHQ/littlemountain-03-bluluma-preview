import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import heroVideo from '@/assets/hero-video.mp4';

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative h-[60vh] md:h-[85vh] overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/25" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-8xl font-semibold text-background max-w-4xl leading-[1.1] mb-8 uppercase tracking-wide">
          {t('hero.title')}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase rounded hover:bg-brand-green-dark transition-colors"
          >
            {t('hero.cta1')}
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-3 border border-background text-background font-medium text-sm tracking-wider uppercase rounded hover:bg-background/10 transition-colors"
          >
            {t('hero.cta2')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
