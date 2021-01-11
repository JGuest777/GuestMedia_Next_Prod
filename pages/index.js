import Head from 'next/head';
import Hero from '../components/Hero';
import Why from '../components/Why';
import Cards from '../components/Cards';
import generateLazyImage from '../components/Utils/GenerateLazyImage';

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
  const heroImage = await generateLazyImage(
    'https://images.unsplash.com/photo-1476058262011-9a78b43bb832?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGFpcnBsYW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  );
  return {
    props: { heroImage },
  };
}

export default function Home({ heroImage }) {
  return (
    <>
      <Head>
        <title>Guest Media | Software Development & Videography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero heroImage={heroImage} />
      <Why />
      <Cards />
    </>
  );
}
