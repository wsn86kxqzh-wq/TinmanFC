import { Image, Film } from 'lucide-react'
import { galleryItems } from '../data/teamData'
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

export default function Gallery() {
  const { lang } = useLanguage()
  const t = useT()

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-accent text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] font-medium mb-3 sm:mb-4 uppercase">
            Gallery
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl text-white tracking-wide">
            {t.gallery.heroTitle}
          </h1>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="pb-14 sm:pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {galleryItems.map((item, i) => {
              const isFeatured = i === 0
              return (
                <RevealSection
                  key={item.id}
                  className={`${isFeatured ? 'sm:col-span-2 sm:row-span-2' : ''}`}
                  delay={Math.min(i + 1, 4)}
                >
                  <div className="group border border-border overflow-hidden card-lift hover:border-accent/25 h-full">
                    {/* Image placeholder */}
                    <div
                      className={`relative bg-dark-3 flex items-center justify-center overflow-hidden ${
                        isFeatured ? 'min-h-[280px] sm:min-h-[400px]' : 'min-h-[180px] sm:min-h-[220px]'
                      }`}
                    >
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Type badge */}
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex items-center gap-1 sm:gap-1.5 bg-dark/80 backdrop-blur-sm px-2 sm:px-2.5 py-1 sm:py-1.5 text-[10px] sm:text-xs">
                        {item.type === 'video' ? (
                          <>
                            <Film size={12} className="text-accent" />
                            <span className="text-muted-2">{t.gallery.video}</span>
                          </>
                        ) : (
                          <>
                            <Image size={12} className="text-muted-2" />
                            <span className="text-muted-2">{t.gallery.photo}</span>
                          </>
                        )}
                      </div>

                      {/* Date */}
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 text-muted text-[9px] sm:text-[10px] bg-dark/80 backdrop-blur-sm px-1.5 sm:px-2 py-1 tracking-wider">
                        {item.date}
                      </div>

                      {/* Placeholder icon */}
                      <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 border border-border/60 mx-auto mb-2 flex items-center justify-center group-hover:border-accent/20 transition-colors duration-300">
                          {item.type === 'video' ? (
                            <Film size={18} className="text-accent/25" />
                          ) : (
                            <Image size={18} className="text-muted/25" />
                          )}
                        </div>
                        <span className="text-muted/30 text-[10px] sm:text-xs">
                          {isFeatured ? t.gallery.featured : t.gallery.photo}
                        </span>
                      </div>
                    </div>

                    {/* Text area */}
                    <div className="p-4 sm:p-5">
                      <h3
                        className={`font-medium text-white group-hover:text-accent transition-colors duration-300 ${
                          isFeatured ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
                        }`}
                      >
                        {lang === 'zh' ? item.title : item.titleEn}
                      </h3>
                      <p className="text-muted-2 text-xs sm:text-sm mt-1">
                        {lang === 'zh' ? item.description : item.descriptionEn}
                      </p>
                    </div>
                  </div>
                </RevealSection>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
