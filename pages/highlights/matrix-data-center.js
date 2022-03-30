import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Banner from '../../components/utils/banner';
import DataCenterBanner from '../../assets/corporate-product-images/DataCenter.jpg';
import styles from './articleid.module.scss';

export default function MatrixDataCenter() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Matrix Data Center</title>
        <meta name='description' content='Matrix Data Center' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner
        alt={'Matrix Data Center Banner'}
        bannerSource={[DataCenterBanner]}
        bannerHeight={525}
        bannerWidth={1536}
        bannerNav={false}
        style={{ paddingBottom: '60px' }}
      />
      <div className={styles['back-link']}>
        <Link href='/'>&lt; Back to home</Link>
      </div>
      <div className={styles['article-container']}>
        <h1 className={styles['article-container-title']}>Corporate &amp; Network Solutions</h1>
        <article>
          <h2 className={styles['article-title']}>Matrix Data Center</h2>
          <p>
            Matrix Data Centre sites provide world-class, secure and robust facilities with high-bandwidth internet
            access for corporate customers, ISPs and ASPs. By co-locating servers directly with our Data Center,
            customers can avoid the high cost of leased lines and local access charges and benefit from our large
            bandwidth capacity that will considerably improve website access speed.
          </p>
          <ul>
            Matrix <strong>Data Center</strong> located at:
            <li>Matrix Data Center JK1 (Pantai Mutiara)</li>
            <li>Matrix Data Center JK2 (Gedung Cyber 1)</li>
            <li>Matrix Data Center JK3 (Plaza Kuningan Annex)</li>
            <li>Matrix Data Center BM1 (Nongsa)</li>
            <li>Matrix Data Center SG1 (Changi North)</li>
          </ul>
          <ul>
            Technical specifications as follow:
            <li>Two-factors security authorization for a complete safety system ensure your protection</li>
            <li>Dual-Cooling system to avoid overheat guaranteed to run your data properly</li>
            <li>
              Advanced fire detection and suppression system with redundant power supply (2N electrical equipment) for
              emergency backup
            </li>
            <li>24-Hr CCTV security monitoring</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
