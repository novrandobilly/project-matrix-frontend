import React from 'react';
import Image from 'next/image';
import CheckBlue from '../../assets/icons/check-blue.svg';
import CheckRed from '../../assets/icons/check-red.svg';
import styles from './plan-package.module.scss';

export default function PlanPackage() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        <h1>Choose The Plan For&nbsp;</h1>
        <h1>Your Needs!</h1>
      </div>
      <p className={styles['sub-title']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi doloremque quidem sit iste nihil
        tenetur suscipit sed, iusto placeat?
      </p>
      <div className={styles['plan-option']}>
        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>Regular</h3>
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
              <Image alt='Check Blue' src={CheckBlue} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckBlue} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckBlue} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckBlue} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckBlue} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
          </ul>
          <button className={styles['choice-button']}>
            <strong> Choose This Plan</strong>
          </button>
        </div>

        <div className={`${styles['plan-card']} ${styles['best-choice']}`}>
          <div className={styles['plan-header']}>
            <h3>Regular</h3>
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
            <h3>Regular</h3>
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
              <Image alt='Check Blue' src={CheckBlue} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckBlue} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckBlue} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckBlue} width={20} height={20} />
              &nbsp; <strong>Package&nbsp;</strong>Feature
            </li>
            <li>
              <Image alt='Check Blue' src={CheckBlue} width={20} height={20} />
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
