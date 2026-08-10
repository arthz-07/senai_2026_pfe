import Link from "next/link";
import styles from "./button.module.css";

export default function Button({
    children,
    href = "#",
    variant = "primary"
}) {

    return (

        <Link
            href={href}
            className={`${styles.button} ${styles[variant]}`}
        >
            {children}
        </Link>

    );

}