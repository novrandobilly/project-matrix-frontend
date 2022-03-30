import React from 'react';
import Image from 'next/image';
import MatrixBuilding from '../../assets/matrix-building.JPG';

import styles from './engineering-future.module.scss';

export default function EngineeringFuture() {
  return (
    <div className={styles['container']}>
      <div className={styles['card-container']}>
        <div className={styles['image-container']}>
          <Image src={MatrixBuilding} alt='Matrix Building' objectFit='cover' width={400} height={250} />
        </div>
        <div className={styles['text-container']}>
          <p className={styles['text']}>
            Welcome To The First International Private Sub-Sea Cable Operator In Indonesia.
          </p>
          <p>Celebrating 22 Years Of Commitment In Contributing To Country&lsquo;s Digital Advancement.</p>
          <p className={styles['tag']}>#ENGINEERINGFUTURE</p>
        </div>
      </div>
    </div>
  );
}
