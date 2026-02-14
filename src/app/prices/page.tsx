'use client'

import styles from '@/app/prices/PricesPage.module.scss'
import { ScrollTopButton } from '@/components/ScrollTopButton/ScrollTopButton'
import PricesCalculator from '@/components/Prices/Calculator'
import PricesHero from '@/components/Prices/Hero'
import ContactCTA from '@/components/ContactCTA/ContactCTA'
import { useScreenSize } from '@/providers/ScreenTypeProvider'
import { JSX } from 'react'

export default function PricesPage(): JSX.Element {
  const screen = useScreenSize()

  return (
    <main className={styles.page}>
      <PricesHero />
      <PricesCalculator />
      <ContactCTA screen={screen} />
      <ScrollTopButton />
    </main>
  )
}
