import Head from 'next/head';
import Banner from '../components/homepage/banner';
import PlanPackage from '../components/homepage/plan-package';

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
    </div>
  );
}
