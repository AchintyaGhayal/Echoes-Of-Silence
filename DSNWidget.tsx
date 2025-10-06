import { useEffect, useState } from 'react';
import { Satellite, Radio } from 'lucide-react';
import { DSNMission } from '../types';

const dsnMissions: DSNMission[] = [
  { station: 'Canberra DSS-43', spacecraft: 'Voyager 1', dataRate: '159 bps', rtt: '22 hr' },
  { station: 'Madrid DSS-63', spacecraft: 'MRO', dataRate: '2 Mbps', rtt: '20 min' },
  { station: 'Goldstone DSS-14', spacecraft: 'Psyche', dataRate: '292 kbps', rtt: '36 min' },
];

export default function DSNWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dsnMissions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const mission = dsnMissions[currentIndex];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-400/30 rounded-xl p-6 shadow-xl">
      <div className="flex items-center space-x-3 mb-4">
        <Satellite className="w-6 h-6 text-blue-400" />
        <h3 className="text-xl font-bold text-white">Deep Space Network</h3>
      </div>

      <p className="text-sm text-gray-400 mb-6">
        NASA's DSN listens to faint signals from spacecraft. Interference on Earth makes that harder.
      </p>

      <div className="bg-black/50 rounded-lg p-4 border border-blue-400/20 mb-4 min-h-[120px]">
        <div className="flex items-start space-x-3 animate-fade-in">
          <Radio className="w-5 h-5 text-green-400 mt-1 flex-shrink-0 animate-pulse" />
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-blue-300 text-sm">{mission.station}</span>
              <span className="text-xs text-green-400 px-2 py-1 bg-green-400/10 rounded">ACTIVE</span>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Spacecraft:</span>
                <span className="text-white font-medium">{mission.spacecraft}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Data Rate:</span>
                <span className="text-white font-medium">{mission.dataRate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Round Trip:</span>
                <span className="text-white font-medium">{mission.rtt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-2">
        {dsnMissions.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-blue-400 w-6' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-xs text-gray-400 italic">
          Why Quiet Matters: Clean radio spectrum enables deep-space communication and scientific discovery.
        </p>
      </div>
    </div>
  );
}
