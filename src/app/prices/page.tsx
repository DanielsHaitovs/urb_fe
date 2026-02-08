import styles from "@/app/prices/PricesPage.module.scss";
import RequestPlan from "@/components/ContactCTA/RequestPlan";
import { ScrollTopButton } from "@/components/ScrollTopButton/ScrollTopButton";
import PricesCalculator from "@/components/Prices/Calculator";
import PricesFaq from "@/components/Prices/Faq";
import PricesHero from "@/components/Prices/Hero";

export default function PricesPage() {
  return (
    <main className={styles.page}>
      <PricesHero />
      <PricesCalculator />
      <PricesFaq />
      <RequestPlan />
      <ScrollTopButton />
    </main>
  );
}
