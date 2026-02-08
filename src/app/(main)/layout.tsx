import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useTranslations } from "next-intl";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const t = useTranslations("Banner");
  const title = t("title");
  
  const actions = [
    { label: t("strength"), href: "#strength" },
    { label: t("cleanWater"), href: "#clean-water" },
    { label: t("contact"), href: "#contact" },
    { label: t("offers"), href: "#solutions" },
  ];

  return (
    <>
      <Header banner={true} actions={actions} bannerTitle={title} />
      {children}
      <Footer />
    </>
  );
}
