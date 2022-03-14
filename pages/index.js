import Head from 'next/head';
import Banner from '../components/homepage/banner';
import PlanPackage from '../components/homepage/plan-package';
import LearnMore from '../components/homepage/learn-more';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name='description' content='Matrix Homepage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Banner />
      <PlanPackage />
      <LearnMore />
    </div>
  );
}
