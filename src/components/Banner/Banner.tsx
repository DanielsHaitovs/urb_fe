'use client'

import Image from 'next/image'
import styles from '@/components/Banner/Banner.module.scss'
import InfoActions from '@/components/Banner/Actions/InfoActions'
import { BannerProps } from '@/types/banner.types'
import { JSX } from 'react'

export default function Banner({ title, actions }: BannerProps): JSX.Element {
  return (
    <div className={styles.banner} aria-label="Hero banner">
      <Image
        src="/banner/banner.png"
        alt="Urb Logo"
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />
      <div className={styles.bannerContent}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {actions?.length && <InfoActions actions={actions} />}
        </div>
      </div>
    </div>
  )
}
