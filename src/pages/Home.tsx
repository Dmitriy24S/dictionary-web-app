import throttle from 'lodash/throttle';
import { FormEvent, useMemo, useState } from 'react';
import ErrorFetchMessage from '../components/ErrorFetchMessage/ErrorFetchMessage';
import Header from '../components/Header/Header';
import SearchInput from '../components/SearchInput/SearchInput';
import WordInfo from '../components/WordInfo/WordInfo';
import useFetchWordData from '../hooks/useFetchWordData';
import { FontFamilyEnum } from '../types/types';

function Home() {
  const [fontFamily, setFontFamily] = useState<FontFamilyEnum>(
    FontFamilyEnum.SANS_SERIF
  ); // ! const fontFamily: FontFamily
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

  const handleUpdateFontFamily = (selectedFontFamily: FontFamilyEnum) => {
    console.log('handleUpdateFontFamily selected value:', selectedFontFamily);
    setFontFamily(selectedFontFamily);
  };

  return (
    // <div style={{ fontFamily: fontFamily as string }}>
    // <div style={{ fontFamily: fontFamily }}>  // ! Expected property shorthand.eslintobject-shorthand
    // ! This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided.
    <div className="wrapper" style={{ fontFamily }}>
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      <>
        <Header handleUpdateFontFamily={handleUpdateFontFamily} />
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
    </div>
  );
}

export default Home;
