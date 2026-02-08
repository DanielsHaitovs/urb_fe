"use client";

import Image from "next/image";
import styles from "@/components/Banner/Banner.module.scss";
import { ScreenType } from "@/types/deviceType";
import RedirectTo from "@/ui/actions/redirect";

type BannerProps = {
  screen: ScreenType;
  title?: string;
  actions?: { label: string; href: string }[];
};

export default function Banner({ screen, title, actions }: BannerProps) {
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
        <h1 className={styles.title}>{title}</h1>
        {actions?.length &&
          (screen === "mobile" ? (
            <div className={styles.mobileActions} aria-label="Quick actions">
              {actions.map((action) => (
                <div className={styles.mobileAction} key={action.href}>
                  <RedirectTo className="banner" href={action.href} label={action.label} />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.actions} aria-label="Quick actions">
              {actions.map((action) => (
                <div className={styles.action} key={action.href}>
                  <RedirectTo className="banner" href={action.href} label={action.label} />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}