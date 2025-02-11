import { Target, Users, HandHeart } from 'lucide-react';

export function ProjectGoals() {
  return (
    <section className="py-20 bg-gray-50 reveal">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">Project Goals</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary-100">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Primary Goal</h3>
            <p className="text-gray-600">
              Create a sustainable platform that enables artists to earn reliable income while making meaningful social impact through their art.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary-100">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">User Experience</h3>
            <p className="text-gray-600">
              Design an intuitive interface that facilitates direct connections between artists and collectors while transparently tracking impact.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary-100">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <HandHeart className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Social Impact</h3>
            <p className="text-gray-600">
              Establish a clear framework for measuring and communicating the social impact generated through art sales and partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}