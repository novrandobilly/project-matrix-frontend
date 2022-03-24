import Head from 'next/head';
import styles from './index.module.scss';
import Banner from '../components/utils/banner';
import PlanPackage from '../components/product/plan-package';
import LearnMore from '../components/homepage/learn-more';
import SatisfiedCustomer from '../components/homepage/satisfied-customer';

export default function Home({ FAQs }) {
  console.log(FAQs);
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name='description' content='Matrix Homepage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner />
      {/* <PlanPackage /> */}
      <section className={styles['learn-more-container']}>
        <LearnMore />
      </section>
      <section className={styles['satisfied-customer-container']}>
        <SatisfiedCustomer />
      </section>

      <div className={styles['registration-fixed-box']}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non consectetur asperiores accusamus dicta
          in qui magni sapiente excepturi temporibus.
        </p>
        <button>Daftar Sekarang!</button>
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  try {
    const resFAQ = await fetch('https://matrix-webapi.staging.byteforce.id/api/public/faqs/all?lang=en', {
      method: 'GET',
    });
    const resFAQ_JSON = await resFAQ.json();
    const FAQData = JSON.parse(JSON.stringify(resFAQ_JSON));
    return {
      props: {
        FAQs: FAQData.data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};
