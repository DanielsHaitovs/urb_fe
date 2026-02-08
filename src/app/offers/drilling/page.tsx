import styles from "@/app/offers/drilling/Drilling.module.scss";
import RequestPlan from "@/components/ContactCTA/RequestPlan";
import { ScrollTopButton } from "@/components/ScrollTopButton/ScrollTopButton";
import Drill from "@/components/Service/Drill/Drill";
import DrillLayers from "@/components/Service/Drill/Layers";
import DrillPricing from "@/components/Service/Drill/Pricing";
import DrillFaq from "@/components/Service/Drill/Faq";

export default function DrillingPage() {
  return (
    <main className={styles.page}>
      <Drill />
      <DrillLayers />
      <DrillPricing />
      {/* <DrillGuarantee /> */}
      <DrillFaq />
      <RequestPlan />
      <ScrollTopButton />
    </main>
  );
}
