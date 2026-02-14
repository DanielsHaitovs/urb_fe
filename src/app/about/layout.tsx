import type { JSX, ReactNode } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import AboutTestimonials from '@/components/About/Testimonials'
import { useTranslations } from 'next-intl'

export default function AboutLayout({
  children,
}: Readonly<{
  children: ReactNode
}>): JSX.Element {
  const aboutT = useTranslations('AboutPage')
  const offersT = useTranslations('OffersPage')

  const bannerTitle = aboutT('bannerTitle')
  const actions = [
    { label: offersT('services.drilling.title'), href: '/offers/drilling' },
    {
      label: offersT('services.maintenance.title'),
      href: '/offers/maintenance',
    },
    {
      label: offersT('services.installation.title'),
      href: '/offers/installation',
    },
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
