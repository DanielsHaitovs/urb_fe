import Image from "next/image";
import styles from "@/components/Banner/Banner.module.scss";

export default function Banner() {
  return (
    <section className={styles.banner} aria-label="Hero banner">
      <Image
        src="/banner/banner.png"
        alt="Urb Logo"
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Urb</h1>
          <p className={styles.subtitle}>
            Your gateway to urban living solutions.
          </p>
        <div className={styles.actions} aria-label="Quick actions">
          <a href="#get-started" className={styles.action} aria-label="Get Started">
            <span className={styles.actionLabel}>Get Started</span>
          </a>
          <a href="#learn-more" className={styles.action} aria-label="Learn More">
            <span className={styles.actionLabel}>Learn More</span>
          </a>
          <a href="#consult" className={styles.action} aria-label="Consult">
            <span className={styles.actionLabel}>Consult</span>
          </a>
          <a href="#contact" className={styles.action} aria-label="Contact">
            <span className={styles.actionLabel}>Contact</span>
          </a>
        </div>
      </div>
    </section>
  );
}