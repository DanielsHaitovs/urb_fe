"use client";

import styles from "@/app/offers/drilling/Drilling.module.scss";
import { ScrollTopButton } from "@/components/ScrollTopButton/ScrollTopButton";
import Drill from "@/components/Service/Drill/Drill";
import DrillLayers from "@/components/Service/Drill/Layers";
import DrillPricing from "@/components/Service/Drill/Pricing";
import DrillFaq from "@/components/Service/Drill/Faq";
import { useScreenSize } from "@/providers/ScreenTypeProvider";
import ContactCTA from "@/components/ContactCTA/ContactCTA";

export default function DrillingPage() {
  const screen = useScreenSize();

  return (
    <main className={styles.page}>
      <Drill />
      <DrillLayers />
      <DrillPricing />
      <DrillFaq />
      <ContactCTA screen={screen} />
      <ScrollTopButton />
    </main>
  );
}
