import { useTranslations } from "next-intl";
import styles from "./AboutPage.module.scss";

const highlightKeys = ["mission", "team", "impact"] as const;

type HighlightKey = (typeof highlightKeys)[number];

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  const highlights = highlightKeys.map((key: HighlightKey) => ({
    id: key,
    title: t(`highlights.${key}.title`),
    description: t(`highlights.${key}.body`),
  }));

  return (
    <article className={styles.article}>
      <p className={styles.kicker}>{t("kicker")}</p>
      <h1 className={styles.title}>{t("title")}</h1>
      <p className={styles.summary}>{t("summary")}</p>

      <div className={styles.grid}>
        {highlights.map((item) => (
          <section key={item.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.cardBody}>{item.description}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
