import styles from '@/components/Service/Install/Playbook.module.scss'
import { useTranslations } from 'next-intl'
import { JSX } from 'react'

const stepIds = [
  'intake',
  'utility',
  'piping',
  'commission',
  'handoff',
] as const

export default function InstallPlaybook(): JSX.Element {
  const t = useTranslations('InstallationPage')

  const steps = stepIds.map((id, index) => ({
    id,
    index: index + 1,
    title: t(`playbook.steps.${id}.title`),
    body: t(`playbook.steps.${id}.body`),
  }))

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t('playbook.kicker')}</p>
        <h1 className={styles.title}>
          <span>{t('playbook.title')}</span>
          <span className={styles.summary}>{t('playbook.summary')}</span>
        </h1>
      </div>
      <div className={styles.timeline}>
        {steps.map((step) => (
          <article key={step.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span>{step.index.toString().padStart(2, '0')}</span>
              <h3>{step.title}</h3>
            </div>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
