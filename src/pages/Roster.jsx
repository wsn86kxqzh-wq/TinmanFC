import { useState } from 'react'
import { players } from '../data/teamData'
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

const positionColors = {
  GK: 'bg-accent/10 text-accent border-accent/20',
  CB: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  LB: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  RB: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  CDM: 'bg-gold/10 text-gold border-gold/20',
  CM: 'bg-gold/10 text-gold border-gold/20',
  CAM: 'bg-gold/10 text-gold border-gold/20',
  LW: 'bg-red/10 text-red border-red/20',
  RW: 'bg-red/10 text-red border-red/20',
  ST: 'bg-red/10 text-red border-red/20',
}

export default function Roster() {
  const { lang } = useLanguage()
  const t = useT()
  const [filter, setFilter] = useState('all')

  const positions = [
    { key: 'all', label: t.roster.filters.all },
    { key: 'GK', label: t.roster.filters.goalkeeper },
    { key: 'DEF', label: t.roster.filters.defender, positions: ['CB', 'LB', 'RB'] },
    { key: 'MID', label: t.roster.filters.midfielder, positions: ['CDM', 'CM', 'CAM'] },
    { key: 'FWD', label: t.roster.filters.forward, positions: ['LW', 'RW', 'ST'] },
  ]

  const filtered =
    filter === 'all'
      ? players
      : players.filter((p) => {
          const group = positions.find((pos) => pos.key === filter)
          return group.positions ? group.positions.includes(p.position) : p.position === filter
        })

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-accent text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] font-medium mb-3 sm:mb-4 uppercase">
            The Squad
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl text-white tracking-wide">
            {t.roster.heroTitle}
          </h1>
        </div>
      </section>

      {/* Filter bar */}
      <section className="border-y border-border bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-0.5 sm:gap-1 overflow-x-auto py-1 -mx-1 px-1 scrollbar-none">
            {positions.map((pos) => (
              <button
                key={pos.key}
                onClick={() => setFilter(pos.key)}
                className={`relative px-4 sm:px-5 py-3 text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 whitespace-nowrap ${
                  filter === pos.key
                    ? 'text-accent'
                    : 'text-muted-2 hover:text-white'
                }`}
              >
                {pos.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-accent rounded-full transition-all duration-300 ${
                    filter === pos.key ? 'w-5' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Player cards */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {filtered.map((player, i) => (
              <RevealSection key={player.id} delay={Math.min(i % 3 + 1, 3)}>
                <div className="border border-border p-4 sm:p-6 card-lift hover:border-accent/25 relative overflow-hidden group">
                  {/* Number watermark */}
                  <span className="absolute -right-2 -top-4 font-display text-[5rem] sm:text-[7rem] leading-none text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500">
                    {player.number}
                  </span>

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-sm flex items-center justify-center font-display text-base sm:text-lg border ${positionColors[player.position]} transition-transform duration-300 group-hover:scale-105`}
                      >
                        {player.number}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-white font-bold text-base sm:text-lg group-hover:text-accent transition-colors duration-300 truncate">
                          {player.name}
                        </h3>
                        <p className="text-muted text-[10px] sm:text-xs">
                          {t.positionMap[player.position]}
                        </p>
                      </div>
                    </div>

                    {/* Nickname */}
                    <p className="text-accent/80 text-xs sm:text-sm font-medium mb-1">
                      {lang === 'zh' ? `「${player.nickname}」` : `"${player.nicknameEn}"`}
                    </p>
                    <p className="text-muted-2 text-[10px] sm:text-xs italic mb-4 sm:mb-5 line-clamp-2">
                      {lang === 'zh' ? player.motto : player.mottoEn}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border">
                      <div>
                        <div className="font-display text-lg sm:text-xl text-accent">
                          {player.goals}
                        </div>
                        <div className="text-muted text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em]">
                          {t.roster.stats.goals}
                        </div>
                      </div>
                      <div>
                        <div className="font-display text-lg sm:text-xl text-white">
                          {player.assists}
                        </div>
                        <div className="text-muted text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em]">
                          {t.roster.stats.assists}
                        </div>
                      </div>
                      <div>
                        <div className="font-display text-lg sm:text-xl text-white">
                          {player.matches}
                        </div>
                        <div className="text-muted text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em]">
                          {t.roster.stats.appearances}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
