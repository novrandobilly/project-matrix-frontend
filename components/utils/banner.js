import React, { useState } from 'react';
import HomeBanner from '../../assets/home-banner.png';
import Image from 'next/image';
import styles from './banner.module.scss';

export default function Banner({
  bannerNav = true,
  bannerSource = [HomeBanner, HomeBanner, HomeBanner, HomeBanner, HomeBanner],
  bannerWidth = 1366,
  bannerHeight = 420,
  alt = 'Home Banner',
  style = {},
}) {
  const [activeIndex, setActiveIndex] = useState(1);

  const onBannerSelectHandler = (e) => {
    const bannerId = e.target.id;
    setActiveIndex(parseInt(bannerId));
  };
  return (
    <div className={styles['container']} style={style}>
      <div className={styles['banner']}>
        <Image alt={alt} src={bannerSource[activeIndex - 1]} width={bannerWidth} height={bannerHeight} />
      </div>
      {bannerNav && (
        <div className={styles['banner-navigation']}>
          <div
            id='1'
            onClick={onBannerSelectHandler}
            className={`${styles['banner-nav']} ${activeIndex === 1 ? styles['banner-active'] : ''}`}
          />
          <div
            id='2'
            onClick={onBannerSelectHandler}
            className={`${styles['banner-nav']} ${activeIndex === 2 ? styles['banner-active'] : ''}`}
          />
          <div
            id='3'
            onClick={onBannerSelectHandler}
            className={`${styles['banner-nav']} ${activeIndex === 3 ? styles['banner-active'] : ''}`}
          />
          <div
            id='4'
            onClick={onBannerSelectHandler}
            className={`${styles['banner-nav']} ${activeIndex === 4 ? styles['banner-active'] : ''}`}
          />
          <div
            id='5'
            onClick={onBannerSelectHandler}
            className={`${styles['banner-nav']} ${activeIndex === 5 ? styles['banner-active'] : ''}`}
          />
        </div>
      )}
    </div>
  );
}
