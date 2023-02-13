import { RiBookLine } from 'react-icons/ri';
import Divider from '../Divider/Divider';
import FontSwitcher from '../FontSwitcher/FontSwitcher';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <RiBookLine className={styles.logo} />
      <div className={styles.headerRight}>
        <FontSwitcher />
        <Divider />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
