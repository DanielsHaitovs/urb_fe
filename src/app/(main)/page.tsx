"use client";

import styles from "@/app/(main)/HomePage.module.scss";
import CleanWater from "@/components/Clean/Clean";
import DailySolutions from "@/components/Solutions/Solutions";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
import Strength from "@/components/Strength/Strength";
import { ScrollTopButton } from "@/components/ScrollTopButton/ScrollTopButton";
import { useScreenSize } from "@/providers/ScreenTypeProvider";


export default function Home() {
  const screen = useScreenSize();

  return (
    <main className={styles.page}>
      <section id="strength" className={styles.section}>
        <Strength screen={screen} />
      </section>
      <section id="solutions" className={styles.section}>
        <DailySolutions screen={screen} />
      </section>
      <section id="clean-water" className={styles.section}>
        <CleanWater screen={screen} />
      </section>
      <section id="contact" className={styles.section}>
        <ContactCTA screen={screen} />
      </section>
      <ScrollTopButton />
    </main>
  );
}
