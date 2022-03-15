import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './navLink';
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
        <Link passHref href='/'>
          <div className={styles['logo-container']}>
            <Image alt='Logo' src={Logo} width={150} height={65} />
          </div>
        </Link>
        <ul className={styles['navigation-list']}>
          <li>
            <NavLink exact href='/product'>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink href='/about-us'>Company</NavLink>
          </li>
          <li>
            <NavLink href='/career'>Career</NavLink>
          </li>
          <li>
            <NavLink href='/highlights'>Highlights</NavLink>
          </li>
          <li>
            <NavLink href='/support'>Support</NavLink>
          </li>
          <li>
            <NavLink href='/contact-us'>Contact Us</NavLink>
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
