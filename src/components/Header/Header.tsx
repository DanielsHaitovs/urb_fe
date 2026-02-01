import Banner from "@/components/Banner/Banner";
import { Menu } from "@/components/Menu/Menu";
import styles from "@/components/Header/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Menu variant="dark" floating />
      <Banner />
    </header>
  );
}