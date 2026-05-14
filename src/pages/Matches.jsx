import { ArrowRight } from 'lucide-react'
import { matches, upcomingMatches } from '../data/teamData'
import useInView from '../hooks/useInView'

function RevealSection({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useInView()
  return (
    <div
      ref={ref}
      className={`${className} reveal ${isVisible ? 'visible' : ''} ${delay ? `reveal-delay-${delay}` : ''}`}
    >
      {children}
    </div>
  )
}

const totalMatches = matches.length
const wins = matches.filter((m) => m.result === 'win').length
const draws = matches.filter((m) => m.result === 'draw').length
const losses = matches.filter((m) => m.result === 'lose').length
const totalGoals = matches.reduce((sum, m) => {
  const ours = m.score.split(':')[0]
  return sum + parseInt(ours)
}, 0)

export default function Matches() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[10px] tracking-[0.4em] font-medium mb-4 uppercase">
            Match Center
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wide">
            赛事中心
          </h1>
        </div>
      </section>

      {/* 统计数据条 */}
      <section className="border-y border-border bg-dark-2">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5">
          {[
            { value: totalMatches, label: '总场次', color: 'text-white' },
            { value: wins, label: '胜', color: 'text-accent' },
            { value: draws, label: '平', color: 'text-gold' },
            { value: losses, label: '负', color: 'text-red' },
            { value: totalGoals, label: '进球', color: 'text-white' },
          ].map((s, i) => (
            <RevealSection
              key={i}
              className={`py-8 px-6 text-center ${
                i > 0 ? 'border-l border-border' : ''
              }`}
              delay={i + 1}
            >
              <div className={`font-display text-4xl md:text-5xl ${s.color}`}>
                {s.value}
              </div>
              <div className="text-muted text-[10px] tracking-[0.4em] mt-1 uppercase">
                {s.label}
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* 即将开赛 */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <p className="text-accent text-[10px] tracking-[0.4em] font-medium mb-2 uppercase">
              Upcoming Fixtures
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-10">
              即将开赛
            </h2>
          </RevealSection>

          <div className="space-y-4">
            {upcomingMatches.map((match, i) => (
              <RevealSection key={match.id} delay={i + 1}>
                <div className="border border-border p-6 md:p-8 card-lift hover:border-accent/25 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="text-muted text-sm mb-1">
                        {match.date} · {match.time}
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl text-white tracking-wide group-hover:text-accent transition-colors duration-300">
                        vs {match.opponent}
                      </h3>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-muted-2 text-sm">
                          {match.venue}
                        </div>
                        <span className="inline-block mt-1 text-[10px] text-accent/60 bg-accent/[0.06] px-2.5 py-0.5 tracking-wider uppercase">
                          {match.competition}
                        </span>
                      </div>
                      <ArrowRight
                        size={20}
                        className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 hidden md:block"
                      />
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 比赛历史 */}
      <section className="py-20 md:py-28 bg-dark-2">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <p className="text-accent text-[10px] tracking-[0.4em] font-medium mb-2 uppercase">
              Match History
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-10">
              战绩记录
            </h2>
          </RevealSection>

          {/* 表头 */}
          <div className="hidden md:grid grid-cols-12 gap-4 text-muted text-[10px] tracking-[0.3em] py-3 border-b border-border px-3 uppercase">
            <div className="col-span-2">日期</div>
            <div className="col-span-3">对手</div>
            <div className="col-span-2">赛事</div>
            <div className="col-span-2 text-center">比分</div>
            <div className="col-span-1 text-center">主/客</div>
            <div className="col-span-2 text-center">结果</div>
          </div>

          {matches.map((match, i) => (
            <RevealSection key={match.id} delay={Math.min(i, 4)}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center py-4 border-b border-border/40 hover:bg-white/[0.015] transition-all duration-300 px-3 -mx-3 rounded group">
                <div className="md:col-span-2 text-muted text-sm">
                  {match.date}
                </div>
                <div className="md:col-span-3 text-white font-medium group-hover:text-accent transition-colors duration-300">
                  {match.opponent}
                </div>
                <div className="md:col-span-2 text-muted text-sm">
                  {match.competition}
                </div>
                <div className="md:col-span-2 font-display text-xl text-white text-center">
                  {match.score}
                </div>
                <div className="md:col-span-1 text-center text-muted text-sm">
                  {match.home ? '主场' : '客场'}
                </div>
                <div className="md:col-span-2 text-center">
                  <span
                    className={`inline-block font-display text-lg px-3 py-0.5 ${
                      match.result === 'win'
                        ? 'text-accent bg-accent/[0.06]'
                        : match.result === 'lose'
                        ? 'text-red bg-red/[0.06]'
                        : 'text-gold bg-gold/[0.06]'
                    }`}
                  >
                    {match.result === 'win'
                      ? '胜'
                      : match.result === 'lose'
                      ? '负'
                      : '平'}
                  </span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>
    </div>
  )
}
