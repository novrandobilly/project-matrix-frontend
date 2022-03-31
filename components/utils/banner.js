import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HomeBanner from '../../assets/home-banner.png';
import Image from 'next/image';
import styles from './banner.module.scss';

export default function Banner({
  bannerNav = true,
  bannerSource = [HomeBanner, HomeBanner, HomeBanner, HomeBanner, HomeBanner],
  bannerWidth = 1366,
  bannerHeight = 420,
  hyperLink = ['#', '#', '#', '#', '#'],
  alt = 'Home Banner',
  style = {},
}) {
  const [activeIndex, setActiveIndex] = useState(1);
  const onBannerSelectHandler = (e) => {
    const bannerId = e.target.id;
    setActiveIndex(parseInt(bannerId));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === bannerSource.length) {
        setActiveIndex(1);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, bannerSource.length]);

  return (
    <div className={styles['container']} style={style}>
      <div className={styles['banner']}>
        <Link href={`${hyperLink[activeIndex - 1]}`} passHref>
          <span>
            <Image alt={alt} src={bannerSource[activeIndex - 1]} width={bannerWidth} height={bannerHeight} />
          </span>
        </Link>
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
