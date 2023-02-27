import { IoChevronDown } from 'react-icons/io5';
import { FontFamilyEnum } from '../../types/types';
import styles from './FontSwitcher.module.scss';

interface IProps {
  handleUpdateFontFamily: (selectedFontFamily: FontFamilyEnum) => void;
}

function FontSwitcher({ handleUpdateFontFamily }: IProps) {
  return (
    <div className={styles.fontSwitcher}>
      <select
        name="font-switcher"
        id="font-switcher"
        aria-label="select font style"
        // defaultValue="Serif"
        defaultValue={FontFamilyEnum.SANS_SERIF}
        onChange={(e) => {
          const selectedValue = e.target.value as FontFamilyEnum;
          handleUpdateFontFamily(selectedValue);
        }}
      >
        {/* <option value="Serif">Serif</option>
        <option value="SansSerif">Sans Serif</option>
        <option value="Monospace">Monospace</option> */}
        <option value={FontFamilyEnum.SERIF}>Serif</option>
        <option value={FontFamilyEnum.SANS_SERIF}>Sans Serif</option>
        <option value={FontFamilyEnum.MONOSPACE}>Monospace</option>
      </select>
      <IoChevronDown className={styles.chevronIcon} />
    </div>
  );
}

export default FontSwitcher;
