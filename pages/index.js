import { useState } from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import Banner from '../components/utils/banner';
import Link from 'next/link';
import EngineeringFuture from '../components/homepage/engineering-future';
import Anniversary from '../assets/home-banner/Anniversary.png';
import InternetMati from '../assets/home-banner/Internet_Mati_Uang_Kembali.png';
import MCIX from '../assets/home-banner/MCIX.png';
import MCS from '../assets/home-banner/MCS.png';
import Ramadhan from '../assets/home-banner/Ramadhan.png';
import LearnMore from '../components/homepage/learn-more';
import SatisfiedCustomer from '../components/homepage/satisfied-customer';
import Popup from '../components/homepage/popup';
import { Backdrop } from '../components/navigation/sidedrawer';

export default function Home({ FAQs }) {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name='description' content='Matrix Homepage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner
        bannerWidth={1536}
        bannerSource={[Anniversary, InternetMati, MCIX, MCS, Ramadhan]}
        hyperLink={['#', '/broadband', '/highlights/mc-ix-matrix-cable-internet-exchange', '/corporate', '#']}
      />
      <EngineeringFuture />
      {/* <PlanPackage /> */}
      <section className={styles['learn-more-container']}>
        <LearnMore />
      </section>
      {/* <section className={styles['satisfied-customer-container']}>
        <SatisfiedCustomer />
      </section> */}

      <div className={styles['registration-fixed-box']}>
        <div className={styles['registration-text']}>
          <p>The First Protected Broadband Solution In Indonesia! Money Back Guarantee If Connection Problems Occur.</p>{' '}
          <p>
            <strong>FREE INSTALLATION FEE &amp; WIFI ROUTER!</strong>
          </p>
        </div>
        <Link href='/broadband' passHref>
          <button>Check Out The Plan</button>
        </Link>
      </div>
      {showPopup && <Backdrop onCancel={() => setShowPopup(false)} />}
      <Popup show={showPopup} onCancel={() => setShowPopup(false)} />
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
