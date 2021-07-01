import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home(): React.ReactNode {
  return (
    <div className={styles.container}>
      <Head>
        <title>Celestial Bodies of the Solar System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Celestial Bodies of the Solar System
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Planet Name</h2>
            <Image src="/images/planet.jpg" alt="Image of Planet" width={100} height={100} />
            <dl>
              <dt>Age</dt>
              <dd>5.03 Billion Years Old</dd>
              <dt>Solar Mass</dt>
              <dd>
                0.03 &times;10
                <sup>-6</sup>
              </dd>
            </dl>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
