import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import officeImg from '@/assets/office-welcome.jpg';
import officeExterior from '@/assets/office-exterior.webp';
import officeLibrary1 from '@/assets/office-library-1.webp';
import officeLibrary2 from '@/assets/office-library-2.webp';
import officeTreatment from '@/assets/office-treatment.webp';
import officeWaiting1 from '@/assets/office-waiting-1.webp';
import officeWashroom from '@/assets/office-washroom.webp';
import officeWaiting2 from '@/assets/office-waiting-2.webp';
import officePediatric from '@/assets/office-pediatric.webp';

const images = [
  { src: officeImg, alt: 'Little Mountain Dental Centre office' },
  { src: officeExterior, alt: 'Clinic exterior' },
  { src: officeLibrary1, alt: 'Waiting area library' },
  { src: officeLibrary2, alt: 'Children\'s book library' },
  { src: officeTreatment, alt: 'Treatment room' },
  { src: officeWaiting1, alt: 'Waiting area' },
  { src: officeWashroom, alt: 'Washroom' },
  { src: officeWaiting2, alt: 'Lounge area' },
  { src: officePediatric, alt: 'Pediatric dentistry' },
];

const WelcomeSection = () => {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding">
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
                alt={images[activeIndex].alt}
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                    i === activeIndex ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-80'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
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
