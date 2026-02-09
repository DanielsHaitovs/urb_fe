"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { CalendarClock, Mail, Phone } from "lucide-react";
import styles from "@/components/ContactCTA/ContactCTA.module.scss";
import ModalContactForm from "@/components/ContactCTA/Modal/Form";
import {
  CONTACT_EMAIL,
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
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDesktop = screen === "desktop";

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleOpen = () => {
      openModal();
    };

    window.addEventListener("urb:open-contact-form", handleOpen);

    return () => {
      window.removeEventListener("urb:open-contact-form", handleOpen);
    };
  }, [openModal]);

  const handleActionClick = (actionId: ActionId) => {
    if (actionId === "mail") {
      openModal();
      return;
    }

    if (actionId === "call") {
      if (isDesktop) {
        router.push(CONTACT_SCHEDULE_LINK);
      } else {
        if (typeof window !== "undefined") {
          window.location.assign(CONTACT_PHONE_HREF);
        }
      }
      return;
    }

    if (actionId === "schedule") {
      router.push(CONTACT_SCHEDULE_LINK);
    }
  };

  const actions: Array<{
    id: ActionId;
    aria: string;
  }> = [
    {
      id: "call",
      aria: t("actions.call.aria", { phone: CONTACT_PHONE_DISPLAY }),
    },
    {
      id: "mail",
      aria: t("actions.mail.aria", { email: CONTACT_EMAIL }),
    },
    {
      id: "schedule",
      aria: t("actions.schedule.aria"),
    },
  ];

  return (
    <section className={styles.contact} data-screen={screen} data-contact-cta>
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
          {actions.map(({ id, aria }) => {
            const Icon = actionIcons[id];
            return (
              <button
                key={id}
                type="button"
                className={styles.action}
                aria-label={aria}
                onClick={() => handleActionClick(id)}
              >
                <div className={styles.iconWrap}>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className={styles.actionCopy}>
                  <span className={styles.actionLabel}>{t(`actions.${id}.label`)}</span>
                  <p className={styles.actionHelper}>{t(`actions.${id}.helper`)}</p>
                </div>
                <span className={styles.actionArrow} aria-hidden="true">→</span>
              </button>
            );
          })}
        </div>
      </div>
      <ModalContactForm isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
