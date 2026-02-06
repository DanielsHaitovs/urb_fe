import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import styles from "./OffersPage.module.scss";

const serviceIds = ["drilling", "maintenance", "installation"] as const;
const scenarioIds = ["rockyTerrain", "seasonalUsage", "retrofit"] as const;

const serviceMedia: Record<(typeof serviceIds)[number], string> = {
  drilling: "/offers/offer_1.jpg",
  maintenance: "/offers/offer_2.jpg",
  installation: "/offers/offer_3.jpg",
};

export default function OffersPage() {
  const t = useTranslations("OffersPage");

  const services = serviceIds.map((id) => {
    const deliverables = (t.raw(`services.${id}.deliverables`) as string[]) ?? [];
    const cornerCases = (t.raw(`services.${id}.cornerCases`) as string[]) ?? [];

    return {
      id,
      title: t(`services.${id}.title`),
      description: t(`services.${id}.description`),
      timeline: t(`services.${id}.timeline`),
      deliverables,
      cornerCases,
      image: serviceMedia[id],
    };
  });

  const scenarios = scenarioIds.map((id) => ({
    id,
    title: t(`scenarios.list.${id}.title`),
    body: t(`scenarios.list.${id}.body`),
    bullets: (t.raw(`scenarios.list.${id}.bullets`) as string[]) ?? [],
  }));

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>{t("kicker")}</p>
          <h1 className={styles.title}>
            <span>{t("title.line1")}</span>
            <span className={styles.accent}>{t("title.line2")}</span>
          </h1>
          <p className={styles.summary}>{t("summary")}</p>
          <p className={styles.note}>{t("note")}</p>
        </div>
        <div className={styles.heroBadges}>
          <div className={styles.heroBadge}>
            <span>{t("badge.top")}</span>
            <strong>{t("badge.bottom")}</strong>
          </div>
          <div className={`${styles.heroBadge} ${styles.supportBadge}`}>
            <span>{t("supportBadge.top")}</span>
            <strong>{t("supportBadge.bottom")}</strong>
          </div>
        </div>
      </header>

      <section className={styles.serviceGrid}>
        {services.map((service) => (
          <article key={service.id} className={styles.serviceCard}>
            <div className={styles.mediaWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className={styles.mediaImage}
                priority={service.id === "drilling"}
              />
              <div className={styles.mediaTint} />
            </div>
            <div className={styles.serviceBody}>
              <div className={styles.serviceHeader}>
                <p className={styles.timeline}>{service.timeline}</p>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <div className={styles.detailGroup}>
                <p className={styles.detailTitle}>{t("labels.deliverables")}</p>
                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.detailGroup}>
                <p className={styles.detailTitle}>{t("labels.cornerCases")}</p>
                <ul>
                  {service.cornerCases.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.scenarioSection}>
        <div className={styles.scenarioCopy}>
          <p className={styles.kicker}>{t("scenarios.kicker")}</p>
          <h2>{t("scenarios.title")}</h2>
          <p>{t("scenarios.summary")}</p>
        </div>
        <div className={styles.scenarioGrid}>
          {scenarios.map((scenario) => (
            <article key={scenario.id} className={styles.scenarioCard}>
              <h3>{scenario.title}</h3>
              <p>{scenario.body}</p>
              <ul>
                {scenario.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.kicker}>{t("cta.kicker")}</p>
          <h2>{t("cta.title")}</h2>
          <p>{t("cta.summary")}</p>
        </div>
        <Link href="/contact" className={styles.ctaButton}>
          <span>{t("cta.button")}</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
        <p className={styles.ctaHint}>{t("cta.hint")}</p>
      </section>
    </article>
  );
}
