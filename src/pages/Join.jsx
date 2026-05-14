import { useState } from 'react'
import { Send, Check, Phone, MapPin, Mail } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useT } from '../i18n/useT'
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
  const { lang } = useLanguage()
  const t = useT()
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
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-accent text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] font-medium mb-3 sm:mb-4 uppercase">
            Join Us
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl text-white tracking-wide">
            {t.join.heroTitle}
          </h1>
          <p className="text-muted-2 text-base sm:text-lg mt-4 sm:mt-6 max-w-xl leading-relaxed">
            {t.join.heroDesc}
          </p>
        </div>
      </section>

      {/* Why join */}
      <section className="border-y border-border bg-dark-2">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {t.join.reasons.map((item, i) => (
            <RevealSection
              key={i}
              className={`py-8 sm:py-10 px-4 sm:px-6 ${
                i > 0 ? 'border-l border-border' : ''
              } ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
              delay={i + 1}
            >
              <span className="font-display text-xl sm:text-2xl text-accent/25">
                0{i + 1}
              </span>
              <h3 className="text-white font-bold mt-2 text-sm sm:text-base">{item.title}</h3>
              <p className="text-muted-2 text-xs sm:text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Sign-up form */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <RevealSection>
            <p className="text-accent text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] font-medium mb-2 uppercase">
              Sign Up
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-8 sm:mb-10">
              {t.join.formTitle}
            </h2>
          </RevealSection>

          {submitted ? (
            <div className="border border-accent/25 bg-accent/[0.04] p-8 sm:p-10 text-center animate-scale-in">
              <Check size={40} className="text-accent mx-auto mb-4" />
              <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-2">
                {t.join.success.title}
              </h3>
              <p className="text-muted-2 mb-6 text-sm sm:text-base">
                {t.join.success.desc}
              </p>
              <button
                onClick={handleReset}
                className="text-accent text-sm link-underline"
              >
                {t.join.success.retry}
              </button>
            </div>
          ) : (
            <RevealSection delay={1}>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-muted text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] mb-2 uppercase">
                      {t.join.form.name} *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-2 border border-border px-3 sm:px-4 py-3 sm:py-3.5 text-white text-sm input-glow focus:outline-none focus:border-accent/60 transition-all duration-300 placeholder:text-muted/40"
                      placeholder={t.join.form.placeholders.name}
                    />
                  </div>
                  <div>
                    <label className="block text-muted text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] mb-2 uppercase">
                      {t.join.form.phone} *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-2 border border-border px-3 sm:px-4 py-3 sm:py-3.5 text-white text-sm input-glow focus:outline-none focus:border-accent/60 transition-all duration-300 placeholder:text-muted/40"
                      placeholder={t.join.form.placeholders.phone}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-muted text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] mb-2 uppercase">
                    {t.join.form.position}
                  </label>
                  <select
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    className="w-full bg-dark-2 border border-border px-3 sm:px-4 py-3 sm:py-3.5 text-white text-sm input-glow focus:outline-none focus:border-accent/60 transition-all duration-300 appearance-none"
                  >
                    <option value="">{t.join.form.selectPosition}</option>
                    <option value="GK">{t.join.form.goalkeeper}</option>
                    <option value="DEF">{t.join.form.defender}</option>
                    <option value="MID">{t.join.form.midfielder}</option>
                    <option value="FWD">{t.join.form.forward}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-muted text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] mb-2 uppercase">
                    {t.join.form.experience}
                  </label>
                  <textarea
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-dark-2 border border-border px-3 sm:px-4 py-3 sm:py-3.5 text-white text-sm input-glow focus:outline-none focus:border-accent/60 transition-all duration-300 resize-none placeholder:text-muted/40"
                    placeholder={t.join.form.placeholders.experience}
                  />
                </div>

                <div>
                  <label className="block text-muted text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] mb-2 uppercase">
                    {t.join.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-dark-2 border border-border px-3 sm:px-4 py-3 sm:py-3.5 text-white text-sm input-glow focus:outline-none focus:border-accent/60 transition-all duration-300 resize-none placeholder:text-muted/40"
                    placeholder={t.join.form.placeholders.message}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-glow bg-accent text-dark py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-wider hover:bg-accent-dim transition-colors duration-300 flex items-center justify-center gap-2 mt-3"
                >
                  {t.join.form.submit} <Send size={14} />
                </button>
              </form>
            </RevealSection>
          )}
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 sm:py-20 md:py-28 bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <RevealSection>
            <p className="text-accent text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] font-medium mb-2 uppercase">
              Contact
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-8 sm:mb-10">
              {t.join.contactTitle}
            </h2>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
            {[
              { icon: Phone, label: t.join.contact.phone, value: '138-8888-8888' },
              { icon: MapPin, label: t.join.contact.trainingBase, value: lang === 'zh' ? '成都足球公园' : 'Chengdu Football Park' },
              { icon: Mail, label: t.join.contact.email, value: 'hello@tinmanfc.top' },
            ].map((item, i) => (
              <RevealSection key={i} delay={i + 1}>
                <div className="border border-border p-5 sm:p-6 card-lift hover:border-accent/20 group">
                  <item.icon
                    size={20}
                    className="text-accent/60 mb-3 group-hover:text-accent transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                  <div className="text-muted text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] mb-1.5 uppercase">
                    {item.label}
                  </div>
                  <div className="text-white font-medium text-sm sm:text-base">{item.value}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
