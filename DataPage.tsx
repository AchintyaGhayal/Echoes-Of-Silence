import { ExternalLink, Database, FileText, Github } from 'lucide-react';

export default function DataPage() {
  const datasets = [
    {
      name: 'SMAP L1B Radiometer SPL1BTB v006',
      provider: 'NASA NSIDC DAAC',
      description: 'Soil Moisture Active Passive Level 1B brightness temperatures and RFI flags',
      url: 'https://nsidc.org/data/spl1btb',
      doi: '10.5067/XXBYI6X7NWMO',
      citation: 'SMAP L1B Radiometer Half-Orbit Time-Ordered Brightness Temperatures, Version 6. Boulder, Colorado USA. NASA National Snow and Ice Data Center Distributed Active Archive Center. doi:10.5067/XXBYI6X7NWMO'
    },
    {
      name: 'SMAP L1B Radiometer SPL1BTB-NRT v105',
      provider: 'NASA NSIDC DAAC',
      description: 'Near Real-Time SMAP L1B data with reduced latency for operational applications',
      url: 'https://nsidc.org/data/spl1btb_nrt',
      doi: '10.5067/EVKWXJFM6LBP',
      citation: 'SMAP L1B Radiometer Half-Orbit Time-Ordered Brightness Temperatures NRT, Version 105. Boulder, Colorado USA. NASA National Snow and Ice Data Center Distributed Active Archive Center. doi:10.5067/EVKWXJFM6LBP'
    },
    {
      name: 'VIIRS Black Marble VNP46A2',
      provider: 'NASA LAADS DAAC',
      description: 'Daily nighttime radiance composite with atmospheric and lunar corrections',
      url: 'https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/VNP46A2',
      doi: '10.5067/VIIRS/VNP46A2.001',
      citation: 'Román, M., Wang, Z., Sun, Q., Kalb, V., Miller, S., Molthan, A., Schultz, L., Bell, J., Stokes, E., Pandey, B., Seto, K., Hall, D., Oda, T., Wolfe, R., Lin, G., Golpayegani, N., Devadiga, S., Davidson, C., Sarkar, S., Praderas, C., Schmaltz, J., Boller, R., Stevens, J., Ramos González, O., Padilla, E., Alonso, J., Detrés, Y., Armstrong, R., Miranda, I., Conte, Y., Marrero, N., MacManus, K., Esch, T., Masuoka, E. (2018). NASA Black Marble nighttime lights product suite. Remote Sensing of Environment, 210, 113-143. doi:10.5067/VIIRS/VNP46A2.001'
    },
    {
      name: 'DSN Now',
      provider: 'NASA/JPL Deep Space Network',
      description: 'Real-time operations data for spacecraft communications across the global antenna network',
      url: 'https://eyes.nasa.gov/dsn/dsn.html',
      doi: 'N/A',
      citation: 'NASA Jet Propulsion Laboratory. Deep Space Network Now. Retrieved from https://eyes.nasa.gov/dsn/dsn.html'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Data & Citations
        </h1>

        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Database className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold">NASA Data Sources</h2>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Echoes of Silence uses publicly available NASA Earth observation data. All datasets are freely accessible through NASA's Earth Observing System Data and Information System (EOSDIS) Distributed Active Archive Centers (DAACs).
            </p>

            <div className="space-y-6">
              {datasets.map((dataset, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-400/30 rounded-lg p-6 hover:border-blue-400/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-blue-300">{dataset.name}</h3>
                    <a
                      href={dataset.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center space-x-1 text-sm"
                    >
                      <span>View</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-gray-400 text-sm mb-2">
                    <strong>Provider:</strong> {dataset.provider}
                  </p>

                  <p className="text-gray-300 mb-4">
                    {dataset.description}
                  </p>

                  {dataset.doi !== 'N/A' && (
                    <div className="mb-4">
                      <p className="text-gray-400 text-sm mb-1">
                        <strong>DOI:</strong>
                      </p>
                      <code className="text-xs bg-black/50 px-3 py-2 rounded border border-white/10 block">
                        {dataset.doi}
                      </code>
                    </div>
                  )}

                  <div>
                    <p className="text-gray-400 text-sm mb-2 flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      <strong>Citation:</strong>
                    </p>
                    <div className="bg-black/50 p-4 rounded border border-white/10">
                      <p className="text-xs text-gray-300 leading-relaxed font-mono">
                        {dataset.citation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-8 h-8 text-green-400" />
              <h2 className="text-3xl font-bold">Data Access & Terms</h2>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                All NASA data used in this project is publicly available under open data policies. Users can access original datasets directly through the provided links.
              </p>

              <div className="bg-green-900/20 border border-green-400/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-300 mb-3">Data Usage Guidelines</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>NASA data is freely available for research, education, and commercial purposes</li>
                  <li>Proper citation is required when using NASA datasets in publications</li>
                  <li>Derived products should acknowledge original data sources</li>
                  <li>Real-time DSN data is for informational purposes and subject to change</li>
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-400/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-3">Processing & Methodology</h3>
                <p className="text-sm mb-3">
                  The Composite Quietness Index is a derived product created by combining SMAP RFI flags and VIIRS nighttime radiance data. Processing methods are documented in the Methods section.
                </p>
                <p className="text-sm">
                  If you use the Composite Quietness Index in research or applications, please cite this project and the underlying NASA datasets.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Github className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold">Code & Reproducibility</h2>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">
              This project is built with transparency and reproducibility in mind. All processing code, visualization tools, and documentation are available in the project repository.
            </p>

            <div className="bg-purple-900/20 border border-purple-400/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-300 mb-3">Repository Contents</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                <li>Data ingestion scripts for SMAP and VIIRS</li>
                <li>Processing pipeline for computing quiet scores</li>
                <li>Interactive globe visualization components</li>
                <li>Demo mode animations and timing configurations</li>
                <li>Documentation and usage examples</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Additional Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <a
                href="https://earthdata.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/50 p-4 rounded-lg border border-white/10 hover:border-blue-400/50 transition-all flex items-center justify-between group"
              >
                <span className="text-gray-300 group-hover:text-white">NASA Earthdata</span>
                <ExternalLink className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href="https://www.earthdata.nasa.gov/eosdis/daacs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/50 p-4 rounded-lg border border-white/10 hover:border-blue-400/50 transition-all flex items-center justify-between group"
              >
                <span className="text-gray-300 group-hover:text-white">EOSDIS DAACs</span>
                <ExternalLink className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href="https://nsidc.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/50 p-4 rounded-lg border border-white/10 hover:border-blue-400/50 transition-all flex items-center justify-between group"
              >
                <span className="text-gray-300 group-hover:text-white">NSIDC DAAC</span>
                <ExternalLink className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href="https://ladsweb.modaps.eosdis.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/50 p-4 rounded-lg border border-white/10 hover:border-blue-400/50 transition-all flex items-center justify-between group"
              >
                <span className="text-gray-300 group-hover:text-white">LAADS DAAC</span>
                <ExternalLink className="w-4 h-4 text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
