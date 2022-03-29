import Header from './header';
import Footer from './footer';
import Image from 'next/image';
import Whatsapp from '../../assets/icons/whatsapp-white.svg';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles['header-container']}>
        <Header />
      </div>
      {children}
      <div className={styles['footer-container']}>
        <Footer />
      </div>
      <a href='https://broadband.nap.net.id/' target='_blank' rel='noreferrer' className={styles['whatsapp-icon']}>
        <div className={styles['whatsapp-container']}>
          <Image alt='Whatsapp' src={Whatsapp} width={30} height={30} layout='fixed' />
        </div>
        <span className={styles['contact-text']}>Contact</span>
      </a>
    </>
  );
};
export default Layout;
