import styles from '@/ui/actions/redirect.module.scss'
import Link from 'next/link'
import { JSX } from 'react'

export default function RedirectTo({
  label,
  href,
  className,
}: {
  label: string
  href: string
  className: 'banner' | 'button'
}): JSX.Element {
  switch (className) {
    case 'banner':
      return (
        <Link href={href} className={styles.banner}>
          {label}
        </Link>
      )
    case 'button':
      return (
        <Link href={href} className={styles.actionButton}>
          {label}
        </Link>
      )
    default:
      return <Link href={href}>{label}</Link>
  }
}
