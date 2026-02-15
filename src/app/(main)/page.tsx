'use client'

import styles from '@/app/(main)/HomePage.module.scss'
import CleanWater from '@/components/Clean/Clean'
import DailySolutions from '@/components/Solutions/Solutions'
import ContactCTA from '@/components/ContactCTA/ContactCTA'
import Strength from '@/components/Strength/Strength'
import { ScrollTopButton } from '@/components/ScrollTopButton/ScrollTopButton'
import { useScreenSize } from '@/providers/ScreenTypeProvider'
import WorkflowShowcase from '@/components/WorkflowShowcase/WorkflowShowcase'
import { JSX } from 'react'
import { ReachOutToUsButton } from '@/components/ReachOutToUs/ReachOutToUs'

export default function Home(): JSX.Element {
  const screen = useScreenSize()

  return (
    <main className={styles.page}>
      <section id="strength" className={styles.section}>
        <Strength screen={screen} />
        <WorkflowShowcase />
      </section>
      <section id="solutions" className={styles.section}>
        <DailySolutions screen={screen} />
      </section>
      <section id="clean-water" className={styles.section}>
        <CleanWater screen={screen} />
      </section>
      <section id="contact" className={styles.section}>
        <ContactCTA screen={screen} />
      </section>
      <ReachOutToUsButton />
      <ScrollTopButton />
    </main>
  )
}
