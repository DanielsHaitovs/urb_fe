'use client'

import styles from '@/components/Banner/Actions/InfoActions.module.scss'
import Link from 'next/link'
import { JSX } from 'react'

export default function InfoActions({
  actions,
}: {
  actions: { label: string; href: string }[]
}): JSX.Element {
  return (
    <div className={styles.actions} aria-label="Quick actions">
      {actions.map((action) => (
        <div className={styles.action} key={action.href}>
          <Link href={action.href} className={styles.link}>
            {action.label}
          </Link>
        </div>
      ))}
    </div>
  )
}
