import Head from 'next/head'
import Navbar from "../Navbar"
import styles from "./LayoutMain.module.css"

const LayoutMain = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Humberto</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default LayoutMain