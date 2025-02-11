import { Brush, Briefcase, Building } from 'lucide-react';

interface JourneyStageProps {
  action: string;
  taskList: string[];
  feelings: string[];
  improvements: string[];
}

function JourneyStage({ action, taskList, feelings, improvements }: JourneyStageProps) {
  return (
    <tr className="border-t border-gray-200">
      <td className="p23 bg-gray-50 border-r border-gray-200 whitespace-nowrap">
        <h4 className="font-semibold text-gray-900 text-sm">{action}</h4>
      </td>
      <td className="p-3 border-r border-gray-200">
        <div className="space-y-2">
          <ul className="list-alpha pl-4 space-y-1">
            {taskList.map((task, index) => (
              <li key={index} className="text-xs text-gray-600">{task}</li>
            ))}
          </ul>
        </div>
      </td>
      <td className="p-3 border-r border-gray-200">
        <ul className="space-y-1">
          {feelings.map((feeling, index) => (
            <li key={index} className="flex items-center gap-2 text-xs text-gray-600">
              <span className="w-2 h-2 rounded-full bg-primary-600"></span>
              {feeling}
            </li>
          ))}
        </ul>
      </td>
      <td className="p-3">
        <ul className="space-y-1">
          {improvements.map((improvement, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-gray-600">
              <span className="w-2 h-2 rounded-full bg-primary-600 mt-1.5"></span>
              {improvement}
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export function JourneyMaps() {
  return (
    <section className="py-20 bg-gray-50 reveal">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">User Journey Maps</h2>
        
        {/* Artist Journey */}
        <div className="bg-white rounded-lg shadow-lg border border-primary-100 overflow-hidden mb-16">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Brush className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold">Persona: Sarah Chen</h3>
            </div>
            <p className="text-gray-600">Goal: Create and sell artwork while making meaningful social impact</p>
          </div>

          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full table-fixed border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="w-1/4 p-3 bg-gray-100 font-medium text-gray-700 uppercase text-xs border-r border-gray-200 text-left">
                    Action
                  </th>
                  <th className="w-1/4 p-3 bg-gray-100 font-medium text-gray-700 uppercase text-xs border-r border-gray-200 text-left">
                    Task List
                  </th>
                  <th className="w-1/4 p-3 bg-gray-100 font-medium text-gray-700 uppercase text-xs border-r border-gray-200 text-left">
                    Feeling Adjective
                  </th>
                  <th className="w-1/4 p-3 bg-gray-100 font-medium text-gray-700 uppercase text-xs text-left">
                    Improvement Opportunities
                  </th>
                </tr>
              </thead>
              <tbody>
                <JourneyStage
                  action="Determine platform suitability"
                  taskList={[
                    "Research art platforms",
                    "Review pricing model",
                    "Understand base price concept"
                  ]}
                  feelings={["Curious", "Analytical", "Hopeful"]}
                  improvements={[
                    "Clear pricing examples",
                    "Revenue calculator",
                    "Success stories showcase"
                  ]}
                />

                <JourneyStage
                  action="Set up artist profile"
                  taskList={[
                    "Upload portfolio",
                    "Set base prices",
                    "Define impact goals"
                  ]}
                  feelings={["Empowered", "Confident", "Purposeful"]}
                  improvements={[
                    "Price recommendation tool",
                    "Market analysis insights",
                    "Impact goal templates"
                  ]}
                />

                <JourneyStage
                  action="Connect with causes"
                  taskList={[
                    "Browse causes",
                    "Set contribution preferences",
                    "Review partnership terms"
                  ]}
                  feelings={["Inspired", "Aligned", "Committed"]}
                  improvements={[
                    "Cause matching system",
                    "Flexible terms options",
                    "Impact previews"
                  ]}
                />

                <JourneyStage
                  action="Monitor progress"
                  taskList={[
                    "Track price distributions",
                    "Review impact metrics",
                    "Analyze buyer patterns"
                  ]}
                  feelings={["Satisfied", "Motivated", "Impactful"]}
                  improvements={[
                    "Real-time analytics",
                    "Distribution insights",
                    "Buyer behavior data"
                  ]}
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Collector Journey */}
        <div className="bg-white rounded-lg shadow-lg border border-primary-100 overflow-hidden mb-16">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold">Persona: Marcus Thompson</h3>
            </div>
            <p className="text-gray-600">Goal: Build a meaningful art collection while supporting social causes</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="w-1/4 p-3 bg-gray-100 font-medium text-gray-700 uppercase text-xs border-r border-gray-200 text-left">
                    Action
                  </th>
                  <th className="w-1/4 p-3 bg-gray-100 font-medium text-gray-700 uppercase text-xs border-r border-gray-200 text-left">
                    Task List
                  </th>
                  <th className="w-1/4 p-3 bg-gray-100 font-medium text-gray-700 uppercase text-xs border-r border-gray-200 text-left">
                    Feeling Adjective
                  </th>
                  <th className="w-1/4 p-3 bg-gray-100 font-medium text-gray-700 uppercase text-xs text-left">
                    Improvement Opportunities
                  </th>
                </tr>
              </thead>
              <tbody>
                <JourneyStage
                  action="Research platform"
                  taskList={[
                    "Understand price model",
                    "Review impact options",
                    "Compare with alternatives"
                  ]}
                  feelings={["Intrigued", "Thoughtful", "Engaged"]}
                  improvements={[
                    "Interactive pricing demo",
                    "Impact simulation tool",
                    "Platform comparison guide"
                  ]}
                />

                <JourneyStage
                  action="Evaluate artwork"
                  taskList={[
                    "Browse collections",
                    "Review base prices",
                    "Explore cause connections"
                  ]}
                  feelings={["Focused", "Analytical", "Inspired"]}
                  improvements={[
                    "Price comparison tools",
                    "Impact potential calculator",
                    "Cause alignment indicators"
                  ]}
                />

                <JourneyStage
                  action="Customize purchase"
                  taskList={[
                    "Adjust price distribution",
                    "Select cause allocation",
                    "Review total impact"
                  ]}
                  feelings={["Empowered", "Generous", "Fulfilled"]}
                  improvements={[
                    "Interactive slider interface",
                    "Real-time impact preview",
                    "Distribution templates"
                  ]}
                />

                <JourneyStage
                  action="Track impact"
                  taskList={[
                    "Monitor fund distribution",
                    "View cause updates",
                    "Share impact story"
                  ]}
                  feelings={["Proud", "Connected", "Impactful"]}
                  improvements={[
                    "Distribution dashboard",
                    "Impact visualization",
                    "Social sharing tools"
                  ]}
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* NGO Journey */}
        <div className="bg-white rounded-lg shadow-lg border border-primary-100 overflow-hidden mb-16">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold">Persona: David Kumar</h3>
            </div>
            <p className="text-gray-600">Goal: Establish sustainable funding through art partnerships</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="w-1/4 p-3 bg-gray-100 font-medium text-gray-700 uppercase text-xs border-r border-gray-200 text-left">
                    Action
                  </th>
                  <th className="w-1/4 p-3 bg-gray-100 font-medium text-gray-700 uppercase text-xs border-r border-gray-200 text-left">
                    Task List
                  </th>
                  <th className="w-1/4 p-3 bg-gray-100 font-medium text-gray-700 uppercase text-xs border-r border-gray-200 text-left">
                    Feeling Adjective
                  </th>
                  <th className="w-1/4 p-3 bg-gray-100 font-medium text-gray-700 uppercase text-xs text-left">
                    Improvement Opportunities
                  </th>
                </tr>
              </thead>
              <tbody>
                <JourneyStage
                  action="Platform evaluation"
                  taskList={[
                    "Review funding model",
                    "Analyze revenue potential",
                    "Assess platform reach"
                  ]}
                  feelings={["Strategic", "Analytical", "Optimistic"]}
                  improvements={[
                    "Revenue projection tools",
                    "Market size analytics",
                    "Success metrics dashboard"
                  ]}
                />

                <JourneyStage
                  action="Configure cause profile"
                  taskList={[
                    "Set up cause details",
                    "Define funding goals",
                    "Create impact metrics"
                  ]}
                  feelings={["Organized", "Professional", "Clear-minded"]}
                  improvements={[
                    "Profile templates",
                    "Goal setting wizard",
                    "Metric suggestions"
                  ]}
                />

                <JourneyStage
                  action="Manage distributions"
                  taskList={[
                    "Track incoming funds",
                    "Monitor allocations",
                    "Review collector choices"
                  ]}
                  feelings={["Informed", "In control", "Grateful"]}
                  improvements={[
                    "Real-time distribution tracking",
                    "Allocation analytics",
                    "Donor insights dashboard"
                  ]}
                />

                <JourneyStage
                  action="Report impact"
                  taskList={[
                    "Generate distribution reports",
                    "Share impact updates",
                    "Engage stakeholders"
                  ]}
                  feelings={["Transparent", "Accountable", "Proud"]}
                  improvements={[
                    "Automated reporting",
                    "Impact storytelling tools",
                    "Stakeholder portal"
                  ]}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}