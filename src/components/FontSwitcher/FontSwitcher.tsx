import { IoChevronDown } from 'react-icons/io5';
import styles from './FontSwitcher.module.scss';

function FontSwitcher() {
  return (
    <div className={styles.fontSwitcher}>
      <select
        name="font-switcher"
        id="font-switcher"
        aria-label="select font style"
        defaultValue="Serif"
      >
        <option value="Serif">Serif</option>
        <option value="SansSerif">Sans Serif</option>
        <option value="Monospace">Monospace</option>
      </select>
      <IoChevronDown className={styles.chevronIcon} />
    </div>
  );
}

export default FontSwitcher;
