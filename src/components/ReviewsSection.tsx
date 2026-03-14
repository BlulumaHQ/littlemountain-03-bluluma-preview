import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviewKeys = ['review1', 'review2', 'review3', 'review4', 'review5', 'review6'];
const reviewers = ['Naomi Liao', 'Jacky Li', 'Susan Yang', 'J B', 'Yolanda Kwan', 'Yun-Ui Wang'];

const ReviewsSection = () => {
  const { t } = useI18n();
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 3; // 6 reviews, 2 per slide

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setSlideIndex((s) => (s - 1 + totalSlides) % totalSlides);
  const next = () => setSlideIndex((s) => (s + 1) % totalSlides);

  const pair = [reviewKeys[slideIndex * 2], reviewKeys[slideIndex * 2 + 1]];
  const pairReviewers = [reviewers[slideIndex * 2], reviewers[slideIndex * 2 + 1]];

  return (
    <section className="section-padding">
      <div className="container-site">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green text-center mb-3">
          {t('reviews.title')}
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          {t('reviews.subtitle')}
        </p>

        <div className="relative max-w-5xl mx-auto">
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

          {/* Navigation */}
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
