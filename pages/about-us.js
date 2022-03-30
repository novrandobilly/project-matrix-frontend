import Head from 'next/head';
import Image from 'next/image';
import CompanyBanner from '../assets/company-banner.jpg';
import MatrixDatabase from '../assets/company-database.jpg';

import Empowering from '../assets/company-values/empowering.png';
import Excellence from '../assets/company-values/excellence.png';
import Heartfelt from '../assets/company-values/heartfelt.png';
import OneSpirit from '../assets/company-values/one-spirit.png';
import Responsive from '../assets/company-values/responsive.png';
import Synergy from '../assets/company-values/synergy.png';
import Milestones from '../assets/milestones.jpg';
import Banner from '../components/utils/banner';

import styles from './about-us.module.scss';

export default function AboutUS() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>About Us</title>
        <meta name='description' content='Matrix About Us Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Banner
        alt={'About Us Banner'}
        bannerSource={[CompanyBanner]}
        bannerHeight={525}
        bannerWidth={1536}
        bannerNav={false}
        style={{ paddingBottom: '60px' }}
      />
      <section className={styles['company-profile']}>
        <div className={styles['vision-mission']}>
          <h1>Vision</h1>
          <p>&ldquo;To Be the Best &amp; Prominent ICT Company In Delivering Solutions For The Customers&rdquo;</p>
          <h1>Mission</h1>
          <p>
            &ldquo;Become Our Customer’s Partner to Achieve Success By Providing The Best ICT Services with Quality,
            Reliability, and Speed&rdquo;
          </p>
        </div>
      </section>
      <section className={styles['about-company-container']}>
        <div className={styles['blank-space']}>
          <Image src={MatrixDatabase} alt='Company Database' width={690} height={400} />
        </div>
        <div className={styles['about-company']}>
          <h1>Our Company</h1>
          <p>
            As a pioneer in its field, NAP Info was the first neutral and independent network access provider to operate
            in Indonesia through our own sub-sea cable infrastructure, Matrix Cable System (MCS), which directly
            connecting Jakarta-Singapore. Alongside MCS, we also have a vast range of digital solutions such as Matrix
            Cable Internet eXchange (MC-IX) Matrix Data Center, Matrix Cloud and Matrix Internet. We contributes to the
            development of the Indonesian ICT world by providing the best choice of solutions for businesses and
            residentials.
          </p>
        </div>
      </section>
      <section className={styles['company-features']}>
        <p className={styles['sub-title']}>Company Values</p>
        <h1 className={styles['title-tag']}>#MATRIXHEROES</h1>
        <div className={styles['feature-item-container']}>
          <div className={styles['feature-item']}>
            <Image src={Heartfelt} alt='Heartfelt' width={65} height={50} layout='fixed' />
            <p>
              <strong>H</strong>eartfelt
            </p>
          </div>
          <div className={styles['feature-item']}>
            <Image src={Excellence} alt='Excellence' width={65} height={50} layout='fixed' />
            <p>
              <strong>E</strong>xcellence
            </p>
          </div>
          <div className={styles['feature-item']}>
            <Image src={Responsive} alt='Responsive' width={65} height={50} layout='fixed' />
            <p>
              <strong>R</strong>esponsive
            </p>
          </div>
          <div className={styles['feature-item']}>
            <Image src={OneSpirit} alt='One Spirit' width={65} height={50} layout='fixed' />
            <p>
              <strong>O</strong>ne-Spirit
            </p>
          </div>
          <div className={styles['feature-item']}>
            <Image src={Empowering} alt='Empowering' width={65} height={50} layout='fixed' />
            <p>
              <strong>E</strong>mpowering
            </p>
          </div>
          <div className={styles['feature-item']}>
            <Image src={Synergy} alt='Synergy' width={65} height={50} layout='fixed' />
            <p>
              <strong>S</strong>ynergy
            </p>
          </div>
        </div>
      </section>
      <div className={styles['milestones-container']}>
        <Image src={Milestones} alt='Milestone' width={1536} height={900} />
      </div>
    </div>
  );
}
