import Head from 'next/head';
import Banner from '../components/utils/banner';
import JoinUsBanner from '../assets/join-us-banner.png';
import Image from 'next/image';
import TomHolland from '../assets/tom-holland.jpg';
import Chatting from '../assets/chatting.png';
import Search from '../assets/icons/search.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './career.module.scss';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Career({ products }) {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Career</title>
        <meta name='description' content='Matrix Career Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Banner bannerSource={[JoinUsBanner]} alt='Join Us Banner' bannerNav={false} />
      <div className={styles['multi-carousel-container']}>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          autoPlay={false}
          infinite={true}
          removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}>
          <Image draggable={false} alt='Chatting' src={Chatting} width={425} height={250} />
          <Image draggable={false} alt='Chatting' src={Chatting} width={425} height={250} />
          <Image draggable={false} alt='Chatting' src={Chatting} width={425} height={250} />
          <Image draggable={false} alt='Chatting' src={Chatting} width={425} height={250} />
        </Carousel>
      </div>

      <div className={styles['single-carousel']}>
        <CarouselProvider
          className={styles['single-carousel-container']}
          naturalSlideWidth={100}
          naturalSlideHeight={12}
          totalSlides={3}>
          <ButtonBack>&lt;</ButtonBack>
          <Slider>
            <Slide index={0}>
              <div className={styles['carousel-item']}>
                <Image className={styles['avatar']} alt='Tom Holland' src={TomHolland} width={100} height={100} />
                <div className={styles['text-container']}>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione minus vel ea laboriosam at
                    officiis repudiandae eos sequi cum cupiditate!
                  </p>
                  <p>-&nbsp;Tom Holland, Position&nbsp;-</p>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div className={styles['carousel-item']}>
                <Image className={styles['avatar']} alt='Tom Holland' src={TomHolland} width={100} height={100} />

                <div className={styles['text-container']}>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione minus vel ea laboriosam at
                    officiis repudiandae eos sequi cum cupiditate!
                  </p>
                  <p>-&nbsp;Tom Holland, Position&nbsp;-</p>
                </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className={styles['carousel-item']}>
                <Image className={styles['avatar']} alt='Tom Holland' src={TomHolland} width={100} height={100} />

                <div className={styles['text-container']}>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione minus vel ea laboriosam at
                    officiis repudiandae eos sequi cum cupiditate!
                  </p>
                  <p>-&nbsp;Tom Holland, Position&nbsp;-</p>
                </div>
              </div>
            </Slide>
          </Slider>

          <ButtonNext>&gt;</ButtonNext>
        </CarouselProvider>
      </div>

      <div className={styles['vacancy-container']}>
        <h2>JOB VACANCY</h2>
        {/* <div className={styles['search-input']}>
          <input type='text' placeholder='Search...' />
          <div className={styles['image-container']}>
            <Image alt='Search' src={Search} width={25} height={25} />
          </div>
        </div> */}
        <p className={styles['send-cv']}>
          Send your CV to <strong>career@nap.net.id</strong>
        </p>
        <div className={styles['job-listing']}>
          <div className={styles['job-item']}>
            <h2>Accounting &amp; Tax Associate</h2>
            <ul>
              <li>Minimum diploma or bachelor’s degree in Accounting/Finance/Tax.</li>
              <li>At least having 2 years of working experience in similar field.</li>
              <li>Having an excellent knowledge in general accounting practice.</li>
              <li>Having a certificate of Brevet A &amp; B is preferred.</li>
              <li>Familiar with e-Faktur Pajak, e-SPT, and general tax regulations.</li>
              <li>Have the ability in data analysis, reports, and financial projections.</li>
              <li>Have the ability to use MS. Office.</li>
              <li>Having a good communication and interpersonal skills.</li>
            </ul>
          </div>
          <div className={styles['job-item']}>
            <h2>Finance Associate</h2>
            <ul>
              <li> Minimum diploma or bachelor’s degree in Accounting.</li>
              <li> At least having 2 years of working experience in Account Payable/Finance.</li>
              <li> Have a good communication and administrative skills.</li>
              <li> Comprehend basic accounting processes.</li>
              <li> Comprehend financial transaction reports.</li>
              <li> Have the ability to use MS. Office.</li>
              <li> Have the ability to manage SAP system is a plus.</li>
            </ul>
          </div>
          <div className={styles['job-item']}>
            <h2>Account Manager</h2>
            <ul>
              <li>Male / Female max 35 years old.</li>
              <li>Diploma or bachelor&lsquo;s degree from any background.</li>
              <li>Min. 3 years working experience as Account Manager in Telecommunication or IT Industries.</li>
              <li>Good Communication &amp; Interpersonal skills.</li>
              <li>Proficiency in English skill.</li>
              <li>Strong presentation and negotiation skills.</li>
              <li>Confidence, tact and a persuasive manner.</li>
              <li>Good organisational and time management skills.</li>
            </ul>
          </div>
          <div className={styles['job-item']}>
            <h2>System Developer</h2>
            <ul>
              <li>Minimum bachelor&lsquo;s degree majoring Computer Science/Information Technology or equivalent.</li>
              <li>At least having 2 years of working experience in similar field.</li>
              <li>
                Having an excellent knowledge and hands-on experience in web programming – PHP with Laravel framework.
              </li>
              <li>Having an excellent experience in creating report using SQL.</li>
              <li>Good in analytic, and systematic skills.</li>
              <li>A fast learner, a self-starter, highly initiative person.</li>
              <li>Good command of spoken and written English.</li>
            </ul>
          </div>
          <div className={styles['job-item']}>
            <h2>Network Engineering</h2>
            <ul>
              <li> Diploma or bachelor&lsquo;s degree in Electrical Engineering, </li>
              <li> Telecommunication or any IT major related.</li>
              <li> Having a min. 2 years experience in Telecommunication industry or ISP.</li>
              <li> Having certification such as Juniper or similar.</li>
              <li> Having ability to configure switches &amp; routers.</li>
              <li> Strong technical skills &amp; able to do a well-managed troubleshooting.</li>
              <li> Having a good understanding of basic network and familiar with network application.</li>
              <li> Having to work in team with minimum supervision.</li>
              <li> Having a good interpersonal and communication skill</li>
            </ul>
          </div>
          <div className={styles['job-item']}>
            <h2>Network Monitoring Support</h2>
            <ul>
              <li>Diploma or bachelor’s degree from Electrical Engineering, Telecommunication or IT major.</li>
              <li>Having certification such as CCNA (Cisco Certified Network Associate) is an advantage.</li>
              <li>Have the ability to configure switches and routers.</li>
              <li>Having a good technical knowledge related to telecommunications networks.</li>
              <li>Having a one-year experience in Telecommunication industry is an advantage.</li>
              <li>Having a good communication and interpersonal skills.</li>
              <li>Having a good organizational and time management skills.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    'https://matrix-webapi.staging.byteforce.id/api/public/careers/paginate?page=1&size=10&lang=en',
    {
      method: 'GET',
    }
  );
  const resJSON = await res.json();

  return {
    props: {
      products: resJSON.data,
    },
    revalidate: 3600,
  };
};
