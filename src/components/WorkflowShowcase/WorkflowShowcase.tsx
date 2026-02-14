import type { LucideIcon } from 'lucide-react'
import styles from '@/components/WorkflowShowcase/WorkflowShowcase.module.scss'
import { BadgeCheck, Building2, DraftingCompass, Hammer } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { JSX } from 'react'

const workflowStepIds = [
  'consultation',
  'planning',
  'drilling',
  'quality',
] as const

const workflowIcons: Record<(typeof workflowStepIds)[number], LucideIcon> = {
  consultation: Building2,
  planning: DraftingCompass,
  drilling: Hammer,
  quality: BadgeCheck,
}

export default function WorkflowShowcase(): JSX.Element {
  const t = useTranslations('OffersPage')

  const workflow = {
    kicker: t('workflow.kicker'),
    title: t('workflow.title'),
    subtitle: t('workflow.subtitle'),
    summary: t('workflow.summary'),
    steps: workflowStepIds.map((id) => ({
      id,
      title: t(`workflow.steps.${id}.title`),
      description: t(`workflow.steps.${id}.description`),
      icon: workflowIcons[id],
    })),
  }

  const { kicker, title, subtitle, summary: description, steps } = workflow

  return (
    <section className={styles.main} aria-label={title}>
      <div className={styles.content}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.title}>{title}</h2>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        {description ? <p className={styles.summary}>{description}</p> : null}
      </div>

      <div className={styles.stepGrid}>
        {steps.map((step, index) => {
          const Icon = step.icon
          const order = String(index + 1).padStart(2, '0')

          return (
            <article key={step.id} className={styles.stepCard}>
              <div className={styles.stepBadge} aria-hidden="true">
                <span className={styles.stepNumber}>{order}</span>
                <span className={styles.iconRing}>
                  <Icon size={34} strokeWidth={1.6} aria-hidden="true" />
                </span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
