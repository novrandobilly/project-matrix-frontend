import Header from './header';
import Footer from './footer';
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
    </>
  );
};
export default Layout;
