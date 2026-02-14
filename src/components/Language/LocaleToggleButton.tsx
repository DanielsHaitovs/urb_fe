'use client'

import { setLocale } from '@/actions/setLocale'
import styles from '@/components/Language/Language.module.scss'
import { defaultLocale, isLocale, locales, type Locale } from '@/i18n/config'
import { ChevronDown } from 'lucide-react'
import { useLocale } from 'next-intl'
import { JSX, useEffect, useRef, useState, useTransition } from 'react'

export function LocaleToggleButton(): JSX.Element {
  const locale = useLocale()
  const activeLocale = isLocale(locale) ? locale : defaultLocale
  const [isPending, startTransition] = useTransition()
  const [isOpen, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return (): void =>
      document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (targetLocale: Locale): void => {
    setOpen(false)
    if (targetLocale === activeLocale) {
      return
    }

    startTransition(async () => {
      await setLocale(targetLocale)
    })
  }

  return (
    <div className={styles.localeToggle} ref={containerRef}>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={() => setOpen((prev) => !prev)}
        disabled={isPending}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={styles.toggleLabel}>{activeLocale.toUpperCase()}</span>
        <ChevronDown
          size={16}
          className={isOpen ? styles.iconOpen : styles.icon}
          aria-hidden="true"
        />
      </button>
      <ul
        role="listbox"
        className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}
        aria-activedescendant={`locale-${activeLocale}`}
      >
        {locales.map((item) => {
          const isActive = item === activeLocale
          return (
            <li key={item}>
              <button
                type="button"
                id={`locale-${item}`}
                role="option"
                aria-selected={isActive}
                className={`${styles.menuItem} ${isActive ? styles.menuItemActive : ''}`}
                onClick={() => handleSelect(item)}
                disabled={isPending && !isActive}
              >
                <span>{item.toUpperCase()}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
