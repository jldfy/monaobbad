import { Palette, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-20 pb-12 px-4 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(191,128,128,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(191,128,128,0.08),transparent_50%)]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100/80 backdrop-blur-sm text-primary-900 font-medium mb-6">
              <Palette className="w-4 h-4" />
              <span>UX Case Study</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              PickAsso
            </h1>
            <p className="text-2xl text-gray-600 mb-8 font-medium tracking-tight">
              Bridging the gap between artists and collectors while amplifying social impact through transparent art commerce.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium backdrop-blur-sm border border-primary-100">UX Research</span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium backdrop-blur-sm border border-primary-100">UI Design</span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium backdrop-blur-sm border border-primary-100">User Testing</span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium backdrop-blur-sm border border-primary-100">Social Impact</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary-100 p-8">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-primary-900 uppercase mb-2">Timeline</h3>
                  <p className="text-gray-700">3 months</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary-900 uppercase mb-2">Role</h3>
                  <p className="text-gray-700">Lead UX Designer</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary-900 uppercase mb-2">Team</h3>
                  <p className="text-gray-700">1 member</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary-900 uppercase mb-2">Platform</h3>
                  <p className="text-gray-700">Web Application</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-primary-900 uppercase mb-4">Key Responsibilities</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'User Research & Interviews',
                    'Information Architecture',
                    'Wireframing & Prototyping',
                    'Visual Design & Branding',
                    'Usability Testing',
                    'Design System Development'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}