import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getTranslations } from "next-intl/server";
import AboutTestimonials from "@/components/About/Testimonials";

export default async function PricesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const t = await getTranslations("PricesPage");
  const bannerTitle = t("bannerTitle");
  const actions = [
    { label: t("services.drilling.title"), href: "/offers/drilling" },
    { label: t("services.maintenance.title"), href: "/offers/maintenance" },
    { label: t("services.installation.title"), href: "/offers/installation" },
  ];

  return (
    <>
      <Header banner={true} bannerTitle={bannerTitle} actions={actions} />
      {children}
      <AboutTestimonials />
      <Footer />
    </>
  );
}
