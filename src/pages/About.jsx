import { Shield, Heart, Flame, Users } from 'lucide-react'
import { teamInfo } from '../data/teamData'
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

const values = [
  { icon: Flame, title: '热血', desc: '每一场比赛都全力以赴，不留遗憾' },
  { icon: Shield, title: '铁骨', desc: '硬朗的球风，钢铁般的防守意志' },
  { icon: Users, title: '兄弟', desc: '场上战友，场下兄弟，永不放弃彼此' },
  { icon: Heart, title: '热爱', desc: '不为名利，只为对足球最纯粹的热爱' },
]

const timeline = [
  { year: '2023', event: '球队成立', desc: '几个热爱足球的成都兄弟，在球场上相识，决定组建自己的球队' },
  { year: '2023', event: '首场正式比赛', desc: '以3:1拿下队史首胜，铁人精神从此扎根' },
  { year: '2024', event: '加入成都业余联赛', desc: '正式踏入联赛体系，开始系统化训练和比赛' },
  { year: '2025', event: '赛季最佳战绩', desc: '联赛第三名，队史最长五连胜' },
  { year: '2026', event: '新征程', desc: '阵容扩充至22人，剑指联赛冠军' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[10px] tracking-[0.4em] font-medium mb-4 uppercase">
            About Us
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wide">
            铁人之魂
          </h1>
          <p className="text-muted-2 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
            {teamInfo.description}
          </p>
        </div>
      </section>

      {/* 核心数据 */}
      <section className="border-y border-border bg-dark-2">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: teamInfo.founded, label: '成立年份' },
            { value: teamInfo.playerCount, label: '注册球员' },
            { value: teamInfo.matchCount, label: '历史比赛' },
            { value: teamInfo.winRate, label: '胜率' },
          ].map((s, i) => (
            <RevealSection
              key={i}
              className={`py-10 px-6 text-center ${
                i > 0 ? 'border-l border-border' : ''
              } ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
              delay={i + 1}
            >
              <div className="font-display text-4xl md:text-5xl text-white">
                {s.value}
              </div>
              <div className="text-muted text-[10px] tracking-[0.4em] mt-2 uppercase">
                {s.label}
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* 球队价值观 */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <p className="text-accent text-[10px] tracking-[0.4em] font-medium mb-2 uppercase">
              Our Values
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-12">
              球队精神
            </h2>
          </RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <RevealSection key={i} delay={i + 1}>
                <div className="border border-border p-8 card-lift hover:border-accent/25 group">
                  <v.icon
                    size={26}
                    className="text-accent/70 mb-5 group-hover:text-accent transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-2xl text-white tracking-wide mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-2 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 时间线 */}
      <section className="py-20 md:py-28 bg-dark-2">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <p className="text-accent text-[10px] tracking-[0.4em] font-medium mb-2 uppercase">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-14">
              成长之路
            </h2>
          </RevealSection>
          <div className="relative">
            {/* 竖线 */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((item, i) => (
              <RevealSection key={i} delay={i + 1}>
                <div
                  className={`relative flex items-start mb-12 last:mb-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* 圆点 */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10 shadow-[0_0_8px_rgba(0,255,136,0.3)]" />

                  {/* 内容 */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[45%] ${
                      i % 2 === 0
                        ? 'md:pr-12 md:text-right'
                        : 'md:pl-12 md:text-left'
                    }`}
                  >
                    <span className="font-display text-3xl text-accent">
                      {item.year}
                    </span>
                    <h3 className="text-white font-medium text-lg mt-1">
                      {item.event}
                    </h3>
                    <p className="text-muted-2 text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 成都 */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div>
                <p className="text-accent text-[10px] tracking-[0.4em] font-medium mb-2 uppercase">
                  Our City
                </p>
                <h2 className="font-display text-5xl md:text-6xl text-white tracking-wide">
                  成都
                </h2>
                <p className="text-muted-2 mt-6 leading-relaxed">
                  在这座来了就不想走的城市，足球是另一种生活方式。从锦江边到天府大道，从火锅桌到绿茵场——铁人FC在成都的每一个角落奔跑，把这座城市的热情和坚韧写在每一场比赛里。
                </p>
              </div>
            </RevealSection>
            <RevealSection delay={2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '训练基地', value: '成都足球公园' },
                  { label: '主场', value: '高新区体育中心' },
                  { label: '常规训练', value: '每周三 / 周六' },
                  { label: '参赛联赛', value: '成都业余联赛' },
                ].map((item, i) => (
                  <div key={i} className="bg-dark-2 border border-border p-5 card-lift hover:border-accent/20">
                    <div className="text-muted text-[10px] tracking-[0.3em] mb-1.5 uppercase">
                      {item.label}
                    </div>
                    <div className="text-white text-sm font-medium">
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
