import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/logo-color.png';
import Instagram from '../../assets/icons/instagram-blue.svg';
import Facebook from '../../assets/icons/facebook-blue.svg';
import Linkedin from '../../assets/icons/linkedin-blue.svg';
import ISO from '../../assets/ISO.png';
import CustomerCare from '../../assets/customer-care.png';
import styles from './footer.module.scss';

export default function Footer() {
  const [wholeSalesDD, setWholeSalesDD] = useState(false);
  const [enterpriseDD, setEnterpriseDD] = useState(false);
  const [supportDD, setSupportDD] = useState(false);

  const toggleWholeSalesDD = () => {
    setWholeSalesDD(!wholeSalesDD);
  };
  const toggleEnterpriseDD = () => {
    setEnterpriseDD(!enterpriseDD);
  };
  const toggleSupportDD = () => {
    setSupportDD(!supportDD);
  };
  return (
    <div className={styles['container']}>
      <div className={styles['menu']}>
        <div className={styles['submenu']}>
          <div className={styles['link-list']}>
            <Link href='/broadband' passHref>
              <h3>Broadband</h3>
            </Link>
          </div>
          <div className={styles['link-list']}>
            <h3 onClick={toggleWholeSalesDD}>Wholesales</h3>
            <div className={`${styles['wholesales-dropdown']} ${wholeSalesDD ? '' : styles['hide']}`}>
              <Link href='/highlights/iplc-international-private-leased-circuit'>IPLC</Link>
              <Link href='/highlights/ip-transit'>IP Transit</Link>
              <Link href='/highlights/mc-ix-matrix-cable-internet-exchange'>MC-IX</Link>
              <Link href='/highlights/matrix-data-center'>Matrix Data Center</Link>
              <Link href='/highlights/matrix-line-local-loop'>Matrix Line (Local Loop)</Link>
            </div>
          </div>
          <div className={styles['link-list']}>
            <h3 onClick={toggleEnterpriseDD}>Enterprise</h3>
            <div className={`${styles['enterprise-dropdown']} ${enterpriseDD ? '' : styles['hide']}`}>
              <Link href='/highlights/matrix-internet'>Matrix Internet</Link>
              <Link href='/highlights/matrix-data-center'>Matrix Data Center</Link>
              <Link href='/highlights/matrix-cloud'>Matrix Cloud</Link>
              <Link href='/highlights/matrix-line-local-loop'>Matrix Line (Local Loop)</Link>
            </div>
          </div>
          <div className={styles['link-list']}>
            <Link href='/about-us' passHref>
              <h3>Company</h3>
            </Link>
          </div>
          <div className={styles['link-list']}>
            <Link href='/career' passHref>
              <h3>Career</h3>
            </Link>
          </div>
          <div className={styles['link-list']}>
            <Link href='/career' passHref>
              <h3>Contact Us</h3>
            </Link>
          </div>

          <div className={styles['link-list']}>
            <h3 onClick={toggleSupportDD}>Support</h3>
            <div className={`${styles['support-dropdown']} ${supportDD ? '' : styles['hide']}`}>
              <a target='_blank' rel='noreferrer' href='https://cacti.nap.net.id/'>
                Cacti
              </a>
              <a target='_blank' rel='noreferrer' href='https://mcs.nap.net.id/'>
                IP-Transit
              </a>
              <a target='_blank' rel='noreferrer' href='https://mcsix.nap.net.id/'>
                MC-IX
              </a>
              <a target='_blank' rel='noreferrer' href='https://lg.napinfo.co.id/'>
                Looking Glass
              </a>
            </div>
          </div>
        </div>
        <div className={styles['copyrights']}>
          <div className={styles['image-container']}>
            <Image src={ISO} alt='ISO' width={1600} height={320} />
          </div>
          <p>Matrix NAP Info, copyrights 2021</p>
        </div>
      </div>
      <div className={styles['company-information']}>
        <div className={styles['footer-logo']}>
          <Image alt='Logo' src={Logo} width={150} height={65} />
        </div>

        <div className={styles['connect-with-us']}>
          <div className={styles['social-media-container']}>
            <h4>
              <strong>Follow our socials!</strong>
            </h4>
            <div className={styles['social-media']}>
              <a target='_blank' rel='noreferrer' href='https://www.instagram.com/matrix.napinfo'>
                <Image alt='Instagram' src={Instagram} width={30} height={30} />
              </a>
              <a target='_blank' rel='noreferrer' href='https://www.facebook.com/Matrix.NAPInfo'>
                <Image alt='Faccebook' src={Facebook} width={30} height={30} />
              </a>
              <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/company/matrix-napinfo/'>
                <Image alt='Linkedin' src={Linkedin} width={30} height={30} />
              </a>
            </div>
          </div>
          <div className={styles['customer-care']}>
            <a href='tel:1500787'>
              <Image alt='Customer Care' src={CustomerCare} width={250} height={125} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
