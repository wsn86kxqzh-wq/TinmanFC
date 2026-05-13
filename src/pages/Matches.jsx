import { matches, upcomingMatches } from '../data/teamData'
import { Trophy, MapPin, Calendar, Clock } from 'lucide-react'

export default function Matches() {
  const wins = matches.filter(m => m.result === 'win').length
  const draws = matches.filter(m => m.result === 'draw').length
  const losses = matches.filter(m => m.result === 'lose').length
  const total = matches.length

  return (
    <div className="min-h-screen pt-6 lg:pt-8">
      {/* Header */}
      <section className="pb-10 sm:pb-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,136,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="max-w-4xl mx-auto text-center px-5 sm:px-4 lg:px-8 relative z-10">
          <span className="inline-block text-primary font-display text-xs sm:text-sm lg:text-base tracking-widest mb-3 sm:mb-4 lg:mb-5">MATCHES</span>
          <h1 className="font-display font-900 text-3xl sm:text-5xl lg:text-7xl mb-3 sm:mb-4 lg:mb-6">
            赛事与<span className="text-primary">战绩</span>
          </h1>
          <p className="text-text-muted text-sm sm:text-base lg:text-lg">每一场比赛，都是一次战斗</p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-6 sm:py-8 lg:py-10 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4 lg:gap-6">
            {[
              { label: '总场次', value: total, color: 'text-text-main' },
              { label: '胜', value: wins, color: 'text-primary' },
              { label: '平', value: draws, color: 'text-accent-gold' },
              { label: '负', value: losses, color: 'text-accent-red' },
              { label: '胜率', value: Math.round(wins / total * 100) + '%', color: 'text-accent-blue' },
            ].map((s, i) => (
              <div key={i} className="text-center py-2 sm:py-3 lg:py-4">
                <div className={`font-display font-bold text-xl sm:text-2xl lg:text-3xl ${s.color}`}>{s.value}</div>
                <div className="text-text-dim text-[10px] sm:text-xs lg:text-sm mt-0.5 sm:mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8 flex items-center gap-2 lg:gap-3">
            <Calendar className="text-accent-blue" size={18} />
            即将开赛
          </h2>
          <div className="space-y-3 lg:space-y-4">
            {upcomingMatches.map((match) => (
              <div key={match.id} className="bg-bg-card border border-border-subtle rounded-lg p-3 sm:p-5 lg:p-6 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-text-dim text-xs lg:text-sm mb-1.5 sm:mb-2">
                      <Calendar size={12} />
                      <span>{match.date}</span>
                      <Clock size={12} />
                      <span>{match.time}</span>
                      <span className={`px-2 py-0.5 rounded text-xs ${match.home ? 'bg-primary/10 text-primary' : 'bg-accent-blue/10 text-accent-blue'}`}>
                        {match.home ? '主场' : '客场'}
                      </span>
                    </div>
                    <div className="text-text-main font-medium text-base sm:text-lg lg:text-xl">
                      TinmanFC <span className="text-primary">vs</span> {match.opponent}
                    </div>
                    <div className="flex items-center gap-2 text-text-dim text-xs lg:text-sm mt-1">
                      <MapPin size={12} className="shrink-0" />
                      <span className="truncate">{match.venue}</span>
                      <span className="hidden sm:inline">&middot; {match.competition}</span>
                    </div>
                    <div className="text-text-dim text-xs mt-0.5 sm:hidden">{match.competition}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Match History */}
      <section className="py-8 sm:py-12 lg:py-16 bg-bg-surface border-t border-border-subtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8 flex items-center gap-2 lg:gap-3">
            <Trophy className="text-accent-gold" size={18} />
            比赛记录
          </h2>
          <div className="space-y-3 lg:space-y-4">
            {matches.map((match) => (
              <div key={match.id} className="bg-bg-card border border-border-subtle rounded-lg p-3 sm:p-4 lg:p-5 card-hover">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-text-dim text-xs lg:text-sm flex items-center gap-1 sm:gap-2 truncate">
                    <Calendar size={11} className="shrink-0" /> {match.date}
                    <span className="text-border-subtle hidden sm:inline">|</span>
                    <span className="hidden sm:inline">{match.competition}</span>
                  </span>
                  <span className={`text-xs lg:text-sm font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 rounded shrink-0 ${
                    match.result === 'win' ? 'bg-primary/15 text-primary' :
                    match.result === 'lose' ? 'bg-accent-red/15 text-accent-red' :
                    'bg-accent-gold/15 text-accent-gold'
                  }`}>
                    {match.result === 'win' ? 'W' : match.result === 'lose' ? 'L' : 'D'}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-6">
                  <span className={`text-sm sm:text-base lg:text-lg font-medium truncate ${match.home ? 'text-primary' : 'text-text-muted'}`}>
                    {match.home ? 'TinmanFC' : match.opponent}
                  </span>
                  <span className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-text-main px-2 shrink-0">{match.score}</span>
                  <span className={`text-sm sm:text-base lg:text-lg font-medium truncate text-right ${!match.home ? 'text-primary' : 'text-text-muted'}`}>
                    {!match.home ? 'TinmanFC' : match.opponent}
                  </span>
                </div>
                <div className="text-text-dim text-xs mt-1 sm:hidden">{match.competition}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
