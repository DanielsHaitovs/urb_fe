'use client'

import Banner from '@/components/Banner/Banner'
import { Menu } from '@/components/Menu/Menu'
import styles from '@/components/Header/Header.module.scss'
import TopBanner from '@/components/Banner/TopBanner'
import { useScreenSize } from '@/providers/ScreenTypeProvider'
import { JSX } from 'react'
import { HeaderProps } from '@/types/header.types'

export default function Header({
  banner = false,
  bannerTitle,
  description,
  actions,
}: HeaderProps): JSX.Element {
  const screen = useScreenSize()

  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
        <TopBanner />
        <Menu screen={screen} />
      </div>
      {banner && (
        <Banner
          title={bannerTitle}
          actions={actions}
          description={description}
        />
      )}
    </header>
  )
}
