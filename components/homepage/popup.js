import styles from './popup.module.scss';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';
import LettersAround from '../../assets/letters-around.png';
import Building from '../../assets/icons/building.svg';
import Link from 'next/link';

const Popup = ({ show, onCancel }) => {
  return (
    <CSSTransition in={show} timeout={400} classNames='slide-in-top' mountOnEnter unmountOnExit>
      <div className={styles['popup']} onClick={onCancel}>
        <Image src={LettersAround} alt='Letters Around' width={250} height={275} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti, dolorem soluta voluptatum fuga sit
          veritatis tempore incidunt aperiam. Officiis alias maiores tempore sed soluta.
        </p>
        <div className={styles['button-container']}>
          <Link href='/corporate' passHref>
            <button className={styles['corporate']}>
              <Image src={Building} width={20} height={20} alt='Building' />
              <span>Corporate</span>
            </button>
          </Link>
          <Link href='/product' passHref>
            <button className={styles['broadband']}>
              <Image src={Building} width={20} height={20} alt='Building' />
              <span>Broadband</span>
            </button>
          </Link>
        </div>
        <p className={styles['close']}>Close</p>
      </div>
    </CSSTransition>
  );
};

export default Popup;
