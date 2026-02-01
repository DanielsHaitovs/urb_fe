import Banner from "@/components/Banner/Banner";
import { Menu } from "@/components/Menu/Menu";
import styles from "@/components/Header/Header.module.scss";
import TopBanner from "@/components/Banner/TopBanner";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </footer>
  );
}