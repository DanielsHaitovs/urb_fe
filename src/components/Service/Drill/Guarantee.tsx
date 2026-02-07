import { ArrowUpRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import styles from "@/components/Service/Drill/Guarantee.module.scss";
import Link from "next/link";

export default function DrillGuarantee() {
    const t = useTranslations("DrillingPage");
    
    return (
        <section className={styles.guaranteeSection}>
            <div className={styles.guaranteeCopy}>
                <p className={styles.kicker}>{t("guarantee.kicker")}</p>
                <h2>{t("guarantee.title")}</h2>
                <p>{t("guarantee.summary")}</p>
            </div>
            <div className={styles.guaranteeCard}>
                <Sparkles size={28} aria-hidden="true" />
                <p>{t("guarantee.body")}</p>
                <Link href="/contact" className={styles.secondaryButton}>
                    <span>{t("guarantee.cta")}</span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}