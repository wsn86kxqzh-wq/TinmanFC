import { matches, upcomingMatches } from '../data/teamData'
import { MapPin, Calendar, Clock } from 'lucide-react'

export default function Matches() {
  const wins = matches.filter(m => m.result === 'win').length
  const draws = matches.filter(m => m.result === 'draw').length
  const losses = matches.filter(m => m.result === 'lose').length
  const total = matches.length
  const winPct = Math.round(wins / total * 100)

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[800px] mx-auto text-center px-6">
          <span className="text-gold font-display text-[11px] tracking-[0.3em]">MATCHES</span>
          <h1 className="font-display font-black text-4xl lg:text-7xl mt-3 mb-4">
            赛事与<span className="text-primary">战绩</span>
          </h1>
          <p className="text-text-secondary text-sm lg:text-lg">每一场比赛，都是一次战斗</p>
        </div>
      </section>

      {/* ===== 统计 ===== */}
      <section className="border-y border-border bg-bg-card">
        <div className="max-w-[800px] mx-auto">
          <div className="grid grid-cols-5">
            {[
              { value: total, label: '总场次' },
              { value: wins, label: '胜', c: 'text-primary' },
              { value: draws, label: '平', c: 'text-gold' },
              { value: losses, label: '负', c: 'text-red' },
              { value: winPct + '%', label: '胜率', c: 'text-blue' },
            ].map((s, i) => (
              <div key={i} className="py-6 text-center border-border last:border-r-0 border-r">
                <div className={`font-display font-black text-2xl lg:text-3xl ${s.c || 'text-text'}`}>{s.value}</div>
                <div className="text-text-dim text-[10px] tracking-[0.1em] uppercase mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
          {/* 进度条 */}
          <div className="h-[3px] bg-bg">
            <div className="h-full bg-gradient-to-r from-primary to-blue" style={{ width: `${winPct}%` }} />
          </div>
        </div>
      </section>

      {/* ===== 即将开赛 ===== */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <h2 className="font-display font-bold text-lg lg:text-xl mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue rounded-full" />
            即将开赛
          </h2>
          <div className="space-y-2.5">
            {upcomingMatches.map(m => (
              <div key={m.id} className="border border-border rounded-lg p-4 hover:border-blue/20 transition-colors">
                <div className="flex items-center gap-3 text-text-dim text-[11px] mb-2">
                  <Calendar size={11} /><span>{m.date}</span>
                  <Clock size={11} /><span>{m.time}</span>
                  <span className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded ${m.home ? 'bg-primary/10 text-primary' : 'bg-blue/10 text-blue'}`}>
                    {m.home ? '主场' : '客场'}
                  </span>
                </div>
                <div className="font-medium text-sm">TinmanFC <span className="text-primary font-display text-xs">VS</span> {m.opponent}</div>
                <div className="flex items-center gap-1.5 text-text-dim text-[11px] mt-1">
                  <MapPin size={11} />{m.venue}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 比赛记录 ===== */}
      <section className="py-16 lg:py-20 border-t border-border">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <h2 className="font-display font-bold text-lg lg:text-xl mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-gold rounded-full" />
            比赛记录
          </h2>

          {/* 表头 */}
          <div className="hidden lg:grid grid-cols-[80px_1fr_100px_60px] gap-3 text-text-dim text-[11px] font-display tracking-wider uppercase pb-2 border-b border-border">
            <span>日期</span><span>对阵</span><span className="text-center">比分</span><span className="text-right">结果</span>
          </div>

          <div className="divide-y divide-border">
            {matches.map(m => {
              const isWin = m.result === 'win'
              const isLose = m.result === 'lose'
              return (
                <div key={m.id} className={`grid grid-cols-[80px_1fr_100px_60px] gap-3 py-3.5 items-center text-sm hover:bg-bg-elevated transition-colors`}>
                  <span className="text-text-dim text-xs">{m.date.slice(5)}</span>
                  <span className="truncate">
                    <span className={m.home ? 'text-primary font-medium' : ''}>{m.home ? 'TinmanFC' : m.opponent}</span>
                    <span className="text-text-dim mx-1.5 text-xs">vs</span>
                    <span className={!m.home ? 'text-primary font-medium' : ''}>{!m.home ? 'TinmanFC' : m.opponent}</span>
                  </span>
                  <span className="font-display font-bold text-center">{m.score}</span>
                  <span className={`text-right text-xs font-bold ${isWin ? 'text-primary' : isLose ? 'text-red' : 'text-gold'}`}>
                    {isWin ? '胜' : isLose ? '负' : '平'}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
