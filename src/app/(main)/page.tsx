import styles from "./HomePage.module.scss";

const specHighlights = [
  { label: "Torque", value: "3400 Nm" },
  { label: "Range", value: "12 km" },
  { label: "Runtime", value: "18 hrs" },
  { label: "Sensors", value: "Lidar + thermal" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section id="drill-overview" className={styles.section}>
        <h2>Immersive drill overview</h2>
        <p>
          The Urb drill platform choreographs physical hardware, light, and
          responsive media so field teams can experiment with new urban
          interventions safely.
        </p>
      </section>

      <section id="drill-tech" className={styles.section}>
        <h2>Interaction stack</h2>
        <p>
          Modular sensors, open spatial audio, and kinetic rigs let artists layer
          precise narratives onto real streets without shutting them down.
        </p>
      </section>

      <section id="drill-specs" className={styles.section}>
        <h2>Specifications snapshot</h2>
        <div className={styles.grid}>
          {specHighlights.map((item) => (
            <article key={item.label} className={styles.card}>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
