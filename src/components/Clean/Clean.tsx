"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import styles from "@/components/Clean/Clean.module.scss";
import { ScreenType } from "@/types/deviceType";

const optionMedia = [
  { id: "custom", image: "/work_process/process_1.png" },
  { id: "pricing", image: "/work_process/process_2.png" },
  { id: "warranty", image: "/work_process/process_3.png" },
];

export default function CleanWater({ screen }: { screen: ScreenType }) {
  const t = useTranslations("CleanWater");

  const options = useMemo(
    () =>
      optionMedia.map((item) => {
        const rawBullets = t.raw(`options.${item.id}.bullets`);
        const bullets = Array.isArray(rawBullets) ? (rawBullets as string[]) : [];
        return {
          ...item,
          title: t(`options.${item.id}.title`),
          body: t(`options.${item.id}.body`),
          bullets,
        };
      }),
    [t]
  );

  return (
    <section className={styles.section} aria-labelledby="clean-heading" data-screen={screen}>
      <div className={styles.liquidGlow} aria-hidden="true" />
      <div className={styles.gridVeil} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.hero}>
          <span className={styles.kicker}>{t("kicker")}</span>
          <h2 id="clean-heading">
            <span>{t("title.line1")}</span>
            <span>{t("title.line2")}</span>
            <span className={styles.highlight}>{t("title.line3")}</span>
          </h2>
          <p className={styles.summary}>{t("summary")}</p>
        </div>
        <div className={styles.timeline}>
          {options.map((option, index) => (
            <article className={styles.card} key={option.id} style={{ animationDelay: `${index * 0.15}s` }}>
              <div className={styles.photoFrame}>
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  priority={index === 0}
                />
                <div className={styles.photoTint} />
              </div>
              <div className={styles.cardBody}>
                <h3>{option.title}</h3>
                <p>{option.body}</p>
                <ul>
                  {option.bullets.map((bullet, bulletIndex) => (
                    <li key={`${option.id}-${bulletIndex}`}>{bullet}</li>
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