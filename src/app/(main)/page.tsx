"use client";

import styles from "@/app/(main)/HomePage.module.scss";
import Strength from "@/components/Strength/Strength";
import { useScreenSize } from "@/providers/ScreenTypeProvider";


export default function Home() {
  const screen = useScreenSize();

  return (
    <main className={styles.page}>
      <section key={1} id="strength" className={styles.section}>
        <Strength screen={screen} />
      </section>
      <section key={2} id="prices" className={styles.section}>
        <div>
          prices
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </section>
      <section key={3} id="offers" className={styles.section}>
        <div>
          offers
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </section>
      <section key={4} id="contact" className={styles.section}>
        <div>
          contact
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </section>
    </main>
  );
}
