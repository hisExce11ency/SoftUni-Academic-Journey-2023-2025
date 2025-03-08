{
    /* <!-- Header component --> */
}
import styles from "./Header.module.css";
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.description}>
                    React Workshop - January 2024
                </span>
            </div>
        </header>
    );
}
