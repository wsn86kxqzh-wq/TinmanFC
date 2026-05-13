import { teamInfo, matches, upcomingMatches } from '../data/teamData'
import { Link } from 'react-router-dom'
import { Trophy, Users, Target, Flame, ChevronRight, MapPin, Calendar, Clock } from 'lucide-react'

export default function Home() {
  const recentResults = matches.slice(0, 5)
  const wins = matches.filter(m => m.result === 'win').length
  const total = matches.length

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-5 sm:px-4 lg:px-8 max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 lg:gap-3 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-2.5 bg-primary/10 border border-primary/20 rounded-full mb-6 sm:mb-8 lg:mb-10">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full animate-pulse-glow"></span>
              <span className="text-primary text-xs sm:text-sm lg:text-base font-medium tracking-wider">CHENGDU &middot; FOOTBALL &middot; PASSION</span>
            </div>
          </div>

          <h1 className="animate-slide-up font-display font-900 text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-4 sm:mb-6 lg:mb-8" style={{ animationDelay: '0.1s' }}>
            <span className="text-text-main">TINMAN</span>
            <span className="text-primary">FC</span>
          </h1>

          <p className="animate-slide-up text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-muted font-light mb-3 sm:mb-4 lg:mb-5" style={{ animationDelay: '0.2s' }}>
            {teamInfo.slogan}
          </p>

          <p className="animate-slide-up text-text-dim text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed" style={{ animationDelay: '0.3s' }}>
            {teamInfo.description}
          </p>

          <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/join"
              className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 bg-primary text-bg-dark font-bold text-base sm:text-lg lg:text-xl rounded hover:bg-primary-dark transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] flex items-center justify-center gap-2"
            >
              加入球队 <ChevronRight size={20} />
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 border border-primary/30 text-primary font-medium text-base sm:text-lg lg:text-xl rounded hover:bg-primary/10 transition-all text-center"
            >
              了解更多
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-5 h-8 sm:w-6 sm:h-10 lg:w-7 lg:h-11 border-2 border-primary/30 rounded-full flex justify-center pt-1.5 sm:pt-2 lg:pt-2.5">
            <div className="w-1 h-2.5 sm:h-3 lg:h-4 bg-primary rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-16 lg:py-24 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {[
              { icon: Users, value: teamInfo.playerCount + '+', label: '注册球员', color: 'text-primary' },
              { icon: Trophy, value: wins + '/' + total, label: '胜/总场次', color: 'text-accent-gold' },
              { icon: Target, value: teamInfo.winRate, label: '胜率', color: 'text-accent-blue' },
              { icon: Flame, value: teamInfo.goalsTotal + '', label: '总进球', color: 'text-accent-red' },
            ].map((stat, i) => (
              <div key={i} className="bg-bg-card border border-border-subtle rounded-lg p-4 sm:p-6 lg:p-8 text-center card-hover">
                <stat.icon className={`mx-auto mb-2 sm:mb-3 lg:mb-4 ${stat.color}`} size={22} />
                <div className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-text-main mb-1 lg:mb-2">{stat.value}</div>
                <div className="text-text-muted text-xs sm:text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Matches + Upcoming */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">
            {/* Recent Results */}
            <div>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 flex items-center gap-2 sm:gap-3">
                <Trophy className="text-accent-gold" size={20} />
                近期战绩
              </h2>
              <div className="space-y-3 lg:space-y-4">
                {recentResults.map((match) => (
                  <div key={match.id} className="bg-bg-card border border-border-subtle rounded-lg p-3 sm:p-4 lg:p-5 card-hover">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-text-dim text-xs lg:text-sm">{match.date}</span>
                      <span className={`text-xs lg:text-sm font-bold px-2 py-0.5 lg:px-3 lg:py-1 rounded ${
                        match.result === 'win' ? 'bg-primary/15 text-primary' :
                        match.result === 'lose' ? 'bg-accent-red/15 text-accent-red' :
                        'bg-accent-gold/15 text-accent-gold'
                      }`}>
                        {match.result === 'win' ? '胜' : match.result === 'lose' ? '负' : '平'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-text-main font-medium text-sm sm:text-base lg:text-lg truncate">
                        {match.home ? 'TinmanFC' : match.opponent}
                      </span>
                      <span className="font-display font-bold text-base sm:text-lg lg:text-2xl text-primary shrink-0">{match.score}</span>
                      <span className="text-text-muted text-sm sm:text-base lg:text-lg truncate text-right">
                        {match.home ? match.opponent : 'TinmanFC'}
                      </span>
                    </div>
                    <div className="text-text-dim text-xs lg:text-sm mt-1">{match.competition}</div>
                  </div>
                ))}
              </div>
              <Link to="/matches" className="inline-flex items-center gap-1 text-primary text-sm lg:text-base mt-4 hover:underline">
                查看全部战绩 <ChevronRight size={16} />
              </Link>
            </div>

            {/* Upcoming Matches */}
            <div>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 flex items-center gap-2 sm:gap-3">
                <Calendar className="text-accent-blue" size={20} />
                即将开赛
              </h2>
              <div className="space-y-3 lg:space-y-4">
                {upcomingMatches.map((match) => (
                  <div key={match.id} className="bg-bg-card border border-border-subtle rounded-lg p-3 sm:p-4 lg:p-5 card-hover">
                    <div className="flex items-center gap-2 text-text-dim text-xs lg:text-sm mb-2">
                      <Calendar size={12} />
                      <span>{match.date}</span>
                      <Clock size={12} />
                      <span>{match.time}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2 gap-2">
                      <span className="text-text-main font-medium text-sm sm:text-base lg:text-lg">
                        {match.home ? 'TinmanFC vs ' + match.opponent : match.opponent + ' vs TinmanFC'}
                      </span>
                      <span className={`text-xs lg:text-sm px-2 py-0.5 lg:px-3 lg:py-1 rounded shrink-0 ${match.home ? 'bg-primary/10 text-primary' : 'bg-accent-blue/10 text-accent-blue'}`}>
                        {match.home ? '主场' : '客场'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-text-dim text-xs lg:text-sm">
                      <MapPin size={12} className="shrink-0" />
                      <span className="truncate">{match.venue}</span>
                    </div>
                    <div className="text-text-dim text-xs lg:text-sm mt-1">{match.competition}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 lg:py-28 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-4xl mx-auto text-center px-5 sm:px-4 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
            想和我们一起踢球？
          </h2>
          <p className="text-text-muted mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            无论你是老手还是新手，只要热爱足球，TinmanFC 都欢迎你。我们在成都等你！
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 bg-primary text-bg-dark font-bold text-base sm:text-lg lg:text-xl rounded hover:bg-primary-dark transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]"
          >
            立即加入 <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
