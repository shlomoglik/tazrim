import Image from "next/image";
import styles from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                dir="ltr"
                href="https://www.business-time.co.il/"
                target="_blank"
                rel="noopener noreferrer"
            >
                &copy;
                <span>created by BT GROUP</span>
                <span className={styles.logo}>
                    <Image src="/logo-symbol-b-trs.png" alt="BT LOGO" width={45} height={45} />
                </span>
            </a>
        </footer>
    )
}