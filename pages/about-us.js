import Head from 'next/head';
import Image from 'next/image';
import AboutUsBanner from '../assets/about-us-banner.png';
import Award from '../assets/icons/award.svg';
import PaperPlane from '../assets/icons/paper-plane.svg';
import Shield from '../assets/icons/shield.svg';
import People from '../assets/icons/people.svg';
import Banner from '../components/utils/banner';

import styles from './about-us.module.scss';

export default function Home() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>About Us</title>
        <meta name='description' content='Matrix About Us Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Banner
        alt={'About Us Banner'}
        bannerSource={[AboutUsBanner]}
        bannerHeight={525}
        bannerNav={false}
        style={{ paddingBottom: '60px' }}
      />
      <section className={styles['company-profile']}>
        <div className={styles['vision-mission']}>
          <h1>Our Vision And Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure esse molestias, aliquid aliquam nisi ab,
            laudantium dignissimos obcaecati ipsum, mollitia doloribus. Pariatur, eveniet est. Rerum, molestiae! Esse
            numquam ducimus labore.
          </p>
        </div>
      </section>
      <section className={styles['about-company-container']}>
        <div className={styles['blank-space']}></div>
        <div className={styles['about-company']}>
          <h1>Our Company</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, at repudiandae! Officia laudantium
            voluptate id, corrupti ipsum esse molestiae quidem nemo ab mollitia distinctio amet magnam error at ratione
            sunt?
          </p>
        </div>
      </section>
      <section className={styles['company-features']}>
        <div className={styles['company-values']}>
          <div className={styles['align-left-div']}>
            <div className={styles['feature-row']}>
              <div className={styles['feature-item']}>
                <Image alt='Award' src={Award} width={80} height={80} />
                <h1>Lorem Ipsum</h1>
              </div>
              <div className={styles['feature-item']}>
                <Image alt='Paper Plane' src={PaperPlane} width={80} height={80} />
                <h1>Lorem Ipsum</h1>
              </div>
            </div>
            <div className={styles['feature-row']}>
              <div className={styles['feature-item']}>
                <Image alt='Shield' src={Shield} width={80} height={80} />
                <h1>Lorem Ipsum</h1>
              </div>
              <div className={styles['feature-item']}>
                <Image alt='People' src={People} width={80} height={80} />
                <h1>Lorem Ipsum</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['blank-space']}></div>
      </section>
    </div>
  );
}
