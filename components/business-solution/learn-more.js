import React from 'react';
import Image from 'next/image';
import LettersAround from '../../assets/letters-around.png';
import VoiceControl from '../../assets/voice-control.png';
import styles from './learn-more.module.scss';

export default function LearnMore() {
  return (
    <div className={styles['container']}>
      <div className={styles['learn-more']}>
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
        <Image alt='Letters Around' src={LettersAround} width={500} height={500} />
      </div>
      <div className={`${styles['learn-more']} ${styles['learn-more-2']}`}>
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
      </div>
    </div>
  );
}
