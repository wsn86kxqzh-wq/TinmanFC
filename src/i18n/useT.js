import { useLanguage } from './LanguageContext'
import zh from './zh'
import en from './en'

const translations = { zh, en }

export function useT() {
  const { lang } = useLanguage()
  const t = translations[lang]
  return t
}
