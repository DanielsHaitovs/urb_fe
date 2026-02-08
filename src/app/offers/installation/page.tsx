import styles from "@/app/offers/installation/Installation.module.scss";
import RequestPlan from "@/components/ContactCTA/RequestPlan";
import { ScrollTopButton } from "@/components/ScrollTopButton/ScrollTopButton";
import InstallAssurance from "@/components/Service/Install/Assurance";
import InstallFaq from "@/components/Service/Install/Faq";
import InstallHero from "@/components/Service/Install/Hero";
import InstallPlaybook from "@/components/Service/Install/Playbook";
import InstallShowcase from "@/components/Service/Install/Showcase";
import InstallSystems from "@/components/Service/Install/Systems";

export default function FullInstalationPage() {
  return (
    <main className={styles.page}>
      <InstallHero />
      <InstallShowcase />
      <InstallSystems />
      <InstallPlaybook />
      <InstallAssurance />
      <InstallFaq />
      <RequestPlan />
      <ScrollTopButton />
    </main>
  );
}
