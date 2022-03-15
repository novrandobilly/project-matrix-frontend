import Head from 'next/head';
import Image from 'next/image';
import Phone from '../assets/icons/phone-blue.svg';
import ProductBanner from '../assets/product-banner.png';
import Banner from '../components/utils/banner';
import SatisfiedCustomer from '../components/product/satisfied-customer';
import PlanPackage from '../components/homepage/plan-package';
import FAQ from '../components/product/faq';
import AddOns from '../components/product/addons';
import styles from './product.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Product</title>
        <meta name='description' content='Matrix Product Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner
        bannerSource={[ProductBanner, ProductBanner, ProductBanner, ProductBanner, ProductBanner]}
        alt='Product Banner'
        style={{ paddingBottom: '50px' }}
      />
      <section className={styles['satisfied-customer-container']}>
        <SatisfiedCustomer />
      </section>
      <PlanPackage />
      <AddOns />
      <section className={styles['faq-container']}>
        <FAQ />
        <div className={styles['faq-contact-us']}>
          <h2>Hubungi Kami</h2>
          <button>
            1-500-XXX <Image alt='Phone' src={Phone} width={30} height={30} />
          </button>
        </div>
      </section>
    </div>
  );
}
