"use client";

import type { ChangeEvent, FormEventHandler } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import styles from "@/components/ContactCTA/Form.module.scss";

const defaultFormState = {
	name: "",
	email: "",
	phone: "",
	message: "",
};

type FormField = keyof typeof defaultFormState;
type FormState = typeof defaultFormState;

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

export default function ContactForm({ isOpen, onClose }: Props) {
	const t = useTranslations("ContactCTA");
	const [formData, setFormData] = useState<FormState>({ ...defaultFormState });
	const [errors, setErrors] = useState<Partial<Record<FormField, string>>>({});
	const [status, setStatus] = useState<"idle" | "success">("idle");
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (!isOpen) {
			setErrors({});
			setStatus("idle");
			setFormData({ ...defaultFormState });
			return;
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

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

	if (!isMounted || !isOpen) {
		return null;
	}

	return createPortal(
		<div
			className={styles.modalOverlay}
			role="presentation"
			onClick={(event) => {
				if (event.target === event.currentTarget) {
					onClose();
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
					onClick={onClose}
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
						<button type="button" className={styles.secondaryButton} onClick={onClose}>
							{t("form.buttons.close")}
						</button>
					</div>
				</form>
			</div>
		</div>,
		document.body
	);
}
