/* eslint-disable jsx-a11y/label-has-associated-control */
import { HiOutlineMoon } from 'react-icons/hi';
import styles from './ThemeToggle.module.scss';

function ThemeToggle() {
  return (
    <div className={styles.themeToggleContainer}>
      <div className={styles.themeToggle}>
        <input
          type="checkbox"
          name="theme-toggle"
          id="theme-toggle"
          aria-label="toggle theme"
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
