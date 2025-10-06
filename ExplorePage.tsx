import { useState } from 'react';
import { Info } from 'lucide-react';
import { LayerType, WeightSettings, QuietScoreData } from '../types';
import QuietGlobe from '../components/QuietGlobe';
import DSNWidget from '../components/DSNWidget';

export default function ExplorePage() {
  const [activeLayer, setActiveLayer] = useState<LayerType>('composite');
  const [weights, setWeights] = useState<WeightSettings>({ radio: 0.6, human: 0.4 });
  const [selectedLocation, setSelectedLocation] = useState<QuietScoreData | null>(null);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const handleWeightChange = (type: 'radio' | 'human', value: number) => {
    if (type === 'radio') {
      setWeights({ radio: value, human: 1 - value });
    } else {
      setWeights({ radio: 1 - value, human: value });
    }
  };

  const getScoreColor = (score: number) => {
    if (score < 20) return 'text-red-400';
    if (score < 60) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getScoreLabel = (score: number) => {
    if (score < 20) return 'Noisy';
    if (score < 60) return 'At Risk';
    return 'Quiet';
  };

  const tooltips = {
    radio: 'From SMAP SPL1BTB v006: fewer RFI flags = quieter skies.',
    human: 'From VIIRS VNP46A2: dimmer nights = quieter human footprint.',
    composite: 'Weighted blend of Radio + Human Quiet. Adjust sliders to explore tradeoffs.'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20">
      <div className="max-w-[1800px] mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Explore the Quiet Map
        </h1>

        <div className="grid lg:grid-cols-[320px_1fr_320px] gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-6 h-fit">
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                Layer Selection
                <button
                  className="ml-2 text-gray-400 hover:text-white"
                  onMouseEnter={() => setShowTooltip(activeLayer)}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  <Info className="w-4 h-4" />
                </button>
              </h3>

              {showTooltip && (
                <div className="mb-4 p-3 bg-blue-900/50 border border-blue-400/30 rounded-lg text-sm text-gray-300">
                  {tooltips[showTooltip as LayerType]}
                </div>
              )}

              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="layer"
                    checked={activeLayer === 'radio'}
                    onChange={() => setActiveLayer('radio')}
                    className="w-5 h-5 accent-blue-500"
                  />
                  <span className="group-hover:text-blue-400 transition-colors">Radio Quiet (SMAP)</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="layer"
                    checked={activeLayer === 'human'}
                    onChange={() => setActiveLayer('human')}
                    className="w-5 h-5 accent-yellow-500"
                  />
                  <span className="group-hover:text-yellow-400 transition-colors">Human Quiet (VIIRS)</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="layer"
                    checked={activeLayer === 'composite'}
                    onChange={() => setActiveLayer('composite')}
                    className="w-5 h-5 accent-purple-500"
                  />
                  <span className="group-hover:text-purple-400 transition-colors">Composite Quietness Index</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Weight Sliders</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-300">Radio Weight</label>
                    <span className="text-sm font-bold text-blue-400">{(weights.radio * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={weights.radio}
                    onChange={(e) => handleWeightChange('radio', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-300">Human Weight</label>
                    <span className="text-sm font-bold text-yellow-400">{(weights.human * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={weights.human}
                    onChange={(e) => handleWeightChange('human', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Legend</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-red-900/30 border border-red-400/30 rounded-lg">
                  <span className="text-sm">0-20</span>
                  <span className="text-sm font-bold text-red-400">Noisy</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-900/30 border border-yellow-400/30 rounded-lg">
                  <span className="text-sm">20-60</span>
                  <span className="text-sm font-bold text-yellow-400">At Risk</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-900/30 border border-green-400/30 rounded-lg">
                  <span className="text-sm">60-100</span>
                  <span className="text-sm font-bold text-green-400">Quiet</span>
                </div>
              </div>
            </div>

            {selectedLocation && (
              <div className="bg-blue-900/30 border border-blue-400/30 rounded-xl p-4">
                <h3 className="text-sm font-bold mb-3 text-blue-300">Location Data</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Coordinates:</span>
                    <span className="font-mono">{selectedLocation.lat.toFixed(2)}, {selectedLocation.lng.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Radio Quiet:</span>
                    <span className={`font-bold ${getScoreColor(selectedLocation.radioQuietScore)}`}>
                      {selectedLocation.radioQuietScore.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Human Quiet:</span>
                    <span className={`font-bold ${getScoreColor(selectedLocation.humanQuietScore)}`}>
                      {selectedLocation.humanQuietScore.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Composite:</span>
                    <span className={`font-bold ${getScoreColor(selectedLocation.compositeQ)}`}>
                      {selectedLocation.compositeQ.toFixed(1)} ({getScoreLabel(selectedLocation.compositeQ)})
                    </span>
                  </div>
                  {selectedLocation.context && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-gray-300 italic">{selectedLocation.context}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <QuietGlobe
              activeLayer={activeLayer}
              weights={weights}
              onLocationClick={setSelectedLocation}
            />
          </div>

          <div className="h-fit">
            <DSNWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
