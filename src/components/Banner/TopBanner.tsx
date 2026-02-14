'use client'

import { useTranslations } from 'next-intl'
import styles from '@/components/Banner/TopBanner.module.scss'
import { LucideSparkles, Mail, MapPin } from 'lucide-react'
import type { JSX, MouseEvent } from 'react'
import { useEffect, useRef } from 'react'

export default function TopBanner(): JSX.Element {
  const t = useTranslations('TopBanner')
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const isMobileTablet = (): boolean =>
      window.matchMedia('(max-width: 1024px)').matches

    const ensureClone = (): void => {
      if (!isMobileTablet()) {
        track.classList.remove(styles.hasDuplicate as unknown as string)
        const children = Array.from(track.children)
        if (children.length > 1) {
          for (let i = 1; i < children.length; i++)
            track.removeChild(children[i])
        }
        return
      }
      const firstChild = track.children[0]

      if (track.children.length < 2) {
        const clone = firstChild.cloneNode(true) as HTMLElement
        clone.setAttribute('aria-hidden', 'true')
        track.appendChild(clone)
      }
      // Flag to enable animation when duplicate exists
      track.classList.add(styles.hasDuplicate as unknown as string)
    }

    ensureClone()
    const ro = new ResizeObserver(() => ensureClone())
    ro.observe(document.body)
    const mq = window.matchMedia('(max-width: 1024px)')
    const mqListener = (): void => ensureClone()
    mq.addEventListener('change', mqListener)

    return (): void => {
      ro.disconnect()
      mq.removeEventListener('change', mqListener)
    }
  }, [])

  const handleEmailClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    if (typeof window === 'undefined') {
      return
    }

    const hasContactForm = Boolean(document.querySelector('[data-contact-cta]'))
    if (!hasContactForm) {
      return
    }

    event.preventDefault()
    window.dispatchEvent(new CustomEvent('urb:open-contact-form'))
  }

  return (
    <div className={styles.topBanner}>
      <div className={styles.staticRow}>
        <div className={styles.wrapper}>
          <LucideSparkles />
          <p className={styles.title}>{t('title')}</p>
        </div>
        <div className={styles.wrapper}>
          <MapPin />
          <p className={styles.address}>{t('address')}</p>
        </div>
        <a
          href="mailto:info@urb.lv"
          className={styles.wrapper}
          aria-label="Email info@urb.lv"
          onClick={handleEmailClick}
        >
          <Mail />
          <span>info@urb.lv</span>
        </a>
      </div>

      {/* Mobile/Tablet running line */}
      <div className={styles.runningRow} aria-hidden={false}>
        <div className={styles.marquee}>
          <div ref={trackRef} className={styles.marqueeTrack}>
            <div className={styles.marqueeContent}>
              <span className={styles.item}>
                <LucideSparkles />
                <span className={styles.title}>{t('title')}</span>
              </span>
              <span className={styles.separator}>•</span>
              <span className={styles.item}>
                <MapPin />
                <span className={styles.address}>{t('address')}</span>
              </span>
              <span className={styles.separator}>•</span>
              <a
                href="mailto:info@urb.lv"
                className={styles.item}
                aria-label="Email info@urb.lv"
                onClick={handleEmailClick}
              >
                <Mail />
                <span>info@urb.lv</span>
              </a>
              <span className={styles.separator}>•</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
