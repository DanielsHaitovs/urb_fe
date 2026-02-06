"use client";

import styles from "@/app/(main)/HomePage.module.scss";
import CleanWater from "@/components/Clean/Clean";
import DailySolutions from "@/components/Solutions/Solutions";
import Strength from "@/components/Strength/Strength";
import { useScreenSize } from "@/providers/ScreenTypeProvider";


export default function Home() {
  const screen = useScreenSize();

  return (
    <main className={styles.page}>
      <section id="strength" className={styles.section}>
        <Strength screen={screen} />
      </section>
      <section id="daily-solutions" className={styles.section}>
        <DailySolutions screen={screen} />
      </section>
      <section id="prices" className={styles.section}>
        <CleanWater screen={screen} />
      </section>
      <section id="offers" className={styles.section}>
        <div>
          offers
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </section>
      <section id="contact" className={styles.section}>
        <div>
          contact
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </section>
    </main>
  );
}
