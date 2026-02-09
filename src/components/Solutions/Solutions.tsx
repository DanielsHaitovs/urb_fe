import styles from "@/components/Solutions/Solutions.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScreenType } from "@/types/deviceType";
import Link from "next/link";

const solutionMedia = [
  { id: "drilling", image: "/offers/offer_1.jpg" },
  { id: "maintenance", image: "/offers/offer_2.jpg" },
  { id: "installation", image: "/offers/offer_3.jpg" },
];

export default function DailySolutions({ screen }: { screen: ScreenType }) {
  const t = useTranslations("DailySolutions");
  const solutions = solutionMedia.map((item) => ({
    ...item,
    title: t(`cards.${item.id}.title`),
    body: t(`cards.${item.id}.body`),
    url: `/offers/${item.id}`,
  }));

  return (
    <section className={styles.main} aria-labelledby="solutions-heading" data-screen={screen}>
      <div className={styles.aurora} aria-hidden="true" />
      <div className={styles.ridges} aria-hidden="true" />
      <div className={styles.shell}>
        <div className={styles.content}>
          <span className={styles.kicker}>{t("kicker")}</span>
          <h2 id="solutions-heading" className={styles.title}>
            <span>{t("title.line1")}</span>
            <span>{t("title.line2")}</span>
            <span className={styles.gradient}>{t("title.line3")}</span>
          </h2>
          <p className={styles.summary}>{t("summary")}</p>
        </div>
        <div className={styles.cards}>
          {solutions.map((solution, index) => (
            <Link href={solution.url} key={solution.id} className={styles.cardLink}> 
              <article className={styles.card} key={solution.id} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className={styles.media}>
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    priority={index === 0}
                  />
                  <div className={styles.mediaTint} />
                </div>
                <div className={styles.cardBody}>
                  <h3>{solution.title}</h3>
                  <p>{solution.body}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}