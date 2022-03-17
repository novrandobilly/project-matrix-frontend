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

export default function Home() {
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
          naturalSlideHeight={8}
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
        <h1>JOB VACANCY</h1>
        <div className={styles['search-input']}>
          <input type='text' placeholder='Search...' />
          <div className={styles['image-container']}>
            <Image alt='Search' src={Search} width={25} height={25} />
          </div>
        </div>
        <p className={styles['send-cv']}>
          Send your CV to <strong>career@nap.net.id</strong>
        </p>
        <div className={styles['job-item']}>
          <h2>JOB POSITION</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsum ipsa suscipit accusantium dolores
            rerum, accusamus porro veniam numquam commodi provident, incidunt eveniet officiis doloremque sequi quisquam
            consequatur hic iure? Illo dolorum, iste, eaque fugiat saepe minima repellendus sint dicta consequuntur sit
            quidem esse sapiente officiis officia nostrum porro! Alias, assumenda maiores. Esse, nulla sit! Blanditiis
            animi cumque aliquam quam, ullam iure enim possimus quia fuga doloremque aperiam eum? Harum quam est in
            voluptate. Eius eos quasi inventore, praesentium sapiente, dignissimos, consequatur aliquid harum architecto
            illum eaque consectetur similique excepturi hic libero rerum asperiores iste modi tenetur provident quo est?
          </p>
        </div>
        <div className={styles['job-item']}>
          <h2>JOB POSITION</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsum ipsa suscipit accusantium dolores
            rerum, accusamus porro veniam numquam commodi provident, incidunt eveniet officiis doloremque sequi quisquam
            consequatur hic iure? Illo dolorum, iste, eaque fugiat saepe minima repellendus sint dicta consequuntur sit
            quidem esse sapiente officiis officia nostrum porro! Alias, assumenda maiores. Esse, nulla sit! Blanditiis
            animi cumque aliquam quam, ullam iure enim possimus quia fuga doloremque aperiam eum? Harum quam est in
            voluptate. Eius eos quasi inventore, praesentium sapiente, dignissimos, consequatur aliquid harum architecto
            illum eaque consectetur similique excepturi hic libero rerum asperiores iste modi tenetur provident quo est?
          </p>
        </div>
        <div className={styles['job-item']}>
          <h2>JOB POSITION</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsum ipsa suscipit accusantium dolores
            rerum, accusamus porro veniam numquam commodi provident, incidunt eveniet officiis doloremque sequi quisquam
            consequatur hic iure? Illo dolorum, iste, eaque fugiat saepe minima repellendus sint dicta consequuntur sit
            quidem esse sapiente officiis officia nostrum porro! Alias, assumenda maiores. Esse, nulla sit! Blanditiis
            animi cumque aliquam quam, ullam iure enim possimus quia fuga doloremque aperiam eum? Harum quam est in
            voluptate. Eius eos quasi inventore, praesentium sapiente, dignissimos, consequatur aliquid harum architecto
            illum eaque consectetur similique excepturi hic libero rerum asperiores iste modi tenetur provident quo est?
          </p>
        </div>
      </div>
    </div>
  );
}
