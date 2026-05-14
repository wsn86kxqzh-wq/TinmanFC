import { teamInfo, matches, upcomingMatches } from '../data/teamData'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar, Clock } from 'lucide-react'

export default function Home() {
  const wins = matches.filter(m => m.result === 'win').length
  const total = matches.length

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative flex items-center justify-center min-h-[100vh] overflow-hidden">
        {/* 背景 */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }} />
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-[25%] right-[10%] w-[400px] h-[400px] bg-blue/[0.03] rounded-full blur-[120px]" />

        <div className="relative z-10 text-center px-6 max-w-[900px] mx-auto">
          {/* 标签 */}
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-primary/[0.04] mb-8">
            <span className="w-1.5 h-1.5 bg-primary rounded-full anim-pulse-dot" />
            <span className="text-primary text-[11px] font-display tracking-[0.3em]">CHENGDU · FOOTBALL</span>
          </div>

          {/* 主标题 */}
          <h1 className="anim-fade-up delay-100 font-display font-black text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] tracking-tighter mb-6">
            <span className="text-text">TINMAN</span>
            <br />
            <span className="text-primary">FC</span>
          </h1>

          <p className="anim-fade-up delay-200 text-text-secondary text-lg lg:text-2xl font-light mb-3 tracking-wide">
            {teamInfo.slogan}
          </p>
          <p className="anim-fade-up delay-300 text-text-dim text-sm lg:text-base max-w-[560px] mx-auto mb-10 leading-relaxed">
            {teamInfo.description}
          </p>

          {/* CTA */}
          <div className="anim-fade-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/join" className="group flex items-center gap-2 px-7 py-3.5 bg-primary text-bg font-bold text-[15px] rounded-md hover:brightness-110 transition-all">
              加入铁人 <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link to="/about" className="flex items-center gap-2 px-7 py-3.5 border border-border-light text-text-secondary font-medium text-[15px] rounded-md hover:border-primary/30 hover:text-primary transition-all">
              了解更多
            </Link>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 anim-float">
          <div className="w-5 h-8 border border-primary/20 rounded-full flex justify-center pt-1.5">
            <div className="w-0.5 h-2 bg-primary/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ===== 数据 ===== */}
      <section className="border-y border-border bg-bg-card">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { value: teamInfo.playerCount + '+', label: '球员' },
            { value: wins + '/' + total, label: '胜/总场' },
            { value: teamInfo.winRate, label: '胜率' },
            { value: teamInfo.goalsTotal, label: '进球' },
          ].map((s, i) => (
            <div key={i} className="py-8 lg:py-10 text-center border-border last:border-r-0 lg:border-r">
              <div className="font-display font-black text-3xl lg:text-[2.8rem] text-text mb-1">{s.value}</div>
              <div className="text-text-dim text-[11px] font-display tracking-[0.1em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 近期 + 即将 ===== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* 近期战绩 */}
            <div>
              <h2 className="font-display font-bold text-lg lg:text-xl mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" />
                近期战绩
              </h2>
              <div className="space-y-2.5">
                {matches.slice(0, 5).map(m => (
                  <div key={m.id} className="flex items-center gap-3 py-3 border-b border-border last:border-0 group">
                    <span className={`w-7 h-7 rounded flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      m.result === 'win' ? 'bg-primary/10 text-primary' :
                      m.result === 'lose' ? 'bg-red/10 text-red' :
                      'bg-gold/10 text-gold'
                    }`}>
                      {m.result === 'win' ? 'W' : m.result === 'lose' ? 'L' : 'D'}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">
                        {m.home ? 'TinmanFC' : m.opponent}
                        <span className="text-text-dim mx-1.5">vs</span>
                        {m.home ? m.opponent : 'TinmanFC'}
                      </div>
                      <div className="text-text-dim text-[11px]">{m.competition}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-display font-bold text-base">{m.score}</div>
                      <div className="text-text-dim text-[10px]">{m.date.slice(5)}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/matches" className="inline-flex items-center gap-1 text-primary text-xs mt-4 font-medium hover:gap-1.5 transition-all">
                全部战绩 <ArrowRight size={14} />
              </Link>
            </div>

            {/* 即将开赛 */}
            <div>
              <h2 className="font-display font-bold text-lg lg:text-xl mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue rounded-full" />
                即将开赛
              </h2>
              <div className="space-y-3">
                {upcomingMatches.map(m => (
                  <div key={m.id} className="bg-bg-card border border-border rounded-lg p-4">
                    <div className="flex items-center gap-3 text-text-dim text-[11px] mb-2">
                      <Calendar size={12} />
                      <span>{m.date}</span>
                      <Clock size={12} />
                      <span>{m.time}</span>
                      <span className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded ${m.home ? 'bg-primary/10 text-primary' : 'bg-blue/10 text-blue'}`}>
                        {m.home ? '主场' : '客场'}
                      </span>
                    </div>
                    <div className="font-medium text-sm">
                      TinmanFC <span className="text-primary font-display text-xs">VS</span> {m.opponent}
                    </div>
                    <div className="flex items-center gap-1.5 text-text-dim text-[11px] mt-1">
                      <MapPin size={11} />
                      {m.venue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-y border-border bg-bg-card">
        <div className="max-w-[700px] mx-auto text-center px-6 py-16 lg:py-24">
          <h2 className="font-display font-black text-2xl lg:text-4xl mb-3">
            准备好了吗？
          </h2>
          <p className="text-text-secondary text-sm lg:text-base mb-8 leading-relaxed">
            只要热爱足球，TinmanFC 就有你的位置。
          </p>
          <Link to="/join" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg font-bold text-base rounded-md hover:brightness-110 transition-all">
            立即加入 <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
