import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath: string; // e.g. "/", "/faq", "/insights/cdcp..."
}

const SITE_URL = 'https://littlemountaindental.ca';

const Seo = ({ title, description, canonicalPath }: SeoProps) => {
  const canonical = `${SITE_URL}${canonicalPath}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
