import Head from 'next/head';
import ProductBanner from '../assets/product-banner.png';
import Image from 'next/image';
import Banner from '../components/utils/banner';
// import SatisfiedCustomer from '../components/product/satisfied-customer';
import PlanPackage from '../components/product/plan-package';
import TermConditions from '../components/product/term-conditions';
import Whatsapp from '../assets/icons/whatsapp-white.svg';
// import FAQ from '../components/product/faq';
// import AddOns from '../components/product/addons';
import Banner1 from '../assets/broadband-banner/1.png';
import Banner2 from '../assets/broadband-banner/2.png';
import Banner3 from '../assets/broadband-banner/3.png';
import styles from './broadband.module.scss';

export default function Broadband({ allActiveProducts, paginateActiveProducts, FAQs, promoBanner }) {
  const { products } = allActiveProducts;

  return (
    <div>
      <Head>
        <title>Broadband</title>
        <meta name='description' content='Matrix Product Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner
        bannerSource={[Banner1, Banner2, Banner3]}
        bannerWidth={1536}
        alt='Broadband Banner'
        style={{ paddingBottom: '50px' }}
      />
      {/* <section className={styles['satisfied-customer-container']}>
        <SatisfiedCustomer />
      </section> */}
      <PlanPackage products={products} />
      {/* <AddOns /> */}
      <section className={styles['TOC-container']}>
        <TermConditions />
      </section>
      {/* <section className={styles['faq-container']}>
        <FAQ />
        <div className={styles['faq-contact-us']}>
          <h2>Hubungi Kami</h2>
          <button>
            1-500-XXX <Image alt='Phone' src={Phone} width={30} height={30} />
          </button>
        </div>
      </section> */}
      <div className={styles['registration-fixed-box']}>
        <p>
          The First Protected Broadband Solution In Indonesia! Money Back Guarantee If Connection Problems Occur. FREE
          INSTALLATION FEE &amp; WIFI ROUTER!
        </p>
        <a href='https://broadband.nap.net.id/' target='_blank' rel='noreferrer'>
          <button>Daftar Sekarang!</button>
        </a>
      </div>
      <a href='https://wa.me/6281119078787' target='_blank' rel='noreferrer' className={styles['whatsapp-icon']}>
        <div className={styles['whatsapp-container']}>
          <Image alt='Whatsapp' src={Whatsapp} width={30} height={30} layout='fixed' />
        </div>
        <span className={styles['contact-text']}>Chat With Us!</span>
      </a>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    // =============================================All Active Features==========================================
    const resAllActiveFeatures = await fetch(
      'https://matrix-webapi.staging.byteforce.id/api/public/products/featured?lang=en',
      {
        method: 'GET',
      }
    );
    const resAllActiveFeaturesJSON = await resAllActiveFeatures.json();
    const allActiveFeaturesData = JSON.parse(JSON.stringify(resAllActiveFeaturesJSON));

    // ============================================Paginate Active Products======================================
    const resPaginateActiveProducts = await fetch(
      'https://matrix-webapi.staging.byteforce.id/api/public/products/paginate?page=1&size=10&lang=en',
      {
        method: 'GET',
      }
    );
    const resPaginateActiveProductsJSON = await resPaginateActiveProducts.json();
    const paginateActiveProductsData = JSON.parse(JSON.stringify(resPaginateActiveProductsJSON));

    // ================================================ FAQ =====================================================
    const resFAQ = await fetch('https://matrix-webapi.staging.byteforce.id/api/public/faqs/all?lang=en', {
      method: 'GET',
    });
    const resFAQ_JSON = await resFAQ.json();
    const FAQData = JSON.parse(JSON.stringify(resFAQ_JSON));

    // ================================================ Promo Banner =====================================================
    const resPromoBanner = await fetch(
      'https://matrix-webapi.staging.byteforce.id/api/public/promos/paginate?page=1&size=10',
      {
        method: 'GET',
      }
    );
    const resPromoBannerJSON = await resPromoBanner.json();
    const PromoBannerData = JSON.parse(JSON.stringify(resPromoBannerJSON));

    return {
      props: {
        allActiveProducts: allActiveFeaturesData.data,
        paginateActiveProducts: paginateActiveProductsData.data,
        FAQs: FAQData.data,
        promoBanner: PromoBannerData.data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};
