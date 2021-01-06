import Head from 'next/head';
import About from '../../components/About';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Guest Media | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </>
  );
}
