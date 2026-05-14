import { teamInfo } from '../data/teamData'
import { Heart, Shield, Zap, Users, MapPin, Coffee } from 'lucide-react'

const values = [
  { icon: Heart, title: '热爱至上', desc: '胜利是奖励，热爱是动力。', color: 'text-red' },
  { icon: Shield, title: '钢铁意志', desc: '不惧强敌，永不放弃。', color: 'text-primary' },
  { icon: Zap, title: '全力以赴', desc: '每次训练和比赛都倾尽全力。', color: 'text-gold' },
  { icon: Users, title: '兄弟情谊', desc: '球场上的战友，生活中的兄弟。', color: 'text-blue' },
  { icon: MapPin, title: '成都骄傲', desc: '生于成都，踢在成都。', color: 'text-primary' },
  { icon: Coffee, title: '快乐足球', desc: '赢了庆祝，输了约火锅。', color: 'text-gold' },
]

const milestones = [
  { year: teamInfo.founded, title: '球队成立', desc: '三五球友的周末聚会' },
  { year: '2024', title: '正式建制', desc: '确定队名、队徽和训练时间' },
  { year: '2025', title: '参加联赛', desc: '首次征战成都业余联赛' },
  { year: '2026', title: '继续前行', desc: '20+球员，每周固定训练比赛' },
]

export default function About() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[800px] mx-auto text-center px-6">
          <span className="text-primary font-display text-[11px] tracking-[0.3em]">ABOUT US</span>
          <h1 className="font-display font-black text-4xl lg:text-7xl mt-3 mb-4">
            关于 <span className="text-primary">TinmanFC</span>
          </h1>
          <p className="text-text-secondary text-sm lg:text-lg leading-relaxed">{teamInfo.description}</p>
        </div>
      </section>

      {/* ===== 数据 ===== */}
      <section className="border-y border-border bg-bg-card">
        <div className="max-w-[800px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { value: teamInfo.founded, label: '成立' },
            { value: teamInfo.playerCount + '+', label: '球员' },
            { value: teamInfo.matchCount, label: '场次' },
            { value: teamInfo.goalsTotal, label: '进球' },
          ].map((s, i) => (
            <div key={i} className="py-7 text-center border-border last:border-r-0 lg:border-r">
              <div className="font-display font-black text-2xl lg:text-4xl text-text mb-0.5">{s.value}</div>
              <div className="text-text-dim text-[10px] tracking-[0.1em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 故事 + 时间线 ===== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* 故事 */}
            <div>
              <h2 className="font-display font-bold text-xl lg:text-2xl mb-5">我们的故事</h2>
              <div className="space-y-4 text-text-secondary text-sm lg:text-[15px] leading-[1.8]">
                <p>TinmanFC 诞生于 {teamInfo.founded} 年的成都。一群在球场上认识的朋友，因为对足球的共同热爱走到了一起。</p>
                <p>"铁人"这个名字，不是因为我们有多强壮，而是因为我们相信——足球需要的不仅仅是技术，更是一颗永不放弃的心。</p>
                <p>每周三晚上训练，周六下午比赛，赛后一顿火锅——这就是 TinmanFC 的日常。</p>
              </div>
            </div>

            {/* 时间线 */}
            <div>
              <h2 className="font-display font-bold text-xl lg:text-2xl mb-5">成长历程</h2>
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-4 pb-6 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 bg-primary rounded-full mt-1 shrink-0" />
                      {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                    </div>
                    <div className="pb-2">
                      <div className="text-primary font-display font-bold text-sm">{m.year}</div>
                      <div className="font-medium text-[15px] mt-0.5">{m.title}</div>
                      <div className="text-text-dim text-sm mt-0.5">{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 信条 ===== */}
      <section className="py-16 lg:py-24 border-y border-border bg-bg-card">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <h2 className="font-display font-bold text-xl lg:text-2xl mb-8 text-center">我们的信条</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {values.map((v, i) => (
              <div key={i} className="border border-border rounded-lg p-5 lg:p-6 hover:border-primary/20 transition-colors">
                <v.icon className={`${v.color} mb-3`} size={22} />
                <h3 className="font-medium text-sm lg:text-base mb-1">{v.title}</h3>
                <p className="text-text-dim text-xs lg:text-[13px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 成都 ===== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[600px] mx-auto text-center px-6">
          <h2 className="font-display font-bold text-xl lg:text-2xl mb-3">
            <span className="text-primary">成都</span>，我们的主场
          </h2>
          <p className="text-text-secondary text-sm mb-8">最辣的火锅，最悠闲的茶馆，也有一群最热血的足球人。</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: '训练', info: '每周三 20:00', sub: '成都足球公园' },
              { label: '比赛', info: '每周六 15:00', sub: '各场地轮转' },
              { label: '团建', info: '赛后火锅', sub: '老地方见' },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg py-5 px-2 text-center">
                <div className="text-primary font-display font-bold text-sm lg:text-base mb-0.5">{item.label}</div>
                <div className="text-text-secondary text-xs">{item.info}</div>
                <div className="text-text-dim text-[10px]">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
