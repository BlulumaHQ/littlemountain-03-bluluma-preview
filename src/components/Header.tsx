import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import logoColor from '@/assets/logo-color.svg';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.office'), to: '/office' },
    { label: t('nav.team'), to: '/#our-team' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.contact'), to: '/#contact-section' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavClick = (to: string) => {
    setMobileOpen(false);
    if (to === '/#our-team') {
      if (location.pathname === '/') {
        scrollToSection('our-team');
      } else {
        navigate('/');
        setTimeout(() => scrollToSection('our-team'), 300);
      }
    } else if (to === '/#contact-section') {
      if (location.pathname === '/') {
        scrollToSection('contact-section');
      } else {
        navigate('/');
        setTimeout(() => scrollToSection('contact-section'), 300);
      }
    }
  };

  const isAnchorLink = (to: string) => to === '/#our-team' || to === '/#contact-section';

  const toggleLang = () => setLang(lang === 'en' ? 'zh' : 'en');

  return (
    <>
      {/* Utility bar */}
      <div className="bg-primary">
        <div className="container-site flex items-center justify-end gap-4 py-1.5 text-xs text-primary-foreground">
          <a href="tel:6048745111" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone size={12} />
            <span>(604) 874-5111</span>
          </a>
          <span className="opacity-60">|</span>
          <span>#208 – 4818 Main Street, Vancouver, BC</span>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container-site flex items-center justify-between h-16">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img src={logoColor} alt="Little Mountain Dental Centre" className="h-8 md:h-9" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              if (isAnchorLink(item.to)) {
                return (
                  <button
                    key={item.to}
                    onClick={() => handleNavClick(item.to)}
                    className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase"
                  >
                    {item.label}
                  </button>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase"
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={toggleLang}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase"
            >
              {t('nav.lang')}
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="container-site py-4 flex flex-col gap-3">
              {navItems.map((item) => {
                if (isAnchorLink(item.to)) {
                  return (
                    <button
                      key={item.to}
                      onClick={() => handleNavClick(item.to)}
                      className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary py-2 uppercase text-left"
                    >
                      {item.label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary py-2 uppercase"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <button
                onClick={() => { toggleLang(); setMobileOpen(false); }}
                className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary py-2 text-left uppercase"
              >
                {t('nav.lang')}
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
