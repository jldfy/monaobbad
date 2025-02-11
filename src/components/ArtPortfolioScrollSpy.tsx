import { useEffect, useState } from 'react';
import { Palette, Heart, Eye, Brush, Star, Mail, Layers } from 'lucide-react';

interface Section {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const sections: Section[] = [
  { id: 'hero', label: 'Overview', icon: <Palette className="w-4 h-4" /> },
  { id: 'gallery', label: 'Gallery', icon: <Eye className="w-4 h-4" /> },
  { id: 'techniques', label: 'Techniques', icon: <Layers className="w-4 h-4" /> },
  { id: 'workshops', label: 'Workshops', icon: <Brush className="w-4 h-4" /> },
  { id: 'process', label: 'Process', icon: <Brush className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
];

export function ArtPortfolioScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Background blur effect */}
        <div className={`
          absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl 
          transition-all duration-300 ease-in-out
          ${isHovered ? 'opacity-100 -inset-x-4' : 'opacity-0'}
        `} />

        {/* Active section indicator */}
        <div 
          className="absolute right-0 w-0.5 h-full bg-gray-200 rounded-full"
          style={{ top: '0' }}
        >
          <div 
            className="absolute w-full bg-primary-600 rounded-full transition-all duration-300"
            style={{
              height: '24px',
              top: `${sections.findIndex(s => s.id === activeSection) * 40}px`
            }}
          />
        </div>

        {/* Navigation items */}
        <ul className="relative space-y-6">
          {sections.map(({ id, label, icon }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`
                  group flex items-center gap-3 pr-6 py-1
                  transition-all duration-300 ease-in-out
                  ${activeSection === id 
                    ? 'text-primary-600' 
                    : 'text-gray-400 hover:text-gray-600'
                  }
                  ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
                `}
                style={{
                  transitionDelay: `${sections.findIndex(s => s.id === id) * 50}ms`
                }}
              >
                {icon}
                <span className={`
                  text-sm font-medium whitespace-nowrap
                  transition-all duration-300
                  ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                `}>
                  {label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}