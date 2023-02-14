import styles from './WordInfo.module.scss';

interface IProps {
  wordData: any; // TODO: add types?
  status: 'idle' | 'error' | 'loading' | 'success';
}

function WordInfo({ wordData, status }: IProps) {
  console.log('wordData', wordData);
  // data3API: {status: 'fulfilled', value: {…}}

  // console.log('typeof 0', typeof wordData[0]);
  // value:
  // config:   {transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
  // data:   [{…}]
  // headers:  AxiosHeaders {content-type: 'application/json; charset=utf-8'}
  // request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
  // status: 200
  // statusText: ""

  // const { dictionaryData } = wordData;
  // const { thesaurusData } = wordData;
  // const { data3API } = wordData.;
  const data3API = wordData.data3API.value.data;

  // console.log('thesaurusData', thesaurusData); // thesaurusData Invalid API key. Not subscribed for this reference.

  return (
    <div className={styles.wordInfoContainer}>
      {data3API?.map((el: any, index: number) => {
        return (
          <div key={index} className={styles.wordInfo}>
            <h4 className={styles.word}>{el?.word}</h4>
            <div className={styles.phonetic}>{el?.phonetic}</div>
            {el?.meanings?.map((meaning: any, index: number) => {
              return (
                <div key={index} className={styles.wordDefinition}>
                  <div className={styles.wordLabelContainer}>
                    <h4 className={styles.wordLabel}>
                      {meaning?.partOfSpeech}
                    </h4>
                    <div className={styles.separator} />
                  </div>
                  <h4 className={styles.meaningTitle}>Meaning</h4>
                  {/* definitons */}
                  <ul className={styles.definitionsList}>
                    {meaning?.definitions?.map(
                      (definition: any) =>
                        // fix for received empty text ';' inside 'break' search query - not show it
                        definition.definition.length > 2 && (
                          <li key={definition.definition}>
                            {definition.definition}
                          </li>
                        )
                    )}
                  </ul>
                  {/* examples */}
                  {meaning?.definitions.length > 0 && (
                    <div className={styles.exampleTextContainer}>
                      {meaning?.definitions?.map((el: any, index: number) => {
                        if (index < 6 && el.example) {
                          return (
                            <p
                              key={el.example}
                              className={styles.exampleText}
                            >{`"${el.example}"`}</p>
                          );
                        }
                      })}
                    </div>
                  )}
                  {/* synonyms */}
                  {meaning?.synonyms.length > 0 && (
                    <div className={styles.synonymsContainer}>
                      <h4 className={styles.synonymsTitle}>Synoyms</h4>
                      <p key="synonyms" className={styles.synonym}>
                        {meaning?.synonyms.join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default WordInfo;
