"use client";

import styles from "@/app/contact/ContactPage.module.scss";
import ContactDirectAccess from "@/components/ContactCTA/ContactDirectAccess";
import ContactForm from "@/components/ContactCTA/Form";
import { ScrollTopButton } from "@/components/ScrollTopButton/ScrollTopButton";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <ContactDirectAccess />
      <ContactForm />
      <ScrollTopButton />
    </main>
  );
}
