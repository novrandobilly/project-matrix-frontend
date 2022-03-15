import React from 'react';
import Image from 'next/image';
import HorrorMovie from '../../assets/horror-movie.png';
import RightArrow from '../../assets/icons/right-arrow-find-blue.svg';
import styles from './addons.module.scss';

export default function AddOns() {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <h1 className={styles['title']}>Add-Ons</h1>
        <p className={styles['subtitle']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum deserunt laudantium sequi magni ex velit
          praesentium culpa modi accusantium.
        </p>
      </div>
      <div className={styles['addons-list']}>
        <div className={styles['addons-card']}>
          <div className={styles['image-container']}>
            <div className={styles['card-image']}>
              <Image alt='Horror Movie' src={HorrorMovie} width={270} height={200} />
            </div>
          </div>
          <h3>TV</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor optio, iste nulla quo totam pariatur numquam
            voluptates eaque magni ab.
          </p>
          <button>
            <span>Find out more</span> <Image alt='Right Arrow' src={RightArrow} width={15} height={15} />
          </button>
        </div>
        <div className={styles['addons-card']}>
          <div className={styles['image-container']}>
            <div className={styles['card-image']}>
              <Image alt='Horror Movie' src={HorrorMovie} width={270} height={200} />
            </div>
          </div>
          <h3>TV</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor optio, iste nulla quo totam pariatur numquam
            voluptates eaque magni ab.
          </p>
          <button>
            <span>Find out more</span> <Image alt='Right Arrow' src={RightArrow} width={15} height={15} />
          </button>
        </div>
        <div className={styles['addons-card']}>
          <div className={styles['image-container']}>
            <div className={styles['card-image']}>
              <Image alt='Horror Movie' src={HorrorMovie} width={270} height={200} />
            </div>
          </div>
          <h3>TV</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor optio, iste nulla quo totam pariatur numquam
            voluptates eaque magni ab.
          </p>
          <button>
            <span>Find out more</span> <Image alt='Right Arrow' src={RightArrow} width={15} height={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
