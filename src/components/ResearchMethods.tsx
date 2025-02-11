import React from 'react';
import { ClipboardList, Users, Calendar, Target, Search, MessageSquare, LineChart, Microscope } from 'lucide-react';

export function ResearchMethods() {
  return (
    <section className="py-20 bg-gray-50 reveal">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">Research section</h2>
        
        {/* Research Goals */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-primary-600" />
              <h3 className="text-2xl font-bold">Research Goals</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Search className="w-5 h-5 text-primary-600 mt-1" />
                <span className="text-gray-600">Understand artist needs and pain points in current art marketplaces</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-primary-600 mt-1" />
                <span className="text-gray-600">Identify collector motivations for supporting artists and social causes</span>
              </li>
              <li className="flex items-start gap-3">
                <LineChart className="w-5 h-5 text-primary-600 mt-1" />
                <span className="text-gray-600">Evaluate existing price distribution models and their effectiveness</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList className="w-6 h-6 text-primary-600" />
              <h3 className="text-2xl font-bold">Research Questions</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-medium text-primary-600">1</span>
                </div>
                <span className="text-gray-600">How do artists determine fair pricing for their artwork?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-medium text-primary-600">2</span>
                </div>
                <span className="text-gray-600">What factors influence collectors' decisions to support social causes through art purchases?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-medium text-primary-600">3</span>
                </div>
                <span className="text-gray-600">How can we create transparency in price distribution between artists and causes?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-medium text-primary-600">2</span>
                </div>
                <span className="text-gray-600">...</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Methods Used */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Microscope className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold">Research Methods</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="h-1 w-12 bg-primary-600"></div>
              <h4 className="text-xl font-semibold">In-depth Interviews</h4>
              <ul className="space-y-2 text-gray-600">
                <li>12 artists</li>
                <li>8 art collectors</li>
                <li>5 NGO representatives</li>
                <li>20-minute sessions</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="h-1 w-12 bg-primary-600"></div>
              <h4 className="text-xl font-semibold">Online Survey</h4>
              <ul className="space-y-2 text-gray-600">
                <li>25 respondents</li>
                <li>Mix of artists and collectors</li>
                <li>25 questions</li>
                <li>Quantitative & qualitative data</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="h-1 w-12 bg-primary-600"></div>
              <h4 className="text-xl font-semibold">Usability Testing</h4>
              <ul className="space-y-2 text-gray-600">
                <li>15 participants</li>
                <li>Think-aloud protocol</li>
                <li>Task completion analysis</li>
                <li>Satisfaction metrics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Participant Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold">Participant Selection</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Selection Criteria</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Artists with 2+ years of selling experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Collectors who purchased art in the last 12 months</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">NGOs with art-related fundraising experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Mix of digital and traditional art backgrounds</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Demographics</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Age range: 25-55 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">60% female, 40% male participants</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                  <span className="text-gray-600">Various income levels and art budgets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold">Research Timeline</h3>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200"></div>
            <div className="space-y-8">
              {[
                {
                  phase: 'Planning & Preparation',
                  duration: '1 week',
                  tasks: ['Research design', 'Participant recruitment']
                },
                {
                  phase: 'Data Collection',
                  duration: '2 weeks',
                  tasks: ['Interviews', 'Survey distribution', 'User pain points identification']
                },
                {
                  phase: 'Analysis',
                  duration: '2 weeks',
                  tasks: ['Data synthesis', 'Pattern identification', 'Insight generation']
                },
                {
                  phase: 'Validation',
                  duration: '2 weeks',
                  tasks: ['Follow-up interviews', 'Prototype testing', 'Recommendation refinement']
                }
              ].map((phase, index) => (
                <div key={index} className="relative flex gap-8">
                  <div className="w-4 h-4 rounded-full bg-primary-600 mt-2 z-10"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">{phase.phase}</h4>
                      <span className="text-sm text-primary-600 font-medium">{phase.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="text-gray-600">{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}