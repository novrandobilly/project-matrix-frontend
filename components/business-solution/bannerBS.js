import React, { useState } from 'react';
import BusinessSolutionBanner from '../../assets/business-solution-banner.png';
import Image from 'next/image';
import styles from './bannerBS.module.scss';

export default function BannerBS({
  bannerNav = true,
  bannerSource = [
    BusinessSolutionBanner,
    BusinessSolutionBanner,
    BusinessSolutionBanner,
    BusinessSolutionBanner,
    BusinessSolutionBanner,
  ],
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
          {bannerSource.map((banner, index) => {
            return (
              <div
                key={index}
                id={index + 1}
                onClick={onBannerSelectHandler}
                className={`${styles['banner-nav']} ${activeIndex === index + 1 ? styles['banner-active'] : ''}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
