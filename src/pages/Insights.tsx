import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { articles } from '@/lib/insights';
import { useI18n } from '@/lib/i18n';

const Insights = () => {
  const { t } = useI18n();

  useEffect(() => {
    document.title = 'Insights | Little Mountain Dental Centre';
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        'content',
        'Helpful insights on dental coverage, costs, and patient care in Vancouver — designed to help you make informed decisions before your visit.'
      );
  }, []);

  return (
    <>
      <PageHeader
        title={t('insights.title')}
        subtitle={t('insights.intro')}
      />

      <section className="section-padding">
        <div className="container-site max-w-5xl">
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col bg-card border border-border rounded-lg p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="font-heading text-lg md:text-xl font-semibold text-brand-green leading-snug mb-3">
                  {article.title}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 flex-1">
                  {article.description}
                </p>
                <Link
                  to={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-brand-green-dark transition-colors uppercase tracking-wide"
                >
                  {t('insights.readMore')}
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;
