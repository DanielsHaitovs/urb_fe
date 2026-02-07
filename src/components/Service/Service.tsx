import { useTranslations } from "next-intl";
import styles from "@/components/Service/Service.module.scss";
import Image from "next/image";

const serviceIds = ["drilling", "maintenance", "installation"] as const;
const serviceMedia: Record<(typeof serviceIds)[number], string> = {
  drilling: "/offers/offer_1.jpg",
  maintenance: "/offers/offer_2.jpg",
  installation: "/offers/offer_3.jpg",
};

export default function Service() {
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

    return (
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
    )
}