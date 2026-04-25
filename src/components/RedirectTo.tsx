import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * Client-side redirect helper for SEO/legacy URLs.
 * Replaces the current entry so back-button doesn't loop.
 * Optional `hash` will scroll to a section on the homepage after redirect.
 */
const RedirectTo = ({ to }: { to: string }) => {
  const location = useLocation();
  // preserve search string but drop the legacy path
  const target = `${to}${location.search}`;
  return <Navigate to={target} replace />;
};

export default RedirectTo;

/**
 * Normalises odd path casings/trailing slashes by redirecting to a clean
 * lowercase, no-trailing-slash version of the same path.
 */
export const NormalizePath = () => {
  const location = useLocation();
  useEffect(() => {
    const { pathname, search, hash } = location;
    let next = pathname;
    // strip trailing slash (except root)
    if (next.length > 1 && next.endsWith('/')) next = next.replace(/\/+$/, '');
    // lowercase
    if (next !== next.toLowerCase()) next = next.toLowerCase();
    if (next !== pathname) {
      window.history.replaceState({}, '', `${next}${search}${hash}`);
    }
  }, [location]);
  return null;
};
