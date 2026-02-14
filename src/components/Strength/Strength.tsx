'use client'

import styles from '@/components/Strength/Strength.module.scss'
import { useTranslations } from 'next-intl'
import { JSX, useEffect, useMemo, useRef, useState } from 'react'

const PROJECT_AMOUNT = 250
const TOTAL_LENGTH = 500
const WARRANTY_YEARS = 2

type ScreenType = string

type StatDefinition = {
  id: string
  value: number
  suffix: string
  titleKey: string
  bodyKey: string
  duration?: number
}

export default function Strength({
  screen,
}: {
  screen: ScreenType
}): JSX.Element {
  const t = useTranslations('Strength')
  const sectionRef = useRef<HTMLElement | null>(null)
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false)

  const stats: StatDefinition[] = useMemo(
    () => [
      {
        id: 'projects',
        value: PROJECT_AMOUNT,
        suffix: '+',
        titleKey: 'projects.title',
        bodyKey: 'projects.body',
      },
      {
        id: 'deep',
        value: TOTAL_LENGTH,
        suffix: 'm',
        titleKey: 'deep.title',
        bodyKey: 'deep.body',
      },
      {
        id: 'warranty',
        value: WARRANTY_YEARS,
        suffix: 'yrs',
        titleKey: 'warranty.title',
        bodyKey: 'warranty.body',
      },
    ],
    []
  )

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return (): void => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={styles.main}
      aria-labelledby="strength-heading"
      data-screen={screen}
    >
      <div className={styles.aurora} aria-hidden="true" />
      <div className={styles.gridGlow} aria-hidden="true" />
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.kicker}>{t('subTitle')}</span>
          <h1 className={styles.title}>
            <span id="strength-heading">{t('title')}</span>
            <span className={styles.summary}>{t('summary')}</span>
          </h1>
        </header>
        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              delay={index * 0.12}
              title={t(stat.titleKey)}
              body={t(stat.bodyKey)}
              shouldAnimate={hasEnteredViewport}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

type StatCardProps = {
  stat: StatDefinition
  delay: number
  title: string
  body: string
  shouldAnimate: boolean
}

function StatCard({
  stat,
  delay,
  title,
  body,
  shouldAnimate,
}: StatCardProps): JSX.Element {
  const displayValue = useCountUp(
    stat.value,
    shouldAnimate,
    stat.duration ?? 1400
  )

  return (
    <article className={styles.card} style={{ animationDelay: `${delay}s` }}>
      <div className={styles.statValue}>
        <span>{displayValue.toLocaleString()}</span>
        <span className={styles.suffix}>{stat.suffix}</span>
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}

function useCountUp(
  target: number,
  shouldStart: boolean,
  duration: number
): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let animationFrame: number
    let startTime: number | null = null

    const step = (timestamp: number): void => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setValue(Math.round(progress * target))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)
    return (): void => cancelAnimationFrame(animationFrame)
  }, [shouldStart, target, duration])

  return shouldStart ? value : 0
}
