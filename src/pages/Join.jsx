import { useState } from 'react'
import { Send, Check, Phone, MapPin, Mail } from 'lucide-react'
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

export default function Join() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm({ name: '', phone: '', position: '', experience: '', message: '' })
    setSubmitted(false)
  }

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-[10px] tracking-[0.4em] font-medium mb-4 uppercase">
            Join Us
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wide">
            加入铁人
          </h1>
          <p className="text-muted-2 text-lg mt-6 max-w-xl leading-relaxed">
            无论你是老将还是新手，只要热爱足球、愿意付出，铁人FC就有你的位置。
          </p>
        </div>
      </section>

      {/* 为什么加入 */}
      <section className="border-y border-border bg-dark-2">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { num: '01', title: '每周两练', desc: '固定训练时间，专业热身与战术训练' },
            { num: '02', title: '正式联赛', desc: '参加成都业余联赛，积累实战经验' },
            { num: '03', title: '团队氛围', desc: '兄弟般的球队文化，场上战友场下朋友' },
            { num: '04', title: '零门槛', desc: '不设试训门槛，热爱就是通行证' },
          ].map((item, i) => (
            <RevealSection
              key={i}
              className={`py-10 px-6 ${
                i > 0 ? 'border-l border-border' : ''
              } ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
              delay={i + 1}
            >
              <span className="font-display text-2xl text-accent/25">
                {item.num}
              </span>
              <h3 className="text-white font-bold mt-2">{item.title}</h3>
              <p className="text-muted-2 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* 报名表单 */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <RevealSection>
            <p className="text-accent text-[10px] tracking-[0.4em] font-medium mb-2 uppercase">
              Sign Up
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-10">
              报名表
            </h2>
          </RevealSection>

          {submitted ? (
            <div className="border border-accent/25 bg-accent/[0.04] p-10 text-center animate-scale-in">
              <Check size={48} className="text-accent mx-auto mb-4" />
              <h3 className="font-display text-3xl text-white tracking-wide mb-2">
                提交成功！
              </h3>
              <p className="text-muted-2 mb-6">
                我们会尽快联系你，欢迎加入铁人FC！
              </p>
              <button
                onClick={handleReset}
                className="text-accent text-sm link-underline"
              >
                再次填写
              </button>
            </div>
          ) : (
            <RevealSection delay={1}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-muted text-[10px] tracking-[0.3em] mb-2 uppercase">
                      姓名 *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-2 border border-border px-4 py-3.5 text-white text-sm input-glow focus:outline-none focus:border-accent/60 transition-all duration-300 placeholder:text-muted/40"
                      placeholder="你的名字"
                    />
                  </div>
                  <div>
                    <label className="block text-muted text-[10px] tracking-[0.3em] mb-2 uppercase">
                      电话 *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-2 border border-border px-4 py-3.5 text-white text-sm input-glow focus:outline-none focus:border-accent/60 transition-all duration-300 placeholder:text-muted/40"
                      placeholder="联系方式"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-muted text-[10px] tracking-[0.3em] mb-2 uppercase">
                    位置
                  </label>
                  <select
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    className="w-full bg-dark-2 border border-border px-4 py-3.5 text-white text-sm input-glow focus:outline-none focus:border-accent/60 transition-all duration-300 appearance-none"
                  >
                    <option value="">选择位置</option>
                    <option value="GK">门将</option>
                    <option value="DEF">后卫</option>
                    <option value="MID">中场</option>
                    <option value="FWD">前锋</option>
                  </select>
                </div>

                <div>
                  <label className="block text-muted text-[10px] tracking-[0.3em] mb-2 uppercase">
                    足球经历
                  </label>
                  <textarea
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-dark-2 border border-border px-4 py-3.5 text-white text-sm input-glow focus:outline-none focus:border-accent/60 transition-all duration-300 resize-none placeholder:text-muted/40"
                    placeholder="简述你的足球经历..."
                  />
                </div>

                <div>
                  <label className="block text-muted text-[10px] tracking-[0.3em] mb-2 uppercase">
                    想说的话
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-dark-2 border border-border px-4 py-3.5 text-white text-sm input-glow focus:outline-none focus:border-accent/60 transition-all duration-300 resize-none placeholder:text-muted/40"
                    placeholder="为什么想加入铁人FC..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-glow bg-accent text-dark py-4 font-bold text-sm tracking-wider hover:bg-accent-dim transition-colors duration-300 flex items-center justify-center gap-2 mt-3"
                >
                  提交报名 <Send size={16} />
                </button>
              </form>
            </RevealSection>
          )}
        </div>
      </section>

      {/* 联系方式 */}
      <section className="py-20 md:py-28 bg-dark-2">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <p className="text-accent text-[10px] tracking-[0.4em] font-medium mb-2 uppercase">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-10">
              联系我们
            </h2>
          </RevealSection>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Phone, label: '电话', value: '138-8888-8888' },
              { icon: MapPin, label: '训练基地', value: '成都足球公园' },
              { icon: Mail, label: '邮箱', value: 'hello@tinmanfc.top' },
            ].map((item, i) => (
              <RevealSection key={i} delay={i + 1}>
                <div className="border border-border p-6 card-lift hover:border-accent/20 group">
                  <item.icon
                    size={20}
                    className="text-accent/60 mb-3 group-hover:text-accent transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                  <div className="text-muted text-[10px] tracking-[0.3em] mb-1.5 uppercase">
                    {item.label}
                  </div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
