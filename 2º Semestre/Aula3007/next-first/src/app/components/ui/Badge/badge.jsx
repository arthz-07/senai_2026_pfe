import styles from "./badge.module.css";

export default function Badge({ children }) {
    return (
        <span className={styles.badge}>
            {children}
        </span>
    );
}