import { Brush, Briefcase, Building, DollarSign, Users, Target, Heart, HandHeart, Trophy, Eye, BarChart as ChartBar, Users2, LineChart, Rocket } from 'lucide-react';

export function UserPersonas() {
  return (
    <section className="py-20 bg-white reveal">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">User Research & Personas</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Key Pain Points from Research</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Price Transparency',
                description: '78% of users expressed confusion about how art prices are determined and distributed.',
                color: 'primary'
              },
              {
                title: 'Impact Tracking',
                description: '92% want better visibility into how their purchases contribute to social causes.',
                color: 'primary'
              },
              {
                title: 'Artist Connection',
                description: '85% desire more direct interaction with artists behind the work.',
                color: 'primary'
              },
              {
                title: 'Cause Integration',
                description: '73% find it difficult to support both artists and causes simultaneously.',
                color: 'primary'
              }
            ].map((point, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-primary-50 border border-primary-100"
              >
                <h4 className="text-lg font-semibold mb-2 text-primary-700">{point.title}</h4>
                <p className="text-primary-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Artist Persona */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Sarah Chen"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <div>
                <h3 className="text-xl font-bold">Sarah Chen</h3>
                <p className="text-gray-600">Contemporary Painter, 34</p>
                <p className="text-gray-700">"I long to see my art make a tangible impact, but the distance from the end buyer makes it difficult to measure."</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Goals</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Stable income from art
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Connection with meaningful causes
                  </li>
                  <li className="flex items-start gap-2">
                    <Trophy className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Building sustainable career
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Frustrations</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    High platform fees
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Limited control over pricing
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Disconnect from end-buyers
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Collector Persona */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Marcus Thompson"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <div>
                <h3 className="text-xl font-bold">Marcus Thompson</h3>
                <p className="text-gray-600">Tech Executive, 42</p>
                <p className="text-gray-700">"I crave transparency and clarity when purchasing art. I want to know exactly where my money is going and how it's impacting the artist and the cause they support."</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Goals</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Brush className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Building meaningful collection
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Supporting artists directly
                  </li>
                  <li className="flex items-start gap-2">
                    <HandHeart className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Contributing to social causes
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Frustrations</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Eye className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Lack of transparency
                  </li>
                  <li className="flex items-start gap-2">
                    <ChartBar className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Limited impact information
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Complex purchase processes
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* NGO Manager Persona */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="David Kumar"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <div>
                <h3 className="text-xl font-bold">David Kumar</h3>
                <p className="text-gray-600">NGO Professional, 45</p>
                <p className="text-gray-700">"Securing consistent and sustainable funding is a constant challenge for our NGO. We need innovative solutions to engage donors and ensure our impact is maximized."</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Goals</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Sustainable funding
                  </li>
                  <li className="flex items-start gap-2">
                    <Users2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Donor engagement
                  </li>
                  <li className="flex items-start gap-2">
                    <ChartBar className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Impact measurement
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Frustrations</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <LineChart className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Funding inconsistency
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Resource limitations
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    Donor retention
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}