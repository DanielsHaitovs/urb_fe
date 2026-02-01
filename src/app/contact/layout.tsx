import type { ReactNode } from "react";
import { Menu } from "@/components/Menu/Menu";
import styles from "./AboutLayout.module.scss";

export default function AboutLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
<>
      <Menu variant="light" />
      <section className={styles.shell}>
        <div className={styles.backdrop} aria-hidden="true" />
        <div className={styles.frame}>{children}</div>
      </section>
      </>
  );
}

