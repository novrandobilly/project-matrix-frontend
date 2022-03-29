import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/logo-color.png';
import Instagram from '../../assets/icons/instagram-blue.svg';
import Facebook from '../../assets/icons/facebook-blue.svg';
import Linkedin from '../../assets/icons/linkedin-blue.svg';
import styles from './footer.module.scss';

export default function footer() {
  return (
    <div className={styles['container']}>
      <div className={styles['menu']}>
        <div className={styles['submenu']}>
          <div className={styles['link-list']}>
            <h3>Product</h3>
            <Link href='/broadband'>Product</Link>
            <Link href='/broadband'>Product</Link>
            <Link href='/broadband'>Product</Link>
          </div>
          <div className={styles['link-list']}>
            <h3>Company</h3>
            <Link href='/company'>Company</Link>
            <Link href='/company'>Company</Link>
            <Link href='/company'>Company</Link>
          </div>
          <div className={styles['link-list']}>
            <h3>Career</h3>
            <Link href='/career'>Career</Link>
            <Link href='/career'>Career</Link>
            <Link href='/career'>Career</Link>
          </div>
          <div className={styles['link-list']}>
            <h3>Highlights</h3>
            <Link href='/highlights'>Highlights</Link>
            <Link href='/highlights'>Highlights</Link>
            <Link href='/highlights'>Highlights</Link>
          </div>
          <div className={styles['link-list']}>
            <h3>Support</h3>
            <Link href='/support'>Support</Link>
            <Link href='/support'>Support</Link>
            <Link href='/support'>Support</Link>
          </div>
        </div>
        <div className={styles['copyrights']}>
          <p>Matrix NAP Info, copyrights 2021</p>
        </div>
      </div>
      <div className={styles['company-information']}>
        <div className={styles['footer-logo']}>
          <Image alt='Logo' src={Logo} width={150} height={65} />
        </div>
        <p className={styles['company-description']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptate optio.
        </p>
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
    </div>
  );
}
