import { useState, useRef, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const reviewKeys = ['review1', 'review2', 'review3', 'review4', 'review5', 'review6'];
const reviewers = ['Naomi Liao', 'Jacky Li', 'Susan Yang', 'J B', 'Yolanda Kwan', 'Yun-Ui Wang'];

const ReviewsSection = () => {
  const { t } = useI18n();
  const isMobile = useIsMobile();

  // Desktop: paired slides
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 3;
  const prev = () => setSlideIndex((s) => (s - 1 + totalSlides) % totalSlides);
  const next = () => setSlideIndex((s) => (s + 1) % totalSlides);
  const pair = [reviewKeys[slideIndex * 2], reviewKeys[slideIndex * 2 + 1]];
  const pairReviewers = [reviewers[slideIndex * 2], reviewers[slideIndex * 2 + 1]];

  // Mobile: swipe with scroll-snap
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !isMobile) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIdx(idx);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  const scrollToIdx = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <section className="pt-6 md:pt-8 pb-12 md:pb-16">
      <div className="container-site">
        {/* Google Average Rating */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-2xl font-bold text-foreground ml-2">5.0</span>
          </div>
          <p className="text-lg font-semibold text-foreground">{t('reviews.rating')}</p>
          <p className="text-sm text-muted-foreground">{t('reviews.based')}</p>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green text-center mb-3">
          {t('reviews.title')}
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          {t('reviews.subtitle')}
        </p>

        {/* MOBILE — swipe carousel */}
        <div className="md:hidden -mx-4">
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none' }}
          >
            {reviewKeys.map((key, i) => (
              <div key={key} className="snap-center shrink-0 w-full px-4">
                <div className="bg-brand-cream rounded-lg p-6 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed flex-1 mb-4">
                    {t(`reviews.${key}`)}
                  </p>
                  <p className="text-sm font-semibold text-brand-green">— {reviewers[i]}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {reviewKeys.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIdx(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === activeIdx ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP — paired slides, manual nav */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pair.map((key, i) => (
              <div
                key={key}
                className="bg-brand-cream rounded-lg p-6 md:p-8 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed flex-1 mb-4">
                  {t(`reviews.${key}`)}
                </p>
                <p className="text-sm font-semibold text-brand-green">— {pairReviewers[i]}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-muted-foreground/30 hover:bg-brand-cream transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === slideIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-muted-foreground/30 hover:bg-brand-cream transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
