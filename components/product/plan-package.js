import React from 'react';
import Image from 'next/image';
import CheckRed from '../../assets/icons/check-red.svg';
import PertamaDiIndonesia from '../../assets/pertama-di-indonesia.png';
import styles from './plan-package.module.scss';

export default function PlanPackage({ products }) {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <div className={styles['header-image']}>
          <Image alt='Pertama di Indonesia' src={PertamaDiIndonesia} width={200} height={200} />
        </div>
        <div className={styles['header-text']}>
          <div className={styles['title']}>
            <h1>Matrix&nbsp;</h1>
            <h1>Broadband</h1>
          </div>
          <p className={styles['sub-title']}>The First Protected Broadband Solution In Indonesia!</p>
          <p className={styles['sub-title']}>Money Back Guarantee If Connection Problems Occur</p>
          <p className={styles['sub-title']}>FREE INSTALLATION FEE &amp; WIFI ROUTER!</p>
        </div>
      </div>
      <div className={styles['plan-option']}>
        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>Up To 30Mbps</h3>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 350k<span>/month</span>
            </strong>
          </p>
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
          <a href='https://broadband.nap.net.id/' target='_blank' rel='noreferrer'>
            <button className={styles['choice-button']}>
              <strong> Choose This Plan</strong>
            </button>
          </a>
        </div>

        <div className={`${styles['plan-card']} ${styles['best-choice']}`}>
          <div className={styles['plan-header']}>
            <h3>Up To 50Mbps</h3>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 500k<span>/month</span>
            </strong>
          </p>
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
          <a href='https://broadband.nap.net.id/' target='_blank' rel='noreferrer'>
            <button className={styles['choice-button']}>
              <strong> Choose This Plan</strong>
            </button>
          </a>
        </div>

        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>Up To 100Mbps</h3>
          </div>
          <p className={styles['price']}>
            <strong>
              Rp 800k<span>/month</span>
            </strong>
          </p>
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
          <a href='https://broadband.nap.net.id/' target='_blank' rel='noreferrer'>
            <button className={styles['choice-button']}>
              <strong> Choose This Plan</strong>
            </button>
          </a>
        </div>
        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>Up To 300Mbps</h3>
          </div>
          <p className={styles['price']}>
            <strong>Ask For Price</strong>
          </p>
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
          <a href='https://broadband.nap.net.id/' target='_blank' rel='noreferrer'>
            <button className={styles['choice-button']}>
              <strong> Choose This Plan</strong>
            </button>
          </a>
        </div>
        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>Up To 500Mbps</h3>
          </div>
          <p className={styles['price']}>
            <strong>Ask For Price</strong>
          </p>
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
          <a href='https://broadband.nap.net.id/' target='_blank' rel='noreferrer'>
            <button className={styles['choice-button']}>
              <strong> Choose This Plan</strong>
            </button>
          </a>
        </div>

        <div className={`${styles['plan-card']} ${styles['best-choice']}`}>
          <div className={styles['plan-header']}>
            <h3>Up To 1Gbps</h3>
          </div>
          <p className={styles['price']}>
            <strong>Ask For Price</strong>
          </p>
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
          <a href='https://broadband.nap.net.id/' target='_blank' rel='noreferrer'>
            <button className={styles['choice-button']}>
              <strong> Choose This Plan</strong>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
