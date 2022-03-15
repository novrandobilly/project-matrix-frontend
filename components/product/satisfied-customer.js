import React from 'react';
import Image from 'next/image';
import Star from '../../assets/icons/star.svg';
import LeftArrow from '../../assets/icons/left-arrow-gray.svg';
import RightArrow from '../../assets/icons/right-arrow-red.svg';
import DummyAvatar from '../../assets/dummy-avatar.png';
import styles from './satisfied-customer.module.scss';

export default function SatisfiedCustomer() {
  return (
    <div className={styles['satisfied-customer']}>
      <div className={styles['title']}>
        <h1>Our</h1>
        <h1>Satisfied</h1>
        <h1>Customer</h1>
      </div>
      <div className={styles['testimony']}>
        <p className={styles['text']}>
          &quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus consectetur dignissimos excepturi
          voluptatum voluptas, libero ipsum ut laborum cum. Facere, reiciendis ullam quasi a quod modi? Earum voluptates
          impedit repellendus!&quot;
        </p>
        <div className={styles['rating']}>
          <Image alt='Star Rating' src={Star} width={30} height={30} />
          <Image alt='Star Rating' src={Star} width={30} height={30} />
          <Image alt='Star Rating' src={Star} width={30} height={30} />
          <Image alt='Star Rating' src={Star} width={30} height={30} />
          <Image alt='Star Rating' src={Star} width={30} height={30} />
        </div>
        <div className={styles['customer-data']}>
          <div className={styles['avatar']}>
            <Image alt='Avatar' src={DummyAvatar} width={100} height={100} />
          </div>
          <div className={styles['name-job']}>
            <h2>Robert Downey Jr.</h2>
            <h2>Cafe Owner</h2>
          </div>
          <div className={styles['testimony-nav']}>
            <Image alt='Back Arrow' src={LeftArrow} width={30} height={30} />
            <Image alt='Next Arrow' src={RightArrow} width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
