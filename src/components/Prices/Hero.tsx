import Link from "next/link";
import { ArrowUpRight, FileDown, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import styles from "@/components/Prices/Hero.module.scss";

const metricIds = ["packages", "timeline", "savings"] as const;

export default function PricesHero() {
  const t = useTranslations("PricesPage");

  const metrics = metricIds.map((id) => ({
    id,
    value: t(`hero.metrics.${id}.value`),
    label: t(`hero.metrics.${id}.label`),
  }));

  return (
    <header className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.kicker}>{t("hero.kicker")}</p>
        <h1 className={styles.title}>
          <span>{t("hero.title.line1")}</span>
          <span className={styles.accent}>{t("hero.title.line2")}</span>
        </h1>
        <p className={styles.summary}>{t("hero.summary")}</p>
        <p className={styles.note}>{t("hero.note")}</p>
        <div className={styles.actions}>
          <Link href="/contact" className={styles.primaryButton}>
            <span>{t("hero.actions.primary")}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <a href="#calculator" className={styles.secondaryButton}>
            <span>{t("hero.actions.secondary")}</span>
            <FileDown size={18} aria-hidden="true" />
          </a>
        </div>
        <div className={styles.badge}>
          <ShieldCheck size={30} aria-hidden="true" />
          <div>
            <p>{t("hero.badge.title")}</p>
            <strong>{t("hero.badge.body")}</strong>
          </div>
        </div>
      </div>
      <div className={styles.metrics}>
        {metrics.map((metric) => (
          <article key={metric.id} className={styles.metricCard}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </article>
        ))}
      </div>
    </header>
  );
}
