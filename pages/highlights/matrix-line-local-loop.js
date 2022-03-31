import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import DataCenterMap from '../../assets/data-center-map.PNG';
import Banner from '../../components/utils/banner';
import LocalLoopBanner from '../../assets/corporate-product-images/LocalLoop.jpg';
import Link from 'next/link';

import styles from './articleid.module.scss';

export default function MatrixLine() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Matrix Line</title>
        <meta name='description' content='Matrix Line (Local Loop)' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner
        alt={'Local Loop Banner'}
        bannerSource={[LocalLoopBanner]}
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
          <h2 className={styles['article-title']}>Matrix Line (Local Loop)</h2>
          <p>
            A layer 2 transport that connects from any demarcation point of the customer premises to the edge of the
            common carrier or telecommunications service provider&apos;s network. Matrix NAP Info&apos;s Local Loop
            provides a secure fiber optic connectivity solution for a high bandwidth and high availability needs.
          </p>
          <p>
            With presence in more than 22 Data Center locations at Greater Jakarta Area, makes us the most connected
            DC-2-DC Solution for your business.
          </p>
          <div className={styles['article-image-sub']}>
            <Image src={DataCenterMap} width={1339} height={756} alt='Chatting' />
          </div>
        </article>
      </div>
    </div>
  );
}
