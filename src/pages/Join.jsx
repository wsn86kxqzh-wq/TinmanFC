import { teamInfo } from '../data/teamData'
import { Mail, MessageCircle, UserPlus, MapPin, Calendar, CheckCircle, Send } from 'lucide-react'
import { useState } from 'react'

export default function Join() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', position: '', experience: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputCls = 'w-full bg-bg border border-border rounded-md px-4 py-3 text-text text-sm focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_1px_rgba(0,255,136,0.15)] transition-all placeholder:text-text-dim'

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[800px] mx-auto text-center px-6">
          <span className="text-primary font-display text-[11px] tracking-[0.3em]">JOIN US</span>
          <h1 className="font-display font-black text-4xl lg:text-7xl mt-3 mb-4">
            加入<span className="text-primary">铁人</span>
          </h1>
          <p className="text-text-secondary text-sm lg:text-lg">无论你是老将还是新手，TinmanFC 都有你的位置</p>
        </div>
      </section>

      {/* ===== 优势 ===== */}
      <section className="border-y border-border bg-bg-card">
        <div className="max-w-[800px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Calendar, title: '固定训练', desc: '教练带队系统提升', color: 'text-primary' },
            { icon: MapPin, title: '正规比赛', desc: '参加成都业余联赛', color: 'text-blue' },
            { icon: UserPlus, title: '兄弟氛围', desc: '志同道合的战友', color: 'text-gold' },
            { icon: CheckCircle, title: '零门槛', desc: '只要热爱和态度', color: 'text-red' },
          ].map((item, i) => (
            <div key={i} className="py-6 lg:py-8 text-center border-border last:border-r-0 lg:border-r px-3">
              <item.icon className={`mx-auto ${item.color} mb-2`} size={20} />
              <div className="font-medium text-xs lg:text-sm mb-0.5">{item.title}</div>
              <div className="text-text-dim text-[10px] lg:text-xs">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 表单 ===== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[520px] mx-auto px-6">
          {!submitted ? (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                  <Mail className="text-primary" size={16} />
                </div>
                <div>
                  <h2 className="font-display font-bold text-base lg:text-lg">联系我们</h2>
                  <p className="text-text-dim text-[11px]">填写后球队负责人会尽快联系你</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-text-dim text-[11px] mb-1">名字 *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inputCls} placeholder="你的名字" />
                  </div>
                  <div>
                    <label className="block text-text-dim text-[11px] mb-1">联系方式 *</label>
                    <input type="text" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={inputCls} placeholder="手机号 / 微信" />
                  </div>
                </div>

                <div>
                  <label className="block text-text-dim text-[11px] mb-1">擅长位置</label>
                  <select value={form.position} onChange={e => setForm({...form, position: e.target.value})} className={inputCls}>
                    <option value="">选择位置（可跳过）</option>
                    <option value="GK">门将</option>
                    <option value="DEF">后卫</option>
                    <option value="MID">中场</option>
                    <option value="FWD">前锋</option>
                    <option value="ANY">哪里需要去哪</option>
                  </select>
                </div>

                <div>
                  <label className="block text-text-dim text-[11px] mb-1">足球经历</label>
                  <textarea rows={3} value={form.experience} onChange={e => setForm({...form, experience: e.target.value})} className={`${inputCls} resize-none`} placeholder="简单说说你的经历" />
                </div>

                <div>
                  <label className="block text-text-dim text-[11px] mb-1">想说的话</label>
                  <textarea rows={2} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className={`${inputCls} resize-none`} placeholder="有什么想说的？" />
                </div>

                <button type="submit" className="w-full py-3.5 bg-primary text-bg font-bold text-sm rounded-md hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  <Send size={16} />
                  提交申请
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="w-14 h-14 bg-primary/10 rounded-xl mx-auto flex items-center justify-center mb-4">
                <CheckCircle className="text-primary" size={28} />
              </div>
              <h2 className="font-display font-bold text-xl mb-2">申请已提交！</h2>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                感谢你的加入意向！我们会尽快联系你。<br />期待在球场上见到你！
              </p>
              <button onClick={() => { setSubmitted(false); setForm({name:'',phone:'',position:'',experience:'',message:''}) }} className="px-5 py-2 border border-primary/20 text-primary text-sm rounded-md hover:bg-primary/[0.05] transition-all">
                继续填写
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== 联系方式 ===== */}
      <section className="border-t border-border bg-bg-card">
        <div className="max-w-[600px] mx-auto py-10 lg:py-14 px-6">
          <h2 className="font-display font-bold text-sm lg:text-base mb-5 text-center">其他联系方式</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: MessageCircle, title: '微信群', desc: '联系队长进群', color: 'text-primary' },
              { icon: MapPin, title: '训练地点', desc: '成都足球公园', color: 'text-blue' },
              { icon: Calendar, title: '训练时间', desc: '每周三 20:00', color: 'text-gold' },
            ].map((item, i) => (
              <div key={i} className="text-center py-4">
                <item.icon className={`mx-auto ${item.color} mb-1.5`} size={18} />
                <div className="font-medium text-xs">{item.title}</div>
                <div className="text-text-dim text-[10px]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
