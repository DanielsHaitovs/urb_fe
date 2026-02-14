import Link from 'next/link'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import styles from '@/components/Service/Maintanence/Hero.module.scss'
import { JSX } from 'react'

const metricIds = ['uptime', 'response', 'wells'] as const

export default function MaintanenceHero(): JSX.Element {
  const t = useTranslations('MaintenancePage')

  const metrics = metricIds.map((id) => ({
    id,
    value: t(`metrics.${id}.value`),
    label: t(`metrics.${id}.label`),
  }))

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t('hero.kicker')}</p>
        <h1 className={styles.title}>
          <span>{t('hero.title.line1')}</span>
          <span className={styles.accent}>{t('hero.title.line2')}</span>
        </h1>
        <p className={styles.summary}>{t('hero.summary')}</p>
        <p className={styles.note}>{t('hero.detail')}</p>
        <div className={styles.heroActions}>
          <Link href="/contact" className={styles.primaryButton}>
            <span>{t('hero.actions.primary')}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <div className={styles.heroBadge}>
            <ShieldCheck size={32} aria-hidden="true" />
            <div>
              <p>{t('hero.badge.title')}</p>
              <strong>{t('hero.badge.body')}</strong>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.metrics}>
        {metrics.map((metric) => (
          <div key={metric.id} className={styles.metricCard}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
