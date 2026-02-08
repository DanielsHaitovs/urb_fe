"use client";

import { useTranslations } from "next-intl";
import styles from "@/components/About/Testimonials.module.scss";

type Testimonial = {
  name: string;
  location: string;
  quote: string;
  tag: string;
};

export default function AboutTestimonials() {
  const t = useTranslations("AboutPage.testimonials");
  const testimonials = t.raw("items") as Testimonial[];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.kicker}>{t("kicker")}</p>
        <div>
          <h2>{t("title")}</h2>
          <p>{t("summary")}</p>
        </div>
      </div>
      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <article key={`${testimonial.name}-${testimonial.location}`} className={styles.card}>
            <p className={styles.quote}>“{testimonial.quote}”</p>
            <div className={styles.meta}>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.location}</span>
              </div>
              <span className={styles.tag}>{testimonial.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
