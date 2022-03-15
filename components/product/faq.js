import React, { useState } from 'react';
import DownArrow from '../../assets/icons/down-arrow.svg';
import Image from 'next/image';
import styles from './faq.module.scss';

export default function FAQ() {
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
    <div className={styles['faq']}>
      <h1>Need Help?</h1>
      <h2>Frequently Asked Questions</h2>
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
  );
}
