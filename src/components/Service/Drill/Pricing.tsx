import styles from "@/components/Service/Drill/Pricing.module.scss";
import { useTranslations } from "next-intl";

const pricingIds = ["base", "beyond"] as const;

export default function DrillPricing() {
    const t = useTranslations("DrillingPage");
    
    const pricing = pricingIds.map((id) => ({
        id,
        title: t(`pricing.${id}.title`),
        summary: t(`pricing.${id}.summary`),
        price: t(`pricing.${id}.price`),
        note: t(`pricing.${id}.note`),
        items: (t.raw(`pricing.${id}.items`) as string[]) ?? [],
    }));
    return (
        <section className={styles.pricingSection}>
            <div className={styles.pricingCopy}>
                <p className={styles.kicker}>{t("pricing.kicker")}</p>
                <h2 className={styles.title}>{t("pricing.title")}</h2>
                <p>{t("pricing.summary")}</p>
            </div>
            <div className={styles.pricingGrid}>
            {pricing.map((plan) => (
                <article key={plan.id} className={styles.pricingCard}>
                    <div className={styles.pricingHead}>
                        <p>{plan.title}</p>
                        <strong>{plan.price}</strong>
                    </div>
                    <p className={styles.pricingSummary}>{plan.summary}</p>
                    <ul>
                        {plan.items.map((item) => (
                        <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <p className={styles.pricingNote}>{plan.note}</p>
                </article>
            ))}
            </div>
        </section>
    );
}