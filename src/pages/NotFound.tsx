import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Seo from '@/components/Seo';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Seo
        title="Page Not Found | Little Mountain Dental Centre"
        description="The page you're looking for may have moved or no longer exists. Return to Little Mountain Dental Centre's homepage."
        canonicalPath="/"
      />
      <section className="min-h-[70vh] flex items-center justify-center bg-brand-cream">
        <div className="container-site max-w-xl text-center py-20">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">404</p>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The page you're looking for may have moved or no longer exists.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase rounded hover:bg-brand-green-dark transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
