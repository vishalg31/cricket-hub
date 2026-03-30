
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden font-sans">
      {/* Global Header */}
      <header className="relative z-20 w-full border-b border-white/5 bg-slate-950/30 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-wide text-white">
            <a href="https://www.vishalbuilds.com/" className="hover:text-cyan-400 transition-colors">Vishal Builds</a>
          </div>
          <nav className="flex gap-4 sm:gap-6 text-sm font-medium text-slate-300" aria-label="Shared navigation">
            <a href="https://www.vishalbuilds.com/" className="hover:text-white transition-colors">Home</a>
            <a href="https://www.vishalbuilds.com/#projects" className="hover:text-white transition-colors">Products</a>
            <a href="https://about.vishalbuilds.com/" className="hover:text-white transition-colors">About</a>
          </nav>
        </div>
      </header>

      {/* Background glow effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-20 mt-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300 uppercase">
            Vishal's Cricket Hub
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Interactive games, statistics, and data-driven cricket experiences.
          </p>
        </div>

        {/* Game Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* IPL Trump Cards */}
          <a href="/ipl-trump-cards" className="block group">
            <div className="h-full relative p-[1px] rounded-3xl bg-gradient-to-b from-cyan-500/30 to-transparent transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)]">
              <div className="h-full bg-slate-900 rounded-[23px] p-6 border border-white/5 flex flex-col items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_12px_rgba(16,185,129,0.3)]">Live</span>
                </div>
                
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">IPL Trump Cards</h2>
                <p className="text-slate-400 text-sm leading-6 mb-8 flex-grow">
                  Battle the CPU using a decade of IPL batting data (2016-2025). Pick your stat, reveal the card, and race to 10 points.
                </p>

                <div className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-slate-800 group-hover:bg-cyan-500 group-hover:text-slate-950 text-white px-5 py-3.5 rounded-xl font-semibold transition-colors duration-300">
                  Play Now
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </a>

          {/* IPL Stat Engine */}
          <a href="/stat-engine" className="block group">
            <div className="h-full relative p-[1px] rounded-3xl bg-gradient-to-b from-amber-500/30 to-transparent transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.28)]">
              <div className="h-full bg-slate-900 rounded-[23px] p-6 border border-white/5 flex flex-col items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-amber-500/20 text-amber-200 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_12px_rgba(245,158,11,0.25)]">Live</span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.16)]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19h16" />
                    <path d="M7 16V9" />
                    <path d="M12 16V5" />
                    <path d="M17 16v-3" />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">IPL Stat Engine</h2>
                <p className="text-slate-400 text-sm leading-6 mb-8 flex-grow">
                  Search batting and bowling records, compare legends in battle mode, and explore season, team, and all-time IPL cuts.
                </p>

                <div className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-slate-800 group-hover:bg-amber-400 group-hover:text-slate-950 text-white px-5 py-3.5 rounded-xl font-semibold transition-colors duration-300">
                  Explore Stats
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </a>

          {/* Coming Soon Card */}
          <div className="h-full relative p-[1px] rounded-3xl bg-gradient-to-b from-slate-700/30 to-transparent opacity-60">
            <div className="h-full bg-slate-900 rounded-[23px] p-6 border border-white/5 flex flex-col items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-slate-800 text-slate-400 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">In Dev</span>
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 border border-slate-700 text-slate-500">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Fantasy Auction</h2>
              <p className="text-slate-400 text-sm leading-6 flex-grow">Build your dream team with a live mock-auction simulator.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
