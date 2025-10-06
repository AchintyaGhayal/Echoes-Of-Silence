import { Telescope, TreePine, Building2, TrendingUp, Globe as Globe2, Shield } from 'lucide-react';

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Impact & Applications
        </h1>

        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              Scientific Impact
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-900/20 border border-blue-400/30 rounded-lg p-6 hover:scale-105 transition-transform">
                <Telescope className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-blue-300">Space Science</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Identifies quiet zones ideal for radio astronomy and Deep Space Network performance. Cleaner spectrum enables detection of fainter signals from distant spacecraft and cosmic phenomena.
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-400/30 rounded-lg p-6 hover:scale-105 transition-transform">
                <TreePine className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-green-300">Conservation</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Reveals global biodiversity refuges of acoustic and visual quiet. Many species depend on natural soundscapes and darkness for navigation, communication, and survival.
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-400/30 rounded-lg p-6 hover:scale-105 transition-transform">
                <Building2 className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-purple-300">Policy</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Provides evidence-based data for radio-quiet and dark-sky protections. Transparent metrics support regulatory decisions and international coordination.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Globe2 className="w-8 h-8 text-blue-400 mr-3" />
              Applications
            </h2>

            <div className="space-y-6">
              <div className="bg-black/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-300">1. Site Selection for Observatories & DSN Stations</h3>
                <p className="text-gray-300 mb-3">
                  Radio telescopes and deep-space antennas require extremely low RFI environments. The Composite Quietness Index provides a global screening tool to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Identify candidate locations with minimal electromagnetic interference</li>
                  <li>Compare sites across continents using standardized metrics</li>
                  <li>Monitor changes in local RFI levels over time</li>
                  <li>Support international coordination for protected radio-quiet zones</li>
                </ul>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-green-300">2. Prioritization of Conservation Corridors</h3>
                <p className="text-gray-300 mb-3">
                  Wildlife conservation benefits from mapping both acoustic and visual quiet:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Bats, whales, and migratory birds navigate using natural sound and darkness</li>
                  <li>High-scoring quiet zones can be prioritized for habitat protection</li>
                  <li>Mid-scoring "at risk" zones become targets for proactive conservation</li>
                  <li>Supports evidence-based arguments for land-use planning and light pollution ordinances</li>
                </ul>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-300">3. Monthly Monitoring of Human Noise Expansion</h3>
                <p className="text-gray-300 mb-3">
                  Tracking temporal changes reveals trends in global quiet:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Monthly updates show urbanization and electrification impacts</li>
                  <li>Seasonal patterns highlight tourism, agriculture, and industrial cycles</li>
                  <li>Long-term datasets enable predictive modeling of noise spread</li>
                  <li>Before/after comparisons measure effectiveness of protection policies</li>
                </ul>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-300">4. Public Engagement & Education</h3>
                <p className="text-gray-300 mb-3">
                  Redefining silence as a measurable global asset:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Interactive globe makes abstract concepts tangible and accessible</li>
                  <li>Connects local experiences to global patterns</li>
                  <li>Supports STEM education with real NASA data and transparent methods</li>
                  <li>Raises awareness of light and radio pollution as environmental issues</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-400/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Shield className="w-8 h-8 text-blue-400 mr-3" />
              Real-World Use Cases
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/50 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold mb-3 text-blue-300">NASA Deep Space Network</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Existing DSN sites (Goldstone, Canberra, Madrid) can be monitored for encroaching RFI. Future antenna expansions benefit from global quiet mapping to ensure optimal signal reception from distant missions like Voyager and future Mars/lunar communications.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold mb-3 text-green-300">Dark Sky Preserves</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  International Dark-Sky Association designations can leverage VIIRS data to objectively measure light pollution baselines and track preservation effectiveness. Composite scores add radio quiet as a complementary criterion for truly pristine sites.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold mb-3 text-purple-300">National Radio Quiet Zones</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The U.S. National Radio Quiet Zone around Green Bank Observatory and international equivalents can use this dataset to document protection effectiveness and identify boundary encroachment for regulatory enforcement.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold mb-3 text-yellow-300">Wildlife Corridors</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Conservation organizations can overlay quiet zones with species migration routes and habitats. High-scoring areas become candidates for transboundary protected areas, especially for nocturnal and acoustically-sensitive species.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Beyond Earth</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Protecting Earth's quiet zones has implications beyond our planet. As humanity expands into space, the radio spectrum becomes a shared resource. Lessons learned from mapping and preserving quiet on Earth inform:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Radio astronomy sites on the far side of the Moon, shielded from Earth's RFI</li>
              <li>Interplanetary communication protocols minimizing interference</li>
              <li>International space traffic management and spectrum allocation</li>
              <li>Ethical frameworks for preserving "cosmic quiet" for scientific discovery</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-xl p-8 text-center">
            <p className="text-2xl font-bold text-blue-300 mb-4">
              Silence is not just absence of noise
            </p>
            <p className="text-xl text-gray-300">
              It's a resource, a refuge, and a requirement for understanding the universe and protecting life on Earth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
