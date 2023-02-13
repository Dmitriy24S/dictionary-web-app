import throttle from 'lodash/throttle';
import { FormEvent, useMemo, useState } from 'react';
import Header from '../components/Header/Header';
import SearchInput from '../components/SearchInput/SearchInput';
import WordInfo from '../components/WordInfo/WordInfo';
import useFetchWordData from '../hooks/useFetchWordData';

function Home() {
  const [word, setWord] = useState('');
  const { wordData, status, refetch } = useFetchWordData({ word });

  const throttledRefetch = useMemo(() => throttle(refetch, 750), [refetch]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('handle submit');
    if (word.trim().length === 0) return;
    // refetch();
    // throttle(refetch, 750);
    throttledRefetch();
  };

  return (
    <>
      <Header />
      <SearchInput handleSubmit={handleSubmit} word={word} setWord={setWord} />
      {wordData && <WordInfo wordData={wordData} status={status} />}
      {/* <h1>Hello World</h1> */}
    </>
  );
}

export default Home;
