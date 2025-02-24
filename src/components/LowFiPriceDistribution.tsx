import { Image, Users, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export function LowFiPriceDistribution() {
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

      
              <img
                src="./src/data/wirframe.PNG"
                alt="wireframe"
                
              />
     
        {/* Navigation - Material Top App Bar Pattern */}
        

        {/* Content Container - Material Card Pattern */}
        

          {/* Distribution Slider - Material Slider Pattern */}
         

          {/* Distribution Details - Material List Pattern */}
          

          {/* Impact Preview - Material Card Pattern */}
          

          {/* Action Buttons - Material Buttons Pattern */}
          
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