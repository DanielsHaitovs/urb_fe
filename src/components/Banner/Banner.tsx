'use client'

import Image from 'next/image'
import styles from '@/components/Banner/Banner.module.scss'
import { BannerProps } from '@/types/banner.types'
import { JSX } from 'react'
import Link from 'next/link'

export default function Banner({
  title,
  description,
}: BannerProps): JSX.Element {
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
        <h1 className={styles.title}>{title}</h1>
        <p>{description}</p>
        <div className={styles.actions}>
          <Link
            href={'/contacts'}
            className={styles.action}
            aria-label="Contact us"
          >
            Contact Us
          </Link>
          <Link
            href={'/prices'}
            className={styles.action}
            aria-label="View prices"
          >
            Prices
          </Link>
        </div>
      </div>
    </div>
  )
}
