import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import styles from "./ContactLayout.module.scss";

export default function AboutLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <section className={styles.shell}>
        <div className={styles.backdrop} aria-hidden="true" />
        <div className={styles.frame}>{children}</div>
      </section>
    </>
  );
}

