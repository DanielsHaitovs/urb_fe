import styles from "@/components/Service/Drill/Drill.module.scss";
import { ArrowUpRight, TimerReset } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const metricIds = ["depth", "response", "clients", "warranty"] as const;

export default function Drill() {
    const t = useTranslations("DrillingPage");

    const metrics = metricIds.map((id) => ({
        id,
        value: t(`metrics.${id}.value`),
        label: t(`metrics.${id}.label`),
    }));

    return (
        <section className={styles.hero}>
            <div className={styles.heroCopy}>
                <p className={styles.kicker}>{t("hero.kicker")}</p>
                <h1 className={styles.title}>
                    <span>{t("hero.title.line1")}</span>
                    <span className={styles.accent}>{t("hero.title.line2")}</span>
                </h1>
                <p className={styles.summary}>{t("hero.summary")}</p>
                <p className={styles.note}>{t("hero.detail")}</p>
                <div className={styles.heroActions}>
                    <Link href="/contact" className={styles.primaryButton}>
                        <span>{t("hero.actions.primary")}</span>
                        <ArrowUpRight size={18} aria-hidden="true" />
                    </Link>
                    <Link href="#process" className={styles.secondaryButton}>
                        <span>{t("hero.actions.secondary")}</span>
                        <TimerReset size={18} aria-hidden="true" />
                    </Link>
                </div>
                <div className={styles.metrics}>
                    {metrics.map((metric) => (
                        <div key={metric.id} className={styles.metricCard}>
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}