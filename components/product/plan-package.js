import React from 'react';
import Image from 'next/image';
import CheckRed from '../../assets/icons/check-red.svg';
import styles from './plan-package.module.scss';

export default function PlanPackage({ products }) {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        <h1>Matrix&nbsp;</h1>
        <h1>Broadband</h1>
      </div>
      <p className={styles['sub-title']}>Internet terproteksi pertama di Indonesia!</p>
      <p className={styles['sub-title']}>Memberikan Kepuasan Maksimal Dalam Aktivitas Digital Anda</p>
      <p className={styles['sub-title']}>INTERNET MATI? UANG KEMBALI!</p>
      <div className={styles['plan-option']}>
        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>30Mbps</h3>
            <p>
              <strong>DISC 50%</strong>
            </p>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 500k<span>/month</span>
            </strong>
          </p>
          {/* <p className={styles['plan-description']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia ab cumque molestias beatae
            voluptatem voluptates impedit dicta vel! Suscipit.
          </p> */}
          <ul className={styles['package-features']}>
            <li>
              <Image alt='Check Red' src={CheckRed} width={20} height={20} />
              &nbsp; Can be used for 5-7 devices
            </li>
            <li>
              <Image alt='Check Red' src={CheckRed} width={20} height={20} />
              &nbsp; Suitable for users with light activities
            </li>
          </ul>
          <button className={styles['choice-button']}>
            <strong> Choose This Plan</strong>
          </button>
        </div>

        <div className={`${styles['plan-card']} ${styles['best-choice']}`}>
          <div className={styles['plan-header']}>
            <h3>50Mbps</h3>
            <p>
              <strong>DISC 50%</strong>
            </p>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 500k<span>/month</span>
            </strong>
          </p>
          {/* <p className={styles['plan-description']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia ab cumque molestias beatae
            voluptatem voluptates impedit dicta vel! Suscipit.
          </p> */}
          <ul className={styles['package-features']}>
            <li>
              <Image alt='Check Red' src={CheckRed} width={20} height={20} />
              &nbsp; Can be used for 8-12 devices
            </li>
            <li>
              <Image alt='Check Red' src={CheckRed} width={20} height={20} />
              &nbsp; Suitable for users with moderate activities
            </li>
          </ul>
          <button className={styles['choice-button']}>
            <strong> Choose This Plan</strong>
          </button>
        </div>

        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>100Mbps</h3>
            <p>
              <strong>DISC 50%</strong>
            </p>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 500k<span>/month</span>
            </strong>
          </p>
          {/* <p className={styles['plan-description']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia ab cumque molestias beatae
            voluptatem voluptates impedit dicta vel! Suscipit.
          </p> */}
          <ul className={styles['package-features']}>
            <li>
              <Image alt='Check Red' src={CheckRed} width={20} height={20} />
              &nbsp; Can be used for 12-20 devices
            </li>
            <li>
              <Image alt='Check Red' src={CheckRed} width={20} height={20} />
              &nbsp; Suitable for users with heavy activities
            </li>
          </ul>
          <button className={styles['choice-button']}>
            <strong> Choose This Plan</strong>
          </button>
        </div>
        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>500Mbps</h3>
            <p>
              <strong>DISC 50%</strong>
            </p>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 500k<span>/month</span>
            </strong>
          </p>
          {/* <p className={styles['plan-description']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia ab cumque molestias beatae
            voluptatem voluptates impedit dicta vel! Suscipit.
          </p> */}
          <ul className={styles['package-features']}>
            <li>
              <Image alt='Check Red' src={CheckRed} width={20} height={20} />
              &nbsp; Can be used for 20-30 devices
            </li>
            <li>
              <Image alt='Check Red' src={CheckRed} width={20} height={20} />
              &nbsp; Suitable for users with heavy activities
            </li>
          </ul>
          <button className={styles['choice-button']}>
            <strong> Choose This Plan</strong>
          </button>
        </div>

        <div className={`${styles['plan-card']} ${styles['best-choice']}`}>
          <div className={styles['plan-header']}>
            <h3>1Gbps</h3>
            <p>
              <strong>DISC 50%</strong>
            </p>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 500k<span>/month</span>
            </strong>
          </p>
          {/* <p className={styles['plan-description']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia ab cumque molestias beatae
            voluptatem voluptates impedit dicta vel! Suscipit.
          </p> */}
          <ul className={styles['package-features']}>
            <li>
              <Image alt='Check Red' src={CheckRed} width={20} height={20} />
              &nbsp; Can be used up to 30 devices
            </li>
            <li>
              <Image alt='Check Red' src={CheckRed} width={20} height={20} />
              &nbsp; Suitable for users with heavy activities
            </li>
          </ul>
          <button className={styles['choice-button']}>
            <strong> Choose This Plan</strong>
          </button>
        </div>
      </div>
    </div>
  );
}
