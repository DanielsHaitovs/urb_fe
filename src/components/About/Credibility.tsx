"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import styles from "@/components/About/Credibility.module.scss";

type Fact = {
  value: string;
  label: string;
  body: string;
};

export default function AboutCredibility() {
  const t = useTranslations("AboutPage.credibility");
  const bullets = t.raw("bullets") as string[];
  const certificates = t.raw("certificates") as string[];
  const facts = t.raw("facts") as Fact[];

  const splitCertificates = useMemo(() => {
    const midpoint = Math.ceil(certificates.length / 2);
    return [certificates.slice(0, midpoint), certificates.slice(midpoint)];
  }, [certificates]);

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t("kicker")}</p>
        <h1 className={styles.title}>
          <span>{t("title")}</span>
          <span className={styles.summary}>{t("summary")}</span>
        </h1>
        <p className={styles.commitment}>{t("commitment")}</p>
        <ul className={styles.bullets}>
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={styles.certificates}>
          <p className={styles.certTitle}>{t("certificatesTitle")}</p>
          <div className={styles.columns}>
            {splitCertificates.map((column, index) => (
              <ul key={`cert-column-${index}`}>
                {column.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.facts}>
        <div className={styles.factsHeader}>{t("factsTitle")}</div>
        {facts.map((fact) => (
          <article key={fact.label} className={styles.factCard}>
            <p className={styles.value}>{fact.value}</p>
            <p className={styles.label}>{fact.label}</p>
            <p className={styles.bodyCopy}>{fact.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
