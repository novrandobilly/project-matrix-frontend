import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Sidedrawer from './sidedrawer';
import { Backdrop } from './sidedrawer';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './navLink';
import Instagram from '../../assets/icons/instagram.svg';
import Building from '../../assets/icons/building.svg';
import Logo from '../../assets/logo.png';
import LogoColor from '../../assets/logo-color.png';
import Phone from '../../assets/icons/phone.svg';
import styles from './header.module.scss';

export default function Header() {
  const [isEnglish, setIsEnglish] = useState(true);
  const [supportDropdown, setSupportDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [showSidedrawer, setShowSidedrawer] = useState(false);
  const supportDDref = useRef(null);
  const productDDref = useRef(null);
  const { pathname } = useRouter();

  const openSidedrawerHandler = () => {
    setShowSidedrawer(true);
  };
  const closeSidedrawerHandler = () => {
    setShowSidedrawer(false);
  };

  let isBusinessSolution = false;
  if (pathname === '/corporate') {
    isBusinessSolution = true;
  }

  let toggleButtonEN = isEnglish ? styles['lang-active'] : '';
  let toggleButtonID = !isEnglish ? styles['lang-active'] : '';

  if (isBusinessSolution) {
    toggleButtonEN = isEnglish ? styles['lang-active-blue'] : '';
    toggleButtonID = !isEnglish ? styles['lang-active-blue'] : '';
  }

  return (
    <div className={styles['container']}>
      {/* <div className={styles['contact-bar']}>
        <div className={styles['language-toggle']}>
          <p>Language</p>
          <div className={styles['toggle-button']}>
            <span onClick={() => setIsEnglish(true)} className={toggleButtonEN}>
              EN
            </span>
            <span onClick={() => setIsEnglish(false)} className={toggleButtonID}>
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
      </div> */}
      <div className={styles['navigation-bar']}>
        <Link passHref href='/'>
          <div className={styles['logo-container']}>
            <Image alt='Logo' src={Logo} width={150} height={65} />
          </div>
        </Link>
        <ul className={styles['navigation-list']}>
          <li
            className={styles['product']}
            onMouseEnter={() => setProductDropdown(true)}
            onMouseLeave={() => setProductDropdown(false)}>
            <span className={productDropdown ? styles['active'] : ''}>Product</span>
            <ul ref={productDDref} className={`${styles['product-dropdown']} ${!productDropdown && styles['hide']}`}>
              <li className={styles['product-dropdown-container']}>
                <Link href='/broadband'>Broadband</Link>
              </li>
              <li className={styles['product-dropdown-container']}>
                <div className={styles['broadband-corporate-title']}>
                  <span>Corporate</span>
                </div>
                <ul className={styles['sub-dropdown']}>
                  <li>
                    <Link href='/highlights/iplc-international-private-leased-circuit'>IPLC</Link>
                  </li>
                  <li>
                    <Link href='/highlights/ip-transit'>IP Transit</Link>
                  </li>
                  <li>
                    <Link href='/highlights/mc-ix-matrix-cable-internet-exchange'>MC-IX</Link>
                  </li>
                  <li>
                    <Link href='/highlights/matrix-data-center'>Matrix Data Center</Link>
                  </li>
                  <li>
                    <Link href='/corporate'>Matrix Line</Link>
                  </li>
                  <li>
                    <Link href='/highlights/matrix-internet'>Matrix Internet</Link>
                  </li>
                  <li>
                    <Link href='/highlights/matrix-cloud'>Matrix Cloud</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <NavLink href='/about-us'>Company</NavLink>
          </li>
          <li>
            <NavLink href='/career'>Career</NavLink>
          </li>
          {/* <li>
            <NavLink href='/highlights'>Highlights</NavLink>
          </li> */}
          <li>
            <NavLink href='/contact-us'>Contact Us</NavLink>
          </li>
          <li
            className={styles['support']}
            onMouseEnter={() => setSupportDropdown(true)}
            onMouseLeave={() => setSupportDropdown(false)}>
            <span className={supportDropdown ? styles['active'] : ''}>Support</span>
            <ul ref={supportDDref} className={`${styles['support-dropdown']} ${!supportDropdown && styles['hide']}`}>
              <li>
                <a target='_blank' rel='noreferrer' href='https://cacti.nap.net.id/'>
                  Cacti
                </a>
              </li>
              <li>
                <a target='_blank' rel='noreferrer' href='https://mcs.nap.net.id/'>
                  IP-Transit
                </a>
              </li>
              <li>
                <a target='_blank' rel='noreferrer' href='https://mcsix.nap.net.id/'>
                  MC-IX
                </a>
              </li>
              <li>
                <a target='_blank' rel='noreferrer' href='https://lg.napinfo.co.id/'>
                  Looking Glass
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className={styles['sidedrawer-menu']}>
          <div className={styles['burger-icon']} onClick={openSidedrawerHandler}>
            <div />
            <div />
            <div />
          </div>
          {showSidedrawer && <Backdrop onCancel={closeSidedrawerHandler} />}
          <Sidedrawer show={showSidedrawer} onCancel={closeSidedrawerHandler}>
            <Link passHref href='/'>
              <div className={styles['side-logo-container']}>
                <Image alt='Logo' src={LogoColor} width={100} height={45} />
              </div>
            </Link>
            <ul className={styles['side-navigation-list']}>
              <li>
                <NavLink exact href='/broadband'>
                  Broadband
                </NavLink>
              </li>
              <li>
                <NavLink href='/about-us'>Company</NavLink>
              </li>
              <li>
                <NavLink href='/career'>Career</NavLink>
              </li>
              {/* <li>
                <NavLink href='/highlights'>Highlights</NavLink>
              </li> */}
              <li>
                <NavLink href='/contact-us'>Contact Us</NavLink>
              </li>
              <li className={styles['support']}>
                <span
                  className={supportDropdown ? styles['active'] : ''}
                  onClick={() => setSupportDropdown((prevState) => !prevState)}>
                  Support
                </span>
                <ul ref={supportDDref} className={styles['side-support-dropdown']}>
                  <li>
                    <a target='_blank' rel='noreferrer' href='https://cacti.nap.net.id/'>
                      Cacti
                    </a>
                  </li>
                  <li>
                    <a target='_blank' rel='noreferrer' href='https://mcs.nap.net.id/'>
                      IP-Transit
                    </a>
                  </li>
                  <li>
                    <a target='_blank' rel='noreferrer' href='https://mcsix.nap.net.id/'>
                      MC-IX
                    </a>
                  </li>
                  <li>
                    <a target='_blank' rel='noreferrer' href='https://lg.napinfo.co.id/'>
                      Looking Glass
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </Sidedrawer>
        </div>
      </div>
    </div>
  );
}
