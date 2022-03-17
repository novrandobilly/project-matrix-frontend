import React from 'react';
import Image from 'next/image';
import RobertDowney from '../../assets/dummy-avatar.png';
import StarBlue from '../../assets/icons/star-blue.svg';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import styles from './testimony.module.scss';

export default function Testimony() {
  return (
    <div className={styles['container']}>
      <CarouselProvider
        className={styles['single-carousel-container']}
        naturalSlideWidth={100}
        naturalSlideHeight={8}
        totalSlides={3}>
        <ButtonBack>&lt;</ButtonBack>
        <Slider>
          <Slide index={0}>
            <div className={styles['testimony-item']}>
              <div className={styles['user-metadata']}>
                <div className={styles['avatar-container']}>
                  <div className={styles['avatar']}>
                    <Image alt='Avatar' src={RobertDowney} width={75} height={75} />
                  </div>
                </div>
                <div className={styles['name-position']}>
                  <h3>Robert Downey Jr</h3>
                  <h3>Cafe Owner</h3>
                </div>
                <div className={styles['rating']}>
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                </div>
              </div>
              <p className={styles['testimony-text']}>
                &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores error exercitationem inventore
                soluta voluptatum adipisci aut, enim ut? Quos fugiat quas dolorum perferendis cupiditate neque nostrum
                explicabo inventore repudiandae non saepe delectus excepturi earum velit.&quot;
              </p>
            </div>
          </Slide>
          <Slide index={1}>
            <div className={styles['testimony-item']}>
              <div className={styles['user-metadata']}>
                <div className={styles['avatar-container']}>
                  <div className={styles['avatar']}>
                    <Image alt='Avatar' src={RobertDowney} width={75} height={75} />
                  </div>
                </div>
                <div className={styles['name-position']}>
                  <h3>Robert Downey Jr</h3>
                  <h3>Cafe Owner</h3>
                </div>
                <div className={styles['rating']}>
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                </div>
              </div>
              <p className={styles['testimony-text']}>
                &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores error exercitationem inventore
                soluta voluptatum adipisci aut, enim ut? Quos fugiat quas dolorum perferendis cupiditate neque nostrum
                explicabo inventore repudiandae non saepe delectus excepturi earum velit.&quot;
              </p>
            </div>
          </Slide>
          <Slide index={2}>
            <div className={styles['testimony-item']}>
              <div className={styles['user-metadata']}>
                <div className={styles['avatar-container']}>
                  <div className={styles['avatar']}>
                    <Image alt='Avatar' src={RobertDowney} width={75} height={75} />
                  </div>
                </div>
                <div className={styles['name-position']}>
                  <h3>Robert Downey Jr</h3>
                  <h3>Cafe Owner</h3>
                </div>
                <div className={styles['rating']}>
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                  <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
                </div>
              </div>
              <p className={styles['testimony-text']}>
                &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores error exercitationem inventore
                soluta voluptatum adipisci aut, enim ut? Quos fugiat quas dolorum perferendis cupiditate neque nostrum
                explicabo inventore repudiandae non saepe delectus excepturi earum velit.&quot;
              </p>
            </div>
          </Slide>
        </Slider>

        <ButtonNext>&gt;</ButtonNext>
      </CarouselProvider>
      {/* <div className={styles['testimony-item']}>
        <div className={styles['user-metadata']}>
          <div className={styles['avatar-container']}>
            <div className={styles['avatar']}>
              <Image alt='Avatar' src={RobertDowney} width={75} height={75} />
            </div>
          </div>
          <div className={styles['name-position']}>
            <h3>Robert Downey Jr</h3>
            <h3>Cafe Owner</h3>
          </div>
          <div className={styles['rating']}>
            <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
            <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
            <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
            <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
            <Image alt='Star Rating' src={StarBlue} width={30} height={30} />
          </div>
        </div>
        <p className={styles['testimony-text']}>
          &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores error exercitationem inventore soluta
          voluptatum adipisci aut, enim ut? Quos fugiat quas dolorum perferendis cupiditate neque nostrum explicabo
          inventore repudiandae non saepe delectus excepturi earum velit.&quot;
        </p>
      </div> */}
    </div>
  );
}
