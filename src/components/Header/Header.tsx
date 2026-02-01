import Banner from "@/components/Banner/Banner";
import { Menu } from "@/components/Menu/Menu";
import styles from "@/components/Header/Header.module.scss";
import TopBanner from "@/components/Banner/TopBanner";

export default function Header({ banner = false }: { banner?: boolean }) {
  return (
    <header className={styles.header}>
      <TopBanner />
      <Menu variant="dark" floating />
      {banner && <Banner />}
    </header>
  );
}