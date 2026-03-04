interface PageHeaderProps {
  title: string;
  subtitle?: string;
  compact?: boolean;
}

const PageHeader = ({ title, subtitle, compact }: PageHeaderProps) => {
  return (
    <section className={`bg-primary ${compact ? 'py-10 md:py-14' : 'py-14 md:py-20'}`}>
      <div className="container-site text-center">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
