import Head from 'next/head';
import Hero from '../components/Hero';
import Why from '../components/Why';
import Cards from '../components/Cards';

// TODO: Make img component
// TODO: Configure blur img placeholder
// TODO: Add Services links to Nav Drawer
// TODO: Refactor CSS
// TODO: Finish about page layout
// TODO: Start Services page(s) layout
// TODO: Start Contact page layout
// TODO: Add social icons
// TODO: Add testimonial banner (HomePage)
// ?IDEA: Build a blog/vlog
// ?IDEA: Add light/dark toggle
// ?IDEA: Implement a frosted-glass effect ex: (Nav, Footer, Drawer, About, Hero)?

export async function getStaticProps() {
  const src = require('../images/logo.png?webp');
  return {
    props: {
      src,
    },
  };
}

export default function Home({ src }) {
  return (
    <>
      <Head>
        <title>Guest Media | Software Development & Videography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero src={src} />
      <Why />
      <Cards />
    </>
  );
}
