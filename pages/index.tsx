import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import useSWR from 'swr';
import styles from '../styles/Home.module.css';
import { getBodiesData, Response, BodyData } from './api/bodies';

export const getStaticProps: GetStaticProps = () => ({
  props: {
    bodies: getBodiesData(),
  },
});

const fetcher = (url: string): Promise<Response<BodyData[]>> => (
  fetch(url).then((r) => r.json())
);

function Bodies({
  data,
  error,
}: {
  data: Response<BodyData[]> | undefined,
  error: Error | undefined,
}): JSX.Element {
  if (error) {
    return (
      <div>
        <h2>Error Loading Bodies</h2>
      </div>
    );
  }
  if (!data) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  const { data: bodies } = data;
  return (
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
  );
}

export default function Home({
  bodies,
}: {
  bodies: BodyData[];
}): JSX.Element {
  const {
    data,
    error,
  } = useSWR<Response<BodyData[]>, Error>(
    '/api/bodies',
    fetcher,
    { initialData: { data: bodies } },
  );
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
        <Bodies data={data} error={error} />
      </main>
    </div>
  );
}
