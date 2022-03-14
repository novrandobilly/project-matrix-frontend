import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Instagram from '../assets/icons/instagram.svg';
import Building from '../assets/icons/building.svg';
import Logo from '../assets/logo.png';
import Phone from '../assets/icons/phone.svg';
import styles from './header.module.scss';

export default function Header() {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <div className={styles['container']}>
      <div className={styles['contact-bar']}>
        <div className={styles['language-toggle']}>
          <p>Language</p>
          <div className={styles['toggle-button']}>
            <span onClick={() => setIsEnglish(true)} className={isEnglish ? styles['lang-active'] : ''}>
              EN
            </span>
            <span onClick={() => setIsEnglish(false)} className={!isEnglish ? styles['lang-active'] : ''}>
              ID
            </span>
          </div>
        </div>
        <div className={styles['contact-sub-bar']}>
          <div className={styles['instagram']}>
            <Image alt='Instagram' src={Instagram} width={20} height={20} />
            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/matrix.napinfo'>
              matrix.napinfo
            </a>
          </div>
          <div className={styles['phone']}>
            <Image alt='Phone' src={Phone} width={17} height={17} />
            <p>021-1500787</p>
          </div>
        </div>
      </div>
      <div className={styles['navigation-bar']}>
        <Image alt='Logo' src={Logo} width={150} height={65} />
        <ul className={styles['navigation-list']}>
          <li>
            <Link href='/product'>Product</Link>
          </li>
          <li>
            <Link href='/about-us'>Company</Link>
          </li>
          <li>
            <Link href='/career'>Career</Link>
          </li>
          <li>
            <Link href='/highlights'>Highlights</Link>
          </li>
          <li>
            <Link href='/support'>Support</Link>
          </li>
          <li>
            <Link href='/contact-us'>Contact Us</Link>
          </li>
        </ul>
        <div className={styles['business-button']}>
          <Image alt='Building' src={Building} width={15} height={15} />
          <p>
            <strong>
              I&apos;m a <em>Business</em>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
