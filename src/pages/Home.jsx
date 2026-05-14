import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar, Trophy } from 'lucide-react'
import { teamInfo, matches, upcomingMatches, players } from '../data/teamData'

export default function Home() {
  const topScorer = [...players].sort((a, b) => b.goals - a.goals)[0]
  const recentResults = matches.slice(0, 3)

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景纹理 */}
        <div className="absolute inset-0 bg-dark">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, #00ff88 49px, #00ff88 50px),
                repeating-linear-gradient(90deg, transparent, transparent 49px, #00ff88 49px, #00ff88 50px)`
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center px-6">
          {/* 大标题 */}
          <div className="animate-fade-in">
            <p className="text-accent text-sm tracking-[0.4em] font-medium mb-6 uppercase">
              Chengdu · Since 2023
            </p>
            <h1 className="font-display text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] leading-[0.85] text-white tracking-[0.02em]">
              TINMAN
            </h1>
            <h1 className="font-display text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] leading-[0.85] text-accent tracking-[0.02em] -mt-2">
              FC
            </h1>
          </div>

          <p className="text-muted-2 text-lg md:text-xl mt-8 tracking-wide animate-fade-in delay-2">
            {teamInfo.slogan}
          </p>

          <div className="flex items-center justify-center gap-4 mt-12 animate-fade-in delay-3">
            <Link
              to="/join"
              className="bg-accent text-dark px-8 py-3.5 font-bold text-sm tracking-wider hover:bg-accent-dim transition-colors"
            >
              加入球队
            </Link>
            <Link
              to="/about"
              className="border border-border text-white px-8 py-3.5 font-medium text-sm tracking-wider hover:border-accent hover:text-accent transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-5">
          <span className="text-muted text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </section>

      {/* ===== 数据横条 ===== */}
      <section className="border-y border-border bg-dark-2">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: teamInfo.playerCount, label: '球员' },
            { value: teamInfo.matchCount, label: '比赛' },
            { value: teamInfo.winRate, label: '胜率' },
            { value: teamInfo.goalsTotal, label: '进球' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`py-8 px-6 text-center ${
                i > 0 ? 'border-l border-border' : ''
              } ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
            >
              <div className="font-display text-4xl md:text-5xl text-white">
                {stat.value}
              </div>
              <div className="text-muted text-xs tracking-[0.3em] mt-1 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 近期战绩 ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-accent text-xs tracking-[0.3em] font-medium mb-2">
                RECENT RESULTS
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide">
                近期战绩
              </h2>
            </div>
            <Link
              to="/matches"
              className="text-muted-2 text-sm hover:text-accent transition-colors flex items-center gap-1"
            >
              查看全部 <ArrowRight size={14} />
            </Link>
          </div>

          <div className="space-y-0">
            {recentResults.map((match) => (
              <div
                key={match.id}
                className="flex items-center justify-between py-5 border-b border-border group hover:bg-white/[0.02] transition-colors px-2 -mx-2"
              >
                <div className="flex items-center gap-5">
                  <span
                    className={`font-display text-2xl w-8 ${
                      match.result === 'win'
                        ? 'text-accent'
                        : match.result === 'lose'
                        ? 'text-red'
                        : 'text-gold'
                    }`}
                  >
                    {match.result === 'win'
                      ? 'W'
                      : match.result === 'lose'
                      ? 'L'
                      : 'D'}
                  </span>
                  <div>
                    <span className="text-white font-medium">
                      {match.opponent}
                    </span>
                    <span className="text-muted text-xs ml-3">
                      {match.competition}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <span className="font-display text-xl text-white">
                    {match.score}
                  </span>
                  <span className="text-muted text-sm hidden sm:block">
                    {match.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 即将开赛 ===== */}
      <section className="py-20 md:py-28 bg-dark-2">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-xs tracking-[0.3em] font-medium mb-2">
            UPCOMING
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-10">
            即将开赛
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingMatches.map((match, i) => (
              <div
                key={match.id}
                className="border border-border p-6 hover:border-accent/30 transition-colors animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-2 text-muted text-sm mb-4">
                  <Calendar size={14} />
                  <span>
                    {match.date} {match.time}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-white tracking-wide mb-1">
                  vs {match.opponent}
                </h3>
                <div className="flex items-center gap-2 text-muted-2 text-sm mt-3">
                  <MapPin size={12} />
                  <span>{match.venue}</span>
                </div>
                <span className="inline-block mt-4 text-xs text-accent/70 bg-accent/5 px-2 py-1">
                  {match.competition}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 射手王 ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-xs tracking-[0.3em] font-medium mb-2">
                TOP SCORER
              </p>
              <h2 className="font-display text-5xl md:text-7xl text-white tracking-wide">
                {topScorer.name}
              </h2>
              <p className="text-muted-2 mt-3 text-lg">
                {topScorer.nickname} · #{topScorer.number}
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="font-display text-4xl text-accent">
                    {topScorer.goals}
                  </div>
                  <div className="text-muted text-xs tracking-widest mt-1">
                    进球
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl text-white">
                    {topScorer.assists}
                  </div>
                  <div className="text-muted text-xs tracking-widest mt-1">
                    助攻
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl text-white">
                    {topScorer.matches}
                  </div>
                  <div className="text-muted text-xs tracking-widest mt-1">
                    出场
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-dark-3 border border-border p-8 flex flex-col items-center justify-center min-h-[300px]">
              <Trophy size={48} className="text-accent/20 mb-4" />
              <span className="font-display text-[8rem] leading-none text-accent/10">
                {topScorer.number}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 md:py-32 bg-accent">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="font-display text-4xl md:text-6xl text-dark tracking-wide">
            JOIN THE SQUAD
          </h2>
          <p className="text-dark/70 mt-4 text-lg">
            如果你也有铁人般的意志和对足球的热爱
          </p>
          <Link
            to="/join"
            className="inline-block mt-8 bg-dark text-accent px-10 py-4 font-bold text-sm tracking-wider hover:bg-dark-3 transition-colors"
          >
            立即加入
          </Link>
        </div>
      </section>
    </div>
  )
}
