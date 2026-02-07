import styles from "@/app/offers/OffersPage.module.scss";
import WorkflowShowcase from "@/components/WorkflowShowcase/WorkflowShowcase";
import Daily from "@/components/Solutions/Daily";
import Service from "@/components/Service/Service";
import Scenarios from "@/components/Scenarios/Scenarios";
import RequestPlan from "@/components/ContactCTA/RequestPlan";
import { ScrollTopButton } from "@/components/ScrollTopButton/ScrollTopButton";

export default function OffersPage() {
  return (
    <main className={styles.page}>
      <Daily />
      <WorkflowShowcase />
      <Service />
      <Scenarios />
      <RequestPlan />
      <ScrollTopButton />
    </main>
  );
}
