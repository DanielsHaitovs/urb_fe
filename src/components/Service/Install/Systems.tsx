import { Cpu, Droplets, PanelsTopLeft, ShieldCheck, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import styles from "@/components/Service/Install/Systems.module.scss";

const cardIds = ["pump", "hydronics", "monitoring", "finish"] as const;
const iconMap = {
  pump: <Droplets size={20} aria-hidden="true" />,
  hydronics: <Sparkles size={20} aria-hidden="true" />,
  monitoring: <Cpu size={20} aria-hidden="true" />,
  finish: <PanelsTopLeft size={20} aria-hidden="true" />,
} as const;

export default function InstallSystems() {
  const t = useTranslations("InstallationPage");

  const cards = cardIds.map((id) => ({
    id,
    title: t(`systems.cards.${id}.title`),
    body: t(`systems.cards.${id}.body`),
    items: (t.raw(`systems.cards.${id}.items`) as string[]) ?? [],
  }));

  return (
    <section id="systems" className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t("systems.kicker")}</p>
        <h1 className={styles.title}>
            <span>{t("systems.title")}</span>
            <span className={styles.summary}>{t("systems.summary")}</span>
        </h1>
      </div>
      <div className={styles.grid}>
        {cards.map((card) => (
          <article key={card.id} className={styles.card}>
            <div className={styles.icon}>{iconMap[card.id]}</div>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className={styles.footerBadge}>
        <ShieldCheck size={22} aria-hidden="true" />
        <span>{t("systems.footer")}</span>
      </div>
    </section>
  );
}
