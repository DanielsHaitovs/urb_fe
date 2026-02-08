"use client";

import { useTranslations } from "next-intl";
import styles from "@/components/About/Timeline.module.scss";

type TimelineMetric = {
  label: string;
  value: string;
};

type TimelineStep = {
  year: string;
  title: string;
  body: string;
  metrics: TimelineMetric[];
};

export default function AboutTimeline() {
  const t = useTranslations("AboutPage.timeline");
  const steps = t.raw("steps") as TimelineStep[];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.kicker}>{t("kicker")}</p>
        <h2>{t("title")}</h2>
        <p>{t("summary")}</p>
      </div>
      <div className={styles.list}>
        {steps.map((step, index) => (
          <article key={step.title} className={styles.step} data-index={index + 1}>
            <div className={styles.year}>{step.year}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <div className={styles.metrics}>
                {step.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span>{metric.value}</span>
                    <p>{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
