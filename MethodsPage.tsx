import { Database, Radio, Lightbulb, Calculator } from 'lucide-react';

export default function MethodsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Methods & Data Processing
        </h1>

        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Database className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold">Data Sources</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-900/20 border border-blue-400/30 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <Radio className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-blue-300 mb-2">SMAP SPL1BTB v006 / v105 NRT</h3>
                    <p className="text-gray-300 mb-2">
                      <strong>Source:</strong> NSIDC DAAC (National Snow and Ice Data Center Distributed Active Archive Center)
                    </p>
                    <p className="text-gray-300 mb-2">
                      <strong>Mission:</strong> NASA Soil Moisture Active Passive (SMAP) satellite
                    </p>
                    <p className="text-gray-300">
                      <strong>Data:</strong> Radio Frequency Interference (RFI) flags at 1.41 GHz (L-band). SMAP's radiometer detects electromagnetic interference from terrestrial sources during soil moisture measurements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <Lightbulb className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-yellow-300 mb-2">VIIRS VNP46A2</h3>
                    <p className="text-gray-300 mb-2">
                      <strong>Source:</strong> LAADS DAAC (Level-1 and Atmosphere Archive & Distribution System)
                    </p>
                    <p className="text-gray-300 mb-2">
                      <strong>Mission:</strong> NASA/NOAA Visible Infrared Imaging Radiometer Suite (VIIRS) on Suomi NPP satellite
                    </p>
                    <p className="text-gray-300">
                      <strong>Data:</strong> Black Marble nighttime radiance measurements. Daily composite of artificial lights, moonlight-corrected and cloud-screened.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900/20 border border-purple-400/30 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <Database className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-purple-300 mb-2">DSN Now</h3>
                    <p className="text-gray-300 mb-2">
                      <strong>Source:</strong> NASA/JPL Deep Space Network
                    </p>
                    <p className="text-gray-300">
                      <strong>Data:</strong> Real-time operations feed showing active spacecraft communications, data rates, and signal strength across the global DSN antenna network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Calculator className="w-8 h-8 text-green-400" />
              <h2 className="text-3xl font-bold">Processing Pipeline</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">1. Radio Quiet Score</h3>
                <div className="bg-black/50 rounded-lg p-6 border border-blue-400/20">
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300 mb-3"><strong>Step 1:</strong> Grid Earth's surface at 0.25° resolution</p>
                      <p className="text-gray-300 mb-3"><strong>Step 2:</strong> For each grid cell, compute 30-day mean RFI detection rate from SMAP SPL1BTB</p>
                      <p className="text-gray-300 mb-3"><strong>Step 3:</strong> Calculate Radio Quiet Score:</p>
                    </div>
                    <div className="bg-blue-900/30 rounded p-4 font-mono text-sm border border-blue-400/30">
                      <p className="text-blue-300">RadioQuietScore = 100 − (100 × RFI_rate)</p>
                    </div>
                    <p className="text-gray-400 text-sm italic">
                      Where RFI_rate is the fraction of observations flagged for interference (0 to 1).
                      Lower RFI = Higher score = Quieter radio environment.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">2. Human Quiet Score</h3>
                <div className="bg-black/50 rounded-lg p-6 border border-yellow-400/20">
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300 mb-3"><strong>Step 1:</strong> Use same 0.25° grid as Radio Quiet</p>
                      <p className="text-gray-300 mb-3"><strong>Step 2:</strong> For each grid cell, compute 30-day mean nighttime radiance from VIIRS VNP46A2</p>
                      <p className="text-gray-300 mb-3"><strong>Step 3:</strong> Normalize radiance globally to 0-100 scale</p>
                      <p className="text-gray-300 mb-3"><strong>Step 4:</strong> Calculate Human Quiet Score:</p>
                    </div>
                    <div className="bg-yellow-900/30 rounded p-4 font-mono text-sm border border-yellow-400/30">
                      <p className="text-yellow-300">HumanQuietScore = 100 − normalized_radiance</p>
                    </div>
                    <p className="text-gray-400 text-sm italic">
                      Dimmer nights (lower radiance) = Higher score = Less human light pollution.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">3. Composite Quietness Index</h3>
                <div className="bg-black/50 rounded-lg p-6 border border-purple-400/20">
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300 mb-3"><strong>Step 1:</strong> Combine Radio Quiet and Human Quiet scores using weighted average</p>
                      <p className="text-gray-300 mb-3"><strong>Step 2:</strong> Apply user-configurable weights:</p>
                    </div>
                    <div className="bg-purple-900/30 rounded p-4 font-mono text-sm border border-purple-400/30 space-y-2">
                      <p className="text-purple-300">Q = w<sub>r</sub> × RadioQuietScore + w<sub>h</sub> × HumanQuietScore</p>
                      <p className="text-purple-300 mt-2">Default: w<sub>r</sub> = 0.6, w<sub>h</sub> = 0.4</p>
                    </div>
                    <p className="text-gray-400 text-sm italic">
                      Weights are adjustable in the Explore Map interface. The 0.6/0.4 split prioritizes radio quiet slightly, as RFI directly impacts space science missions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Transparency & Validation</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                All processing steps are documented and reproducible. The composite index is intentionally simple and transparent, designed for policy communication and public understanding.
              </p>
              <p>
                <strong>Temporal Coverage:</strong> 30-day rolling windows ensure recent data while smoothing daily variations.
              </p>
              <p>
                <strong>Spatial Resolution:</strong> 0.25° (~25-30 km at equator) balances global coverage with meaningful local detail.
              </p>
              <p>
                <strong>Updates:</strong> Data refreshed monthly as new SMAP and VIIRS observations become available.
              </p>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-400/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">Citation Format</h3>
            <div className="space-y-3 text-sm font-mono text-gray-300 bg-black/50 p-4 rounded">
              <p>SMAP L1B Radiometer Half-Orbit Time-Ordered Brightness Temperatures, Version 6. (2024). NASA NSIDC DAAC. doi:10.5067/XXBYI6X7NWMO</p>
              <p className="mt-2">VNP46A2 - VIIRS/NPP Lunar BRDF-Adjusted Nighttime Lights Yearly L3 Global 15 arc second Linear Lat Lon Grid. (2024). NASA LAADS DAAC.</p>
              <p className="mt-2">DSN Now. (2024). NASA Jet Propulsion Laboratory Deep Space Network.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
