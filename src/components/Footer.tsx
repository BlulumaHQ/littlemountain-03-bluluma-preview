import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import logoWhite from '@/assets/logo-white.svg';
import drWuLogo from '@/assets/dr-wu-logo.png';

const Footer = () => {
  const { t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();

  const services = [
    { label: t('services.implants'), href: '/services#implants' },
    { label: t('services.orthodontics'), href: '/services#orthodontics' },
    { label: t('services.pediatric'), href: '/services#pediatric' },
    { label: t('services.esthetics'), href: '/services#esthetics' },
    { label: t('services.restoratives'), href: '/services#restoratives' },
    { label: t('services.maintenance'), href: '/services#maintenance' },
  ];

  const handleTeamClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const scrollToTeam = () => {
      const el = document.getElementById('our-team');
      if (el) {
        const headerOffset = 80;
        const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    if (location.pathname === '/') {
      scrollToTeam();
    } else {
      navigate('/');
      setTimeout(scrollToTeam, 300);
    }
  };

  const links = [
    { label: t('nav.office'), to: '/office', onClick: undefined },
    { label: t('nav.team'), to: '/#our-team', onClick: handleTeamClick },
    { label: t('nav.services'), to: '/services', onClick: undefined },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-site py-12 md:py-16">
        {/* Single row layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-8 md:gap-0">
          {/* Logo column */}
          <div className="md:pr-[75px]">
            <img src={logoWhite} alt="Little Mountain Dental Centre" className="h-10 mb-4" />
            <p className="text-primary-foreground/80 text-sm max-w-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <p className="text-primary-foreground/70 text-sm mt-3">
              {t('footer.richmond')}{' '}
              <a
                href="https://friendlydental.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary-foreground transition-colors"
              >
                {t('footer.friendlyDental')}
              </a>
            </p>
            <p className="text-primary-foreground/70 text-sm mt-2">
              {t('footer.richmondWelcome')}{' '}
              <a
                href="https://friendlydental.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary-foreground transition-colors"
              >
                {t('footer.friendlyDental')}
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="md:px-8">
            <h4 className="font-heading text-lg font-semibold mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.to}>
                  {link.onClick ? (
                    <a
                      href={link.to}
                      onClick={link.onClick}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.to} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:px-8">
            <h4 className="font-heading text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Hours */}
          <div className="md:pl-8">
            <h4 className="font-heading text-lg font-semibold mb-4">{t('footer.officeHours')}</h4>
            <div className="text-sm text-primary-foreground/80 space-y-1.5">
              <div className="flex justify-between max-w-[220px]">
                <span>Mon – Fri</span>
                <span>9:00am – 5:30pm</span>
              </div>
              <div className="flex justify-between max-w-[220px]">
                <span>Saturday</span>
                <span>8:30am – 5:00pm</span>
              </div>
              <div className="flex justify-between max-w-[220px]">
                <span>Sunday</span>
                <span>{t('footer.closed')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-site py-4">
          {/* Desktop */}
          <div className="hidden md:flex items-center justify-between">
            <div className="text-xs text-primary-foreground/70">
              {t('footer.copyright')}{' '}
              <span className="mx-1 opacity-50">|</span>{' '}
              <span className="opacity-60 text-[11px]">
                {t('footer.webdesign')}{' '}
                <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  Bluluma.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={drWuLogo} alt="Dr. Wu" className="h-5 w-5 object-contain" />
              <a
                href="https://www.drpatrickwu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Dr. Patrick Wu
              </a>
            </div>
            <div className="w-[200px]" />
          </div>
          {/* Mobile */}
          <div className="md:hidden text-center space-y-1">
            <p className="text-xs text-primary-foreground/70">{t('footer.copyright')}</p>
            <p className="text-[11px] text-primary-foreground/50">
              {t('footer.webdesign')}{' '}
              <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                Bluluma.com
              </a>
            </p>
            <div className="flex items-center justify-center gap-2 pt-1">
              <img src={drWuLogo} alt="Dr. Wu" className="h-5 w-5 object-contain" />
              <a
                href="https://www.drpatrickwu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Dr. Patrick Wu
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
