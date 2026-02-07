import styles from "@/app/offers/maintenance/Maintenance.module.scss";
import RequestPlan from "@/components/ContactCTA/RequestPlan";
import { ScrollTopButton } from "@/components/ScrollTopButton/ScrollTopButton";
import MaintanenceHero from "@/components/Service/Maintanence/Hero";
import MaintanenceHighlights from "@/components/Service/Maintanence/Highlights";
import MaintanenceProgram from "@/components/Service/Maintanence/Program";
import MaintanencePlans from "@/components/Service/Maintanence/Plans";
import MaintanenceCare from "@/components/Service/Maintanence/Care";
import MaintanenceFaq from "@/components/Service/Maintanence/Faq";

export default function MaintenancePage() {
  return (
    <main className={styles.page}>
      <MaintanenceHero />
      <MaintanenceHighlights />
      <MaintanenceProgram />
      <MaintanencePlans />
      <MaintanenceCare />
      <MaintanenceFaq />
      <RequestPlan />
      <ScrollTopButton />
    </main>
  );
}
