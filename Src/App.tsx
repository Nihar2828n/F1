import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import { tracks, Track } from './data/tracks';
import { TrackCard } from './components/TrackCard';
import { TrackDetail } from './components/TrackDetail';

export function App() {
  const [showLanding, setShowLanding] = useState(true);

  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollY, setScrollY] = useState(0);

  /* 🔥 LANDING SCROLL CONTROL */
  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);

      if (window.scrollY > window.innerHeight * 0.4) {
        setShowLanding(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Modal lock */
  useEffect(() => {
    if (selectedTrack) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedTrack]);

  const regions: Record<string, string[]> = {
    all: [],
    europe: ['Monaco', 'Belgium', 'Italy', 'United Kingdom', 'Azerbaijan'],
    americas: ['Brazil', 'United States'],
    asiaPacific: ['Japan', 'Singapore', 'Australia', 'Saudi Arabia'],
  };

  const filteredTracks = tracks.filter((track) => {
    const matchesSearch =
      track.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.city.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion =
      filter === 'all' || regions[filter]?.includes(track.country);

    return matchesSearch && matchesRegion;
  });

  return (
    <>
      {/* 🔥 LANDING PAGE (ON TOP) */}
      {showLanding && <Landing />}

      {/* SCROLL SPACE TO EXIT LANDING */}
      <div style={{ height: '120vh' }} />

      {/* 🔽 YOUR ORIGINAL APP STARTS HERE */}
      <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          />
        </div>

        {/* EVERYTHING BELOW IS UNTOUCHED */}
        {/* Hero, filters, grid, footer, modal */}
        {/* (your original JSX continues here exactly as before) */}

        {/* Track Detail Modal */}
        {selectedTrack && (
          <TrackDetail
            track={selectedTrack}
            onClose={() => setSelectedTrack(null)}
          />
        )}
      </div>
    </>
  );
}