import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { getBodiesData } from './api/bodies';

type BodyData = {
  name: string;
  picture: string;
  age: number;
  solarMass: number;
}

export const getStaticProps: GetStaticProps = () => ({
  props: {
    bodies: getBodiesData(),
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
    </div>
  );
}
