import { teamInfo } from '../data/teamData'
import { Mail, MessageCircle, UserPlus, MapPin, Calendar, CheckCircle, Zap, ArrowRight, Send } from 'lucide-react'
import { useState } from 'react'

export default function Join() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', position: '', experience: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
          <span className="inline-block text-primary font-display text-xs lg:text-sm tracking-[0.3em] mb-4 lg:mb-6">JOIN US</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl mb-4 lg:mb-6">
            加入<span className="text-primary">铁人</span>
          </h1>
          <p className="text-text-muted text-base lg:text-xl">无论你是老将还是新手，TinmanFC 都有你的位置</p>
        </div>
      </section>

      {/* ===== 为什么加入 ===== */}
      <section className="py-12 lg:py-20 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="font-display font-bold text-xl lg:text-2xl mb-6 lg:mb-10 text-center">为什么加入 TinmanFC？</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: Calendar, title: '固定训练', desc: '每周三晚固定训练，教练带队，系统提升', color: 'text-primary', bg: 'bg-primary/5', border: 'border-primary/15' },
              { icon: MapPin, title: '正规比赛', desc: '参加成都业余联赛，体验正式比赛氛围', color: 'text-accent-blue', bg: 'bg-accent-blue/5', border: 'border-accent-blue/15' },
              { icon: UserPlus, title: '兄弟氛围', desc: '球队不只是踢球，更是志同道合的兄弟', color: 'text-accent-gold', bg: 'bg-accent-gold/5', border: 'border-accent-gold/15' },
              { icon: CheckCircle, title: '零门槛', desc: '不要求水平，只要求热爱和态度', color: 'text-accent-red', bg: 'bg-accent-red/5', border: 'border-accent-red/15' },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} border ${item.border} rounded-xl p-5 lg:p-7 text-center hover:scale-[1.02] transition-transform`}>
                <item.icon className={`mx-auto ${item.color} mb-3 lg:mb-4`} size={24} />
                <h3 className="font-display font-semibold text-sm lg:text-base mb-1 lg:mb-2">{item.title}</h3>
                <p className="text-text-muted text-[11px] lg:text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 表单 ===== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-12">
          {!submitted ? (
            <div className="bg-bg-card border border-border-subtle rounded-xl p-6 lg:p-10">
              <div className="flex items-center gap-3 mb-6 lg:mb-8">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <h2 className="font-display font-bold text-lg lg:text-xl">填写信息，联系我们</h2>
                  <p className="text-text-dim text-xs">填写后球队负责人会尽快联系你</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs lg:text-sm text-text-muted mb-1.5">你的名字 *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-bg-dark border border-border-subtle rounded-lg px-4 py-3 text-text-main text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(0,255,136,0.1)] transition-all"
                      placeholder="名字或昵称"
                    />
                  </div>
                  <div>
                    <label className="block text-xs lg:text-sm text-text-muted mb-1.5">联系方式 *</label>
                    <input
                      type="text"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-bg-dark border border-border-subtle rounded-lg px-4 py-3 text-text-main text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(0,255,136,0.1)] transition-all"
                      placeholder="手机号 / 微信号"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs lg:text-sm text-text-muted mb-1.5">擅长位置</label>
                  <select
                    value={form.position}
                    onChange={(e) => setForm({ ...form, position: e.target.value })}
                    className="w-full bg-bg-dark border border-border-subtle rounded-lg px-4 py-3 text-text-main text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(0,255,136,0.1)] transition-all"
                  >
                    <option value="">选择位置（不确定可跳过）</option>
                    <option value="GK">门将</option>
                    <option value="DEF">后卫</option>
                    <option value="MID">中场</option>
                    <option value="FWD">前锋</option>
                    <option value="ANY">哪里需要哪里搬</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs lg:text-sm text-text-muted mb-1.5">足球经历</label>
                  <textarea
                    rows={3}
                    value={form.experience}
                    onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    className="w-full bg-bg-dark border border-border-subtle rounded-lg px-4 py-3 text-text-main text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(0,255,136,0.1)] transition-all resize-none"
                    placeholder="简单说说你的足球经历"
                  />
                </div>

                <div>
                  <label className="block text-xs lg:text-sm text-text-muted mb-1.5">想说的话</label>
                  <textarea
                    rows={2}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-bg-dark border border-border-subtle rounded-lg px-4 py-3 text-text-main text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(0,255,136,0.1)] transition-all resize-none"
                    placeholder="对球队有什么想说的？"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full py-3.5 lg:py-4 bg-primary text-bg-dark font-bold text-base lg:text-lg rounded-lg hover:bg-primary-dark transition-all shadow-[0_0_20px_rgba(0,255,136,0.2)] hover:shadow-[0_0_40px_rgba(0,255,136,0.35)] flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  提交申请
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-bg-card border border-primary/20 rounded-xl p-8 lg:p-14 text-center shadow-[0_0_30px_rgba(0,255,136,0.1)]">
              <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto flex items-center justify-center mb-4 lg:mb-6">
                <CheckCircle className="text-primary" size={32} />
              </div>
              <h2 className="font-display font-bold text-2xl lg:text-3xl mb-2 lg:mb-3">申请已提交！</h2>
              <p className="text-text-muted text-sm lg:text-base mb-6 lg:mb-8 leading-relaxed">
                感谢你的加入意向！我们会尽快通过你留的联系方式和你取得联系。<br />
                期待在球场上见到你！
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', position: '', experience: '', message: '' }) }}
                className="px-6 lg:px-8 py-2.5 lg:py-3 border border-primary/25 text-primary font-medium rounded-lg hover:bg-primary/8 transition-all text-sm lg:text-base"
              >
                继续填写
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== 联系方式 ===== */}
      <section className="py-12 lg:py-20 bg-bg-surface border-t border-border-subtle">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
          <h2 className="font-display font-bold text-lg lg:text-xl mb-6 lg:mb-8">其他联系方式</h2>
          <div className="grid grid-cols-3 gap-3 lg:gap-6">
            {[
              { icon: MessageCircle, title: '微信群', desc: '联系队长拉你进群', color: 'text-primary', bg: 'bg-primary/5', border: 'border-primary/15' },
              { icon: MapPin, title: '训练地点', desc: '成都足球公园', color: 'text-accent-blue', bg: 'bg-accent-blue/5', border: 'border-accent-blue/15' },
              { icon: Calendar, title: '训练时间', desc: '每周三 20:00', color: 'text-accent-gold', bg: 'bg-accent-gold/5', border: 'border-accent-gold/15' },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} border ${item.border} rounded-xl p-4 lg:p-7`}>
                <item.icon className={`mx-auto ${item.color} mb-2 lg:mb-3`} size={20} />
                <h3 className="font-medium text-xs lg:text-base mb-0.5 lg:mb-1">{item.title}</h3>
                <p className="text-text-muted text-[10px] lg:text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
