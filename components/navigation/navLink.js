import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './navLink.module.scss';

const NavLink = ({ children, href, exact, passHref = false }) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  let navlinkStyles = ``;

  if (isActive) navlinkStyles += ` ${styles['active']}`;

  return (
    <Link href={href} passHref={passHref}>
      <a className={navlinkStyles}>{children}</a>
    </Link>
  );
};

export default NavLink;
