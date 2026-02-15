'use client'

import Image from 'next/image'
import styles from '@/components/Banner/Banner.module.scss'
import { BannerProps } from '@/types/banner.types'
import { JSX } from 'react'
import InfoActions from './Actions/InfoActions'

export default function Banner({
  title,
  description,
  actions,
}: BannerProps): JSX.Element {
  return (
    <div className={styles.main} aria-label="Hero banner">
      <Image
        src="/banner/banner.png"
        alt="Urb Logo"
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />
      <div className={styles.content}>
        <div className={styles.hero}>
          <p>{description}</p>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <InfoActions actions={actions} />
      </div>
    </div>
  )
}
