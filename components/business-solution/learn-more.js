import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SolutionMindset from '../../assets/solution-mindset-yellow.svg';
import VoiceControl from '../../assets/voice-control.png';
import styles from './learn-more.module.scss';

export default function LearnMore() {
  const [show, setShow] = useState(false);
  return (
    <div className={styles['container']}>
      <div className={styles['learn-more']}>
        <div className={styles['description']}>
          <h1>Digital Solution</h1>
          <p>
            Our digital solutions for your business offers a vast range of services that tailored to your needs.
            Connecting you faster to the world.
          </p>
          <button
            className={styles['learn-more-button']}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}>
            <strong>See Our Solutions</strong>
          </button>
          <div
            className={`${styles['solution-options-container']} ${!show ? styles['hide'] : ''}`}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}>
            <div className={styles['solution-options']}>
              <Link href='/highlights/iplc-international-private-leased-circuit'>&gt; IPLC</Link>
              <Link href='/highlights/ip-transit'>&gt; IP Transit</Link>
              <Link href='/highlights/mc-ix-matrix-cable-internet-exchange'>&gt; MC-IX</Link>
              <Link href='/highlights/matrix-data-center'>&gt; Matrix Data Center</Link>
              <Link href='/highlights/matrix-line-local-loop'>&gt; Matrix Line</Link>
              <Link href='/highlights/matrix-internet'>&gt; Matrix Internet</Link>
              <Link href='/highlights/matrix-cloud'>&gt; Matrix Cloud</Link>
            </div>
          </div>
        </div>
        <Image alt='Solution Mindset' src={SolutionMindset} width={600} height={400} />
      </div>
      {/* <div className={`${styles['learn-more']} ${styles['learn-more-2']}`}>
        <div className={styles['description']}>
          <h1>Lorem Ipsum Dolor Sit</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa numquam id eos optio consectetur inventore
            perferendis dolore distinctio, reiciendis ducimus quos eveniet cum rem veritatis nulla. Voluptas debitis qui
            consequuntur!
          </p>
          <button className={styles['learn-more-button']}>
            <strong>Learn More</strong>
          </button>
        </div>
        <Image alt='Voice Control' src={VoiceControl} width={600} height={500} />
      </div> */}
    </div>
  );
}
