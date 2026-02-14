import type { JSX, ReactNode } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { useTranslations } from 'next-intl'
import AboutTestimonials from '@/components/About/Testimonials'

export default function HomePageLayout({
  children,
}: Readonly<{
  children: ReactNode
}>): JSX.Element {
  const t = useTranslations('Banner')
  const title = t('title')

  const actions = [
    { label: t('strength'), href: '#strength' },
    { label: t('cleanWater'), href: '#clean-water' },
    { label: t('contact'), href: '#contact' },
    { label: t('offers'), href: '#solutions' },
  ]

  return (
    <>
      <Header banner={true} actions={actions} bannerTitle={title} />
      {children}
      <AboutTestimonials />
      <Footer />
    </>
  )
}
