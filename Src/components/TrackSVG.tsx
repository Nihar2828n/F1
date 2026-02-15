import { Track } from '../data/tracks';

interface TrackSVGProps {
  track: Track;
  size?: number;
  animated?: boolean;
}

export function TrackSVG({ track, size = 200, animated = true }: TrackSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="drop-shadow-lg"
    >
      <defs>
        <linearGradient id={`grad-${track.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={track.trackColor} stopOpacity="0.9" />
          <stop offset="100%" stopColor={track.accentColor} stopOpacity="0.7" />
        </linearGradient>
        <filter id={`glow-${track.id}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Track outline glow */}
      <path
        d={track.svgPath}
        fill="none"
        stroke={track.accentColor}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.3"
        filter={`url(#glow-${track.id})`}
      />
      
      {/* Track main path */}
      <path
        d={track.svgPath}
        fill="none"
        stroke={track.trackColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Track inner line (kerb effect) */}
      <path
        d={track.svgPath}
        fill="none"
        stroke={track.accentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 4"
        opacity="0.6"
      />
      
      {/* Animated dot */}
      {animated && (
        <circle r="2.5" fill="white" filter={`url(#glow-${track.id})`}>
          <animateMotion dur="4s" repeatCount="indefinite" path={track.svgPath} />
        </circle>
      )}
      
      {/* Start/Finish marker */}
      <circle
        cx={parseInt(track.svgPath.split(' ')[1]) || 30}
        cy={parseInt(track.svgPath.split(' ')[2]) || 60}
        r="3"
        fill="white"
        stroke={track.trackColor}
        strokeWidth="1.5"
      />
    </svg>
  );
}
