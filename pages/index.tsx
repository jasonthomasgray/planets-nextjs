import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

type BodyData = {
  name: string;
  picture: string;
  age: number;
  solarMass: number;
}

export const getStaticProps: GetStaticProps = () => ({
  props: {
    bodies: [{
      name: 'Mercury',
      picture: '/images/mercury.jpeg',
      age: 4.503,
      solarMass: 0.166014,
    },
    {
      name: 'Venus',
      picture: '/images/venus.jpeg',
      age: 4.503,
      solarMass: 2.08106272,
    }],
  },
});

export default function Home({
  bodies,
}: {
  bodies: BodyData[];
}): React.ReactNode {
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
          {bodies.map(({
            name,
            picture,
            age,
            solarMass,
          }) => (
            <div className={styles.card} key={name}>
              <h2>{name}</h2>
              <Image src={picture} alt="Image of {name}" width={100} height={100} />
              <dl>
                <dt>Age</dt>
                <dd>
                  {age}
                  {' '}
                  Billion Years Old
                </dd>
                <dt>Solar Mass</dt>
                <dd>
                  {solarMass}
                  &times;10
                  <sup>-6</sup>
                  {' '}
                  M
                  <sub>☉</sub>
                </dd>
              </dl>
            </div>
          ))}
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
