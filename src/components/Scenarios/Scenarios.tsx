import { useTranslations } from 'next-intl'
import styles from '@/components/Scenarios/Scenarios.module.scss'
import { JSX } from 'react'

const scenarioIds = ['rockyTerrain', 'seasonalUsage', 'retrofit'] as const

export default function Scenarios(): JSX.Element {
  const t = useTranslations('OffersPage')
  const scenarios = scenarioIds.map((id) => ({
    id,
    title: t(`scenarios.list.${id}.title`),
    body: t(`scenarios.list.${id}.body`),
    bullets:
      (t.raw(`scenarios.list.${id}.bullets`) as string[] | undefined) ?? [],
  }))

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t('scenarios.kicker')}</p>
        <h1 className={styles.title}>
          <span>{t('scenarios.title')}</span>
          <span className={styles.summary}>{t('scenarios.summary')}</span>
        </h1>
      </div>
      <div className={styles.list}>
        {scenarios.map((scenario) => (
          <article key={scenario.id} className={styles.scenarioCard}>
            <h3>{scenario.title}</h3>
            <p>{scenario.body}</p>
            <ul>
              {scenario.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
