"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "@/components/About/Hero.module.scss";

const statKeys = ["projects", "crews", "uptime"] as const;

type HeroStat = {
  value: string;
  label: string;
  helper: string;
};

export default function AboutHero() {
  const t = useTranslations("AboutPage.hero");
  const stats = statKeys.map((key) => t.raw(`stats.${key}`) as HeroStat);

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t("kicker")}</p>
        <h1 className={styles.title}>
          <span>{t("title.line1")}</span>
          <span className={styles.accent}>{t("title.line2")}</span>
        </h1>
        <p className={styles.summary}>{t("summary")}</p>
        <p className={styles.detail}>{t("detail")}</p>
        <div className={styles.actions}>
          <Link href="/contact" className={styles.primary}>
            {t("actions.primary")}
          </Link>
          <Link href="/offers" className={styles.secondary}>
            {t("actions.secondary")}
          </Link>
        </div>
      </div>
      <div className={styles.stats}>
        {stats.map((stat) => (
          <article key={stat.label} className={styles.statCard}>
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.label}>{stat.label}</p>
            <p className={styles.helper}>{stat.helper}</p>
          </article>
        ))}
        <div className={styles.ring} aria-hidden="true" />
      </div>
    </section>
  );
}
