import { useEffect, useState } from 'react';
import { ChevronRight, Sparkles, GraduationCap, Briefcase, BookOpen, FileText, Palette } from 'lucide-react';

interface Section {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const sections: Section[] = [
  { id: 'hero', label: 'Introduction', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'certificate', label: 'Certificate', icon: <GraduationCap className="w-4 h-4" /> },
  { id: 'case-study', label: 'UX Case Study', icon: <FileText className="w-4 h-4" /> },
  { id: 'art-portfolio', label: 'Art Portfolio', icon: <Palette className="w-4 h-4" /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'education', label: 'Education', icon: <BookOpen className="w-4 h-4" /> }
];

export function ScrollSpy() {
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
        rootMargin: '-50% 0px -50% 0px' // Trigger when section is in middle of viewport
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
              top: `${sections.findIndex(s => s.id === activeSection) * 48}px`
            }}
          />
        </div>

        {/* Navigation items */}
        <ul className="relative space-y-6">
        {sections.map(({ id, label }) => (
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
              }`}
              style={{
                transitionDelay: `${sections.findIndex(s => s.id === id) * 50}ms`
              }}
            >
              {sections.find(s => s.id === id)?.icon}
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