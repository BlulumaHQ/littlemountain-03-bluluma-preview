import { useState, useEffect, useRef } from 'react';
import { useI18n } from '@/lib/i18n';
import officeLibrary1 from '@/assets/clinic-library-window-seating.webp';
import officeLibrary2 from '@/assets/clinic-library-bookshelves.webp';
import officeTreatment from '@/assets/clinic-treatment-room-dental-chair.webp';
import officeWaiting1 from '@/assets/clinic-waiting-room-book-display.webp';
import officeWashroom from '@/assets/clinic-washroom-vanity.webp';

const images = [
  { src: officeLibrary1, alt: { en: 'Library seating by the waiting-room windows', zh: '候診區閱覽室的靠窗座位', ja: '待合室の読書スペースにある窓際の席' } },
  { src: officeLibrary2, alt: { en: 'Children’s bookshelves and reading tables', zh: '兒童書架與閱讀桌', ja: '児童書の本棚と読書テーブル' } },
  { src: officeWaiting1, alt: { en: 'Book displays on the waiting-room walls', zh: '候診區牆上的圖書展示架', ja: '待合室の壁に並ぶ本' } },
  { src: officeTreatment, alt: { en: 'Green dental chair in a treatment room', zh: '診療室裡的綠色牙科椅', ja: '診療室にある緑色の歯科用チェア' } },
  { src: officeWashroom, alt: { en: 'Washroom vanity with round mirrors', zh: '洗手間內有圓鏡的洗手台', ja: '丸い鏡が並ぶ洗面台' } },
];

const WelcomeSection = () => {
  const { t, lang } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleThumbClick = (i: number) => {
    setActiveIndex(i);
    resetTimer();
  };

  return (
    <section id="welcome-section" className="section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green mb-6">
              {t('welcome.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('welcome.text')}
            </p>
          </div>
          <div>
            {/* Main image */}
            <div className="rounded-lg overflow-hidden shadow-md mb-3">
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].alt[lang]}
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => handleThumbClick(i)}
                  className={`shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                    i === activeIndex ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-80'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt[lang]}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
