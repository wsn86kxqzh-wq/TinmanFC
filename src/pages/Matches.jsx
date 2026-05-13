import { matches, upcomingMatches } from '../data/teamData'
import { Trophy, MapPin, Calendar, Clock, TrendingUp } from 'lucide-react'

export default function Matches() {
  const wins = matches.filter(m => m.result === 'win').length
  const draws = matches.filter(m => m.result === 'draw').length
  const losses = matches.filter(m => m.result === 'lose').length
  const total = matches.length
  const goalsFor = matches.reduce((sum, m) => {
    const [us] = m.score.split(':').map(Number)
    return sum + (m.home ? us : parseInt(m.score.split(':')[1]))
  }, 0)
  const goalsAgainst = matches.reduce((sum, m) => {
    const [, them] = m.score.split(':').map(Number)
    return sum + (m.home ? them : parseInt(m.score.split(':')[0]))
  }, 0)

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,136,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <span className="inline-block text-primary font-display text-sm tracking-widest mb-4">MATCHES</span>
          <h1 className="font-display font-900 text-4xl sm:text-6xl mb-4">
            赛事与<span className="text-primary">战绩</span>
          </h1>
          <p className="text-text-muted">每一场比赛，都是一次战斗</p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: '总场次', value: total, color: 'text-text-main' },
              { label: '胜', value: wins, color: 'text-primary' },
              { label: '平', value: draws, color: 'text-accent-gold' },
              { label: '负', value: losses, color: 'text-accent-red' },
              { label: '胜率', value: Math.round(wins / total * 100) + '%', color: 'text-accent-blue' },
            ].map((s, i) => (
              <div key={i} className="text-center py-3">
                <div className={`font-display font-bold text-2xl ${s.color}`}>{s.value}</div>
                <div className="text-text-dim text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="text-accent-blue" size={20} />
            即将开赛
          </h2>
          <div className="space-y-3">
            {upcomingMatches.map((match) => (
              <div key={match.id} className="bg-bg-card border border-border-subtle rounded-lg p-5 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-text-dim text-xs mb-2">
                      <Calendar size={12} />
                      <span>{match.date}</span>
                      <Clock size={12} />
                      <span>{match.time}</span>
                      <span className={`px-2 py-0.5 rounded text-xs ${match.home ? 'bg-primary/10 text-primary' : 'bg-accent-blue/10 text-accent-blue'}`}>
                        {match.home ? '主场' : '客场'}
                      </span>
                    </div>
                    <div className="text-text-main font-medium text-lg">
                      TinmanFC <span className="text-primary">vs</span> {match.opponent}
                    </div>
                    <div className="flex items-center gap-2 text-text-dim text-xs mt-1">
                      <MapPin size={12} />
                      <span>{match.venue}</span>
                      <span>&middot; {match.competition}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Match History */}
      <section className="py-12 bg-bg-surface border-t border-border-subtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
            <Trophy className="text-accent-gold" size={20} />
            比赛记录
          </h2>
          <div className="space-y-3">
            {matches.map((match) => (
              <div key={match.id} className="bg-bg-card border border-border-subtle rounded-lg p-4 card-hover">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-text-dim text-xs flex items-center gap-2">
                    <Calendar size={11} /> {match.date}
                    <span className="text-border-subtle">|</span>
                    {match.competition}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded ${
                    match.result === 'win' ? 'bg-primary/15 text-primary' :
                    match.result === 'lose' ? 'bg-accent-red/15 text-accent-red' :
                    'bg-accent-gold/15 text-accent-gold'
                  }`}>
                    {match.result === 'win' ? 'W' : match.result === 'lose' ? 'L' : 'D'}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className={`text-base font-medium ${match.home ? 'text-primary' : 'text-text-muted'}`}>
                    {match.home ? 'TinmanFC' : match.opponent}
                  </span>
                  <span className="font-display font-bold text-xl text-text-main px-3">{match.score}</span>
                  <span className={`text-base font-medium ${!match.home ? 'text-primary' : 'text-text-muted'}`}>
                    {!match.home ? 'TinmanFC' : match.opponent}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
