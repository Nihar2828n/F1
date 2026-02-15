import { useState, useEffect } from 'react';
import { tracks, Track } from './data/tracks';
import { TrackCard } from './components/TrackCard';
import { TrackDetail } from './components/TrackDetail';

export function App() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        {/* Gradient orbs */}
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #E11D48, transparent 70%)',
            transform: `translate(${Math.sin(scrollY * 0.002) * 30}px, ${scrollY * -0.2}px)`,
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #2563EB, transparent 70%)',
            transform: `translate(${Math.cos(scrollY * 0.002) * 20}px, ${scrollY * -0.15}px)`,
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-[700px] h-[700px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #059669, transparent 70%)',
            transform: `translate(${Math.sin(scrollY * 0.003) * 25}px, ${scrollY * -0.1}px)`,
          }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative pt-8 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/30">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-950 animate-pulse" />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight">F1 TRACKS</span>
                <span className="text-red-500 font-black">.</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1 text-sm">
              <span className="px-3 py-1.5 rounded-lg bg-white/5 text-white/60 font-medium">
                {tracks.length} Circuits
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 font-medium border border-red-500/20">
                2024 Season
              </span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto" style={{ transform: `translateY(${scrollY * 0.3}px)`, opacity: Math.max(0, 1 - scrollY / 400) }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Interactive 3D Track Explorer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                EVERY
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                F1 CIRCUIT
              </span>
              <br />
              <span className="bg-gradient-to-r from-white/60 via-white/40 to-white/20 bg-clip-text text-transparent">
                EXPLORED
              </span>
            </h1>
            
            <p className="text-lg text-white/40 max-w-2xl mx-auto mb-10">
              Dive into every Formula 1 circuit with interactive 3D cards, detailed pros & cons, 
              track layouts, and essential statistics. Click any track to explore.
            </p>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-xs text-white/30 uppercase tracking-wider">Scroll to explore</span>
              <svg className="w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Controls Section */}
      <section className="relative z-10 sticky top-0 bg-gray-950/80 backdrop-blur-xl border-b border-white/5 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 w-full md:max-w-md">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search tracks, countries, cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-red-500/50 focus:bg-white/[0.07] transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Region Filters */}
          <div className="flex items-center gap-2">
            {[
              { key: 'all', label: '🌍 All' },
              { key: 'europe', label: '🇪🇺 Europe' },
              { key: 'americas', label: '🌎 Americas' },
              { key: 'asiaPacific', label: '🌏 Asia-Pacific' },
            ].map((region) => (
              <button
                key={region.key}
                onClick={() => setFilter(region.key)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  filter === region.key
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                    : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70 border border-white/5'
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-xs text-white/30 font-medium">
            {filteredTracks.length} circuit{filteredTracks.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Tracks Grid */}
      <main className="relative z-10 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {filteredTracks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTracks.map((track, index) => (
                <TrackCard
                  key={track.id}
                  track={track}
                  index={index}
                  onClick={() => setSelectedTrack(track)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🏁</div>
              <h3 className="text-2xl font-bold text-white/40 mb-2">No circuits found</h3>
              <p className="text-white/20">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setSearchQuery(''); setFilter('all'); }}
                className="mt-6 px-6 py-3 rounded-xl bg-red-500/20 text-red-400 font-medium hover:bg-red-500/30 transition-colors border border-red-500/20"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-black tracking-tight">F1 TRACKS EXPLORER</span>
          </div>
          <p className="text-white/20 text-sm max-w-md mx-auto">
            An interactive guide to Formula 1 circuits worldwide. 
            Click on any track to explore detailed pros, cons, and statistics.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-white/10">
            <span>Made with ❤️ for F1 fans</span>
            <span>•</span>
            <span>{tracks.length} Circuits</span>
            <span>•</span>
            <span>Interactive 3D Cards</span>
          </div>
        </div>
      </footer>

      {/* Track Detail Modal */}
      {selectedTrack && (
        <TrackDetail
          track={selectedTrack}
          onClose={() => setSelectedTrack(null)}
        />
      )}
    </div>
  );
}
