"use client";

import Image from "next/image";
import styles from "@/components/Banner/Banner.module.scss";
import { ScreenType } from "@/types/deviceType";
import InfoActions from "./Actions/InfoActions";

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
      <div className={styles.bannerContent}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {actions?.length && <InfoActions screen={screen} actions={actions} />}
        </div>
      </div>
    </div>
  );
}