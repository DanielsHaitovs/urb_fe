import styles from "@/components/Service/Drill/Layers.module.scss";
import { Droplet, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

const featureIds = ["survey", "hardware", "compliance", "aftercare"] as const;

export default function DrillLayers() {
    const t = useTranslations("DrillingPage");

    const features = featureIds.map((id) => ({
        id,
        title: t(`features.${id}.title`),
        body: t(`features.${id}.body`),
        bullets: (t.raw(`features.${id}.bullets`) as string[]) ?? [],
    }));
    
    return (
        <section className={styles.featureSection}>
            <header>
                <p className={styles.kicker}>{t("features.kicker")}</p>
                <h2>{t("features.title")}</h2>
                <p>{t("features.summary")}</p>
            </header>
            <div className={styles.featureGrid}>
                {features.map((feature, index) => (
                    <article key={feature.id} className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            {(index % 4 === 0 && <Droplet size={20} />) ||
                            (index % 4 === 1 && <Layers size={20} />) ||
                            (index % 4 === 2 && <Sparkles size={20} />) ||
                            (index % 4 === 3 && <ShieldCheck size={20} />)}
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.body}</p>
                        <ul>
                            {feature.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}