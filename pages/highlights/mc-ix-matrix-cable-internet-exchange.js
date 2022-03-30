import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import MCIXGlobalMap from '../../assets/mcix-global-map.png';
import Banner from '../../components/utils/banner';
import MCIXBanner from '../../assets/corporate-product-images/MCIX.jpg';

import styles from './articleid.module.scss';

export default function MCIX() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>MC-IX</title>
        <meta name='description' content='MC-IX (Matrix Cable Internet eXchange)' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner
        alt={'IP Transit Banner'}
        bannerSource={[MCIXBanner]}
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
          <h2 className={styles['article-title']}>MC-IX (Matrix Cable Internet eXchange)</h2>
          <p>
            Never in history has the world seen such a massive demand to connect globally as there is today. The
            Internet becomes a means to carry out various activities, while poor quality connectivity becomes the new
            public enemy. Everyone is always seeking for faster and better internet access, regardless of their age,
            background, or financial ability.
          </p>
          <p>
            Matrix has always been fully committed to providing only the best service for Indonesia’s internet users.
            This led us to initiate our very own Matrix Cable Internet Exchange (MC-IX), which enables users to exchange
            internet traffic openly with other internet networks around the globe. We continuously invite more ISPs and
            ASPs to directly exchange their internet traffic with us, to provide faster and better-quality internet
            every time.
          </p>
          <div className={styles['article-image-sub']}>
            <Image src={MCIXGlobalMap} width={1006} height={754} alt='Chatting' />
          </div>
        </article>
      </div>
    </div>
  );
}
