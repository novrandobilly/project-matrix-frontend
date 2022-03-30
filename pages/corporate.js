import Head from 'next/head';
import Image from 'next/image';
import Mail from '../assets/icons/mail.svg';
import MatrixCable from '../assets/matrix-cable-system.PNG';
import GeneralBanner from '../assets/corporate-banner/general.png';
import MCIX from '../assets/corporate-banner/MCIX.png';
import MCS from '../assets/corporate-banner/MCS.png';
import DataCenter from '../assets/corporate-banner/data-center.png';

// import Testimony from '../components/business-solution/testimony';
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

      <BannerBS alt='Business Solution' bannerWidth={1536} bannerSource={[GeneralBanner, MCIX, MCS, DataCenter]} />
      {/* <Testimony /> */}
      <div className={styles['learn-more-container']}>
        <LearnMore />
      </div>
      <PlanPackage />
      <div className={styles['contact-us-container']}>
        <ContactUs />
      </div>
      <div className={styles['matrix-cable-system']}>
        <Image src={MatrixCable} width={1536} height={800} alt='Matrix Cable System' />
      </div>
      <a href='mailto:sales@napinfo.co.id' target='_blank' rel='noreferrer' className={styles['mail-icon']}>
        <div className={styles['mail-container']}>
          <Image alt='Email' src={Mail} width={30} height={30} layout='fixed' />
        </div>
        <span className={styles['contact-text']}>Connect With Us!</span>
      </a>
    </div>
  );
}
