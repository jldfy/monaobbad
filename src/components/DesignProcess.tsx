import { Monitor, Play, DollarSign, HandHeart, Building2, ArrowRight, ExternalLink, ArrowLeft, Check, Image, Users } from 'lucide-react';
import { useState } from 'react';

export function DesignProcess() {
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
        <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">Design Process</h2>

        {/* Wireframes */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold">High-Fidelity Wireframes</h3>
          </div>
          <p className="text-gray-600 mb-8">
            Detailed wireframes showcasing the core functionality and user interface of PickAsso.
          </p>

          {/* Price Distribution Interface */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <h4 className="font-semibold text-gray-900">Price Distribution Interface</h4>
            </div>
            <div className="p-6">
              <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                  {/* Navigation Breadcrumbs */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                    <button className="flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium">
                      <Image className="w-4 h-4" />
                      Artwork
                    </button>
                    <span>→</span>
                    <button className="flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium">
                      <Users className="w-4 h-4" />
                      Cause
                    </button>
                    <span>→</span>
                    <span className="font-medium text-gray-900">Distribution</span>
                  </div>

                  {/* Artwork Info and Price Input */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Artwork: "Summer Breeze"</h5>
                      <p className="text-sm text-gray-600">Base Price: ${basePrice.toFixed(2)}</p>
                    </div>
                    <div className="text-right">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Total Price
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

                  {/* Distribution Visualization */}
                  <div className="mb-6">
                    <div className="relative h-6 rounded-full overflow-hidden bg-gray-100">
                      {/* Base Price Indicator (Transparent Overlay) */}
                      <div className="absolute inset-y-0 left-0 w-3/5 bg-black/5" />
                      
                      {/* Distribution Segments */}
                      <div className="relative h-full flex">
                        {/* Artist Share */}
                        <div className="w-[45%] bg-primary-500" />
                        {/* Social Cause */}
                        <div className="w-[35%] bg-green-500" />
                        {/* Platform Fee */}
                        <div className="w-[20%] bg-gray-400" />
                      </div>

                      {/* Distribution Handles */}
                      <div className="absolute inset-y-0 left-[45%] w-4 -ml-2">
                        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-8 bg-white border-2 border-primary-600 rounded-full shadow-lg cursor-ew-resize" />
                      </div>
                      <div className="absolute inset-y-0 left-[80%] w-4 -ml-2">
                        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-8 bg-white border-2 border-green-600 rounded-full shadow-lg cursor-ew-resize" />
                      </div>
                    </div>

                    {/* Distribution Legend */}
                    <div className="flex justify-between mt-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary-500" />
                        <span className="text-gray-600">Artist (45%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-gray-600">Cause (35%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-400" />
                        <span className="text-gray-600">Platform (20%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Distribution Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary-600" />
                        <span className="font-medium text-primary-900">Artist Share</span>
                      </div>
                      <span className="font-medium text-primary-900">${artistShare}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <HandHeart className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-green-900">Social Cause</span>
                      </div>
                      <span className="font-medium text-green-900">${causeShare}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-gray-600" />
                        <span className="font-medium text-gray-900">Platform Fee</span>
                      </div>
                      <span className="font-medium text-gray-900">${platformFee}</span>
                    </div>
                  </div>

                  {/* Impact Preview */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h5 className="font-medium text-gray-900 mb-3">Impact Preview</h5>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600">
                            Your contribution will provide {Math.floor(parseFloat(causeShare) / 8)} meals through Food Bank Initiative
                            <a 
                              href="/causes/food-bank-initiative" 
                              className="inline-flex items-center gap-1 ml-1 text-green-600 hover:text-green-700 font-medium"
                            >
                              see details
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600">
                            Support artist's upcoming exhibition project
                            <a 
                              href="/artists/sarah-chen/exhibition" 
                              className="inline-flex items-center gap-1 ml-1 text-green-600 hover:text-green-700 font-medium"
                            >
                              see details
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation and Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="space-x-3">
                      <button 
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                        onClick={() => console.log('Back to artwork')}
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Artwork
                      </button>
                      <button 
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                        onClick={() => console.log('View cause details')}
                      >
                        <Users className="w-4 h-4" />
                        View Cause
                      </button>
                    </div>
                    <button 
                      className="inline-flex items-center gap-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
                      onClick={() => console.log('Confirm distribution')}
                    >
                      <Check className="w-4 h-4" />
                      Confirm Distribution
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}