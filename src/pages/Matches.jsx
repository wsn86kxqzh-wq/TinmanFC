import { ArrowRight } from 'lucide-react'
import { matches, upcomingMatches } from '../data/teamData'
import { useLanguage } from '../i18n/LanguageContext'
import { useT } from '../i18n/useT'
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
  const { lang } = useLanguage()
  const t = useT()

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-accent text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] font-medium mb-3 sm:mb-4 uppercase">
            Match Center
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl text-white tracking-wide">
            {t.matches.heroTitle}
          </h1>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-dark-2">
        <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-5">
          {[
            { value: totalMatches, label: t.matches.stats.total, color: 'text-white' },
            { value: wins, label: t.matches.stats.wins, color: 'text-accent' },
            { value: draws, label: t.matches.stats.draws, color: 'text-gold' },
            { value: losses, label: t.matches.stats.losses, color: 'text-red' },
            { value: totalGoals, label: t.matches.stats.goals, color: 'text-white' },
          ].map((s, i) => (
            <RevealSection
              key={i}
              className={`py-6 sm:py-8 px-4 sm:px-6 text-center ${
                i > 0 ? 'border-l border-border' : ''
              } ${i >= 3 ? 'hidden sm:block' : ''}`}
              delay={i + 1}
            >
              <div className={`font-display text-3xl sm:text-4xl md:text-5xl ${s.color}`}>
                {s.value}
              </div>
              <div className="text-muted text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] mt-1 uppercase">
                {s.label}
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <RevealSection>
            <p className="text-accent text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] font-medium mb-2 uppercase">
              Upcoming Fixtures
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-8 sm:mb-10">
              {t.matches.upcoming}
            </h2>
          </RevealSection>

          <div className="space-y-3 sm:space-y-4">
            {upcomingMatches.map((match, i) => (
              <RevealSection key={match.id} delay={i + 1}>
                <div className="border border-border p-4 sm:p-6 md:p-8 card-lift hover:border-accent/25 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                    <div>
                      <div className="text-muted text-xs sm:text-sm mb-1">
                        {match.date} · {match.time}
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white tracking-wide group-hover:text-accent transition-colors duration-300">
                        vs {lang === 'zh' ? match.opponent : match.opponentEn}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="text-right">
                        <div className="text-muted-2 text-xs sm:text-sm">
                          {lang === 'zh' ? match.venue : match.venueEn}
                        </div>
                        <span className="inline-block mt-1 text-[9px] sm:text-[10px] text-accent/60 bg-accent/[0.06] px-2 sm:px-2.5 py-0.5 tracking-wider uppercase">
                          {lang === 'zh' ? match.competition : match.competitionEn}
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

      {/* Match history */}
      <section className="py-14 sm:py-20 md:py-28 bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <RevealSection>
            <p className="text-accent text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] font-medium mb-2 uppercase">
              Match History
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-8 sm:mb-10">
              {t.matches.history}
            </h2>
          </RevealSection>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-12 gap-4 text-muted text-[10px] tracking-[0.3em] py-3 border-b border-border px-3 uppercase">
            <div className="col-span-2">{t.matches.tableHeaders.date}</div>
            <div className="col-span-1">{t.matches.tableHeaders.time}</div>
            <div className="col-span-3">{t.matches.tableHeaders.opponent}</div>
            <div className="col-span-2">{t.matches.tableHeaders.venue}</div>
            <div className="col-span-2 text-center">{t.matches.tableHeaders.score}</div>
            <div className="col-span-2 text-center">{t.matches.tableHeaders.result}</div>
          </div>

          {matches.map((match, i) => (
            <RevealSection key={match.id} delay={Math.min(i, 4)}>
              {/* Desktop layout */}
              <div className="hidden md:grid grid-cols-12 gap-4 items-center py-4 border-b border-border/40 hover:bg-white/[0.015] transition-all duration-300 px-3 -mx-3 rounded group">
                <div className="md:col-span-2 text-muted text-sm">
                  {match.date}
                </div>
                <div className="md:col-span-1 text-muted text-sm">
                  {match.time}
                </div>
                <div className="md:col-span-3 text-white font-medium group-hover:text-accent transition-colors duration-300">
                  {lang === 'zh' ? match.opponent : match.opponentEn}
                </div>
                <div className="md:col-span-2 text-muted text-sm">
                  {lang === 'zh' ? match.venue : match.venueEn}
                </div>
                <div className="md:col-span-2 font-display text-xl text-white text-center">
                  {match.score}
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
                    {t.resultMap[match.result]}
                  </span>
                </div>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden border-b border-border/40 py-4 px-2 group">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white font-medium group-hover:text-accent transition-colors duration-300">
                      {lang === 'zh' ? match.opponent : match.opponentEn}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-lg text-white">
                      {match.score}
                    </span>
                    <span
                      className={`inline-block font-display text-sm px-2 py-0.5 ${
                        match.result === 'win'
                          ? 'text-accent bg-accent/[0.06]'
                          : match.result === 'lose'
                          ? 'text-red bg-red/[0.06]'
                          : 'text-gold bg-gold/[0.06]'
                      }`}
                    >
                      {t.resultMap[match.result]}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-muted text-[10px]">
                    {match.date} · {match.time}
                  </span>
                  <span className="text-muted text-[10px]">
                    {lang === 'zh' ? match.venue : match.venueEn}
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
