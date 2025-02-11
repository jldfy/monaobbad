import { DollarSign, Users, Target, HandHeart, MessageSquare, LineChart } from 'lucide-react';

export function ProblemStatement() {
  return (
    <section className="py-20 bg-white reveal">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">Problem Statement</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">The Challenge</h3>
            <p className="text-gray-600 mb-6">
              Artists struggle to find sustainable income streams while maintaining creative freedom and making meaningful social impact. Meanwhile, collectors seek authentic connections with artists and transparency in their contributions to social causes.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Revenue Uncertainty</h4>
                  <p className="text-gray-600">Artists face unstable income and high platform fees</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Disconnected Relationships</h4>
                  <p className="text-gray-600">Limited direct interaction between artists and collectors</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Impact Measurement</h4>
                  <p className="text-gray-600">Difficulty tracking and showcasing social impact</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">The Opportunity</h3>
            <p className="text-gray-600 mb-6">
              Create a platform that connects artists directly with collectors while facilitating meaningful social impact through art sales. This solution addresses multiple stakeholder needs while creating sustainable value.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HandHeart className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Impact Integration</h4>
                  <p className="text-gray-600">Seamlessly connect art sales with social causes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Direct Connections</h4>
                  <p className="text-gray-600">Foster meaningful artist-collector relationships</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <LineChart className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Transparent Tracking</h4>
                  <p className="text-gray-600">Clear visualization of impact and contributions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}