import { useTranslations } from 'next-intl'
import styles from '@/components/Prices/Faq.module.scss'
import { JSX } from 'react'

const faqIds = ['deposit', 'scope', 'changes', 'financing'] as const

export default function PricesFaq(): JSX.Element {
  const t = useTranslations('PricesPage')

  const faqs = faqIds.map((id) => ({
    id,
    question: t(`faq.items.${id}.question`),
    answer: t(`faq.items.${id}.answer`),
  }))

  return (
    <section className={styles.section}>
      <header>
        <p className={styles.kicker}>{t('faq.kicker')}</p>
        <h2>{t('faq.title')}</h2>
      </header>
      <div className={styles.grid}>
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
