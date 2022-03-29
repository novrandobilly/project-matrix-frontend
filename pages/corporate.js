import Head from 'next/head';
import Testimony from '../components/business-solution/testimony';
import LearnMore from '../components/business-solution/learn-more';
import BannerBS from '../components/business-solution/bannerBS';
import PlanPackage from '../components/business-solution/plan-package';
import ContactUs from '../components/business-solution/contact-us';

import styles from './corporate.module.scss';

export default function BusinessSolution() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Business</title>
        <meta name='description' content='Matrix Business Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <BannerBS alt='Business Solution' />
      <Testimony />
      <div className={styles['learn-more-container']}>
        <LearnMore />
      </div>
      <PlanPackage />
      <div className={styles['contact-us-container']}>
        <ContactUs />
      </div>
    </div>
  );
}
