import Head from 'next/head';
import Image from 'next/image';
import Phone from '../assets/icons/phone-blue.svg';
import ProductBanner from '../assets/product-banner.png';
import Banner from '../components/utils/banner';
import SatisfiedCustomer from '../components/product/satisfied-customer';
import PlanPackage from '../components/product/plan-package';
import FAQ from '../components/product/faq';
import AddOns from '../components/product/addons';
import styles from './product.module.scss';

export default function Product({ allActiveProducts, paginateActiveProducts, FAQs, promoBanner }) {
  const { products } = allActiveProducts;
  // console.log(allActiveProducts);
  // console.log(paginateActiveProducts);
  // console.log(FAQs);
  // console.log(promoBanner);
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
      <PlanPackage products={products} />
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
