import { Image, Users, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export function LowFiPriceDistribution() {
  const [totalPrice, setTotalPrice] = useState("500.00");
  const basePrice = 300;
  
  const artistShare = (parseFloat(totalPrice) * 0.45).toFixed(2);
  const causeShare = (parseFloat(totalPrice) * 0.35).toFixed(2);
  const platformFee = (parseFloat(totalPrice) * 0.20).toFixed(2);

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Design System Annotations */}
      <div className="absolute -left-48 top-0 w-40 text-xs space-y-2 text-blue-600 font-mono">
        <div>Typography Scale:</div>
        <div>H1: 24/32 Bold</div>
        <div>Body: 16/24 Regular</div>
        <div>Caption: 14/20 Medium</div>
      </div>
      
      <div className="absolute -right-48 top-0 w-40 text-xs space-y-2 text-blue-600 font-mono">
        <div>Color System:</div>
        <div>Primary: #1a73e8</div>
        <div>Surface: #f8f9fa</div>
        <div>Outline: #dadce0</div>
      </div>

      {/* Main Wireframe Container */}
      <div className="p-8 bg-gray-50 border-2 border-gray-300 border-dashed rounded-xl">
        {/* Navigation - Material Top App Bar Pattern */}
        <div className="mb-8 pb-4 border-b-2 border-gray-300 border-dashed">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-6 w-6 bg-gray-400 rounded-full" /> {/* Back Icon */}
            <div className="h-6 w-48 bg-gray-400 rounded" /> {/* Title */}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-blue-200 rounded" /> {/* Progress 1 */}
            <div className="flex-1 h-2 bg-blue-200 rounded" /> {/* Progress 2 */}
            <div className="flex-1 h-2 bg-blue-400 rounded" /> {/* Progress 3 */}
          </div>
        </div>

        {/* Content Container - Material Card Pattern */}
        <div className="space-y-8">
          {/* Price Input Section */}
          <div className="flex justify-between items-start p-4 border-2 border-gray-300 border-dashed rounded-lg">
            <div className="space-y-2">
              <div className="h-5 w-40 bg-gray-400 rounded" /> {/* Title */}
              <div className="h-4 w-32 bg-gray-300 rounded" /> {/* Subtitle */}
            </div>
            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-300 rounded" /> {/* Label */}
              <div className="h-10 w-32 border-2 border-blue-200 border-dashed rounded" /> {/* Input */}
            </div>
          </div>

          {/* Distribution Slider - Material Slider Pattern */}
          <div className="p-4 border-2 border-gray-300 border-dashed rounded-lg">
            <div className="mb-4">
              <div className="h-8 rounded-full overflow-hidden bg-gray-200 flex relative">
                <div className="w-[45%] bg-blue-200" />
                <div className="w-[35%] bg-green-200" />
                <div className="w-[20%] bg-gray-300" />
                {/* Slider Handles */}
                <div className="absolute top-1/2 left-[45%] w-4 h-4 -mt-2 -ml-2 bg-white border-2 border-blue-400 rounded-full" />
                <div className="absolute top-1/2 left-[80%] w-4 h-4 -mt-2 -ml-2 bg-white border-2 border-blue-400 rounded-full" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-24 bg-gray-300 rounded" />
              <div className="h-4 w-24 bg-gray-300 rounded" />
              <div className="h-4 w-24 bg-gray-300 rounded" />
            </div>
          </div>

          {/* Distribution Details - Material List Pattern */}
          <div className="space-y-2">
            {['Artist', 'Cause', 'Platform'].map((_, i) => (
              <div key={i} className="flex justify-between p-4 bg-white border-2 border-gray-300 border-dashed rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-gray-400 rounded-full" />
                  <div className="h-4 w-24 bg-gray-300 rounded" />
                </div>
                <div className="h-4 w-20 bg-gray-300 rounded" />
              </div>
            ))}
          </div>

          {/* Impact Preview - Material Card Pattern */}
          <div className="p-4 bg-blue-50 border-2 border-blue-200 border-dashed rounded-lg">
            <div className="h-5 w-32 bg-blue-200 rounded mb-4" />
            <div className="space-y-3">
              {[0, 1].map(i => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-blue-300 rounded-full" />
                  <div className="flex-1 h-4 bg-gray-300 rounded" />
                  <div className="h-4 w-20 bg-blue-200 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons - Material Buttons Pattern */}
          <div className="flex justify-between pt-4">
            <div className="space-x-3">
              <div className="inline-flex items-center h-10 px-4 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="h-4 w-4 bg-gray-400 rounded-full mr-2" />
                <div className="h-4 w-20 bg-gray-300 rounded" />
              </div>
              <div className="inline-flex items-center h-10 px-4 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="h-4 w-4 bg-gray-400 rounded-full mr-2" />
                <div className="h-4 w-20 bg-gray-300 rounded" />
              </div>
            </div>
            <div className="h-10 px-6 bg-blue-200 rounded-lg flex items-center justify-center">
              <div className="h-4 w-32 bg-blue-300 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Design Annotations */}
      <div className="absolute -left-48 bottom-0 w-40 text-xs space-y-2 text-blue-600 font-mono">
        <div>Spacing System:</div>
        <div>4px - Compact</div>
        <div>8px - Default</div>
        <div>16px - Comfortable</div>
        <div>24px - Loose</div>
      </div>

      <div className="absolute -right-48 bottom-0 w-40 text-xs space-y-2 text-blue-600 font-mono">
        <div>Components:</div>
        <div>- Top App Bar</div>
        <div>- Progress</div>
        <div>- Cards</div>
        <div>- Buttons</div>
        <div>- Sliders</div>
      </div>

      {/* Version Tag */}
      <div className="absolute right-0 -top-6 text-xs text-blue-600 font-mono">
        Low-Fi v1.0 | Material Design
      </div>
    </div>
  );
}