'use client'

import { useTranslations } from 'next-intl'
import styles from '@/components/About/Capabilities.module.scss'
import { JSX } from 'react'

type Capability = {
  title: string
  body: string
  bullets: string[]
}

export default function AboutCapabilities(): JSX.Element {
  const t = useTranslations('AboutPage.capabilities')
  const cards = t.raw('cards') as Capability[]

  return (
    <section className={styles.main}>
      <p className={styles.kicker}>{t('kicker')}</p>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>{t('title')}</span>
          <span className={styles.summary}>{t('summary')}</span>
        </h1>
        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <div className={styles.cardGlow} aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <ul>
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
