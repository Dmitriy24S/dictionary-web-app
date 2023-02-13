import { FormEvent, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import styles from './SearchInput.module.scss';

interface IProps {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: FormEvent) => void;
}

function SearchInput({ word, setWord, handleSubmit }: IProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleClearSearchInput = () => {
    setWord('');
    searchInputRef?.current?.focus();
  };

  return (
    <form className={styles.searchInputContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="e.g keyboard"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        ref={searchInputRef}
      />
      {word.length > 0 && (
        <button
          type="button"
          aria-label="clear search"
          title="Clear search"
          className={styles.clearIconButton}
        >
          <IoMdClose onClick={handleClearSearchInput} />
        </button>
      )}
      <BiSearch
        className={styles.searchIcon}
        onClick={handleSubmit}
        title="Search"
      />
    </form>
  );
}

export default SearchInput;
