import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SpeedTest from '../../assets/speed-test.png';
import GameDay from '../../assets/game-day.png';
import styles from './learn-more.module.scss';

export default function LearnMore() {
  return (
    <div className={styles['container']}>
      <div className={styles['learn-more']}>
        <div className={styles['description']}>
          <h1>Who We Are</h1>
          <p>
            PT NAP Info Lintas Nusa (Matrix NAP Info) is a prominent telecommunication company with more than 20 years
            experience di Indonesia. We also conjointly operate sub-sea fiber optic infrastructures with Singapore –
            based, Matrix Networks Pte. Ltd., and initiated our very own internet exchange that has become one of the
            largest internet exchanges of the country. With an integrated ecosystem of both Network &amp; Managed
            Service Provider, Matrix NAP Info has set to commit delivering solutions for businesses and engineering the
            future.
          </p>
          <Link href='/about-us' passHref>
            <button className={styles['learn-more-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>
        <div className={styles['image-container']}>
          <Image alt='Speed Test' src={SpeedTest} width={600} height={450} />
        </div>
      </div>
      <div className={`${styles['learn-more']} ${styles['learn-more-2']}`}>
        <div className={styles['description']}>
          <h1>Perfect Solutions For Your Digital Lifestyle</h1>
          <p>
            Maximize your digital lifestyle experience with the top-notch solution in its class. Connecting faster to
            the world through global content without barriers and without limits. A quality internet network, at ease,
            and the only protected broadband with compensation guarantee in Indonesia
          </p>
          <Link href='/about-us' passHref>
            <button className={styles['learn-more-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>
        <div className={styles['image-container']}>
          <Image alt='Game Day' src={GameDay} width={700} height={525} />
        </div>
      </div>
    </div>
  );
}
