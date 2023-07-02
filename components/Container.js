import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";

export default function Container(props) {
    const { children, title } = props;
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Self-hosted anonymous inbox" />
                <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
                <link rel="shortcut icon" href="https://evan.beee.top/favicon/evan-v2/favicon.ico" />
            </Head>
            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                    Powered by {"Evan Luo and"}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
}
