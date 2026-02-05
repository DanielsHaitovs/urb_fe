"use client";

import Banner from "@/components/Banner/Banner";
import { Menu } from "@/components/Menu/Menu";
import styles from "@/components/Header/Header.module.scss";
import TopBanner from "@/components/Banner/TopBanner";
import { useScreenSize } from "@/providers/ScreenTypeProvider";

export default function Header({ banner = false }: { banner?: boolean }) {
  const screen = useScreenSize();

  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
        <TopBanner />
        <Menu screen={screen} />
      </div>
      {banner && <Banner screen={screen} />}
    </header>
  );
}