import type { JSX, ReactNode } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import AboutTestimonials from '@/components/About/Testimonials'
import { useTranslations } from 'next-intl'

export default function OffersLayout({
  children,
}: Readonly<{
  children: ReactNode
}>): JSX.Element {
  const t = useTranslations('OffersPage')
  const bannerTitle = t('bannerTitle')
  const actions = [
    { label: t('services.drilling.title'), href: '/offers/drilling' },
    { label: t('services.maintenance.title'), href: '/offers/maintenance' },
    { label: t('services.installation.title'), href: '/offers/installation' },
  ]

  return (
    <>
      <Header banner={true} bannerTitle={bannerTitle} actions={actions} />
      {children}
      <AboutTestimonials />
      <Footer />
    </>
  )
}
