"use client";

import Image from "next/image";
import styles from "@/components/Banner/Banner.module.scss";
import { ScreenType } from "@/types/deviceType";
import { useTranslations } from "next-intl";
import RedirectTo from "@/ui/redirect";
import Link from "next/link";

export default function Banner({ screen }: { screen: ScreenType }) {
  const t = useTranslations("Banner");

  return (
    <div className={styles.banner} aria-label="Hero banner">
      <Image
        src="/banner/banner.png"
        alt="Urb Logo"
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{t("title")}</h1>
        {screen === "mobile" ? (
          <div className={styles.actions} aria-label="Quick actions">
            <RedirectTo href="/prices" label={t("prices")} />
            <RedirectTo href="/contact" label={t("contact")} />
          </div>
        ) : (
          <div className={styles.actions} aria-label="Quick actions">
            <div className={styles.action}>
              <Link href="#strength" className={styles.actionButton}>
                {t("strength")}
              </Link>
            </div>
            <div className={styles.action}>
              <Link href="#price" className={styles.actionButton}>
                {t("prices")}
              </Link>
            </div>
            <div className={styles.action}>
              <Link href="#contact" className={styles.actionButton}>
                {t("contact")}
              </Link>
            </div>
            <div className={styles.action}>
              <Link href="#offers" className={styles.actionButton}>
                {t("offers")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}