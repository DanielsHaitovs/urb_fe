import styles from "@/ui/actions/redirect.module.scss";
import Link from "next/link";

export default function RedirectTo({ label, href, className }: { label: string, href: string; className: "banner" | "button" }) {
    switch (className) {
        case "banner":
            return <Link href={href} className={styles.banner}>
                {label}
            </Link>
        case "button":
            return <Link href={href} className={styles.actionButton}>
                {label}
            </Link>
        default:            
            return <Link href={href}>
                {label}
            </Link>
    }
}