"use client";

import styles from "@/app/offers/installation/Installation.module.scss";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
import { ScrollTopButton } from "@/components/ScrollTopButton/ScrollTopButton";
import InstallAssurance from "@/components/Service/Install/Assurance";
import InstallFaq from "@/components/Service/Install/Faq";
import InstallHero from "@/components/Service/Install/Hero";
import InstallPlaybook from "@/components/Service/Install/Playbook";
import InstallShowcase from "@/components/Service/Install/Showcase";
import InstallSystems from "@/components/Service/Install/Systems";
import { useScreenSize } from "@/providers/ScreenTypeProvider";

export default function FullInstalationPage() {
    const screen = useScreenSize();

  return (
    <main className={styles.page}>
      <InstallHero />
      <InstallShowcase />
      <InstallSystems />
      <InstallPlaybook />
      <InstallAssurance />
      <InstallFaq />
      <ContactCTA screen={screen} />
      <ScrollTopButton />
    </main>
  );
}
