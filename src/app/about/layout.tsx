import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getTranslations } from "next-intl/server";

export default async function AboutLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [aboutT, offersT] = await Promise.all([
    getTranslations("AboutPage"),
    getTranslations("OffersPage"),
  ]);

  const bannerTitle = aboutT("bannerTitle");
  const actions = [
    { label: offersT("services.drilling.title"), href: "/offers/drilling" },
    { label: offersT("services.maintenance.title"), href: "/offers/maintenance" },
    { label: offersT("services.installation.title"), href: "/offers/installation" },
  ];

  return (
    <>
      <Header banner={true} bannerTitle={bannerTitle} actions={actions} />
      {children}
      <Footer />
    </>
  );
}
