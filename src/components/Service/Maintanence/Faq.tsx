import { useTranslations } from "next-intl";
import styles from "@/components/Service/Maintanence/Faq.module.scss";

const faqIds = ["eligibility", "timeline", "lab", "contract", "downtime"] as const;

export default function MaintanenceFaq() {
  const t = useTranslations("MaintenancePage");

  const faqs = faqIds.map((id) => ({
    id,
    question: t(`faq.items.${id}.question`),
    answer: t(`faq.items.${id}.answer`),
  }));

  return (
    <section className={styles.section}>
      <header>
        <p className={styles.kicker}>{t("faq.kicker")}</p>
        <h2>{t("faq.title")}</h2>
      </header>
      <div className={styles.grid}>
        {faqs.map((faq) => (
          <article key={faq.id} className={styles.card}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
