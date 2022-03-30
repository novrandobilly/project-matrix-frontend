import React from 'react';
import Link from 'next/link';
import styles from './plan-package.module.scss';

export default function PlanPackage() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        <h1>Our Corporate &amp;&nbsp;</h1>
        <h1>Network Solutions</h1>
      </div>

      <div className={styles['plan-option']}>
        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>IPLC (International Private Leased Circuit )</h3>
          </div>

          <Link href='/highlights/iplc-international-private-leased-circuit' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>

        <div className={`${styles['plan-card']} ${styles['best-choice']}`}>
          <div className={styles['plan-header']}>
            <h3>IP Transit</h3>
          </div>

          <Link href='/highlights/ip-transit' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>

        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>MC-IX (Matrix Cable Internet eXchange)</h3>
          </div>

          <Link href='/highlights/mc-ix-matrix-cable-internet-exchange' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>
        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>Matrix Data Center</h3>
          </div>

          <Link href='/highlights/matrix-data-center' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>

        <div className={`${styles['plan-card']} ${styles['best-choice']}`}>
          <div className={styles['plan-header']}>
            <h3>Matrix Line (Local Loop)</h3>
          </div>

          <Link href='/highlights/matrix-line-local-loop' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>

        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>Matrix Internet</h3>
          </div>

          <Link href='/highlights/matrix-internet' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>
        <div className={styles['plan-card']}>
          <div className={styles['plan-header']}>
            <h3>Matrix Cloud</h3>
          </div>

          <Link href='/highlights/matrix-cloud' passHref>
            <button className={styles['choice-button']}>
              <strong>Learn More</strong>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
