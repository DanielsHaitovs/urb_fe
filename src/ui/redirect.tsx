import styles from "@/ui/redirect.module.scss";
import Link from "next/link";

export default function RedirectTo({ label, href }: { label: string, href: string }) {
    return <Link href={href} className={styles.actionButton}>
        {label}
    </Link>
}