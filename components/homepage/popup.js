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
        <h4>NEW LOOK, NEW FEEL, SAME HIGH-QUALITY DIGITAL SOLUTION.</h4>
        <p>Maximize Your Digital Experience With Us.</p>
        <p>Connecting You Faster To The World.</p>
        <p>Please Choose One Of The Solution:</p>
        <div className={styles['button-container']}>
          <Link href='/corporate' passHref>
            <button className={styles['corporate']}>Corporate</button>
          </Link>
          <Link href='/broadband' passHref>
            <button className={styles['broadband']}>Broadband</button>
          </Link>
        </div>
        <p className={styles['close']}>Close</p>
      </div>
    </CSSTransition>
  );
};

export default Popup;
