import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getTranslations } from "next-intl/server";
import AboutTestimonials from "@/components/About/Testimonials";

export default async function ContactLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [contactT, offersT] = await Promise.all([
    getTranslations("ContactPage"),
    getTranslations("OffersPage"),
  ]);

  const bannerTitle = contactT("bannerTitle");
  const actions = [
    { label: offersT("services.drilling.title"), href: "/offers/drilling" },
    { label: offersT("services.maintenance.title"), href: "/offers/maintenance" },
    { label: offersT("services.installation.title"), href: "/offers/installation" },
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
