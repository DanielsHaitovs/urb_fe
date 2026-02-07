import { useTranslations } from "next-intl";
import styles from "@/components/Scenarios/Scenarios.module.scss";

const scenarioIds = ["rockyTerrain", "seasonalUsage", "retrofit"] as const;

export default function Scenarios() {
const t = useTranslations("OffersPage");
      const scenarios = scenarioIds.map((id) => ({
    id,
    title: t(`scenarios.list.${id}.title`),
    body: t(`scenarios.list.${id}.body`),
    bullets: (t.raw(`scenarios.list.${id}.bullets`) as string[]) ?? [],
  }));

  return (
      <section className={styles.scenarioSection}>
        <div className={styles.scenarioCopy}>
          <p className={styles.kicker}>{t("scenarios.kicker")}</p>
          <h2>{t("scenarios.title")}</h2>
          <p>{t("scenarios.summary")}</p>
        </div>
        <div className={styles.scenarioGrid}>
          {scenarios.map((scenario) => (
            <article key={scenario.id} className={styles.scenarioCard}>
              <h3>{scenario.title}</h3>
              <p>{scenario.body}</p>
              <ul>
                {scenario.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
  );
}