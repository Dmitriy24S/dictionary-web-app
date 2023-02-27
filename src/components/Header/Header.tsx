import { RiBookLine } from 'react-icons/ri';
import { FontFamilyEnum } from '../../types/types';
import Divider from '../Divider/Divider';
import FontSwitcher from '../FontSwitcher/FontSwitcher';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.scss';

interface IProps {
  handleUpdateFontFamily: (selectedFontFamily: FontFamilyEnum) => void;
}

function Header({ handleUpdateFontFamily }: IProps) {
  return (
    <header className={styles.header}>
      <RiBookLine className={styles.logo} />
      <div className={styles.headerRight}>
        <FontSwitcher handleUpdateFontFamily={handleUpdateFontFamily} />
        <Divider />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
