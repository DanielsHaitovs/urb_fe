"use client";

import styles from "@/app/about/AboutPage.module.scss";
import AboutHero from "@/components/About/Hero";
import AboutCredibility from "@/components/About/Credibility";
import AboutCapabilities from "@/components/About/Capabilities";
import AboutTimeline from "@/components/About/Timeline";
import AboutTestimonials from "@/components/About/Testimonials";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
import { ScrollTopButton } from "@/components/ScrollTopButton/ScrollTopButton";
import { useScreenSize } from "@/providers/ScreenTypeProvider";

export default function AboutPage() {
  const screen = useScreenSize();

  return (
    <main className={styles.page}>
      <AboutHero />
      <AboutCredibility />
      <AboutCapabilities />
      <AboutTimeline />
      <AboutTestimonials />
      <ContactCTA screen={screen} />
      <ScrollTopButton />
    </main>
  );
}
