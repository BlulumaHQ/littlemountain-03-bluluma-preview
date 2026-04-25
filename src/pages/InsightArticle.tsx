import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHeader from '@/components/PageHeader';
import { BOOKING_URL } from '@/lib/booking';
import { getArticleBySlug } from '@/lib/insights';
import { useI18n } from '@/lib/i18n';
import NotFound from './NotFound';

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <NotFound />;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: 'Little Mountain Dental Centre',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Little Mountain Dental Centre',
    },
  };

  return (
    <>
      <PageHeader title={article.title} compact />

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-brand-green-dark mb-8 uppercase tracking-wide"
          >
            <ArrowLeft size={16} />
            {t('insights.backToInsights')}
          </Link>

          <img
            src={article.image}
            alt={article.imageAlt}
            width={1536}
            height={896}
            className="w-full h-auto rounded-lg mb-8 object-cover aspect-[16/9]"
          />

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
            {article.description}
          </p>

          <div className="space-y-8">
            {article.sections.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <h2 className="font-heading text-xl md:text-2xl font-semibold text-brand-green mb-3">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p, i) => (
                  <p
                    key={i}
                    className="text-foreground/85 leading-relaxed mb-3"
                  >
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-5 space-y-1.5 text-foreground/85 leading-relaxed mt-2">
                    {section.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 md:p-8 bg-brand-cream rounded-lg text-center">
            <p className="text-foreground text-base md:text-lg leading-relaxed mb-5">
              {article.ctaText}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase rounded hover:bg-brand-green-dark transition-colors"
            >
              {t('cta.bookOnline')}
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
};

export default InsightArticle;
