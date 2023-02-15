/* eslint-disable jsx-a11y/label-has-associated-control */
import { HiOutlineMoon } from 'react-icons/hi';
import useDarkMode from '../../hooks/useDarkMode';
import styles from './ThemeToggle.module.scss';

function ThemeToggle() {
  const { darkTheme, handleToggleTheme } = useDarkMode();

  return (
    <div className={styles.themeToggleContainer}>
      <div className={styles.themeToggle}>
        <input
          type="checkbox"
          name="theme-toggle"
          id="theme-toggle"
          aria-label="toggle theme"
          // defaultChecked={darkTheme === 'true'}
          checked={darkTheme}
          onChange={handleToggleTheme}
        />
        <label htmlFor="theme-toggle" />
      </div>
      <label htmlFor="theme-toggle" className={styles.themeToggleIcon}>
        <HiOutlineMoon />
      </label>
    </div>
  );
}

export default ThemeToggle;
