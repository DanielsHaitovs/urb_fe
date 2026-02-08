import Link from "next/link";
import { ArrowUpRight, LifeBuoy, TestTubes, Radar } from "lucide-react";
import { useTranslations } from "next-intl";
import styles from "@/components/Service/Maintanence/Care.module.scss";

const cardIds = ["emergency", "chemistry", "monitoring"] as const;
const statIds = ["coverage", "sla", "lab"] as const;
const icons = [
  <LifeBuoy key="lifeBuoy" size={22} aria-hidden="true" />,
  <TestTubes key="testTubes" size={22} aria-hidden="true" />,
  <Radar key="radar" size={22} aria-hidden="true" />,
];

export default function MaintanenceCare() {
  const t = useTranslations("MaintenancePage");

  const cards = cardIds.map((id) => ({
    id,
    title: t(`care.cards.${id}.title`),
    body: t(`care.cards.${id}.body`),
    bullets: (t.raw(`care.cards.${id}.bullets`) as string[]) ?? [],
  }));

  const stats = statIds.map((id) => ({
    id,
    value: t(`care.stats.${id}.value`),
    label: t(`care.stats.${id}.label`),
  }));

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t("care.kicker")}</p>
        <h1 className={styles.title}>
          <span>{t("care.title")}</span>
          <span className={styles.summary}>{t("care.summary")}</span>
        </h1>
      </div>
      <div className={styles.layout}>
        <aside className={styles.panel}>
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.id}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <p className={styles.note}>{t("care.note")}</p>
          <Link href="/contact" className={styles.cta}>
            <span>{t("care.cta")}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </aside>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <article key={card.id} className={styles.card}>
              <div className={styles.iconWrapper}>{icons[index % icons.length]}</div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <ul>
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
