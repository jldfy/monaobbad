import {
  Palette,
  Code,
  Brush,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Briefcase,
  Heart,
  Mail,
  Phone,
  MapPin,
  Server,
  Shield,
  Terminal,
  GitBranch,
  MonitorPlay,
  PenTool,
  Layout,
  FileText,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from './ScrollReveal';
import { ScrollSpy } from './ScrollSpy';

export function Portfolio() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-primary">
      <ScrollSpy />
      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary to-primary-100/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(191,128,128,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(191,128,128,0.08),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Profile Info */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100/80 backdrop-blur-sm text-primary-900 font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>UX Designer & IT engineer</span>
              </div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Mona OBBAD
              </h1>
              <p className="text-2xl text-gray-600 mb-8 font-medium tracking-tight">
                "Weaving code and creativity: An engineer with an artist's eye,
                crafting digital experiences where technical innovation meets
                aesthetic excellence and human-centeprimary design".
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span>Courbevoie, France</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <a
                    href="mailto:mona.obbad@gmail.com"
                    className="hover:text-primary-600"
                  >
                    mona.obbad@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span>(+337) 45684919</span>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="flex-1">
              <div className="bg-primary/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Core Competencies
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Layout className="w-5 h-5 text-primary-600" />
                          <h3 className="font-medium text-gray-900">
                            Design Tools
                          </h3>
                        </div>
                        <div className="pl-7">
                          <div className="space-y-2">
                            <p className="text-sm text-gray-600">• Figma</p>
                            <p className="text-sm text-gray-600">• Canvas</p>
                            <p className="text-sm text-gray-600">
                              • Adobe Creative Suite
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-5 h-5 text-primary-600" />
                          <h3 className="font-medium text-gray-900">
                            Development
                          </h3>
                        </div>
                        <div className="pl-7">
                          <div className="space-y-2">
                            <p className="text-sm text-gray-600">• HTML, CSS</p>
                            <p className="text-sm text-gray-600">
                              • Shell, Python, Perl
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <GitBranch className="w-5 h-5 text-primary-600" />
                        <h3 className="font-medium text-gray-900">
                          Project Tools
                        </h3>
                      </div>
                      <div className="pl-7">
                        <div className="space-y-2">
                          <p className="text-sm text-gray-600">
                            • JIRA Project Management
                          </p>
                          <p className="text-sm text-gray-600">
                            • Git Version Control
                          </p>
                          <p className="text-sm text-gray-600">
                            • Confluence Documentation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featuprimary Certificate  Section */}
      <section id="certificate" className="py-20 bg-primary-50 reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 shadow-lg border border-primary-100">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary-600" />
              <div>
                <h3 className="text-xl font-bold">
                  Google UX Design Professional Certificate
                </h3>
                <p className="text-gray-600">2025</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                <span>User-center design process and methodologies</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                <span>UX research, wireframing, and prototyping</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                <span>User testing and iteration</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                <span>Design systems and accessibility</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featuprimary Case Study Section */}
      <section id="case-study" className="py-20 bg-gray-50 reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  PickAsso - Vision 2025
                </h3>
                <p className="text-gray-600 mb-6">
                  A revolutionary art marketplace designed to bridge the gap
                  between artists and collectors while making meaningful social
                  impact. PickAsso reimagines how we value and trade art by
                  introducing a transparent price distribution model that
                  benefits all stakeholders.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                    UX Research
                  </span>
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                    UI Design
                  </span>
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                    User Testing
                  </span>
                </div>
                <Link
                  to="/case-study"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-primary rounded-lg hover:bg-primary-700 font-medium transition-colors"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-primary-50 p-8 rounded-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary-900">
                      Project Timeline
                    </p>
                    <p className="text-gray-600">2024 - 2025</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary-900">Role</p>
                    <p className="text-gray-600">Lead UX Designer</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary-900">
                      {' '}
                      Target{' '}
                    </p>
                    <p className="text-gray-600"> Art and social Impact </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary-900">
                      Platform
                    </p>
                    <p className="text-gray-600">Web Application</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Portfolio Section */}
      <section id="art-portfolio" className="py-20 bg-primary-50 reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Artistic Expression</h3>
                <p className="text-gray-600 mb-6">
                  Explore my journey as a visual artist, where I blend colors,
                  textures, and emotions to create unique pieces that tell
                  stories and evoke feelings. Each artwork is a reflection of my
                  passion for artistic expression and creative exploration.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Abstract Art
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Mixed Media
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Color Theory
                  </span>
                </div>
                <Link
                  to="/art-portfolio"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-primary rounded-lg hover:bg-primary-700 font-medium transition-colors"
                >
                  View Art Portfolio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-primary-50 p-8 rounded-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary-900">
                      Style
                    </p>
                    <p className="text-gray-600">Contemporary Abstract</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary-900">
                      Medium
                    </p>
                    <p className="text-gray-600">Mixed Media</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary-900">
                      Focus
                    </p>
                    <p className="text-gray-600">Color & Texture</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary-900">
                      Experience
                    </p>
                    <p className="text-gray-600">5+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* Resume Section */}
      <section id="resume section" className="py-20 bg-gray-50 reveal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-primary rounded-2xl p-12 shadow-lg text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Want to know more about my experience?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Download my complete resume to learn about my professional
              experience, education, and technical skills.
            </p>
            <div className="space-y-4 mb-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition-colors text-lg group"
              >
                <FileText className="w-5 h-5 transition-transform group-hover:scale-110" />
                View My Resume
              </a>
            </div>
            <div className="space-y-4 mb-8">
              <div className="inline-flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5 text-primary-600" />
                <a
                  href="mailto:mona.obbad@gmail.com"
                  className="hover:text-primary-600"
                >
                  mona.obbad@gmail.com
                </a>
              </div>
              <div className="space-y-4 mb-8">
                <div className="inline-flex items-center gap-2 text-gray-600">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span>(+337) 45684919</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
