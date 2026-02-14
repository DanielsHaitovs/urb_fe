import Link from 'next/link'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import styles from '@/components/Service/Install/Hero.module.scss'
import { JSX } from 'react'

const metricIds = ['handoff', 'checks', 'crew'] as const
const galleryIds = ['primary', 'trench', 'panel'] as const

export default function InstallHero(): JSX.Element {
  const t = useTranslations('InstallationPage')

  const galleryCardClasses = [
    styles.galleryCardPrimary,
    styles.galleryCardTrench,
    styles.galleryCardPanel,
  ]

  const metrics = metricIds.map((id) => ({
    id,
    value: t(`metrics.${id}.value`),
    label: t(`metrics.${id}.label`),
  }))

  const gallery = galleryIds.map((id) => ({
    id,
    label: t(`hero.gallery.${id}`),
  }))

  const chips = (t.raw('hero.chips') as string[] | undefined) ?? []

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t('hero.kicker')}</p>
        <h1 className={styles.title}>
          <span>{t('hero.title.line1')}</span>
          <span className={styles.accent}>{t('hero.title.line2')}</span>
        </h1>
        <p className={styles.summary}>{t('hero.summary')}</p>
        <p className={styles.detail}>{t('hero.detail')}</p>
        <div className={styles.actions}>
          <Link href="/contact" className={styles.primaryButton}>
            <span>{t('hero.actions.primary')}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <a href="#systems" className={styles.secondaryButton}>
            <span>{t('hero.actions.secondary')}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className={styles.chips}>
          {chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
        <div className={styles.badge}>
          <ShieldCheck size={30} aria-hidden="true" />
          <div>
            <p>{t('hero.badge.title')}</p>
            <strong>{t('hero.badge.body')}</strong>
          </div>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.gallery}>
          {gallery.map((item, index) => (
            <div
              key={item.id}
              className={galleryCardClasses[index] ?? styles.galleryCard}
            >
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.metrics}>
          {metrics.map((metric) => (
            <article key={metric.id} className={styles.metricCard}>
              <p>{metric.label}</p>
              <strong>{metric.value}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
