import React, { useState } from 'react';
import Image from 'next/image';
import Star from '../../assets/icons/star.svg';
import DownArrow from '../../assets/icons/down-arrow.svg';
import LeftArrow from '../../assets/icons/left-arrow-gray.svg';
import RightArrow from '../../assets/icons/right-arrow-red.svg';
import DummyAvatar from '../../assets/dummy-avatar.png';
import styles from './satisfied-customer.module.scss';

export default function SatisfiedCustomer() {
  const [isOpened, setIsOpened] = useState(false);
  const [faqOpened, setFaqOpened] = useState(0);

  const onOpenHandler = (elementId) => {
    if (faqOpened === parseInt(elementId)) {
      setIsOpened(false);
      setFaqOpened(0);
    } else {
      setIsOpened(true);
      setFaqOpened(parseInt(elementId));
    }
  };
  return (
    <div className={styles['container']}>
      <div className={styles['satisfied-customer']}>
        <div className={styles['title']}>
          <h1>Our&nbsp;</h1>
          <h1>Satisfied&nbsp;</h1>
          <h1>Customer</h1>
        </div>
        <div className={styles['testimony']}>
          <p className={styles['text']}>
            &quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus consectetur dignissimos excepturi
            voluptatum voluptas, libero ipsum ut laborum cum. Facere, reiciendis ullam quasi a quod modi? Earum
            voluptates impedit repellendus!&quot;
          </p>
          <div className={styles['rating']}>
            <Image alt='Star Rating' src={Star} width={30} height={30} />
            <Image alt='Star Rating' src={Star} width={30} height={30} />
            <Image alt='Star Rating' src={Star} width={30} height={30} />
            <Image alt='Star Rating' src={Star} width={30} height={30} />
            <Image alt='Star Rating' src={Star} width={30} height={30} />
          </div>
          <div className={styles['customer-data']}>
            <div className={styles['avatar']}>
              <Image alt='Avatar' src={DummyAvatar} width={100} height={100} />
            </div>
            <div className={styles['name-job']}>
              <h2>Robert Downey Jr.</h2>
              <h2>Cafe Owner</h2>
            </div>
            <div className={styles['testimony-nav']}>
              <Image alt='Back Arrow' src={LeftArrow} width={30} height={30} />
              <Image alt='Next Arrow' src={RightArrow} width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['faq']}>
        <h1>Frequently Asked Questions</h1>
        <div className={styles['faq-group']}>
          <div className={styles['faq-list']}>
            <div className={`${styles['faq-item']} ${isOpened && faqOpened === 4 ? styles['is-opened'] : ''}`}>
              <div className={styles['faq-title']}>
                <p>
                  <strong>Lorem ipsum dolor sit, amet consectetur adipisicing?</strong>
                </p>
                <div id='1' className={styles['toggle-answer']} onClick={onOpenHandler.bind(this, 4)}>
                  <Image alt='Down Arrow' src={DownArrow} width={20} height={20} />
                </div>
              </div>
              <p className={styles['answer']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quisquam quae delectus unde, vel
                explicabo accusamus ut omnis facere repudiandae harum illum odit saepe porro ea deserunt sequi eos
                pariatur.
              </p>
            </div>
            <div className={`${styles['faq-item']} ${isOpened && faqOpened === 5 ? styles['is-opened'] : ''}`}>
              <div className={styles['faq-title']}>
                <p>
                  <strong>Lorem ipsum dolor sit, amet consectetur adipisicing?</strong>
                </p>
                <div id='2' className={styles['toggle-answer']} onClick={onOpenHandler.bind(this, 5)}>
                  <Image alt='Down Arrow' src={DownArrow} width={20} height={20} />
                </div>
              </div>
              <p className={styles['answer']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quisquam quae delectus unde, vel
                explicabo accusamus ut omnis facere repudiandae harum illum odit saepe porro ea deserunt sequi eos
                pariatur.
              </p>
            </div>
            <div className={`${styles['faq-item']} ${isOpened && faqOpened === 6 ? styles['is-opened'] : ''}`}>
              <div className={styles['faq-title']}>
                <p>
                  <strong>Lorem ipsum dolor sit, amet consectetur adipisicing?</strong>
                </p>
                <div id='3' className={styles['toggle-answer']} onClick={onOpenHandler.bind(this, 6)}>
                  <Image alt='Down Arrow' src={DownArrow} width={20} height={20} />
                </div>
              </div>
              <p className={styles['answer']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quisquam quae delectus unde, vel
                explicabo accusamus ut omnis facere repudiandae harum illum odit saepe porro ea deserunt sequi eos
                pariatur.
              </p>
            </div>
          </div>
          <div className={styles['faq-list']}>
            <div className={`${styles['faq-item']} ${isOpened && faqOpened === 1 ? styles['is-opened'] : ''}`}>
              <div className={styles['faq-title']}>
                <p>
                  <strong>Lorem ipsum dolor sit, amet consectetur adipisicing?</strong>
                </p>
                <div id='1' className={styles['toggle-answer']} onClick={onOpenHandler.bind(this, 1)}>
                  <Image alt='Down Arrow' src={DownArrow} width={20} height={20} />
                </div>
              </div>
              <p className={styles['answer']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quisquam quae delectus unde, vel
                explicabo accusamus ut omnis facere repudiandae harum illum odit saepe porro ea deserunt sequi eos
                pariatur.
              </p>
            </div>
            <div className={`${styles['faq-item']} ${isOpened && faqOpened === 2 ? styles['is-opened'] : ''}`}>
              <div className={styles['faq-title']}>
                <p>
                  <strong>Lorem ipsum dolor sit, amet consectetur adipisicing?</strong>
                </p>
                <div id='2' className={styles['toggle-answer']} onClick={onOpenHandler.bind(this, 2)}>
                  <Image alt='Down Arrow' src={DownArrow} width={20} height={20} />
                </div>
              </div>
              <p className={styles['answer']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quisquam quae delectus unde, vel
                explicabo accusamus ut omnis facere repudiandae harum illum odit saepe porro ea deserunt sequi eos
                pariatur.
              </p>
            </div>
            <div className={`${styles['faq-item']} ${isOpened && faqOpened === 3 ? styles['is-opened'] : ''}`}>
              <div className={styles['faq-title']}>
                <p>
                  <strong>Lorem ipsum dolor sit, amet consectetur adipisicing?</strong>
                </p>
                <div id='3' className={styles['toggle-answer']} onClick={onOpenHandler.bind(this, 3)}>
                  <Image alt='Down Arrow' src={DownArrow} width={20} height={20} />
                </div>
              </div>
              <p className={styles['answer']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quisquam quae delectus unde, vel
                explicabo accusamus ut omnis facere repudiandae harum illum odit saepe porro ea deserunt sequi eos
                pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
