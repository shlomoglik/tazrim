import Head from 'next/Head';
import Image from 'next/image';
import Footer from '../Footer';
import styles from './layout.module.css'
import Link from "next/link"

function TopBar() {
    return <div className={styles.top}>
        <Link href="/">
            <a className={styles.logo} >
                <Image src="/logo-symbol-w-trs.png" alt="BT LOGO" width={45} height={45} />
            </a>
        </Link>
        <div style={{ textAlign: "center" }}>תזרים מזומנים</div>
    </div >
}

export default function Layout(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>תזרים מזומנים</title>
                <meta name="description" content="נוצר על ידי שלמה גליקמן" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
                    <link rel="icon" href="/favicon.ico" type="image/x-icon"></link> 
                    */}
            </Head>
            <TopBar />
            <main className={styles.main}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}