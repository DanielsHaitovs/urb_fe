"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CalendarClock, Mail, Phone } from "lucide-react";
import styles from "./ContactCTA.module.scss";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_SCHEDULE_LINK,
} from "@/lib/contactDetails";
import { ScreenType } from "@/types/deviceType";

const actionIcons = {
  call: Phone,
  mail: Mail,
  schedule: CalendarClock,
};

type ActionId = keyof typeof actionIcons;

type Props = {
  screen?: ScreenType;
};

export default function ContactCTA({ screen }: Props) {
  const t = useTranslations("ContactCTA");

  const actions: Array<{
    id: ActionId;
    href: string;
    aria: string;
  }> = [
    {
      id: "call",
      href: CONTACT_PHONE_HREF,
      aria: t("actions.call.aria", { phone: CONTACT_PHONE_DISPLAY }),
    },
    {
      id: "mail",
      href: CONTACT_EMAIL_HREF,
      aria: t("actions.mail.aria", { email: CONTACT_EMAIL }),
    },
    {
      id: "schedule",
      href: CONTACT_SCHEDULE_LINK,
      aria: t("actions.schedule.aria"),
    },
  ];

  return (
    <section className={styles.contact} data-screen={screen}>
      <div className={styles.orbitGlow} aria-hidden="true" />
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.kicker}>{t("kicker")}</p>
          <h2 className={styles.title}>
            <span>{t("title.line1")}</span>
            <span className={styles.highlight}>{t("title.line2")}</span>
          </h2>
          <p className={styles.summary}>{t("summary")}</p>
        </div>
        <div className={styles.actions}>
          {actions.map(({ id, href, aria }) => {
            const Icon = actionIcons[id];
            return (
              <Link key={id} href={href} className={styles.action} aria-label={aria}>
                <div className={styles.iconWrap}>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className={styles.actionCopy}>
                  <span className={styles.actionLabel}>{t(`actions.${id}.label`)}</span>
                  <p className={styles.actionHelper}>{t(`actions.${id}.helper`)}</p>
                </div>
                <span className={styles.actionArrow} aria-hidden="true">→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
