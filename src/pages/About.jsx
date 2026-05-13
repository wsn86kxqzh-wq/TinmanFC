import { teamInfo } from '../data/teamData'
import { Heart, Shield, Zap, Users, MapPin, Coffee } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 lg:pt-28">
      {/* Hero */}
      <section className="pb-12 sm:pb-20 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,136,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="max-w-4xl mx-auto text-center px-5 sm:px-4 lg:px-8 relative z-10">
          <span className="inline-block text-primary font-display text-xs sm:text-sm lg:text-base tracking-widest mb-3 sm:mb-4 lg:mb-5">ABOUT US</span>
          <h1 className="font-display font-900 text-3xl sm:text-5xl lg:text-7xl mb-4 sm:mb-6 lg:mb-8">
            关于 <span className="text-primary">TinmanFC</span>
          </h1>
          <p className="text-text-muted text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            {teamInfo.description}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-10 sm:py-16 lg:py-20 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8">我们的故事</h2>
              <div className="space-y-3 sm:space-y-4 text-text-muted text-sm sm:text-base lg:text-lg leading-relaxed">
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
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <div className="bg-bg-card border border-border-subtle rounded-lg p-4 sm:p-6 lg:p-8 text-center card-hover">
                <div className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-primary mb-1 lg:mb-2">{teamInfo.founded}</div>
                <div className="text-text-muted text-xs sm:text-sm lg:text-base">成立年份</div>
              </div>
              <div className="bg-bg-card border border-border-subtle rounded-lg p-4 sm:p-6 lg:p-8 text-center card-hover">
                <div className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-accent-gold mb-1 lg:mb-2">{teamInfo.playerCount}+</div>
                <div className="text-text-muted text-xs sm:text-sm lg:text-base">注册球员</div>
              </div>
              <div className="bg-bg-card border border-border-subtle rounded-lg p-4 sm:p-6 lg:p-8 text-center card-hover">
                <div className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-accent-blue mb-1 lg:mb-2">{teamInfo.matchCount}</div>
                <div className="text-text-muted text-xs sm:text-sm lg:text-base">总比赛场次</div>
              </div>
              <div className="bg-bg-card border border-border-subtle rounded-lg p-4 sm:p-6 lg:p-8 text-center card-hover">
                <div className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-accent-red mb-1 lg:mb-2">{teamInfo.goalsTotal}</div>
                <div className="text-text-muted text-xs sm:text-sm lg:text-base">总进球数</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center">我们的信条</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
            {[
              { icon: Heart, title: '热爱至上', desc: '踢球的初衷永远是因为热爱。胜利是奖励，热爱是动力。', color: 'text-accent-red' },
              { icon: Shield, title: '钢铁意志', desc: '不惧强敌，永不放弃。铁人精神就是战斗到最后一刻。', color: 'text-primary' },
              { icon: Zap, title: '全力以赴', desc: '每一场比赛、每一次训练，都倾尽全力。', color: 'text-accent-gold' },
              { icon: Users, title: '兄弟情谊', desc: '球场上是战友，球场下是兄弟。一人有难，全队支援。', color: 'text-accent-blue' },
              { icon: MapPin, title: '成都骄傲', desc: '生于成都，踢在成都。这座城市的气质就是我们的气质。', color: 'text-primary' },
              { icon: Coffee, title: '快乐足球', desc: '踢球是为了快乐。赢了庆祝，输了约火锅，怎么都不亏。', color: 'text-accent-gold' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-card border border-border-subtle rounded-lg p-4 sm:p-5 lg:p-7 card-hover">
                <item.icon className={item.color} size={22} />
                <h3 className="font-display font-medium text-sm sm:text-lg lg:text-xl mt-2 sm:mt-3 mb-1 sm:mb-2 lg:mb-3">{item.title}</h3>
                <p className="text-text-muted text-xs sm:text-sm lg:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chengdu Connection */}
      <section className="py-10 sm:py-16 lg:py-20 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-4xl mx-auto text-center px-5 sm:px-4 lg:px-8">
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6">
            <span className="text-primary">成都</span>，我们的主场
          </h2>
          <p className="text-text-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10">
            这里有最辣的火锅，最悠闲的茶馆，也有一群最热血的足球人。TinmanFC 的每一步，都踩在成都的土地上。
          </p>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
            <div className="bg-bg-card border border-border-subtle rounded-lg p-3 sm:p-5 lg:p-7">
              <div className="text-primary font-display font-bold text-sm sm:text-lg lg:text-2xl mb-1 lg:mb-2">训练</div>
              <div className="text-text-muted text-xs sm:text-sm lg:text-base">每周三 20:00</div>
              <div className="text-text-dim text-[10px] sm:text-xs lg:text-sm">成都足球公园</div>
            </div>
            <div className="bg-bg-card border border-border-subtle rounded-lg p-3 sm:p-5 lg:p-7">
              <div className="text-accent-blue font-display font-bold text-sm sm:text-lg lg:text-2xl mb-1 lg:mb-2">比赛</div>
              <div className="text-text-muted text-xs sm:text-sm lg:text-base">每周六 15:00</div>
              <div className="text-text-dim text-[10px] sm:text-xs lg:text-sm">各场地轮转</div>
            </div>
            <div className="bg-bg-card border border-border-subtle rounded-lg p-3 sm:p-5 lg:p-7">
              <div className="text-accent-gold font-display font-bold text-sm sm:text-lg lg:text-2xl mb-1 lg:mb-2">团建</div>
              <div className="text-text-muted text-xs sm:text-sm lg:text-base">赛后火锅</div>
              <div className="text-text-dim text-[10px] sm:text-xs lg:text-sm">老地方见</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
