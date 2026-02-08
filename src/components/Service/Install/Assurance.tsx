import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import styles from "@/components/Service/Install/Assurance.module.scss";

const pillarIds = ["monitoring", "quality", "support"] as const;
const statIds = ["warranty", "response", "inspections"] as const;

export default function InstallAssurance() {
  const t = useTranslations("InstallationPage");

  const pillars = pillarIds.map((id) => ({
    id,
    title: t(`assurance.pillars.${id}.title`),
    body: t(`assurance.pillars.${id}.body`),
    bullets: (t.raw(`assurance.pillars.${id}.bullets`) as string[]) ?? [],
  }));

  const stats = statIds.map((id) => ({
    id,
    value: t(`assurance.stats.${id}.value`),
    label: t(`assurance.stats.${id}.label`),
  }));

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t("assurance.kicker")}</p>
        <h1 className={styles.title}>
            <span>{t("assurance.title")}</span>
            <span className={styles.summary}>{t("assurance.summary")}</span>
        </h1>
        <div className={styles.stats}>
          {stats.map((stat) => (
            <article key={stat.id}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <Link href="/contact" className={styles.primaryButton}>
            <ShieldCheck size={18} aria-hidden="true" />
            <span>{t("assurance.cta")}</span>
          </Link>
          <p>{t("assurance.note")}</p>
        </div>
      </div>
      <div className={styles.grid}>
        {pillars.map((pillar) => (
          <article key={pillar.id} className={styles.card}>
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
            <ul>
              {pillar.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
