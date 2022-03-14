import Head from 'next/head';
import styles from './index.module.scss';
import Banner from '../components/homepage/banner';
import PlanPackage from '../components/homepage/plan-package';
import LearnMore from '../components/homepage/learn-more';
import SatisfiedCustomer from '../components/homepage/satisfied-customer';

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
      <div className={styles['learn-more-container']}>
        <LearnMore />
      </div>
      <div className={styles['satisfied-customer-container']}>
        <SatisfiedCustomer />
      </div>
    </div>
  );
}
