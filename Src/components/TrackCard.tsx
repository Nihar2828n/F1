import { useState, useRef } from 'react';
import { Track } from '../data/tracks';
import { TrackSVG } from './TrackSVG';

interface TrackCardProps {
  track: Track;
  index: number;
  onClick: () => void;
}

export function TrackCard({ track, index, onClick }: TrackCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rY = ((x - centerX) / centerX) * 15;
    const rX = ((centerY - y) / centerY) * 15;
    
    setRotateX(rX);
    setRotateY(rY);
    setGlareX((x / rect.width) * 100);
    setGlareY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlareX(50);
    setGlareY(50);
  };

  return (
    <div
      ref={cardRef}
      className="group cursor-pointer"
      style={{
        perspective: '1000px',
        animationDelay: `${index * 0.08}s`,
        animation: 'cardEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-200 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'scale(1.02) translateZ(20px)' : 'scale(1) translateZ(0)'}`,
          transformStyle: 'preserve-3d',
          boxShadow: isHovered
            ? `0 25px 60px -12px ${track.trackColor}40, 0 0 40px -8px ${track.trackColor}20`
            : '0 10px 30px -10px rgba(0,0,0,0.5)',
        }}
      >
        {/* Card Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        
        {/* Colored accent gradient */}
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-50"
          style={{
            background: `linear-gradient(135deg, ${track.trackColor}33, transparent 60%, ${track.accentColor}22)`,
          }}
        />
        
        {/* Glare effect */}
        {isHovered && (
          <div
            className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, white, transparent 60%)`,
            }}
          />
        )}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Content */}
        <div className="relative p-6" style={{ transformStyle: 'preserve-3d' }}>
          {/* Top Section - Flag and Country */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{track.flagEmoji}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/50">{track.country}</span>
            </div>
            <div
              className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
              style={{
                backgroundColor: `${track.trackColor}22`,
                color: track.accentColor,
                border: `1px solid ${track.trackColor}44`,
              }}
            >
              {track.turns} turns
            </div>
          </div>

          {/* Track Visualization */}
          <div
            className="flex justify-center my-4 transition-transform duration-300"
            style={{
              transform: isHovered ? 'translateZ(30px)' : 'translateZ(0)',
            }}
          >
            <TrackSVG track={track} size={160} animated={isHovered} />
          </div>

          {/* Track Name */}
          <div className="mt-4" style={{ transform: isHovered ? 'translateZ(15px)' : 'translateZ(0)', transition: 'transform 0.3s' }}>
            <h3 className="text-xl font-black text-white leading-tight mb-1">{track.name}</h3>
            <p className="text-white/40 text-sm">{track.city}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mt-4" style={{ transform: isHovered ? 'translateZ(10px)' : 'translateZ(0)', transition: 'transform 0.3s' }}>
            <div className="text-center p-2 rounded-lg bg-white/5">
              <div className="text-[10px] text-white/30 uppercase tracking-wider">Length</div>
              <div className="text-sm font-bold text-white/80">{track.length}</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-white/5">
              <div className="text-[10px] text-white/30 uppercase tracking-wider">Laps</div>
              <div className="text-sm font-bold text-white/80">{track.laps}</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-white/5">
              <div className="text-[10px] text-white/30 uppercase tracking-wider">Since</div>
              <div className="text-sm font-bold text-white/80">{track.firstGP}</div>
            </div>
          </div>

          {/* Quick Pros/Cons Preview */}
          <div className="mt-4 space-y-2" style={{ transform: isHovered ? 'translateZ(5px)' : 'translateZ(0)', transition: 'transform 0.3s' }}>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
              <span className="text-white/50 truncate">{track.pros[0]}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
              <span className="text-white/50 truncate">{track.cons[0]}</span>
            </div>
          </div>

          {/* Click hint */}
          <div className="mt-4 flex items-center justify-center gap-2 text-white/20 group-hover:text-white/60 transition-all duration-300">
            <span className="text-xs font-medium uppercase tracking-wider">Click to explore</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="h-1 w-full transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, ${track.trackColor}, ${track.accentColor}, transparent)`,
            opacity: isHovered ? 1 : 0.3,
          }}
        />
      </div>
    </div>
  );
}
