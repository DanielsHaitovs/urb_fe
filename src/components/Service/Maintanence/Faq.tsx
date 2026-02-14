import { useTranslations } from 'next-intl'
import styles from '@/components/Service/Maintanence/Faq.module.scss'
import { JSX } from 'react'

const faqIds = [
  'eligibility',
  'timeline',
  'lab',
  'contract',
  'downtime',
] as const

export default function MaintanenceFaq(): JSX.Element {
  const t = useTranslations('MaintenancePage')

  const faqs = faqIds.map((id) => ({
    id,
    question: t(`faq.items.${id}.question`),
    answer: t(`faq.items.${id}.answer`),
  }))

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t('faq.kicker')}</p>
        <h1 className={styles.title}>
          <span>{t('faq.title')}</span>
        </h1>
      </div>
      <div className={styles.list}>
        {faqs.map((faq) => (
          <article key={faq.id} className={styles.card}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
