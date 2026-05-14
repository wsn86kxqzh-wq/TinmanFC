import { teamInfo, matches, upcomingMatches } from '../data/teamData'
import { Link } from 'react-router-dom'
import { Trophy, Users, Target, Flame, ChevronRight, MapPin, Calendar, Clock, Zap, ArrowRight } from 'lucide-react'

export default function Home() {
  const recentResults = matches.slice(0, 5)
  const wins = matches.filter(m => m.result === 'win').length
  const total = matches.length

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 动态网格背景 */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }} />
        </div>

        {/* 光晕效果 */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]" />

        {/* 对角装饰线 */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" style={{
          background: 'linear-gradient(135deg, transparent 40%, rgba(0,255,136,0.5) 50%, transparent 60%)',
        }} />

        <div className="relative z-10 text-center px-6 lg:px-12 max-w-6xl mx-auto">
          {/* 徽章 */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/8 border border-primary/15 rounded-full mb-8 lg:mb-12">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              <span className="text-primary text-xs lg:text-sm font-display tracking-[0.25em] font-medium">CHENGDU · FOOTBALL · PASSION</span>
            </div>
          </div>

          {/* 大标题 */}
          <h1 className="animate-slide-up font-display font-black text-6xl sm:text-8xl lg:text-[10rem] tracking-tighter leading-[0.85] mb-6 lg:mb-10" style={{ animationDelay: '0.1s' }}>
            <span className="text-text-main">TINMAN</span>
            <br />
            <span className="text-primary drop-shadow-[0_0_40px_rgba(0,255,136,0.3)]">FC</span>
          </h1>

          {/* Slogan */}
          <p className="animate-slide-up text-xl sm:text-2xl lg:text-4xl text-text-muted font-light mb-4 lg:mb-6 tracking-wide" style={{ animationDelay: '0.2s' }}>
            {teamInfo.slogan}
          </p>

          <p className="animate-slide-up text-text-dim text-sm lg:text-lg max-w-2xl mx-auto mb-10 lg:mb-14 leading-relaxed" style={{ animationDelay: '0.3s' }}>
            {teamInfo.description}
          </p>

          {/* CTA 按钮组 */}
          <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/join"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 lg:px-12 py-4 lg:py-5 bg-primary text-bg-dark font-bold text-base lg:text-xl rounded-lg hover:bg-primary-dark transition-all shadow-[0_0_30px_rgba(0,255,136,0.25)] hover:shadow-[0_0_50px_rgba(0,255,136,0.4)]"
            >
              加入铁人 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 lg:px-12 py-4 lg:py-5 border border-primary/25 text-primary font-medium text-base lg:text-xl rounded-lg hover:bg-primary/8 hover:border-primary/40 transition-all"
            >
              了解更多
            </Link>
          </div>
        </div>

        {/* 滚动指示器 */}
        <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary/25 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary/60 rounded-full animate-pulse-glow" />
          </div>
        </div>
      </section>

      {/* ===== 数据仪表盘 ===== */}
      <section className="relative py-16 lg:py-28 bg-bg-surface border-y border-border-subtle overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              { icon: Users, value: teamInfo.playerCount + '+', label: '注册球员', color: 'text-primary', border: 'border-primary/20', bg: 'bg-primary/5' },
              { icon: Trophy, value: wins + '/' + total, label: '胜/总场次', color: 'text-accent-gold', border: 'border-accent-gold/20', bg: 'bg-accent-gold/5' },
              { icon: Target, value: teamInfo.winRate, label: '胜率', color: 'text-accent-blue', border: 'border-accent-blue/20', bg: 'bg-accent-blue/5' },
              { icon: Flame, value: teamInfo.goalsTotal + '', label: '总进球', color: 'text-accent-red', border: 'border-accent-red/20', bg: 'bg-accent-red/5' },
            ].map((stat, i) => (
              <div key={i} className={`relative bg-bg-card border ${stat.border} rounded-xl p-6 lg:p-8 text-center group hover:scale-[1.02] transition-transform`}>
                <stat.icon className={`mx-auto mb-3 lg:mb-4 ${stat.color}`} size={28} />
                <div className={`font-display font-black text-3xl lg:text-5xl ${stat.color} mb-1 lg:mb-2`}>{stat.value}</div>
                <div className="text-text-muted text-xs lg:text-sm tracking-wider uppercase">{stat.label}</div>
                {/* 底部发光线 */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] ${stat.bg} group-hover:w-3/4 transition-all duration-500 rounded-full`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 近期战绩 + 即将开赛 ===== */}
      <section className="py-16 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* 近期战绩 */}
            <div>
              <div className="flex items-center gap-3 mb-8 lg:mb-10">
                <div className="w-10 h-10 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                  <Trophy className="text-accent-gold" size={20} />
                </div>
                <div>
                  <h2 className="font-display font-bold text-xl lg:text-2xl">近期战绩</h2>
                  <p className="text-text-dim text-xs">LAST 5 MATCHES</p>
                </div>
              </div>

              <div className="space-y-3">
                {recentResults.map((match) => (
                  <div key={match.id} className="bg-bg-card border border-border-subtle rounded-xl p-4 lg:p-5 hover:border-primary/20 transition-all group">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-text-dim text-xs font-medium">{match.date}</span>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${
                        match.result === 'win' ? 'bg-primary/12 text-primary' :
                        match.result === 'lose' ? 'bg-accent-red/12 text-accent-red' :
                        'bg-accent-gold/12 text-accent-gold'
                      }`}>
                        {match.result === 'win' ? 'WIN' : match.result === 'lose' ? 'LOSS' : 'DRAW'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm lg:text-base font-semibold truncate ${match.home ? 'text-primary' : 'text-text-main'}`}>
                        {match.home ? 'TinmanFC' : match.opponent}
                      </span>
                      <span className="font-display font-black text-xl lg:text-2xl text-text-main px-3 shrink-0">{match.score}</span>
                      <span className={`text-sm lg:text-base font-semibold truncate text-right ${!match.home ? 'text-primary' : 'text-text-muted'}`}>
                        {!match.home ? 'TinmanFC' : match.opponent}
                      </span>
                    </div>
                    <div className="text-text-dim text-[11px] mt-2">{match.competition}</div>
                  </div>
                ))}
              </div>

              <Link to="/matches" className="inline-flex items-center gap-1.5 text-primary text-sm mt-6 hover:gap-2.5 transition-all font-medium">
                查看全部战绩 <ChevronRight size={16} />
              </Link>
            </div>

            {/* 即将开赛 */}
            <div>
              <div className="flex items-center gap-3 mb-8 lg:mb-10">
                <div className="w-10 h-10 bg-accent-blue/10 rounded-lg flex items-center justify-center">
                  <Calendar className="text-accent-blue" size={20} />
                </div>
                <div>
                  <h2 className="font-display font-bold text-xl lg:text-2xl">即将开赛</h2>
                  <p className="text-text-dim text-xs">UPCOMING FIXTURES</p>
                </div>
              </div>

              <div className="space-y-3">
                {upcomingMatches.map((match) => (
                  <div key={match.id} className="bg-bg-card border border-border-subtle rounded-xl p-4 lg:p-5 hover:border-accent-blue/20 transition-all">
                    <div className="flex items-center gap-2 text-text-dim text-xs mb-2.5">
                      <Calendar size={12} />
                      <span>{match.date}</span>
                      <Clock size={12} className="ml-2" />
                      <span>{match.time}</span>
                      <span className={`ml-auto px-2 py-0.5 rounded text-[11px] font-bold ${match.home ? 'bg-primary/10 text-primary' : 'bg-accent-blue/10 text-accent-blue'}`}>
                        {match.home ? 'HOME' : 'AWAY'}
                      </span>
                    </div>
                    <div className="text-text-main font-semibold text-sm lg:text-base mb-1.5">
                      TinmanFC <span className="text-primary font-display">VS</span> {match.opponent}
                    </div>
                    <div className="flex items-center gap-2 text-text-dim text-xs">
                      <MapPin size={12} className="shrink-0" />
                      <span className="truncate">{match.venue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA 全幅横幅 ===== */}
      <section className="relative py-20 lg:py-36 overflow-hidden">
        {/* 背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-bg-dark to-accent-blue/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-12">
          <Zap className="mx-auto text-primary mb-4 lg:mb-6" size={36} />
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl mb-4 lg:mb-6">
            准备好<span className="text-primary">上场</span>了吗？
          </h2>
          <p className="text-text-muted text-sm lg:text-lg max-w-2xl mx-auto mb-8 lg:mb-12 leading-relaxed">
            无论你是老手还是新手，只要热爱足球，TinmanFC 都欢迎你。<br className="hidden lg:block" />
            我们在成都等你，一起踢出属于铁人的故事。
          </p>
          <Link
            to="/join"
            className="group inline-flex items-center gap-2 px-10 lg:px-14 py-4 lg:py-6 bg-primary text-bg-dark font-bold text-lg lg:text-2xl rounded-lg hover:bg-primary-dark transition-all shadow-[0_0_30px_rgba(0,255,136,0.25)] hover:shadow-[0_0_50px_rgba(0,255,136,0.4)]"
          >
            立即加入 <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
