import Head from 'next/head'
import styles from './Layout.module.css'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Highlight Tabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.app}>
        <div className={styles.browser}>
          <Header />
        <div className={styles.viewport}>{children}</div>
        </div>
      </main>
    </div>
  )
}
