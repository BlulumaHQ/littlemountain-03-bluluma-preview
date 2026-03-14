import { useState, useEffect } from 'react';
import logoColor from '@/assets/logo-color.svg';

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 600);
    };

    if (document.readyState === 'complete') {
      // Give a minimum display time
      setTimeout(handleLoad, 400);
    } else {
      window.addEventListener('load', () => setTimeout(handleLoad, 400));
    }

    // Fallback: hide after 3s max
    const fallback = setTimeout(handleLoad, 3000);
    return () => clearTimeout(fallback);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img src={logoColor} alt="Loading..." className="h-16 md:h-20" />
    </div>
  );
};

export default LoadingScreen;
