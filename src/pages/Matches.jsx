import { matches, upcomingMatches } from '../data/teamData'
import { Trophy, MapPin, Calendar, Clock, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'

export default function Matches() {
  const wins = matches.filter(m => m.result === 'win').length
  const draws = matches.filter(m => m.result === 'draw').length
  const losses = matches.filter(m => m.result === 'lose').length
  const total = matches.length

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 lg:px-12">
          <span className="inline-block text-accent-gold font-display text-xs lg:text-sm tracking-[0.3em] mb-4 lg:mb-6">MATCHES</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl mb-4 lg:mb-6">
            赛事与<span className="text-primary">战绩</span>
          </h1>
          <p className="text-text-muted text-base lg:text-lg">每一场比赛，都是一次战斗</p>
        </div>
      </section>

      {/* ===== 统计概览 ===== */}
      <section className="py-8 lg:py-12 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-5 gap-3 lg:gap-6">
            {[
              { label: '总场次', value: total, color: 'text-text-main' },
              { label: '胜', value: wins, color: 'text-primary' },
              { label: '平', value: draws, color: 'text-accent-gold' },
              { label: '负', value: losses, color: 'text-accent-red' },
              { label: '胜率', value: Math.round(wins / total * 100) + '%', color: 'text-accent-blue' },
            ].map((s, i) => (
              <div key={i} className="text-center py-3 lg:py-5">
                <div className={`font-display font-black text-xl lg:text-4xl ${s.color}`}>{s.value}</div>
                <div className="text-text-dim text-[10px] lg:text-xs tracking-wider uppercase mt-0.5 lg:mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          {/* 胜率进度条 */}
          <div className="mt-4 lg:mt-6 bg-bg-card rounded-full h-2 lg:h-3 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-primary via-accent-blue to-accent-gold" style={{ width: `${Math.round(wins / total * 100)}%` }} />
          </div>
        </div>
      </section>

      {/* ===== 即将开赛 ===== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8 lg:mb-10">
            <div className="w-10 h-10 bg-accent-blue/10 rounded-lg flex items-center justify-center">
              <Calendar className="text-accent-blue" size={20} />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl lg:text-2xl">即将开赛</h2>
              <p className="text-text-dim text-xs">UPCOMING FIXTURES</p>
            </div>
          </div>

          <div className="space-y-3 lg:space-y-4">
            {upcomingMatches.map((match) => (
              <div key={match.id} className="bg-bg-card border border-border-subtle rounded-xl p-5 lg:p-6 hover:border-accent-blue/20 transition-all group">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-text-dim text-xs mb-2">
                      <Calendar size={12} />
                      <span>{match.date}</span>
                      <Clock size={12} className="ml-1" />
                      <span>{match.time}</span>
                      <span className={`ml-2 px-2 py-0.5 rounded text-[11px] font-bold ${match.home ? 'bg-primary/10 text-primary' : 'bg-accent-blue/10 text-accent-blue'}`}>
                        {match.home ? 'HOME' : 'AWAY'}
                      </span>
                    </div>
                    <div className="text-text-main font-semibold text-lg lg:text-xl">
                      TinmanFC <span className="text-primary font-display text-base lg:text-lg">VS</span> {match.opponent}
                    </div>
                    <div className="flex items-center gap-2 text-text-dim text-xs mt-1.5">
                      <MapPin size={12} className="shrink-0" />
                      <span>{match.venue}</span>
                      <span className="text-border-subtle">·</span>
                      <span>{match.competition}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 比赛记录 ===== */}
      <section className="py-16 lg:py-24 bg-bg-surface border-t border-border-subtle">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8 lg:mb-10">
            <div className="w-10 h-10 bg-accent-gold/10 rounded-lg flex items-center justify-center">
              <Trophy className="text-accent-gold" size={20} />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl lg:text-2xl">比赛记录</h2>
              <p className="text-text-dim text-xs">MATCH HISTORY</p>
            </div>
          </div>

          <div className="space-y-3">
            {matches.map((match) => {
              const isWin = match.result === 'win'
              const isLose = match.result === 'lose'
              return (
                <div key={match.id} className={`bg-bg-card border rounded-xl p-4 lg:p-5 hover:scale-[1.005] transition-all ${
                  isWin ? 'border-primary/15' : isLose ? 'border-accent-red/15' : 'border-accent-gold/15'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-text-dim text-xs flex items-center gap-2">
                      <Calendar size={11} /> {match.date}
                      <span className="text-border-subtle">·</span>
                      {match.competition}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {isWin && <ArrowUpRight size={14} className="text-primary" />}
                      {isLose && <ArrowDownRight size={14} className="text-accent-red" />}
                      {!isWin && !isLose && <Minus size={14} className="text-accent-gold" />}
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${
                        isWin ? 'bg-primary/12 text-primary' :
                        isLose ? 'bg-accent-red/12 text-accent-red' :
                        'bg-accent-gold/12 text-accent-gold'
                      }`}>
                        {isWin ? 'WIN' : isLose ? 'LOSS' : 'DRAW'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 lg:gap-8">
                    <span className={`text-sm lg:text-lg font-semibold truncate ${match.home ? 'text-primary' : 'text-text-muted'}`}>
                      {match.home ? 'TinmanFC' : match.opponent}
                    </span>
                    <span className="font-display font-black text-xl lg:text-3xl text-text-main px-3 shrink-0">{match.score}</span>
                    <span className={`text-sm lg:text-lg font-semibold truncate text-right ${!match.home ? 'text-primary' : 'text-text-muted'}`}>
                      {!match.home ? 'TinmanFC' : match.opponent}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
