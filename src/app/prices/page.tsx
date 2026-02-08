"use client";

import styles from "@/app/prices/PricesPage.module.scss";
import { ScrollTopButton } from "@/components/ScrollTopButton/ScrollTopButton";
import PricesCalculator from "@/components/Prices/Calculator";
import PricesHero from "@/components/Prices/Hero";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
import { useScreenSize } from "@/providers/ScreenTypeProvider";

export default function PricesPage() {
  const screen = useScreenSize();
  
  return (
    <main className={styles.page}>
      <PricesHero />
      <PricesCalculator />
      <ContactCTA screen={screen} />
      <ScrollTopButton />
    </main>
  );
}
