import { Target, ClipboardCheck, Users, LineChart, CheckCircle2, AlertCircle, ArrowRight, Lightbulb, ArrowUpRight, Wrench } from 'lucide-react';

export function TestPhase() {
  return (
    <section className="py-20 bg-gray-50 reveal">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">Test Phase</h2>

        {/* Previous sections remain unchanged... */}

        {/* Key Findings */}
        <div className="bg-white rounded-2xl shadow-lg border border-primary-100 p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <LineChart className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold">Key Findings</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Successes</h4>
              <div className="space-y-4">
                {[
                  "Intuitive price distribution slider",
                  "Clear impact visualization",
                  "Transparent fee breakdown",
                  "Efficient purchase flow"
                ].map((success, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mt-1" />
                    <span>{success}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Areas for Improvement</h4>
              <div className="space-y-4">
                {[
                  "Enhanced data visualization options",
                  "Additional impact metrics",
                  "Clearer error messages",
                  "Simplified NGO selection"
                ].map((improvement, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-600">
                    <AlertCircle className="w-5 h-5 text-accent-dark mt-1" />
                    <span>{improvement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* User Feedback section remains unchanged... */}

        {/* Learnings and Next Steps */}
        <div className="bg-white rounded-2xl shadow-lg border border-primary-100 p-8">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold">Learnings and Next Steps</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* What Worked Well */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-primary-600" />
                <h4 className="text-xl font-semibold">What Worked Well</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Early stakeholder involvement in design process</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Iterative testing approach with rapid improvements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Cross-functional team collaboration</span>
                </li>
              </ul>
            </div>

            {/* What Could Be Different */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ArrowUpRight className="w-5 h-5 text-primary-600" />
                <h4 className="text-xl font-semibold">Could Be Different</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Advanced data visualization features</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">More diverse participant pool</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Extended user testing period</span>
                </li>
              </ul>
            </div>

            {/* Technical Challenges */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-5 h-5 text-primary-600" />
                <h4 className="text-xl font-semibold">Technical Challenges</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Real-time price calculations optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Complex state management for distributions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Integration with multiple payment systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}