"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Menu.module.scss";
import Image from "next/image";

type MenuProps = {
  variant?: "dark" | "light";
  floating?: boolean;
};

const drillSections = [
  { id: "overview", label: "Overview" },
  { id: "tech", label: "Technology" },
  { id: "specs", label: "Specifications" },
];

export function Menu({ variant = "dark", floating = false }: MenuProps) {
  const navRef = useRef<HTMLElement | null>(null);
  const dropdownRef = useRef<HTMLDetailsElement | null>(null);
  const [isPinned, setIsPinned] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsPinned(scrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const wrapperClass = [
    styles.menu,
    floating && !isPinned ? styles.floating : null,
    isPinned ? styles.pinned : null,
  ]
    .filter(Boolean)
    .join(" ");

  const useLightVariant = variant === "light" || isPinned;

  const innerClass = [
    styles.inner,
    useLightVariant ? styles.innerLight : styles.innerDark,
    floating && !isPinned ? styles.innerTransparent : null,
  ]
    .filter(Boolean)
    .join(" ");

  const spacerHeight = isPinned ? navHeight : 0;

  const handleDrillLinkClick = () => {
    if (dropdownRef.current) {
      dropdownRef.current.open = false;
    }
  };

  return (
    <>
      <nav ref={navRef} className={wrapperClass} aria-label="Primary">
        <div className={innerClass}>
          <Link href="/" className={styles.brand}>
            <Image src={"/logo.png"} className={styles.logo} alt="URB" width={100} height={24} />
          </Link>

          <ul className={styles.links}>
            <li>
              <details ref={dropdownRef} className={styles.dropdown} role="group">
                <summary className={styles.linkButton}>
                  Drill
                  <span className={styles.caret} aria-hidden="true">
                    ▾
                  </span>
                </summary>
                <div className={styles.dropdownMenu}>
                  <ul className={styles.dropdownList}>
                    {drillSections.map((section) => (
                      <li key={section.id}>
                        <Link
                          className={styles.dropdownLink}
                          href={`/#drill-${section.id}`}
                          onClick={handleDrillLinkClick}
                        >
                          {section.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
            <li>
              <Link href="/contact" className={styles.primaryLink}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={styles.spacer}
        style={{ height: spacerHeight }}
        aria-hidden="true"
      />
    </>
  );
}
