import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Banner from '../../components/utils/banner';
import IPLCBanner from '../../assets/corporate-product-images/IPLC.jpg';

import styles from './articleid.module.scss';

export default function IPLC() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>IPLC</title>
        <meta name='description' content='IPLC (International Private Leased Circuit)' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner
        alt={'IPLC Banner'}
        bannerSource={[IPLCBanner]}
        bannerHeight={525}
        bannerWidth={1536}
        bannerNav={false}
        style={{ paddingBottom: '60px' }}
      />
      <div className={styles['back-link']}>
        <Link href='/corporate'>&lt; Back</Link>
      </div>
      <div className={styles['article-container']}>
        <h1 className={styles['article-container-title']}>Corporate &amp; Network Solutions</h1>
        <article>
          <h2 className={styles['article-title']}>IPLC (International Private Leased Circuit)</h2>
          <p>
            Choosing the right solution for a company&apos;s telecommunication Requirements is not an easy decision to
            make, since it could pretty much determine its success. In business nowadays, it&apos;s about getting the
            shortest, fastest, and most reliable route to the internet that counts, and we understand that every
            internet provider has their own way to approach this very goal.
          </p>
          <p>
            Our Matrix International Private Leased Circuit (IPLC) enables telecom carriers and other service providers
            to extend the reach of their own leased line services to and from Indonesia and Singapore, forming a
            tailor-made connectivity that is highly reliable to suit their needs. Customers can easily connect to their
            preferred upstreams through our privately owned integrated network architecture of undersea and terrestrial
            cables and extensive local backhauling in Jakarta, Batam and Singapore.
          </p>
        </article>
      </div>
    </div>
  );
}
