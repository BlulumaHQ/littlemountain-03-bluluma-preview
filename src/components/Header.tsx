import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logoColor from '@/assets/logo-color.svg';

type LangCode = 'en' | 'zh' | 'ja';
const LANG_LABELS: Record<LangCode, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
};
const LANG_SHORT: Record<LangCode, string> = {
  en: 'EN',
  zh: '中文',
  ja: '日本語',
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.office'), to: '/#welcome-section' },
    { label: t('nav.team'), to: '/#our-team' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.faq'), to: '/faq' },
    { label: t('nav.insights'), to: '/insights' },
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
    const anchorMap: Record<string, string> = {
      '/#our-team': 'our-team',
      '/#contact-section': 'contact-section',
      '/#welcome-section': 'welcome-section',
    };
    const sectionId = anchorMap[to];
    if (sectionId) {
      if (location.pathname === '/') {
        scrollToSection(sectionId);
      } else {
        navigate('/');
        setTimeout(() => scrollToSection(sectionId), 300);
      }
    }
  };

  const isAnchorLink = (to: string) => to === '/#our-team' || to === '/#contact-section' || to === '/#welcome-section';

  const currentLang = lang as LangCode;
  const otherLangs = (['en', 'zh', 'ja'] as LangCode[]).filter(
    (l) => l !== currentLang,
  );

  const LangSwitcher = ({ onSelect }: { onSelect?: () => void }) => (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase outline-none">
        <Globe size={16} />
        <span>{LANG_SHORT[currentLang]}</span>
        <ChevronDown size={14} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px] z-[60]">
        {otherLangs.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => {
              setLang(l);
              onSelect?.();
            }}
            className="cursor-pointer"
          >
            {LANG_LABELS[l]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <>
      {/* Utility bar */}
      <div className="bg-primary">
        <div className="container-site flex items-center justify-end gap-4 py-1.5 text-xs text-primary-foreground">
          <a href="tel:6048795612" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone size={12} />
            <span>(604) 879-5612</span>
          </a>
          <span className="opacity-60">|</span>
          <span>620 East Broadway, Vancouver, BC</span>
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
            <LangSwitcher />
          </nav>

          {/* Mobile: lang switcher + toggle */}
          <div className="lg:hidden flex items-center gap-1">
            <LangSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
