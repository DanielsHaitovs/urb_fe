"use client";

import Link from "next/link";
import styles from "./MenuItems.module.scss";
import Image from "next/image";
import { ScreenType } from "@/types/deviceType";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export const menuItemsList = [
  { id: "about" },
  { id: "strength" },
  { id: "offers" },
  { id: "prices" },
];

type Props = {
  screen: ScreenType;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

export function MenuItems({ screen, isOpen, setOpen }: Props) {
  const t = useTranslations("MenuItems");
  
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  if (screen === 'desktop') {
    return (
      <div className={styles.content}>
        <ul className={styles.items}>
          <li key={0} className={styles.item}>
            <Link href="/" onClick={() => setOpen(false)}>{t("main")}</Link>
          </li>
          {menuItemsList.map((section) => (
            <li key={section.id} className={styles.item}>
              <Link href={`#${section.id}`} onClick={() => setOpen(false)}>{t(section.id)}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (!isOpen) {
    return <></>;
  }

  return (
    <div className={styles.modal} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className={styles.topContent}>
          <div className={styles.close} onClick={() => setOpen(false)}>
            <X size={24} />
          </div>
          <div className={styles.brand}>
            <Link href="/">
              <Image src={"/logo.png"} className={styles.logo} alt="URB" width={60} height={60} />
            </Link>
          </div>
          <div className={styles.language}>
              EN
          </div>
      </div>
      <div className={styles.content}>
        <ul className={styles.items}>
          <li key={0} className={styles.item}>
            <Link href="/" onClick={() => setOpen(false)}>{t("main")}</Link>
          </li>
          {menuItemsList.map((section) => (
            <li key={section.id} className={styles.item}>
              <Link href={`#${section.id}`} onClick={() => setOpen(false)}>{t(section.id)}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

