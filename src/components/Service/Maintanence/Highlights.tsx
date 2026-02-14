import { Droplets, Gauge, HeartPulse, ShieldCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import styles from '@/components/Service/Maintanence/Highlights.module.scss'
import { JSX } from 'react'

const featureIds = ['flush', 'diagnostics', 'water', 'seasonal'] as const
const icons = [
  <Droplets key="droplets" size={20} />,
  <Gauge key="gauge" size={20} />,
  <HeartPulse key="pulse" size={20} />,
  <ShieldCheck key="shield" size={20} />,
]

export default function MaintanenceHighlights(): JSX.Element {
  const t = useTranslations('MaintenancePage')

  const features = featureIds.map((id) => ({
    id,
    title: t(`features.${id}.title`),
    body: t(`features.${id}.body`),
    bullets: (t.raw(`features.${id}.bullets`) as string[] | undefined) ?? [],
  }))

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t('features.kicker')}</p>
        <h1 className={styles.title}>
          <span>{t('features.title')}</span>
          <span className={styles.summary}>{t('features.summary')}</span>
        </h1>
      </div>
      <div className={styles.list}>
        {features.map((feature, index) => (
          <article key={feature.id} className={styles.card}>
            <div className={styles.icon}>{icons[index % icons.length]}</div>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
            <ul>
              {feature.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
