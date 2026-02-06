"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.scss";

const serviceLinks = [
  { id: "drilling", href: "/#daily-solutions", labelKey: "nav.services.links.drilling" },
  { id: "survey", href: "/#clean-water", labelKey: "nav.services.links.survey" },
  { id: "maintenance", href: "/#daily-solutions", labelKey: "nav.services.links.maintenance" },
] as const;

const resourceLinks = [
  { id: "process", href: "/#clean-water", labelKey: "nav.resources.links.process" },
  { id: "pricing", href: "/#clean-water", labelKey: "nav.resources.links.pricing" },
  { id: "warranty", href: "/#clean-water", labelKey: "nav.resources.links.warranty" },
] as const;

export default function Footer() {
  const t = useTranslations("Footer");
  const menuT = useTranslations("MenuItems");
  const year = new Date().getFullYear();

  const navSections = [
    {
      id: "compass",
      title: t("nav.compass.title"),
      links: [
        { id: "home", href: "/", label: menuT("main") },
        { id: "strength", href: "/#strength", label: menuT("strength") },
        { id: "offers", href: "/#daily-solutions", label: menuT("offers") },
        { id: "prices", href: "/#clean-water", label: menuT("prices") },
        { id: "contact", href: "/#contact", label: menuT("call") },
      ],
    },
    {
      id: "services",
      title: t("nav.services.title"),
      links: serviceLinks.map((link) => ({
        id: link.id,
        href: link.href,
        label: t(link.labelKey as Parameters<typeof t>[0]),
      })),
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.mesh} aria-hidden="true" />
      <div className={styles.orbit} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.topRegion}>
          <div className={styles.brand}>
            <p className={styles.kicker}>{t("kicker")}</p>
            <h2 className={styles.title}>
              <span>{t("title.line1")}</span>
              <span className={styles.highlight}>{t("title.line2")}</span>
            </h2>
            <p className={styles.summary}>{t("summary")}</p>
          </div>
          <div className={styles.navRegion}>
            {navSections.map((section) => (
              <div key={section.id} className={styles.navColumn}>
                <p className={styles.navTitle}>{section.title}</p>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <Link href={link.href} className={styles.navLink}>
                        <span>{link.label}</span>
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div>
            <p>{t("legal.rights", { year })}</p>
            <span>{t("legal.address")}</span>
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/#clean-water">{t("legal.links.privacy")}</Link>
            <Link href="/contact">{t("legal.links.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}