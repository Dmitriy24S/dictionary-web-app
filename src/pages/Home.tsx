import throttle from 'lodash/throttle';
import { FormEvent, useMemo, useState } from 'react';
import ErrorFetchMessage from '../components/ErrorFetchMessage/ErrorFetchMessage';
import Header from '../components/Header/Header';
import SearchInput from '../components/SearchInput/SearchInput';
import WordInfo from '../components/WordInfo/WordInfo';
import useFetchWordData from '../hooks/useFetchWordData';

function Home() {
  const [word, setWord] = useState('');
  const { wordData, status, refetch, isFetching, error } = useFetchWordData({
    word,
  });
  console.log('Home, status:', status);
  console.log('Home, error:', error);
  // ! const error: unknown

  const throttledRefetch = useMemo(() => throttle(refetch, 750), [refetch]);

  // const isLoading = status === 'loading';
  // console.log('isLoading', isLoading);

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
      <SearchInput
        handleSubmit={handleSubmit}
        word={word}
        setWord={setWord}
        isFetching={isFetching}
      />
      {/* {isLoading && <LoadingIcon />} */}
      {/* {isFetching && <LoadingIcon />} */}
      {/* {error && <ErrorFetchMessage error={error?.response?.data} />} */}
      {error && <ErrorFetchMessage error={error} />}
      {/* Property 'response' does not exist on type '{}'. */}
      {wordData && <WordInfo wordData={wordData} status={status} />}
      {/* <h1>Hello World</h1> */}
    </>
  );
}

export default Home;
