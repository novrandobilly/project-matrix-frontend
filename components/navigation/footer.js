import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/logo-color.png';
import Instagram from '../../assets/icons/instagram-blue.svg';
import Facebook from '../../assets/icons/facebook-blue.svg';
import Linkedin from '../../assets/icons/linkedin-blue.svg';
import ISO from '../../assets/ISO.png';
import CustomerCare from '../../assets/customer-care.png';
import styles from './footer.module.scss';

export default function footer() {
  return (
    <div className={styles['container']}>
      <div className={styles['menu']}>
        <div className={styles['submenu']}>
          <div className={styles['link-list']}>
            <Link href='/broadband' passHref>
              <h3>Broadband</h3>
            </Link>
            <Link href='/corporate' passHref>
              <h3>Corporate &amp; Network Solutions</h3>
            </Link>
            <Link href='/highlights/iplc-international-private-leased-circuit'>IPLC</Link>
            <Link href='/highlights/ip-transit'>IP Transit</Link>
            <Link href='/highlights/mc-ix-matrix-cable-internet-exchange'>MC-IX</Link>
            <Link href='/highlights/matrix-data-center'>Matrix Data Center</Link>
            <Link href='/highlights/matrix-line-local-loop'>Matrix Line</Link>
            <Link href='/highlights/matrix-internet'>Matrix Internet</Link>
            <Link href='/highlights/matrix-cloud'>Matrix Cloud</Link>
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
          {/* <div className={styles['link-list']}>
            <h3>Highlights</h3>
            <Link href='/highlights'>Highlights</Link>
            <Link href='/highlights'>Highlights</Link>
            <Link href='/highlights'>Highlights</Link>
          </div> */}
          <div className={styles['link-list']}>
            <h3>Support</h3>

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
            <Image alt='Customer Care' src={CustomerCare} width={250} height={125} />
          </div>
        </div>
      </div>
    </div>
  );
}
