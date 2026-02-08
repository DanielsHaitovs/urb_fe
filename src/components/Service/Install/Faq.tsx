import { useTranslations } from "next-intl";
import styles from "@/components/Service/Install/Faq.module.scss";

const faqIds = ["prep", "timeline", "power", "finishes"] as const;

export default function InstallFaq() {
  const t = useTranslations("InstallationPage");

  const faqs = faqIds.map((id) => ({
    id,
    question: t(`faq.items.${id}.question`),
    answer: t(`faq.items.${id}.answer`),
  }));

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t("faq.kicker")}</p>
        <h2 className={styles.title}>
            <span>{t("faq.title")}</span>
        </h2>
      </div>
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
