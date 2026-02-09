"use client";

import styles from "@/components/ContactCTA/ContactDirectAccess.module.scss";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "@/lib/contactDetails";
import { useScreenSize } from "@/providers/ScreenTypeProvider";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactDirectAccess() {
  const screen = useScreenSize();
  const isMobile = screen === "mobile";

  const handlePhoneClick = () => {
    if (!isMobile) {
      return;
    }

    if (typeof window !== "undefined") {
      window.location.href = CONTACT_PHONE_HREF;
    }
  };

  return (
    <section className={styles.main} aria-label="Direct contact options">
      <div className={styles.card}>
        <Phone className={styles.icon} size={20} aria-hidden="true" />
        <div className={styles.content}>
            <p className={styles.label}>Phone</p>
            <p className={styles.value}>{CONTACT_PHONE_DISPLAY}</p>
        </div>
        <button
          type="button"
          className={styles.action}
          onClick={handlePhoneClick}
          aria-label={`Call URB at ${CONTACT_PHONE_DISPLAY}`}
        >
            Tap to call
        </button>
      </div>
      <div className={styles.card}>
        <Mail className={styles.icon} size={20} aria-hidden="true" />
        <div className={styles.content}>
            <p className={styles.label}>Email</p>
            <p className={styles.value}>{CONTACT_EMAIL}</p>
        </div>
        <Link href={CONTACT_EMAIL_HREF} className={styles.action} aria-label={`Email URB at ${CONTACT_EMAIL}`}>
          Send an email
        </Link>
      </div>
    </section>
  );
}
