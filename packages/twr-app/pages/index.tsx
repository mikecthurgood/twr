import type { NextPage } from 'next';
import Head from 'next/head';
import { HomePageTemplate } from '@twr/shared/templates/home-page';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Together We Ride | Your Local Bike Shop Online | Support Local
        </title>
        <meta name="description" content="Together We Ride Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageTemplate />
    </div>
  );
};

export default Home;
