import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Banner from '../../components/utils/banner';
import IPTransit from '../../assets/corporate-product-images/IPTransit.jpg';

import styles from './articleid.module.scss';

export default function IpTransit() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>IP Transit</title>
        <meta name='description' content='IP Transit' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner
        alt={'IP Transit Banner'}
        bannerSource={[IPTransit]}
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
          <h2 className={styles['article-title']}>IP Transit</h2>
          <p>
            The telecommunications landscape has gone through drastic changes in recent years. Simply getting onto the
            internet is not enough; having a reliable and high-speed connection has become a fundamental need,
            especially at an organizational level.
          </p>
          <p>
            Matrix IP Transit service gives customers a direct connection to reach major internet destinations with high
            quality and cost-effective internet connectivity, along with optimal availability ensured by our fully
            redundant network. Customers have the option to subscribe the bandwidth based on the destination of their
            traffic, which enables them to enjoy cost and performance benefit by distributing IP traffic regionally and
            directly to overseas partners and end users.
          </p>
        </article>
      </div>
    </div>
  );
}
