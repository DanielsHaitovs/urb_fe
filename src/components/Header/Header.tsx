"use client";

import Banner from "@/components/Banner/Banner";
import { Menu } from "@/components/Menu/Menu";
import styles from "@/components/Header/Header.module.scss";
import TopBanner from "@/components/Banner/TopBanner";
import { useScreenSize } from "@/providers/ScreenTypeProvider";

type HeaderProps = {
  banner?: boolean;
  bannerTitle?: string;
  actions?: { label: string; href: string }[];
};

export default function Header({
  banner = false,
  bannerTitle,
  actions
}: HeaderProps) {
  const screen = useScreenSize();

  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
        <TopBanner />
        <Menu screen={screen} />
      </div>
      {banner && (
        <Banner title={bannerTitle} actions={actions} />
      )}
    </header>
  );
}