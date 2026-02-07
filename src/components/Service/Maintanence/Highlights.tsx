import { Droplets, Gauge, HeartPulse, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import styles from "@/components/Service/Maintanence/Highlights.module.scss";

const featureIds = ["flush", "diagnostics", "water", "seasonal"] as const;
const icons = [<Droplets key="droplets" size={20} />, <Gauge key="gauge" size={20} />, <HeartPulse key="pulse" size={20} />, <ShieldCheck key="shield" size={20} />];

export default function MaintanenceHighlights() {
  const t = useTranslations("MaintenancePage");

  const features = featureIds.map((id) => ({
    id,
    title: t(`features.${id}.title`),
    body: t(`features.${id}.body`),
    bullets: (t.raw(`features.${id}.bullets`) as string[]) ?? [],
  }));

  return (
    <section className={styles.section}>
      <header>
        <p className={styles.kicker}>{t("features.kicker")}</p>
        <h2>{t("features.title")}</h2>
        <p>{t("features.summary")}</p>
      </header>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <article key={feature.id} className={styles.card}>
            <div className={styles.icon}>{icons[index % icons.length]}</div>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
            <ul>
              {feature.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
