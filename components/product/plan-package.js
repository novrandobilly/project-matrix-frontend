import React from 'react';
import Image from 'next/image';
import CheckBlue from '../../assets/icons/check-blue.svg';
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
            <h3>{products[0].product_name}</h3>
            <p>
              <strong>DISC 50%</strong>
            </p>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 500k<span>/month</span>
            </strong>
          </p>
          <p className={styles['plan-description']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia ab cumque molestias beatae
            voluptatem voluptates impedit dicta vel! Suscipit.
          </p>
          <ul className={styles['package-features']}>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
          </ul>
          <button className={styles['choice-button']}>
            <strong> Choose This Plan</strong>
          </button>
        </div>

        <div className={`${styles['plan-card']} ${styles['best-choice']}`}>
          <div className={styles['plan-header']}>
            <h3>{products[1].product_name}</h3>
            <p>
              <strong>DISC 50%</strong>
            </p>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 500k<span>/month</span>
            </strong>
          </p>
          <p className={styles['plan-description']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia ab cumque molestias beatae
            voluptatem voluptates impedit dicta vel! Suscipit.
          </p>
          <ul className={styles['package-features']}>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
          </ul>
          <button className={styles['choice-button']}>
            <strong> Choose This Plan</strong>
          </button>
        </div>

        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>{products[2].product_name}</h3>
            <p>
              <strong>DISC 50%</strong>
            </p>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 500k<span>/month</span>
            </strong>
          </p>
          <p className={styles['plan-description']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia ab cumque molestias beatae
            voluptatem voluptates impedit dicta vel! Suscipit.
          </p>
          <ul className={styles['package-features']}>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
          </ul>
          <button className={styles['choice-button']}>
            <strong> Choose This Plan</strong>
          </button>
        </div>
        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>{products[0].product_name}</h3>
            <p>
              <strong>DISC 50%</strong>
            </p>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 500k<span>/month</span>
            </strong>
          </p>
          <p className={styles['plan-description']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia ab cumque molestias beatae
            voluptatem voluptates impedit dicta vel! Suscipit.
          </p>
          <ul className={styles['package-features']}>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
          </ul>
          <button className={styles['choice-button']}>
            <strong> Choose This Plan</strong>
          </button>
        </div>

        <div className={`${styles['plan-card']} ${styles['best-choice']}`}>
          <div className={styles['plan-header']}>
            <h3>{products[1].product_name}</h3>
            <p>
              <strong>DISC 50%</strong>
            </p>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 500k<span>/month</span>
            </strong>
          </p>
          <p className={styles['plan-description']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia ab cumque molestias beatae
            voluptatem voluptates impedit dicta vel! Suscipit.
          </p>
          <ul className={styles['package-features']}>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
          </ul>
          <button className={styles['choice-button']}>
            <strong> Choose This Plan</strong>
          </button>
        </div>

        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>{products[2].product_name}</h3>
            <p>
              <strong>DISC 50%</strong>
            </p>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 500k<span>/month</span>
            </strong>
          </p>
          <p className={styles['plan-description']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia ab cumque molestias beatae
            voluptatem voluptates impedit dicta vel! Suscipit.
          </p>
          <ul className={styles['package-features']}>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckRed} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
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
