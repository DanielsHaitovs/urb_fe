import styles from "@/components/Header/Header.module.scss";

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