import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ActivityIcon, TestBellIcon } from 'iconico'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de trabajadores</title>
        <meta name="description" content="Lista de trabajadores Arca de Papel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Trabajadores <a href="https://arcadepapel.net">Arca de Papel</a></h2>
      </main>

    </div>
  )
}
