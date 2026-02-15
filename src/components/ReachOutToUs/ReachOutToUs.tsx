'use client'

import { JSX, useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Mail, Phone, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import styles from '@/components/ReachOutToUs/ReachOutToUs.module.scss'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_SCHEDULE_LINK,
} from '@/lib/contactDetails'
import { useScreenSize } from '@/providers/ScreenTypeProvider'

type ActionId = 'call' | 'mail'

const actionIcons = {
  call: Phone,
  mail: Mail,
}

export function ReachOutToUsButton(): JSX.Element {
  const t = useTranslations('ContactCTA')
  const router = useRouter()
  const screen = useScreenSize()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const isDesktop = screen === 'desktop'

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const openModal = useCallback((): void => {
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback((): void => {
    setIsModalOpen(false)
  }, [])

  useEffect(() => {
    if (!isModalOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return (): void => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeModal, isModalOpen])

  const dispatchContactForm = useCallback((): void => {
    if (typeof window === 'undefined') {
      return
    }
    window.dispatchEvent(new CustomEvent('urb:open-contact-form'))
  }, [])

  const handleActionClick = useCallback(
    (actionId: ActionId): void => {
      if (actionId === 'mail') {
        closeModal()
        dispatchContactForm()
        return
      }

      closeModal()

      if (isDesktop) {
        router.push(CONTACT_SCHEDULE_LINK)
        return
      }

      if (typeof window !== 'undefined') {
        window.location.assign(CONTACT_PHONE_HREF)
      }
    },
    [closeModal, dispatchContactForm, isDesktop, router]
  )

  const actions = useMemo(
    () => [
      {
        id: 'call' as const,
        aria: t('actions.call.aria', { phone: CONTACT_PHONE_DISPLAY }),
      },
      {
        id: 'mail' as const,
        aria: t('actions.mail.aria', { email: CONTACT_EMAIL }),
      },
    ],
    [t]
  )

  const modal =
    isMounted && isModalOpen
      ? createPortal(
          <div
            className={styles.modalOverlay}
            role="presentation"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closeModal()
              }
            }}
          >
            <div
              className={styles.modalCard}
              role="dialog"
              aria-modal="true"
              aria-labelledby="reach-out-modal-title"
            >
              <button
                type="button"
                className={styles.modalClose}
                onClick={closeModal}
                aria-label={t('form.buttons.close')}
              >
                <X size={18} aria-hidden="true" />
              </button>
              <div className={styles.modalHeader}>
                <p className={styles.modalKicker}>{t('kicker')}</p>
                <h3 id="reach-out-modal-title">
                  <span>{t('title.line1')}</span>
                  <span className={styles.modalHighlight}>
                    {t('title.line2')}
                  </span>
                </h3>
                <p className={styles.modalSummary}>{t('summary')}</p>
              </div>
              <div className={styles.modalActions}>
                {actions.map(({ id, aria }) => {
                  const Icon = actionIcons[id]
                  return (
                    <button
                      key={id}
                      type="button"
                      className={styles.modalAction}
                      aria-label={aria}
                      onClick={() => handleActionClick(id)}
                    >
                      <div className={styles.modalIconWrap}>
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <div className={styles.modalActionCopy}>
                        <span className={styles.modalActionLabel}>
                          {t(`actions.${id}.label`)}
                        </span>
                        <p className={styles.modalActionHelper}>
                          {t(`actions.${id}.helper`)}
                        </p>
                      </div>
                      <span
                        className={styles.modalActionArrow}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>,
          document.body
        )
      : null

  return (
    <>
      <button
        type="button"
        className={styles.button}
        aria-label="Reach out to us"
        onClick={openModal}
      >
        <Phone size={22} aria-hidden="true" />
      </button>
      {modal}
    </>
  )
}
