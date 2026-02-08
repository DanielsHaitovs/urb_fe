"use client";

import styles from "@/app/offers/maintenance/Maintenance.module.scss";
import { ScrollTopButton } from "@/components/ScrollTopButton/ScrollTopButton";
import MaintanenceHero from "@/components/Service/Maintanence/Hero";
import MaintanenceHighlights from "@/components/Service/Maintanence/Highlights";
import MaintanenceProgram from "@/components/Service/Maintanence/Program";
import MaintanencePlans from "@/components/Service/Maintanence/Plans";
import MaintanenceCare from "@/components/Service/Maintanence/Care";
import MaintanenceFaq from "@/components/Service/Maintanence/Faq";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
import { useScreenSize } from "@/providers/ScreenTypeProvider";

export default function MaintenancePage() {
  const screen = useScreenSize();
  
  return (
    <main className={styles.page}>
      <MaintanenceHero />
      <MaintanenceHighlights />
      <MaintanenceProgram />
      <MaintanencePlans />
      <MaintanenceCare />
      <MaintanenceFaq />
      <ContactCTA screen={screen} />
      <ScrollTopButton />
    </main>
  );
}
