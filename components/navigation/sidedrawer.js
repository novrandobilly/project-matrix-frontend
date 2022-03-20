import styles from './sidedrawer.module.scss';
import { CSSTransition } from 'react-transition-group';

export const Backdrop = ({ onCancel }) => {
  return <div className={styles['backdrop']} onClick={onCancel}></div>;
};

const Sidedrawer = ({ children, show, onCancel }) => {
  return (
    <CSSTransition in={show} timeout={400} classNames='slide-in-left' mountOnEnter unmountOnExit>
      <div className={styles['sidedrawer']} onClick={onCancel}>
        {children}
      </div>
    </CSSTransition>
  );
};

export default Sidedrawer;
