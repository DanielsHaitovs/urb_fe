import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getTranslations } from "next-intl/server";

export default async function OffersLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const t = await getTranslations("OffersPage");
  const bannerTitle = t("bannerTitle");

  return (
    <>
      <Header banner={true} showActions={false} bannerTitle={bannerTitle} />
      {children}
      <Footer />
    </>
  );
}
