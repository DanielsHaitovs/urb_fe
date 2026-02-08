import styles from "@/components/Service/Install/Showcase.module.scss";
import { useTranslations } from "next-intl";

const statIds = ["finish", "crew", "callouts"] as const;
const galleryIds = ["utility", "trench", "panel"] as const;

export default function InstallShowcase() {
  const t = useTranslations("InstallationPage");

  const tileClasses = [styles.tileOne, styles.tileTwo, styles.tileThree];

  const bullets = (t.raw("showcase.bullets") as string[]) ?? [];
  const stats = statIds.map((id) => ({
    id,
    value: t(`showcase.stats.${id}.value`),
    label: t(`showcase.stats.${id}.label`),
  }));
  const gallery = galleryIds.map((id) => ({
    id,
    title: t(`showcase.gallery.${id}.title`),
    caption: t(`showcase.gallery.${id}.caption`),
  }));

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t("showcase.kicker")}</p>
        <h1 className={styles.title}> 
            <span>{t("showcase.title")}</span>
            <span className={styles.summary}>{t("showcase.summary")}</span>
        </h1>
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <div className={styles.stats}>
          {stats.map((stat) => (
            <article key={stat.id}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.gallery}>
        {gallery.map((item, index) => (
          <article key={item.id} className={tileClasses[index] ?? styles.tile}>
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
