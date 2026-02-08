import { useTranslations } from "next-intl";
import styles from "@/components/Solutions/Daily.module.scss";

export default function Daily() {
    const t = useTranslations("OffersPage");

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <p className={styles.kicker}>{t("kicker")}</p>
                <h1 className={styles.title}>
                    <span>{t("title.line1")}</span>
                    <span className={styles.accent}>{t("title.line2")}</span>
                </h1>
                <p className={styles.summary}>{t("summary")}</p>
                <p className={styles.note}>{t("note")}</p>
            </div>
            <div className={styles.list}>
            <div className={styles.item}>
                <span>{t("badge.top")}</span>
                <strong>{t("badge.bottom")}</strong>
            </div>
            <div className={`${styles.item} ${styles.supportBadge}`}>
                <span>{t("supportBadge.top")}</span>
                <strong>{t("supportBadge.bottom")}</strong>
            </div>
            </div>
        </div>
    )
}