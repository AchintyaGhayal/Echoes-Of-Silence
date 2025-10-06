import { Radio, Lightbulb, Globe as Globe2, Satellite, Heart, Brain } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-blue-600/20 border-2 border-blue-400">
              <Radio className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Echoes of Silence
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              Silence is a resource — for Earth and for Space.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Opening Statement</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Earth's natural quiet is disappearing. Artificial light and radio interference drown out the faint signals that ecosystems and space science rely on. Without protecting quiet zones, we risk losing our ability to study wildlife, observe the universe, and communicate with deep-space missions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-400/30 rounded-xl p-6 hover:scale-105 transition-transform">
              <Satellite className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Science</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                NASA's Deep Space Network must detect faint signals billions of miles away — radio interference makes that harder.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-400/30 rounded-xl p-6 hover:scale-105 transition-transform">
              <Heart className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Biodiversity</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Many species rely on sound and darkness for survival.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-400/30 rounded-xl p-6 hover:scale-105 transition-transform">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Human Well-being</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Quiet and darkness are linked to mental health and cultural connection.
              </p>
            </div>
          </div>

          <div className="bg-red-900/20 border border-red-400/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-400">The Problem</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              There is no open, global view of where quiet still exists — and where it's fading. Without visibility, scientists and policymakers cannot protect it.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-400/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">The Solution</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Echoes of Silence merges real NASA datasets to map quiet across the planet:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-4 bg-white/5 rounded-lg p-4">
                <Radio className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-blue-300 mb-1">SMAP SPL1BTB v006 / v105 NRT</h3>
                  <p className="text-gray-300 text-sm">Detects Radio Frequency Interference (RFI).</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white/5 rounded-lg p-4">
                <Lightbulb className="w-8 h-8 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-yellow-300 mb-1">VIIRS VNP46A2</h3>
                  <p className="text-gray-300 text-sm">Measures nighttime radiance.</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/30 border border-purple-400/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-2">Composite Quietness Index</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A transparent, data-driven measure of Earth's remaining silence.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('explore')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-600/50 transition-all hover:scale-105"
            >
              <Globe2 className="w-5 h-5 inline mr-2" />
              Explore the Quiet Map
            </button>
            <button
              onClick={() => onNavigate('methods')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/30 transition-all hover:scale-105"
            >
              See the Data & Methods
            </button>
            <button
              onClick={() => onNavigate('impact')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/30 transition-all hover:scale-105"
            >
              Learn Why Silence Matters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
