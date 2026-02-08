"use client";

import { useTranslations } from "next-intl";
import styles from "@/components/About/Capabilities.module.scss";

type Capability = {
  title: string;
  body: string;
  bullets: string[];
};

export default function AboutCapabilities() {
  const t = useTranslations("AboutPage.capabilities");
  const cards = t.raw("cards") as Capability[];

  return (
    <section className={styles.section}>
      <p className={styles.kicker}>{t("kicker")}</p>
      <div className={styles.header}>
        <h2>{t("title")}</h2>
        <p>{t("summary")}</p>
      </div>
      <div className={styles.grid}>
        {cards.map((card) => (
          <article key={card.title} className={styles.card}>
            <div className={styles.cardGlow} aria-hidden="true" />
            <h3>{card.title}</h3>
            <p>{card.body}</p>
            <ul>
              {card.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
