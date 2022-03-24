import Header from './header';
import Footer from './footer';
import Image from 'next/image';
import Whatsapp from '../../assets/icons/whatsapp-color.svg';
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
      <div className={styles['whatsapp-icon']}>
        <a href='#'>
          <Image alt='Whatsapp' src={Whatsapp} width={40} height={40} />
        </a>
      </div>
    </>
  );
};
export default Layout;
