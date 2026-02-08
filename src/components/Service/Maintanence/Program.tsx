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
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t("program.kicker")}</p>
        <h1 className={styles.title}>
          <span>{t("program.title")}</span>
          <span className={styles.summary}>{t("program.summary")}</span>
        </h1>
      </div>
      <div className={styles.list}>
        {steps.map((step) => (
          <article key={step.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.index}>{step.index.toString().padStart(2, "0")}</span>
              <h3>{step.title}</h3>
            </div>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
