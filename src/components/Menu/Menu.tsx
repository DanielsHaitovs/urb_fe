'use client'

import Link from 'next/link'
import { JSX, useState } from 'react'
import styles from '@/components/Menu/Menu.module.scss'
import Image from 'next/image'
import { ScreenType } from '@/types/deviceType'
import { MenuIcon } from 'lucide-react'
import { MenuItems } from '@/components/Menu/MenuItems'
import { LocaleToggleButton } from '@/components/Language/LocaleToggleButton'

export function Menu({ screen }: { screen: ScreenType }): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <nav className={styles.menu} aria-label="Primary">
      {screen === 'desktop' ? (
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link href="/">
              <Image
                src={'/logo.png'}
                className={styles.logo}
                alt="URB"
                width={60}
                height={60}
              />
            </Link>
          </div>
          <MenuItems screen={screen} isOpen={false} setOpen={setOpen} />
          <div className={styles.language}>
            <LocaleToggleButton />
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          <MenuItems screen={screen} isOpen={isOpen} setOpen={setOpen} />
          <div className={styles.hamburger} onClick={() => setOpen(true)}>
            <MenuIcon size={24} />
          </div>
          <div className={styles.brand}>
            <Link href="/">
              <Image
                src={'/logo.png'}
                className={styles.logo}
                alt="URB"
                width={60}
                height={60}
              />
            </Link>
          </div>
          <div className={styles.language}>
            <LocaleToggleButton />
          </div>
        </div>
      )}
    </nav>
  )
}
