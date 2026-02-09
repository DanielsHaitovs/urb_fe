"use client";

import styles from "@/components/Banner/Actions/InfoActions.module.scss";
import RedirectTo from "@/ui/actions/redirect";

export default function InfoActions({ actions }: { actions: { label: string; href: string }[] }) {
  return (
        <div className={styles.actions} aria-label="Quick actions">
            {actions.map((action) => (
            <div className={styles.action} key={action.href}>
                <RedirectTo className="banner" href={action.href} label={action.label} />
            </div>
            ))}
        </div>
  );
}