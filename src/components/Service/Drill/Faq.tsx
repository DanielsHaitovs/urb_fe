import { useTranslations } from "next-intl";
import styles from "@/components/Service/Drill/Faq.module.scss";

const faqIds = ["prep", "timeline", "docs", "winter"] as const;

export default function DrillFaq() {
    const t = useTranslations("DrillingPage");
    
    const faqs = faqIds.map((id) => ({
        id,
        question: t(`faq.${id}.question`),
        answer: t(`faq.${id}.answer`),
    }));
    
    return (
        <section className={styles.main}>
            <div className={styles.content}>
                <p className={styles.kicker}>{t("faq.kicker")}</p>
                <h1 className={styles.title}>
                    <span>{t("faq.title")}</span>
                </h1>
            </div>
            <div className={styles.list}>
                {faqs.map((faq) => (
                <div key={faq.id} className={styles.faqItem}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                </div>
                ))}
            </div>
        </section>
    );
}