import styles from './WordInfo.module.scss';

interface IProps {
  wordData: any; // TODO: add types?
  status: 'idle' | 'error' | 'loading' | 'success';
}

function WordInfo({ wordData, status }: IProps) {
  console.log('wordData', wordData);
  console.log('typeof 0', typeof wordData[0]);

  const { dictionaryData } = wordData;
  const { thesaurusData } = wordData;

  console.log('thesaurusData', thesaurusData); // thesaurusData Invalid API key. Not subscribed for this reference.

  return (
    <div className={styles.wordInfoContainer}>
      {/* // when api error -> return string as wordData. e.g. Invalid API key. Not subscribed for this reference. */}
      {typeof dictionaryData === 'string'
        ? dictionaryData
        : dictionaryData?.map((el: any) => {
            return typeof el === 'string' ? (
              <li key={el}>{el}</li>
            ) : (
              <div key={el.meta.id} className={styles.wordInfo}>
                <div className={styles.wordHeader}>
                  <h4 className={styles.word}>{el?.meta?.id}</h4>
                  {/* <h4 className={styles.word}>{el?.hwi?.hw}</h4> */}
                  <div className={styles.wordLabelContainer}>
                    <div className={styles.wordLabel}>{el?.fl}</div>
                    <div className={styles.separator} />
                  </div>
                </div>
                <ol>
                  {el?.shortdef?.map((text: string) => (
                    <li key={text}>{text}</li>
                  ))}
                </ol>
              </div>
            );
          })}
    </div>
  );
}

export default WordInfo;
