import { Link } from 'react-router-dom'
import { teamInfo } from '../data/teamData'
import { useLanguage } from '../i18n/LanguageContext'
import { useT } from '../i18n/useT'

export default function Footer() {
  const { lang } = useLanguage()
  const t = useT()

  const footerLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/matches', label: t.nav.matches },
    { path: '/roster', label: t.nav.roster },
    { path: '/gallery', label: t.nav.gallery },
    { path: '/join', label: t.nav.join },
  ]

  return (
    <footer className="border-t border-border bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center font-display text-dark text-lg font-bold">
                T
              </div>
              <span className="font-display text-xl tracking-[0.15em] text-white">
                TINMAN<span className="text-accent">FC</span>
              </span>
            </div>
            <p className="text-muted-2 text-sm leading-relaxed">
              {lang === 'zh' ? teamInfo.slogan : teamInfo.sloganEn}
            </p>
            <p className="text-muted/40 text-xs mt-4 tracking-wider">
              {lang === 'zh' ? teamInfo.city : teamInfo.cityEn} · Est. {teamInfo.founded}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-xs font-medium tracking-[0.3em] mb-5 uppercase">
              {t.footer.navigation}
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-2 text-sm link-underline hover:text-accent transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-white text-xs font-medium tracking-[0.3em] mb-5 uppercase">
              {t.footer.contact}
            </h4>
            <div className="space-y-3 text-muted-2 text-sm">
              <p>{teamInfo.nameCn}</p>
              <p>{lang === 'zh' ? '成都足球公园' : 'Chengdu Football Park'}</p>
              <a
                href="mailto:hello@tinmanfc.top"
                className="text-muted-2 hover:text-accent transition-colors duration-300 link-underline w-fit block"
              >
                hello@tinmanfc.top
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted/60 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} TinmanFC
          </p>
          <p className="text-muted/30 text-xs tracking-widest uppercase">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
