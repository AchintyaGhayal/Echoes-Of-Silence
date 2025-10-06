import { Mail, User, Award, ExternalLink } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Team
        </h1>

        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Achintya Ghayal</h2>
              <p className="text-xl text-blue-400 mb-4">Project Lead</p>

              <a
                href="mailto:achintya.ghayal@gmail.com"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>achintya.ghayal@gmail.com</span>
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-400/30 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center text-blue-300">
                <Award className="w-6 h-6 mr-2" />
                About This Project
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Echoes of Silence was created for the NASA Space Apps Challenge, bringing together Earth observation data and space science to visualize a critical but often invisible resource: quiet.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By combining SMAP radio frequency interference data with VIIRS nighttime imagery, this project demonstrates how NASA's Earth-observing satellites can help us understand and protect the natural quiet that both wildlife and deep-space science depend on.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-blue-300">Technical Approach</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                  <li>Real NASA SMAP and VIIRS datasets</li>
                  <li>Transparent processing pipeline</li>
                  <li>Interactive 3D globe visualization</li>
                  <li>User-configurable weighting system</li>
                  <li>Cinematic demo modes for presentations</li>
                </ul>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-green-300">Key Innovations</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                  <li>First composite quiet index combining RFI and light pollution</li>
                  <li>Connection between Earth quiet and space science</li>
                  <li>Accessible visualization for non-technical audiences</li>
                  <li>Policy-ready metrics and documentation</li>
                  <li>Open, reproducible methodology</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Acknowledgments</h2>

            <div className="space-y-4 text-gray-300">
              <p>
                This project would not be possible without:
              </p>

              <div className="bg-blue-900/20 border border-blue-400/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-300 mb-3">NASA & Partners</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>NASA SMAP Mission team for RFI data collection and public access</li>
                  <li>NASA/NOAA VIIRS team for Black Marble nighttime data</li>
                  <li>NASA/JPL Deep Space Network for operational insights</li>
                  <li>NSIDC DAAC and LAADS DAAC for data distribution infrastructure</li>
                  <li>NASA Space Apps Challenge for inspiration and platform</li>
                </ul>
              </div>

              <div className="bg-purple-900/20 border border-purple-400/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-300 mb-3">Open Source Community</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>React, TypeScript, and Vite development tools</li>
                  <li>Tailwind CSS for styling framework</li>
                  <li>Lucide React for iconography</li>
                  <li>Canvas API for 3D globe rendering</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Get Involved</h2>
            <p className="text-gray-300 text-center mb-6">
              Interested in contributing to this project or using the data for your own research?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:achintya.ghayal@gmail.com"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Contact the Team</span>
              </a>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>Built with passion for science, conservation, and exploration</p>
            <p className="mt-2 text-blue-400 font-medium">Silence is a resource — for Earth and for Space.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
