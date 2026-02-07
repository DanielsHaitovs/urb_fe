import styles from "@/components/Service/Maintanence/Program.module.scss";
import { useTranslations } from "next-intl";

const stepIds = ["inspect", "sanitize", "upgrade", "monitor", "report"] as const;

export default function MaintanenceProgram() {
  const t = useTranslations("MaintenancePage");

  const steps = stepIds.map((id, index) => ({
    id,
    index: index + 1,
    title: t(`program.steps.${id}.title`),
    body: t(`program.steps.${id}.body`),
  }));

  return (
    <section className={styles.section}>
      <header>
        <p className={styles.kicker}>{t("program.kicker")}</p>
        <h2>{t("program.title")}</h2>
        <p>{t("program.summary")}</p>
      </header>
      <div className={styles.timeline}>
        {steps.map((step) => (
          <article key={step.id} className={styles.card}>
            <span className={styles.index}>{step.index.toString().padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
