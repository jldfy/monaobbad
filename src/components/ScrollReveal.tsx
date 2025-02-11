import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const revealPoint = 50; // Reduced threshold for earlier reveal

        reveals.forEach(reveal => {
          const revealTop = reveal.getBoundingClientRect().top;
          if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('show');
          }
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check after a short delay to ensure content is rendered
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}