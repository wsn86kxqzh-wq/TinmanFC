import { teamInfo } from '../data/teamData'
import { Mail, MessageCircle, UserPlus, MapPin, Calendar, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Join() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', position: '', experience: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24 lg:pt-28">
      {/* Header */}
      <section className="pb-10 sm:pb-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,136,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="max-w-4xl mx-auto text-center px-5 sm:px-4 lg:px-8 relative z-10">
          <span className="inline-block text-primary font-display text-xs sm:text-sm lg:text-base tracking-widest mb-3 sm:mb-4 lg:mb-5">JOIN US</span>
          <h1 className="font-display font-900 text-3xl sm:text-5xl lg:text-7xl mb-3 sm:mb-4 lg:mb-6">
            加入<span className="text-primary">铁人</span>
          </h1>
          <p className="text-text-muted text-base sm:text-lg lg:text-xl">无论你是老将还是新手，TinmanFC 都有你的位置</p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-8 sm:py-12 lg:py-16 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">为什么加入 TinmanFC？</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {[
              { icon: Calendar, title: '固定训练', desc: '每周三晚固定训练，教练带队，系统提升' },
              { icon: MapPin, title: '正规比赛', desc: '参加成都业余联赛，体验正式比赛氛围' },
              { icon: UserPlus, title: '兄弟氛围', desc: '球队不只是踢球，更是志同道合的兄弟' },
              { icon: CheckCircle, title: '零门槛', desc: '不要求水平，只要求热爱和态度' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-card border border-border-subtle rounded-lg p-3 sm:p-5 lg:p-7 text-center card-hover">
                <item.icon className="mx-auto text-primary mb-2 sm:mb-3 lg:mb-4" size={20} />
                <h3 className="font-display font-medium text-xs sm:text-base lg:text-lg mb-0.5 sm:mb-1 lg:mb-2">{item.title}</h3>
                <p className="text-text-muted text-[10px] sm:text-sm lg:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-2xl mx-auto px-4">
          {!submitted ? (
            <div className="bg-bg-card border border-border-subtle rounded-lg p-5 sm:p-8 lg:p-10">
              <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8 flex items-center gap-2 lg:gap-3">
                <Mail className="text-primary" size={18} />
                填写信息，联系我们
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base text-text-muted mb-1 sm:mb-1.5 lg:mb-2">你的名字 *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-bg-dark border border-border-subtle rounded px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 lg:py-3.5 text-text-main text-sm lg:text-base focus:outline-none focus:border-primary transition-colors"
                    placeholder="输入你的名字或昵称"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base text-text-muted mb-1 sm:mb-1.5 lg:mb-2">联系方式 *</label>
                  <input
                    type="text"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-bg-dark border border-border-subtle rounded px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 lg:py-3.5 text-text-main text-sm lg:text-base focus:outline-none focus:border-primary transition-colors"
                    placeholder="手机号 / 微信号"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base text-text-muted mb-1 sm:mb-1.5 lg:mb-2">擅长位置</label>
                  <select
                    value={form.position}
                    onChange={(e) => setForm({ ...form, position: e.target.value })}
                    className="w-full bg-bg-dark border border-border-subtle rounded px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 lg:py-3.5 text-text-main text-sm lg:text-base focus:outline-none focus:border-primary transition-colors"
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
                  <label className="block text-xs sm:text-sm lg:text-base text-text-muted mb-1 sm:mb-1.5 lg:mb-2">足球经历</label>
                  <textarea
                    rows={3}
                    value={form.experience}
                    onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    className="w-full bg-bg-dark border border-border-subtle rounded px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 lg:py-3.5 text-text-main text-sm lg:text-base focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="简单说说你的足球经历，比如踢了多久、之前在哪里踢球等"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base text-text-muted mb-1 sm:mb-1.5 lg:mb-2">想说的话</label>
                  <textarea
                    rows={2}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-bg-dark border border-border-subtle rounded px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 lg:py-3.5 text-text-main text-sm lg:text-base focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="对球队有什么想说的？"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 lg:py-5 bg-primary text-bg-dark font-bold text-base sm:text-lg lg:text-xl rounded hover:bg-primary-dark transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]"
                >
                  提交申请
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-bg-card border border-primary/30 rounded-lg p-6 sm:p-8 lg:p-10 text-center glow-border">
              <CheckCircle className="mx-auto text-primary mb-3 sm:mb-4 lg:mb-5" size={40} />
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4">申请已提交！</h2>
              <p className="text-text-muted text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8">
                感谢你的加入意向！我们会尽快通过你留的联系方式和你取得联系。<br />
                期待在球场上见到你！
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', position: '', experience: '', message: '' }) }}
                className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 border border-primary/30 text-primary font-medium rounded hover:bg-primary/10 transition-all text-sm sm:text-base lg:text-lg"
              >
                继续填写
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 sm:py-12 lg:py-16 bg-bg-surface border-t border-border-subtle">
        <div className="max-w-4xl mx-auto text-center px-4 lg:px-6">
          <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8">其他联系方式</h2>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
            <div className="bg-bg-card border border-border-subtle rounded-lg p-3 sm:p-5 lg:p-7">
              <MessageCircle className="mx-auto text-primary mb-1.5 sm:mb-2 lg:mb-3" size={20} />
              <h3 className="font-medium text-xs sm:text-base lg:text-lg mb-0.5 sm:mb-1 lg:mb-2">微信群</h3>
              <p className="text-text-muted text-[10px] sm:text-sm lg:text-base">联系队长拉你进群</p>
            </div>
            <div className="bg-bg-card border border-border-subtle rounded-lg p-3 sm:p-5 lg:p-7">
              <MapPin className="mx-auto text-accent-blue mb-1.5 sm:mb-2 lg:mb-3" size={20} />
              <h3 className="font-medium text-xs sm:text-base lg:text-lg mb-0.5 sm:mb-1 lg:mb-2">训练地点</h3>
              <p className="text-text-muted text-[10px] sm:text-sm lg:text-base">成都足球公园</p>
            </div>
            <div className="bg-bg-card border border-border-subtle rounded-lg p-3 sm:p-5 lg:p-7">
              <Calendar className="mx-auto text-accent-gold mb-1.5 sm:mb-2 lg:mb-3" size={20} />
              <h3 className="font-medium text-xs sm:text-base lg:text-lg mb-0.5 sm:mb-1 lg:mb-2">训练时间</h3>
              <p className="text-text-muted text-[10px] sm:text-sm lg:text-base">每周三 20:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
