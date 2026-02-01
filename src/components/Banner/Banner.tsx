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
    </section>
  );
}