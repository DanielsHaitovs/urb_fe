"use client";

import Image from "next/image";
import styles from "@/components/Banner/Banner.module.scss";
import { ScreenType } from "@/types/deviceType";
import { useTranslations } from "next-intl";
import RedirectTo from "@/ui/actions/redirect";

type BannerProps = {
  screen: ScreenType;
  showActions?: boolean;
  title?: string;
};

export default function Banner({ screen, showActions = true, title }: BannerProps) {
  const t = useTranslations("Banner");
  const heading = title ?? t("title");

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
        <h1 className={styles.title}>{heading}</h1>
        {showActions &&
          (screen === "mobile" ? (
            <div className={styles.mobileActions} aria-label="Quick actions">
              <div className={styles.mobileAction}>
                <RedirectTo className="banner" href="#strength" label={t("strength")} />
              </div>
              <div className={styles.mobileAction}>
                <RedirectTo className="banner" href="#clean-water" label={t("cleanWater")} />
              </div>
              <div className={styles.mobileAction}>
                <RedirectTo className="banner" href="#contact" label={t("contact")} />
              </div>
              <div className={styles.mobileAction}>
                <RedirectTo className="banner" href="#solutions" label={t("offers")} />
              </div>
            </div>
          ) : (
            <div className={styles.actions} aria-label="Quick actions">
              <div className={styles.action}>
                <RedirectTo className="banner" href="#strength" label={t("strength")} />
              </div>
              <div className={styles.action}>
                <RedirectTo className="banner" href="#clean-water" label={t("cleanWater")} />
              </div>
              <div className={styles.action}>
                <RedirectTo className="banner" href="#contact" label={t("contact")} />
              </div>
              <div className={styles.action}>
                <RedirectTo className="banner" href="#solutions" label={t("offers")} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}