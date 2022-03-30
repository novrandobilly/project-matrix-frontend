import styles from './term-conditions.module.scss';
import Image from 'next/image';
import Feature1 from '../../assets/matrix-features/1.png';
import Feature2 from '../../assets/matrix-features/2.png';
import Feature3 from '../../assets/matrix-features/3.png';
import Feature4 from '../../assets/matrix-features/4.png';
import Feature5 from '../../assets/matrix-features/5.png';

export default function TermConditions() {
  return (
    <div className={styles['term-conditions-container']}>
      {/* <div className={styles['features']}>
        <Image src={Feature1} alt='100% Fiber Optic' width={150} height={150} />
        <Image src={Feature2} alt='Unlimited No FUP' width={150} height={150} />
        <Image src={Feature3} alt='Uang kembali saat gangguan*' width={150} height={150} />
        <Image src={Feature4} alt='Powered by MC-IX' width={150} height={150} />
        <Image src={Feature5} alt='IPv6 Ready' width={150} height={150} />
        <div className={styles['red-line-background']} />
      </div> */}

      <div className={styles['term-conditions']}>
        <h2 className={styles['title']}>Terms &amp; Conditions</h2>
        <p className={styles['sub-title']}>Matrix Broadband</p>
        <ul className={styles['toc-list']}>
          <li>Prices exclude 11% VAT &amp; Insurance Fees</li>
          <li>Prices include equipment rental fee</li>
          <li>Prices &amp; packages are valid for certain areas and periods.</li>
          <li>Prices are subject to change at any time.</li>
        </ul>
      </div>
    </div>
  );
}
