import { useTranslations } from "next-intl";
import styles from "@/components/Banner/TopBanner.module.scss";
import { LucideSparkles, Mail, MapPin } from "lucide-react";

export default function TopBanner() {
  const t = useTranslations("TopBanner");

  return (
    <div className={styles.topBanner}>
      <div className={styles.wrapper}>
        <LucideSparkles />
        <p className={styles.title}>{t("title")}</p>
      </div>
      <div className={styles.wrapper}>
        <MapPin />
        <p className={styles.address}>{t("address")}</p>
      </div>
        <a href="mailto:info@urb.lv" className={styles.wrapper} aria-label="Email info@urb.lv">
          <Mail />
          <span>info@urb.lv</span>
        </a>
    </div>
  );
}