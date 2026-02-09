"use client";

import type { ChangeEvent, FormEventHandler } from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "@/components/ContactCTA/Form.module.scss";

const defaultFormState = {
	name: "",
	email: "",
	phone: "",
	message: "",
};

type FormField = keyof typeof defaultFormState;
type FormState = typeof defaultFormState;

export default function ContactForm() {
	const t = useTranslations("ContactCTA");
	const [formData, setFormData] = useState<FormState>({ ...defaultFormState });
	const [errors, setErrors] = useState<Partial<Record<FormField, string>>>({});
	const [status, setStatus] = useState<"idle" | "success">("idle");

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
			setFormData({ ...defaultFormState });
		}
	};

	const getErrorId = (field: FormField) => (errors[field] ? `contact-${field}-error` : undefined);

	return 			<div
				className={styles.modalCard}
				role="dialog"
				aria-modal="true"
				aria-labelledby="contact-modal-title"
			>
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
					</div>
				</form>
			</div>;
}
