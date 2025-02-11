import { Lightbulb, CheckCircle2, Target, Layout, DollarSign, ArrowRight, HandHeart, Building2, Image, Users, ArrowLeft, Check, ExternalLink, Brush } from 'lucide-react';
import { useState } from 'react';

export function IdeatePhase() {
  const [totalPrice, setTotalPrice] = useState("500.00");
  const basePrice = 300;
  
  // Calculate distribution amounts based on total price
  const artistShare = (parseFloat(totalPrice) * 0.45).toFixed(2);
  const causeShare = (parseFloat(totalPrice) * 0.35).toFixed(2);
  const platformFee = (parseFloat(totalPrice) * 0.20).toFixed(2);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (parseFloat(value) >= basePrice) {
      setTotalPrice(value);
    }
  };

  return (
    <section className="py-20 bg-white reveal">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">Ideate Phase</h2>

        {/* Customized Price Distribution */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Customized Price Distribution</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Empowering collectors to decide how their purchase impacts both artists and social causes, creating a transparent and meaningful art commerce experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Brush className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Artist Base Price</h3>
              <p className="text-gray-600 mb-4">
                Artists set their minimum price, ensuring fair compensation for their work while maintaining creative freedom.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-primary-600 flex-shrink-0 mt-1" />
                  Fair market value
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-primary-600 flex-shrink-0 mt-1" />
                  Guaranteed minimum
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <HandHeart className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Social Cause Contribution</h3>
              <p className="text-gray-600 mb-4">
                Collectors choose how much of their purchase supports selected social causes, amplifying their impact.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-primary-600 flex-shrink-0 mt-1" />
                  Flexible allocation
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-primary-600 flex-shrink-0 mt-1" />
                  Direct impact
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Platform Fee</h3>
              <p className="text-gray-600 mb-4">
                Transparent platform fees support ongoing operations and platform development.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-primary-600 flex-shrink-0 mt-1" />
                  Clear fee structure
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-primary-600 flex-shrink-0 mt-1" />
                  Sustainable operations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brainstorming Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-primary-600" />
              <h3 className="text-2xl font-bold">Brainstorming Methods</h3>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Crazy 8's Exercise</h4>
                  <p className="text-gray-600">8 ideas in 8 minutes, repeated 3 times per participant</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Mind Mapping</h4>
                  <p className="text-gray-600">5 detailed mind maps exploring different aspects</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-6 h-6 text-primary-600" />
              <h3 className="text-2xl font-bold">Price Distribution Concept</h3>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <Brush className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Artist Base Price</h4>
                    <p className="text-sm text-gray-600">Fair compensation and creative freedom</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <HandHeart className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Social Cause</h4>
                    <p className="text-sm text-gray-600">Flexible impact allocation</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <Building2 className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Platform Fee</h4>
                    <p className="text-sm text-gray-600">Sustainable operations</p>
                  </div>
                </div>

                {/* Interactive Price Distribution Demo */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Example: "Summer Breeze"</h5>
                      <p className="text-sm text-gray-600">Base Price: ${basePrice.toFixed(2)}</p>
                    </div>
                    <div className="text-right">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Total Price
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <input
                          type="number"
                          value={totalPrice}
                          onChange={handlePriceChange}
                          min={basePrice}
                          step="0.01"
                          className="w-32 pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="relative h-6 rounded-full overflow-hidden bg-gray-100">
                      <div className="absolute inset-y-0 left-0 w-3/5 bg-black/5" />
                      <div className="relative h-full flex">
                        <div className="w-[45%] bg-primary-500" />
                        <div className="w-[35%] bg-green-500" />
                        <div className="w-[20%] bg-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center text-sm mb-6">
                    <div>
                      <div className="font-medium text-primary-600">${artistShare}</div>
                      <div className="text-gray-600">Artist (45%)</div>
                    </div>
                    <div>
                      <div className="font-medium text-green-600">${causeShare}</div>
                      <div className="text-gray-600">Cause (35%)</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">${platformFee}</div>
                      <div className="text-gray-600">Platform (20%)</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h6 className="font-medium text-gray-900 mb-3">Impact Preview</h6>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-green-600 mt-1" />
                        <p className="text-sm text-gray-600">
                          Provides {Math.floor(parseFloat(causeShare) / 8)} meals through Food Bank Initiative
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-green-600 mt-1" />
                        <p className="text-sm text-gray-600">
                          Supports artist's upcoming exhibition
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selection Criteria */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold">Selection Criteria</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'User Impact',
                criteria: [
                  'Solves key user pain points',
                  'Improves user experience',
                  'Addresses primary use cases'
                ]
              },
              {
                title: 'Feasibility',
                criteria: [
                  'Technical implementation',
                  'Resource requirements',
                  'Timeline constraints'
                ]
              },
              {
                title: 'Business Value',
                criteria: [
                  'Revenue potential',
                  'Market differentiation',
                  'Scalability'
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h4 className="text-xl font-semibold mb-4">{category.title}</h4>
                <ul className="space-y-2">
                  {category.criteria.map((criterion, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary-600 mt-2"></div>
                      <span className="text-gray-600">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Layout className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold">Key Features</h3>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              {[
                {
                  feature: 'Dynamic Price Distribution',
                  rationale: 'Enables transparent fund allocation between artists and causes'
                },
                {
                  feature: 'Impact Visualization',
                  rationale: 'Real-time preview of social impact from purchases'
                },
                {
                  feature: 'Flexible Contribution Model',
                  rationale: 'Customizable support levels for different stakeholders'
                },
                {
                  feature: 'Automated Distribution',
                  rationale: 'Seamless fund transfer to all parties'
                }
              ].map((item, index) => (
                <div key={index} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.feature}</h4>
                  <p className="text-gray-600">{item.rationale}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-primary-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold">1</span>
                <h4 className="font-semibold">Artist Sets Base Price</h4>
              </div>
              <p className="text-gray-600">
                Artists determine their minimum acceptable price for each artwork, ensuring fair compensation.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold">2</span>
                <h4 className="font-semibold">Collector Customizes</h4>
              </div>
              <p className="text-gray-600">
                Collectors choose how to distribute additional funds between the artist and social causes.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold">3</span>
                <h4 className="font-semibold">Transparent Distribution</h4>
              </div>
              <p className="text-gray-600">
                Funds are automatically distributed according to the collector's preferences, with clear tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}