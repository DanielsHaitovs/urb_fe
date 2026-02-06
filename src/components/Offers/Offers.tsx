import { ScreenType } from "@/types/deviceType";
import { useTranslations } from "next-intl";

export default function Offers({ screen }: { screen: ScreenType }) {
  const t = useTranslations("Offers");

  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
    </div>
  );
}