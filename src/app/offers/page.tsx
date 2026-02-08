"use client";

import styles from "@/app/offers/OffersPage.module.scss";
import WorkflowShowcase from "@/components/WorkflowShowcase/WorkflowShowcase";
import Daily from "@/components/Solutions/Daily";
import Service from "@/components/Service/Service";
import Scenarios from "@/components/Scenarios/Scenarios";
import { ScrollTopButton } from "@/components/ScrollTopButton/ScrollTopButton";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
import { useScreenSize } from "@/providers/ScreenTypeProvider";

export default function OffersPage() {
  const screen = useScreenSize();

  return (
    <main className={styles.page}>
      <Daily />
      <WorkflowShowcase />
      <Service />
      <Scenarios />
      <ContactCTA screen={screen} />
      <ScrollTopButton />
    </main>
  );
}
