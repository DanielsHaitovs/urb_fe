import styles from "@/components/Service/Maintanence/Plans.module.scss";
import { useTranslations } from "next-intl";

const planIds = ["seasonal", "continuous"] as const;

export default function MaintanencePlans() {
  const t = useTranslations("MaintenancePage");

  const plans = planIds.map((id) => ({
    id,
    title: t(`plans.${id}.title`),
    summary: t(`plans.${id}.summary`),
    price: t(`plans.${id}.price`),
    note: t(`plans.${id}.note`),
    items: (t.raw(`plans.${id}.items`) as string[]) ?? [],
  }));

  return (
    <section id="plans" className={styles.section}>
      <header>
        <p className={styles.kicker}>{t("plans.kicker")}</p>
        <h2>{t("plans.title")}</h2>
        <p>{t("plans.summary")}</p>
      </header>
      <div className={styles.grid}>
        {plans.map((plan) => (
          <article key={plan.id} className={styles.card}>
            <div className={styles.head}>
              <p>{plan.title}</p>
              <strong>{plan.price}</strong>
            </div>
            <p className={styles.summary}>{plan.summary}</p>
            <ul>
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.note}>{plan.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
