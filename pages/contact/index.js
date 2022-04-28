import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Humberto</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <p>Contact</p>
        <h1 className={styles.title}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/contact.js</code>
        </p>

      </main>
    </div>
  );
}
