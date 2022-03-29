import React from 'react';
import Image from 'next/image';
import MatrixBuilding from '../../assets/matrix-building.png';

import styles from './engineering-future.module.scss';

export default function EngineeringFuture() {
  return (
    <div className={styles['container']}>
      <div className={styles['card-container']}>
        <div className={styles['image-container']}>
          <Image src={MatrixBuilding} alt='Matrix Building' objectFit='cover' width={500} height={300} />
        </div>
        <div className={styles['text-container']}>
          <p className={styles['text']}>
            Welcome To The First International Private Sub-Sea Cable Operator In Indonesia
          </p>
          <p className={styles['tag']}>#ENGINEERINGFUTURE</p>
        </div>
      </div>
    </div>
  );
}
