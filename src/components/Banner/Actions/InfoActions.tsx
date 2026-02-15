'use client'

import styles from '@/components/Banner/Actions/InfoActions.module.scss'
import { HeaderActions } from '@/types/banner.types'
import Link from 'next/link'
import { JSX } from 'react'

export default function InfoActions({
  actions,
}: {
  actions?: HeaderActions[]
}): JSX.Element {
  if (!actions || actions.length === 0) {
    return <></>
  }

  return (
    <div className={styles.actions} aria-label="Quick actions">
      {actions.map((action) => (
        <Link key={action.label} href={action.href} className={styles.action}>
          {action.label}
        </Link>
      ))}
    </div>
  )
}
