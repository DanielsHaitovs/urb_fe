import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import styles from "@/components/ContactCTA/RequestPlan.module.scss";
import Link from "next/link";

export default function RequestPlan() {
    const t = useTranslations("OffersPage");
    return (
      <section className={styles.cta}>
        <div>
          <p className={styles.kicker}>{t("cta.kicker")}</p>
          <h2>{t("cta.title")}</h2>
          <p>{t("cta.summary")}</p>
        </div>
        <Link href="/contact" className={styles.ctaButton}>
          <span>{t("cta.button")}</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
        <p className={styles.ctaHint}>{t("cta.hint")}</p>
      </section>
    )
}