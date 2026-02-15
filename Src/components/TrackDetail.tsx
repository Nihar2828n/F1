import { useState } from 'react';
import { Track } from '../data/tracks';
import { TrackSVG } from './TrackSVG';

interface TrackDetailProps {
  track: Track;
  onClose: () => void;
}

export function TrackDetail({ track, onClose }: TrackDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'pros' | 'cons'>('overview');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      
      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Header */}
        <div
          className="relative p-8 rounded-t-3xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${track.trackColor}33, ${track.accentColor}22)`,
          }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, ${track.trackColor}, transparent 50%), radial-gradient(circle at 80% 50%, ${track.accentColor}, transparent 50%)`,
            }}
          />
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0" style={{ filter: `drop-shadow(0 0 20px ${track.trackColor}44)` }}>
              <TrackSVG track={track} size={180} animated={true} />
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <span className="text-4xl">{track.flagEmoji}</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white/90"
                  style={{ backgroundColor: `${track.trackColor}88` }}>
                  {track.country}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">{track.name}</h2>
              <p className="text-white/60 text-lg">{track.city}</p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5 border-y border-white/5">
          {[
            { label: 'Length', value: track.length },
            { label: 'Laps', value: track.laps.toString() },
            { label: 'Turns', value: track.turns.toString() },
            { label: 'First GP', value: track.firstGP.toString() },
            { label: 'Lap Record', value: track.lapRecord },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-4 text-center bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
              <div className="text-xs text-white/40 uppercase tracking-wider mb-1">{stat.label}</div>
              <div className="text-white font-bold text-sm">{stat.value}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center px-8 pt-2 pb-0">
          <p className="text-white/40 text-xs">Lap Record: {track.lapRecordHolder}</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 p-4 mx-4 mt-4 bg-white/5 rounded-2xl">
          {(['overview', 'pros', 'cons'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? 'text-white shadow-lg'
                  : 'text-white/40 hover:text-white/70 hover:bg-white/5'
              }`}
              style={activeTab === tab ? {
                background: `linear-gradient(135deg, ${track.trackColor}, ${track.trackColor}88)`,
              } : {}}
            >
              {tab === 'pros' ? '👍 Pros' : tab === 'cons' ? '👎 Cons' : '📋 Overview'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8">
          {activeTab === 'overview' && (
            <div className="space-y-4" style={{ animation: 'fadeSlideIn 0.3s ease-out' }}>
              <p className="text-white/70 leading-relaxed text-lg">{track.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20">
                  <h4 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    Top Advantage
                  </h4>
                  <p className="text-white/70 text-sm">{track.pros[0]}</p>
                </div>
                <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                  <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    Main Drawback
                  </h4>
                  <p className="text-white/70 text-sm">{track.cons[0]}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pros' && (
            <div className="space-y-3" style={{ animation: 'fadeSlideIn 0.3s ease-out' }}>
              {track.pros.map((pro, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/10 hover:bg-green-500/10 hover:border-green-500/20 transition-all duration-300 group cursor-default"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-sm group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <p className="text-white/80 group-hover:text-white transition-colors pt-1">{pro}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'cons' && (
            <div className="space-y-3" style={{ animation: 'fadeSlideIn 0.3s ease-out' }}>
              {track.cons.map((con, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300 group cursor-default"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-sm group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <p className="text-white/80 group-hover:text-white transition-colors pt-1">{con}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
