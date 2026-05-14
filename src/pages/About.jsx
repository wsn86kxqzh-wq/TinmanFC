import { Shield, Heart, Flame, Users } from 'lucide-react'
import { teamInfo } from '../data/teamData'
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

export default function About() {
  const { lang } = useLanguage()
  const t = useT()

  const values = [
    { icon: Flame, title: t.values.passion.title, desc: t.values.passion.desc },
    { icon: Shield, title: t.values.iron.title, desc: t.values.iron.desc },
    { icon: Users, title: t.values.brotherhood.title, desc: t.values.brotherhood.desc },
    { icon: Heart, title: t.values.love.title, desc: t.values.love.desc },
  ]

  const timeline = t.timeline

  const cityCards = [
    { label: t.about.cityCards.trainingBase, value: lang === 'zh' ? '成都足球公园' : 'Chengdu Football Park' },
    { label: t.about.cityCards.homeGround, value: lang === 'zh' ? '高新区体育中心' : 'Gaoxin Sports Center' },
    { label: t.about.cityCards.regularTraining, value: lang === 'zh' ? '每周三 / 周六' : 'Wed / Sat' },
    { label: t.about.cityCards.league, value: lang === 'zh' ? '成都业余联赛' : 'Chengdu Amateur League' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-14 sm:pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-accent text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] font-medium mb-3 sm:mb-4 uppercase">
            About Us
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl text-white tracking-wide">
            {t.about.heroTitle}
          </h1>
          <p className="text-muted-2 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-2xl leading-relaxed">
            {lang === 'zh' ? teamInfo.description : teamInfo.descriptionEn}
          </p>
        </div>
      </section>

      {/* Core stats */}
      <section className="border-y border-border bg-dark-2">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: teamInfo.founded, label: t.about.stats.founded },
            { value: teamInfo.playerCount, label: t.about.stats.players },
            { value: teamInfo.matchCount, label: t.about.stats.matches },
            { value: teamInfo.winRate, label: t.about.stats.winRate },
          ].map((s, i) => (
            <RevealSection
              key={i}
              className={`py-8 sm:py-10 px-4 sm:px-6 text-center ${
                i > 0 ? 'border-l border-border' : ''
              } ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
              delay={i + 1}
            >
              <div className="font-display text-3xl sm:text-4xl md:text-5xl text-white">
                {s.value}
              </div>
              <div className="text-muted text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] mt-2 uppercase">
                {s.label}
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <RevealSection>
            <p className="text-accent text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] font-medium mb-2 uppercase">
              Our Values
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-8 sm:mb-12">
              {t.about.valuesTitle}
            </h2>
          </RevealSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map((v, i) => (
              <RevealSection key={i} delay={i + 1}>
                <div className="border border-border p-5 sm:p-8 card-lift hover:border-accent/25 group">
                  <v.icon
                    size={24}
                    className="text-accent/70 mb-3 sm:mb-5 group-hover:text-accent transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-lg sm:text-2xl text-white tracking-wide mb-1 sm:mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-2 text-xs sm:text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 sm:py-20 md:py-28 bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <RevealSection>
            <p className="text-accent text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] font-medium mb-2 uppercase">
              Our Story
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-10 sm:mb-14">
              {t.about.timelineTitle}
            </h2>
          </RevealSection>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((item, i) => (
              <RevealSection key={i} delay={i + 1}>
                <div
                  className={`relative flex items-start mb-10 sm:mb-12 last:mb-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10 shadow-[0_0_8px_rgba(0,255,136,0.3)]" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[45%] ${
                      i % 2 === 0
                        ? 'md:pr-12 md:text-right'
                        : 'md:pl-12 md:text-left'
                    }`}
                  >
                    <span className="font-display text-2xl sm:text-3xl text-accent">
                      {item.year}
                    </span>
                    <h3 className="text-white font-medium text-base sm:text-lg mt-1">
                      {item.event}
                    </h3>
                    <p className="text-muted-2 text-xs sm:text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* City */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <RevealSection>
              <div>
                <p className="text-accent text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] font-medium mb-2 uppercase">
                  Our City
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
                  {t.about.cityTitle}
                </h2>
                <p className="text-muted-2 mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
                  {t.about.cityDesc}
                </p>
              </div>
            </RevealSection>
            <RevealSection delay={2}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {cityCards.map((item, i) => (
                  <div key={i} className="bg-dark-2 border border-border p-4 sm:p-5 card-lift hover:border-accent/20">
                    <div className="text-muted text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] mb-1.5 uppercase">
                      {item.label}
                    </div>
                    <div className="text-white text-xs sm:text-sm font-medium">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  )
}
