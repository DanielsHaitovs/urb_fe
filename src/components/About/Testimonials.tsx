'use client'

import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import styles from '@/components/About/Testimonials.module.scss'
import { JSX } from 'react'

type Testimonial = {
  name: string
  location: string
  quote: string
  tag: string
}

export default function AboutTestimonials(): JSX.Element {
  const t = useTranslations('AboutPage.testimonials')
  const testimonials = t.raw('items') as Testimonial[]

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t('kicker')}</p>
        <div className={styles.title}>
          <span>{t('title')}</span>
          <span className={styles.summary}>{t('summary')}</span>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        speed={600}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.25,
          },
        }}
        className={styles.slider}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={`${testimonial.name}-${testimonial.location}`}>
            <article className={styles.card}>
              <p className={styles.quote}>“{testimonial.quote}”</p>
              <div className={styles.meta}>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
                <span className={styles.tag}>{testimonial.tag}</span>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
