import React from 'react';

export function PaperWireframe() {
  return (
    <div className="mb-12 p-8 bg-white rounded-xl shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Paper texture background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjAuNSIgZmlsbD0icmdiYSgwLDAsMCwwLjEpIi8+PC9zdmc+')] opacity-5" />
          
          {/* Hand-drawn style container */}
          <div className="relative p-8 border-4 border-gray-400 rounded-lg" style={{
            background: '#fff',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)'
          }}>
            {/* Navigation */}
            <div className="mb-8 pb-4 border-b-2 border-gray-400" style={{
              borderStyle: 'dashed'
            }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full border-2 border-gray-400" style={{
                  borderStyle: 'dashed'
                }} />
                <div className="w-48 h-6 bg-gray-200 rounded" />
              </div>
              <div className="flex gap-2">
                <div className="flex-1 h-2 bg-gray-300 rounded" />
                <div className="flex-1 h-2 bg-gray-300 rounded" />
                <div className="flex-1 h-2 bg-gray-500 rounded" />
              </div>
            </div>

            {/* Price Section */}
            <div className="mb-8 p-4 border-2 border-gray-400 rounded" style={{
              borderStyle: 'dashed'
            }}>
              <div className="flex justify-between items-center">
                <div>
                  <div className="w-32 h-4 bg-gray-300 mb-2 rounded" />
                  <div className="w-24 h-3 bg-gray-200 rounded" />
                </div>
                <div className="w-24 h-8 border-2 border-gray-400 rounded" style={{
                  borderStyle: 'dashed'
                }} />
              </div>
            </div>

            {/* Distribution Bar */}
            <div className="mb-8">
              <div className="h-8 rounded-full overflow-hidden border-2 border-gray-400 flex" style={{
                borderStyle: 'dashed'
              }}>
                <div className="w-[45%] bg-gray-300" />
                <div className="w-[35%] bg-gray-200" />
                <div className="w-[20%] bg-gray-100" />
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-500" style={{
                fontFamily: "'Architects Daughter', cursive"
              }}>
                <span>Artist 45%</span>
                <span>Cause 35%</span>
                <span>Platform 20%</span>
              </div>
            </div>

            {/* Distribution Details */}
            <div className="mb-8 space-y-4">
              {[
                { label: 'Artist Share', amount: '$225.00' },
                { label: 'Social Cause', amount: '$175.00' },
                { label: 'Platform Fee', amount: '$100.00' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between p-3 border-2 border-gray-400 rounded" style={{
                  borderStyle: 'dashed'
                }}>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-400" style={{
                      borderStyle: 'dashed'
                    }} />
                    <span className="text-gray-600" style={{
                      fontFamily: "'Architects Daughter', cursive"
                    }}>{item.label}</span>
                  </div>
                  <span className="text-gray-600" style={{
                    fontFamily: "'Architects Daughter', cursive"
                  }}>{item.amount}</span>
                </div>
              ))}
            </div>

            {/* Impact Preview */}
            <div className="mb-8 p-4 border-2 border-gray-400 rounded bg-gray-50" style={{
              borderStyle: 'dashed'
            }}>
              <div className="mb-4 text-gray-600" style={{
                fontFamily: "'Architects Daughter', cursive"
              }}>Impact Preview</div>
              <div className="space-y-3">
                {[
                  'Your contribution will provide 21 meals',
                  'Support artist\'s upcoming exhibition'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-400" style={{
                      borderStyle: 'dashed'
                    }} />
                    <span className="text-gray-600" style={{
                      fontFamily: "'Architects Daughter', cursive"
                    }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <div className="space-x-4">
                <button className="px-4 py-2 border-2 border-gray-400 rounded" style={{
                  borderStyle: 'dashed',
                  fontFamily: "'Architects Daughter', cursive"
                }}>Back</button>
                <button className="px-4 py-2 border-2 border-gray-400 rounded" style={{
                  borderStyle: 'dashed',
                  fontFamily: "'Architects Daughter', cursive"
                }}>View Cause</button>
              </div>
              <button className="px-6 py-2 bg-gray-200 rounded-lg" style={{
                fontFamily: "'Architects Daughter', cursive"
              }}>Confirm</button>
            </div>

            {/* Annotations */}
            <div className="absolute -right-40 top-0 bottom-0 w-36 flex flex-col justify-between text-blue-600 text-sm" style={{
              fontFamily: "'Architects Daughter', cursive"
            }}>
              <div className="space-y-2">
                <div>← Progress Bar</div>
                <div>← Price Input</div>
                <div>← Distribution Slider</div>
                <div>← Share Details</div>
                <div>← Impact Section</div>
                <div>← Action Buttons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}