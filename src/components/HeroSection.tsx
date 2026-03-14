import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import heroVideo from '@/assets/hero-video.mp4';
import heroMobile from '@/assets/hero-mobile.jpg';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const { t, lang } = useI18n();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      const headerOffset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Render title with line break for Chinese
  const renderTitle = () => {
    const title = t('hero.title');
    if (lang === 'zh' && title.includes('\n')) {
      return title.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          {i === 0 && <br />}
        </span>
      ));
    }
    return title;
  };

  return (
    <section className="relative h-[60vh] md:h-[85vh] overflow-hidden">
      {isMobile ? (
        <img
          src={heroMobile}
          alt="Little Mountain Dental Centre"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-foreground/25" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-8xl font-semibold text-background max-w-4xl leading-[1.1] mb-6 uppercase tracking-wide">
          {renderTitle()}
        </h1>
        <p className="text-background/90 text-base md:text-lg max-w-xl leading-relaxed mb-8">
          {t('hero.cta.line1')}
          <br />
          {t('hero.cta.line2')}
          <br />
          {t('hero.cta.line3')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase rounded hover:bg-brand-green-dark transition-colors"
          >
            {t('hero.cta1')}
          </button>
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
