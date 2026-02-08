"use client";

import type { ChangeEvent, FormEventHandler } from "react";
import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { CalendarClock, Mail, Phone, X } from "lucide-react";
import styles from "@/components/ContactCTA/ContactCTA.module.scss";
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

const defaultFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

type ActionId = keyof typeof actionIcons;
type FormField = keyof typeof defaultFormState;
type FormState = typeof defaultFormState;

type Props = {
  screen?: ScreenType;
};

export default function ContactCTA({ screen }: Props) {
  const t = useTranslations("ContactCTA");
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormState>({ ...defaultFormState });
  const [errors, setErrors] = useState<Partial<Record<FormField, string>>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const isDesktop = screen === "desktop";

  const resetForm = useCallback(() => {
    setFormData({ ...defaultFormState });
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setErrors({});
    setStatus("idle");
    resetForm();
  }, [resetForm]);

  const openModal = () => setIsModalOpen(true);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, closeModal]);

  const handleFieldChange = (field: FormField) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [field]: _removed, ...rest } = prev;
        return rest;
      });
    }
    if (status === "success") {
      setStatus("idle");
    }
  };

  const validate = () => {
    const nextErrors: Partial<Record<FormField, string>> = {};
    const email = formData.email.trim();
    const phone = formData.phone.trim();

    if (!email) {
      nextErrors.email = t("form.errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = t("form.errors.emailInvalid");
    }

    if (!phone) {
      nextErrors.phone = t("form.errors.phoneRequired");
    } else if (!/^[+]?[-()\d\s]{6,}$/.test(phone)) {
      nextErrors.phone = t("form.errors.phoneInvalid");
    }

    return nextErrors;
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      setStatus("success");
      resetForm();
    }
  };

  const getErrorId = (field: FormField) => (errors[field] ? `contact-${field}-error` : undefined);

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
          window.location.href = CONTACT_PHONE_HREF;
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
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className={styles.modalCard}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeModal}
              aria-label={t("form.buttons.close")}
            >
              <X size={18} aria-hidden="true" />
            </button>
            <div className={styles.modalHeader}>
              <p className={styles.modalKicker}>{t("kicker")}</p>
              <h3 id="contact-modal-title">{t("form.title")}</h3>
              <p>{t("form.subtitle")}</p>
            </div>
            <form className={styles.modalForm} noValidate onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="contact-name">{t("form.fields.name")}</label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={handleFieldChange("name")}
                  placeholder={t("form.fields.name")}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-email">{t("form.fields.email")}</label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={handleFieldChange("email")}
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={getErrorId("email")}
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <span id={getErrorId("email")} className={styles.errorText} role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-phone">{t("form.fields.phone")}</label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleFieldChange("phone")}
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={getErrorId("phone")}
                  placeholder="+371 20 000 000"
                />
                {errors.phone && (
                  <span id={getErrorId("phone")} className={styles.errorText} role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-message">{t("form.fields.message")}</label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={handleFieldChange("message")}
                  rows={4}
                  placeholder={t("form.fields.message")}
                />
              </div>
              {status === "success" && (
                <p className={styles.successMessage} role="status" aria-live="polite">
                  {t("form.success")}
                </p>
              )}
              <div className={styles.modalButtons}>
                <button type="submit" className={styles.primaryButton}>
                  {t("form.buttons.send")}
                </button>
                <button type="button" className={styles.secondaryButton} onClick={closeModal}>
                  {t("form.buttons.close")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
