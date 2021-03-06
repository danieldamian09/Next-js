import {FC} from "react";
import Head from 'next/head'
import Navbar from "../Navbar"
import styles from "./LayoutMain.module.css"

// Actualizacion para React 18 del FC
interface Props {
	children?: React.ReactNode | undefined;
}

const LayoutMain: FC<Props> = ({children}) => {
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