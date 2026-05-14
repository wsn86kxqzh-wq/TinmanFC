import { teamInfo } from '../data/teamData'
import { Heart, Shield, Zap, Users, MapPin, Coffee, ChevronRight, Star } from 'lucide-react'

const values = [
  { icon: Heart, title: '热爱至上', desc: '踢球的初衷永远是因为热爱。胜利是奖励，热爱是动力。', color: 'text-accent-red', bg: 'bg-accent-red/5', border: 'border-accent-red/15' },
  { icon: Shield, title: '钢铁意志', desc: '不惧强敌，永不放弃。铁人精神就是战斗到最后一刻。', color: 'text-primary', bg: 'bg-primary/5', border: 'border-primary/15' },
  { icon: Zap, title: '全力以赴', desc: '每一场比赛、每一次训练，都倾尽全力。', color: 'text-accent-gold', bg: 'bg-accent-gold/5', border: 'border-accent-gold/15' },
  { icon: Users, title: '兄弟情谊', desc: '球场上是战友，球场下是兄弟。一人有难，全队支援。', color: 'text-accent-blue', bg: 'bg-accent-blue/5', border: 'border-accent-blue/15' },
  { icon: MapPin, title: '成都骄傲', desc: '生于成都，踢在成都。这座城市的气质就是我们的气质。', color: 'text-primary', bg: 'bg-primary/5', border: 'border-primary/15' },
  { icon: Coffee, title: '快乐足球', desc: '踢球是为了快乐。赢了庆祝，输了约火锅，怎么都不亏。', color: 'text-accent-gold', bg: 'bg-accent-gold/5', border: 'border-accent-gold/15' },
]

const timeline = [
  { year: teamInfo.founded, title: '球队成立', desc: '三五球友的周末聚会，变成了一支有名字的球队。' },
  { year: '2024', title: '正式建制', desc: '确定队名"TinmanFC"，有了队徽、队服和固定的训练时间。' },
  { year: '2025', title: '参加联赛', desc: '首次参加成都业余足球联赛，以黑马姿态杀入四强。' },
  { year: '2026', title: '继续前行', desc: '球队壮大到20+人，每周固定训练比赛，铁人精神从未停止。' },
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 lg:px-12">
          <span className="inline-block text-primary font-display text-xs lg:text-sm tracking-[0.3em] mb-4 lg:mb-6">ABOUT US</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl mb-4 lg:mb-6">
            关于 <span className="text-primary">TinmanFC</span>
          </h1>
          <p className="text-text-muted text-base lg:text-xl leading-relaxed max-w-3xl mx-auto">
            {teamInfo.description}
          </p>
        </div>
      </section>

      {/* ===== 数据卡片 ===== */}
      <section className="py-12 lg:py-20 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { value: teamInfo.founded, label: '成立年份', color: 'text-primary' },
              { value: teamInfo.playerCount + '+', label: '注册球员', color: 'text-accent-gold' },
              { value: teamInfo.matchCount, label: '总比赛场次', color: 'text-accent-blue' },
              { value: teamInfo.goalsTotal, label: '总进球数', color: 'text-accent-red' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-card border border-border-subtle rounded-xl p-6 lg:p-8 text-center group hover:border-primary/20 transition-all">
                <div className={`font-display font-black text-3xl lg:text-5xl ${item.color} mb-1 lg:mb-2`}>{item.value}</div>
                <div className="text-text-dim text-xs lg:text-sm tracking-wider uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 球队故事 ===== */}
      <section className="py-16 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="font-display font-bold text-2xl lg:text-3xl mb-6 lg:mb-8">我们的故事</h2>
              <div className="space-y-4 text-text-muted text-sm lg:text-base leading-relaxed">
                <p>
                  TinmanFC 诞生于 {teamInfo.founded} 年的成都。一群在球场上认识的朋友，因为对足球的共同热爱走到了一起。我们从最初的三五人小聚，发展到现在二十多人的正式球队。
                </p>
                <p>
                  "铁人"这个名字，不是因为我们有多强壮，而是因为我们相信——足球需要的不仅仅是技术，更是一颗永不放弃的心。无论比分如何，我们都全力以赴。
                </p>
                <p>
                  在成都这座慵懒而热辣的城市里，我们用汗水书写自己的足球故事。每周三晚上训练，周六下午比赛，赛后一顿火锅——这就是 TinmanFC 的日常。
                </p>
              </div>
            </div>

            {/* 时间线 */}
            <div>
              <h2 className="font-display font-bold text-2xl lg:text-3xl mb-6 lg:mb-8">成长历程</h2>
              <div className="relative">
                {/* 竖线 */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border-subtle" />
                <div className="space-y-8">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative pl-12">
                      {/* 节点 */}
                      <div className="absolute left-2.5 top-1 w-3 h-3 bg-primary rounded-full border-2 border-bg-dark shadow-[0_0_8px_rgba(0,255,136,0.4)]" />
                      <div className="text-primary font-display font-bold text-sm mb-1">{item.year}</div>
                      <div className="font-semibold text-text-main text-base lg:text-lg mb-1">{item.title}</div>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 信条 ===== */}
      <section className="py-16 lg:py-28 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-2">我们的信条</h2>
            <p className="text-text-dim text-xs lg:text-sm tracking-widest font-display">OUR CODE</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {values.map((item, i) => (
              <div key={i} className={`${item.bg} border ${item.border} rounded-xl p-5 lg:p-7 group hover:scale-[1.02] transition-transform`}>
                <item.icon className={`${item.color} mb-3 lg:mb-4`} size={28} />
                <h3 className="font-display font-semibold text-base lg:text-lg mb-1.5 lg:mb-2">{item.title}</h3>
                <p className="text-text-muted text-xs lg:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 成都主场 ===== */}
      <section className="py-16 lg:py-28">
        <div className="max-w-5xl mx-auto text-center px-6 lg:px-12">
          <h2 className="font-display font-bold text-2xl lg:text-3xl mb-3 lg:mb-4">
            <span className="text-primary">成都</span>，我们的主场
          </h2>
          <p className="text-text-muted text-sm lg:text-base leading-relaxed max-w-2xl mx-auto mb-8 lg:mb-12">
            这里有最辣的火锅，最悠闲的茶馆，也有一群最热血的足球人。TinmanFC 的每一步，都踩在成都的土地上。
          </p>
          <div className="grid grid-cols-3 gap-4 lg:gap-8">
            {[
              { label: '训练', detail: '每周三 20:00', sub: '成都足球公园', color: 'text-primary', border: 'border-primary/15' },
              { label: '比赛', detail: '每周六 15:00', sub: '各场地轮转', color: 'text-accent-blue', border: 'border-accent-blue/15' },
              { label: '团建', detail: '赛后火锅', sub: '老地方见', color: 'text-accent-gold', border: 'border-accent-gold/15' },
            ].map((item, i) => (
              <div key={i} className={`bg-bg-card border ${item.border} rounded-xl p-5 lg:p-8`}>
                <Star className={`mx-auto ${item.color} mb-2 lg:mb-3`} size={20} />
                <div className={`${item.color} font-display font-bold text-sm lg:text-2xl mb-1`}>{item.label}</div>
                <div className="text-text-muted text-xs lg:text-sm">{item.detail}</div>
                <div className="text-text-dim text-[10px] lg:text-xs mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
