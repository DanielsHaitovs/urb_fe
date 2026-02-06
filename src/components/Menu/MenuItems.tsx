"use client";

import Link from "next/link";
import styles from "@/components/Menu/MenuItems.module.scss";
import Image from "next/image";
import { ScreenType } from "@/types/deviceType";
import { Mail, Phone, X } from "lucide-react";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { LocaleToggleButton } from "@/components/Language/LocaleToggleButton";

export const menuItemsList = [
  { id: "about" },
  { id: "strength" },
  { id: "offers" },
  { id: "prices" },
];

const CONTACT_PHONE = "+37120000000";
const CONTACT_PHONE_DISPLAY = "+371 20 000 000";
const CONTACT_EMAIL = "info@urb.lv";

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
        <div className={styles.contentHeader} >
            <div className={styles.close} onClick={() => setOpen(false)}>
            <X size={24} />
          </div>
          <div className={styles.brand}>
            <Link href="/" onClick={() => setOpen(false)}>
              <Image src={"/logo.png"} className={styles.logo} alt="URB" width={60} height={60} />
            </Link>
          </div>
          <div className={styles.language}>
            <LocaleToggleButton />
          </div>
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
        <div className={styles.actions}>
          <Link className={styles.phone} href={"tel:" + CONTACT_PHONE} aria-label={`Call URB at ${CONTACT_PHONE_DISPLAY}`}>
            <Phone size={18} aria-hidden="true" />
            <span>{t("call")}</span>
          </Link>
          <Link className={styles.mailTo} href={"mailto:" + CONTACT_EMAIL} aria-label={`Email URB at ${CONTACT_EMAIL}`}>
            <Mail size={18} aria-hidden="true" />
            <span>{t("email")}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

