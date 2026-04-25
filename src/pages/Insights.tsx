import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHeader from '@/components/PageHeader';
import { articles } from '@/lib/insights';
import { useI18n } from '@/lib/i18n';

const Insights = () => {
  const { t } = useI18n();

  return (
    <>
      <Seo
        title="Dental Insights | Vancouver Dental Coverage, Costs & Patient Guides"
        description="Read professional dental insights about CDCP, children's dental coverage, direct billing, dental costs, booking, and patient care in Vancouver."
        canonicalPath="/insights"
      />
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
                className="flex flex-col bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  loading="lazy"
                  width={1536}
                  height={896}
                  className="w-full aspect-[16/9] object-cover"
                />
                <div className="flex flex-col flex-1 p-6 md:p-7">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;
