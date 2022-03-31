import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Banner from '../../components/utils/banner';
import InternetBanner from '../../assets/corporate-product-images/Internet.jpg';
import styles from './articleid.module.scss';

export default function MatrixInternet() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Matrix Internet</title>
        <meta name='description' content='Matrix Internet' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner
        alt={'Internet Banner'}
        bannerSource={[InternetBanner]}
        bannerHeight={525}
        bannerWidth={1536}
        bannerNav={false}
        style={{ paddingBottom: '60px' }}
      />
      <div className={styles['back-link']}>
        <Link href='/corporate'>&lt; Back to Home</Link>
      </div>
      <div className={styles['article-container']}>
        <h1 className={styles['article-container-title']}>Corporate &amp; Network Solutions</h1>
        <article>
          <h2 className={styles['article-title']}>Matrix Internet</h2>
          <p>Our 100% Fiber Optic technology provides internet connectivity to enhance your business’ needs.</p>
          <ul>
            <li>
              <ul style={{ listStyle: 'none' }}>
                <strong>Dedicated Internet</strong>
                <li>
                  Providing high performance dedicated internet through our reliable connectivity to global network,
                  supported with our excellent customer service and monitoring team. Tailored to your needs without
                  hassle.
                </li>
              </ul>
            </li>
            <li>
              <ul style={{ listStyle: 'none' }}>
                <strong>Broadband Business </strong>
                <li>
                  Boost your business with Matrix Broadband Business with speed up to 1 Gbps makes us your perfect
                  internet solution partner.
                  <ul>
                    <li>Symmetrical Upload &amp; Download</li>
                    <li>Unlimited Connection – NO FUP</li>
                    <li>100% Fiber Optic Technology</li>
                    <li>24-Hour Customer Care support</li>
                    <li>1 Public Static IP</li>
                    <li>Free WiFi Router</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}
