import { useState } from 'react'
import { Send, Check, Phone, MapPin, Mail } from 'lucide-react'

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
          <p className="text-accent text-xs tracking-[0.3em] font-medium mb-4">
            JOIN US
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wide">
            加入铁人
          </h1>
          <p className="text-muted-2 text-lg mt-6 max-w-xl">
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
            <div
              key={i}
              className={`py-10 px-6 ${
                i > 0 ? 'border-l border-border' : ''
              } ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
            >
              <span className="font-display text-2xl text-accent/30">
                {item.num}
              </span>
              <h3 className="text-white font-bold mt-2">{item.title}</h3>
              <p className="text-muted-2 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 报名表单 */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs tracking-[0.3em] font-medium mb-2">
            SIGN UP
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-10">
            报名表
          </h2>

          {submitted ? (
            <div className="border border-accent/30 bg-accent/5 p-10 text-center">
              <Check size={48} className="text-accent mx-auto mb-4" />
              <h3 className="font-display text-3xl text-white tracking-wide mb-2">
                提交成功！
              </h3>
              <p className="text-muted-2 mb-6">
                我们会尽快联系你，欢迎加入铁人FC！
              </p>
              <button
                onClick={handleReset}
                className="text-accent text-sm hover:underline"
              >
                再次填写
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-muted text-xs tracking-wider mb-2">
                    姓名 *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-2 border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="你的名字"
                  />
                </div>
                <div>
                  <label className="block text-muted text-xs tracking-wider mb-2">
                    电话 *
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-2 border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="联系方式"
                  />
                </div>
              </div>

              <div>
                <label className="block text-muted text-xs tracking-wider mb-2">
                  位置
                </label>
                <select
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  className="w-full bg-dark-2 border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="">选择位置</option>
                  <option value="GK">门将</option>
                  <option value="DEF">后卫</option>
                  <option value="MID">中场</option>
                  <option value="FWD">前锋</option>
                </select>
              </div>

              <div>
                <label className="block text-muted text-xs tracking-wider mb-2">
                  足球经历
                </label>
                <textarea
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-dark-2 border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="简述你的足球经历..."
                />
              </div>

              <div>
                <label className="block text-muted text-xs tracking-wider mb-2">
                  想说的话
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-dark-2 border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="为什么想加入铁人FC..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-dark py-4 font-bold text-sm tracking-wider hover:bg-accent-dim transition-colors flex items-center justify-center gap-2"
              >
                提交报名 <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 联系方式 */}
      <section className="py-20 md:py-28 bg-dark-2">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-xs tracking-[0.3em] font-medium mb-2">
            CONTACT
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-10">
            联系我们
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Phone, label: '电话', value: '138-8888-8888' },
              { icon: MapPin, label: '训练基地', value: '成都足球公园' },
              { icon: Mail, label: '邮箱', value: 'hello@tinmanfc.top' },
            ].map((item, i) => (
              <div key={i} className="border border-border p-6">
                <item.icon size={20} className="text-accent mb-3" strokeWidth={1.5} />
                <div className="text-muted text-xs tracking-wider mb-1">
                  {item.label}
                </div>
                <div className="text-white font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
