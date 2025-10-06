import { useEffect, useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import DemoGlobe from '../components/DemoGlobe';

type DemoPhase = 'intro' | 'radio' | 'human' | 'composite' | 'dsn' | 'outro';

interface DemoStep {
  phase: DemoPhase;
  duration: number;
  caption: string;
}

const judgeDemoSteps: DemoStep[] = [
  { phase: 'intro', duration: 3, caption: 'Echoes of Silence — Mapping Earth\'s Quiet.' },
  { phase: 'radio', duration: 5, caption: 'SMAP SPL1BTB v006 detects radio interference at 1.41 GHz. Fewer RFI flags = higher RadioQuietScore.' },
  { phase: 'human', duration: 5, caption: 'VIIRS VNP46A2 measures nighttime radiance. Dimmer lights = higher HumanQuietScore.' },
  { phase: 'composite', duration: 7, caption: 'Composite Quietness = 0.6 Radio + 0.4 Human. Transparent and adjustable.' },
  { phase: 'dsn', duration: 6, caption: 'NASA\'s Deep Space Network depends on Earth\'s quiet to hear faint signals.' },
  { phase: 'outro', duration: 4, caption: 'A baseline atlas of Earth\'s remaining silence — for science, conservation, and exploration.' }
];

const guidedTourSteps: DemoStep[] = [
  { phase: 'intro', duration: 15, caption: 'Human activity is spreading light and radio noise worldwide.' },
  { phase: 'intro', duration: 15, caption: 'Without quiet, wildlife and NASA\'s deep-space listening both suffer.' },
  { phase: 'radio', duration: 15, caption: 'SMAP L1B flags RFI at 1.41 GHz. RadioQuietScore = 100 − 100·RFI_rate.' },
  { phase: 'human', duration: 15, caption: 'VIIRS Black Marble records night radiance. HumanQuietScore = 100 − normalized brightness.' },
  { phase: 'composite', duration: 15, caption: 'Composite Quietness = 0.6·Radio + 0.4·Human. Weights adjustable for clarity.' },
  { phase: 'outro', duration: 15, caption: 'Silent zones guide observatories and sanctuaries. Mid-score zones are at risk — targets for protection. Silence is a resource — for Earth and for Space.' }
];

type DemoMode = 'judge' | 'guided';

export default function DemoPage() {
  const [mode, setMode] = useState<DemoMode>('judge');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = mode === 'judge' ? judgeDemoSteps : guidedTourSteps;
  const currentStep = steps[currentStepIndex];
  const totalDuration = steps.reduce((sum, step) => sum + step.duration, 0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 0.1;
        const elapsed = (newProgress / 100) * totalDuration;

        let cumulativeDuration = 0;
        let nextStepIndex = 0;

        for (let i = 0; i < steps.length; i++) {
          cumulativeDuration += steps[i].duration;
          if (elapsed < cumulativeDuration) {
            nextStepIndex = i;
            break;
          }
        }

        if (newProgress >= 100) {
          setIsPlaying(false);
          return 100;
        }

        if (nextStepIndex !== currentStepIndex) {
          setCurrentStepIndex(nextStepIndex);
        }

        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, currentStepIndex, steps, totalDuration]);

  const handlePlayPause = () => {
    if (progress >= 100) {
      handleReset();
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentStepIndex(0);
  };

  const handleModeChange = (newMode: DemoMode) => {
    setMode(newMode);
    handleReset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Demo Modes
        </h1>

        <div className="grid lg:grid-cols-[1fr_400px] gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="aspect-square max-w-[700px] mx-auto">
              <DemoGlobe phase={currentStep.phase} />
            </div>

            <div className="mt-6 bg-black/50 border border-white/10 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <button
                    onClick={handlePlayPause}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center space-x-2"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-5 h-5" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        <span>{progress >= 100 ? 'Replay' : 'Play'}</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-sm text-gray-400">
                  Step {currentStepIndex + 1} of {steps.length}
                </div>
              </div>

              <div className="mb-4">
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-400/30 rounded-lg p-4 min-h-[80px] flex items-center">
                <p className="text-lg text-gray-200 leading-relaxed">
                  {currentStep.caption}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Demo Mode</h3>

              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="mode"
                    checked={mode === 'judge'}
                    onChange={() => handleModeChange('judge')}
                    className="w-5 h-5 mt-1 accent-blue-500"
                  />
                  <div>
                    <span className="block font-bold group-hover:text-blue-400 transition-colors">
                      Judge Demo Mode
                    </span>
                    <span className="block text-sm text-gray-400 mt-1">
                      30 seconds, fast-paced overview with all key features
                    </span>
                  </div>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="mode"
                    checked={mode === 'guided'}
                    onChange={() => handleModeChange('guided')}
                    className="w-5 h-5 mt-1 accent-purple-500"
                  />
                  <div>
                    <span className="block font-bold group-hover:text-purple-400 transition-colors">
                      Guided Tour Mode
                    </span>
                    <span className="block text-sm text-gray-400 mt-1">
                      90 seconds, detailed narrative with extended explanations
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Demo Timeline</h3>

              <div className="space-y-2">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border transition-all ${
                      idx === currentStepIndex
                        ? 'bg-blue-900/30 border-blue-400/50'
                        : idx < currentStepIndex
                        ? 'bg-green-900/20 border-green-400/30'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold">
                        {idx + 1}. {step.phase.charAt(0).toUpperCase() + step.phase.slice(1)}
                      </span>
                      <span className="text-xs text-gray-400">{step.duration}s</span>
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-2">
                      {step.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-400/30 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Visual Guide</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-1 bg-blue-500"></div>
                  <span>Blue = Radio Quiet (SMAP)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-1 bg-yellow-500"></div>
                  <span>Yellow = Human Quiet (VIIRS)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-1 bg-purple-500"></div>
                  <span>Purple = Composite Index</span>
                </div>
                <div className="flex items-center space-x-3 pt-2 border-t border-white/10">
                  <span className="text-xs italic">Spikes = data intensity | Waves = DSN signals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
