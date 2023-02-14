import axios from 'axios';
import { useQuery } from 'react-query';

interface IProps {
  word: string;
}

const useFetchWordData = ({ word }: IProps) => {
  const url = `https://www.dictionaryapi.com/api/v3/references/sd3/json/${word}?key=${
    import.meta.env.VITE_INTERMEDIATE_API_KEY
  }`;
  const url2 = `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${word}}?key=${
    import.meta.env.VITE_INTERMEDIATE_API_KEY
  }`;
  const url3 = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  // console.log(import.meta.env.VITE_INTERMEDIATE_API_KEY);

  console.log('hook word', word);

  const fetchWordData = async () => {
    console.log('fetch start fetchWordData');
    try {
      // const response = await axios.get(url, config);
      const response1 = await axios.get(url);
      // console.log('response1', response1);
      // config: {transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
      // data: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
      // headers: AxiosHeaders {cache-control: 'max-age=86400, public', content-length: '1464', content-type: 'application/json; charset=utf-8', pragma: 'cache'}
      // request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
      // status: 200
      // statusText: ""
      const response2Thesaurus = await axios.get(url2);
      // const response3 = await axios.get(url3, config);
      const response3 = await axios.get(url3);

      // const [data1, data2Thesaurus, data3] = await Promise.all([
      const [data1, data2Thesaurus, data3] = await Promise.allSettled([
        response1,
        response2Thesaurus,
        response3,
      ]);

      // const data = await response1.data;
      // console.log('data', data);
      // data:  Array(10)
      // 0
      // : def
      // : [{…}]
      // fl: "noun"
      // hom: 1
      // hwi: {hw: 'snow', prs: Array(1)}
      // meta: {id: 'snow:1', uuid: 'cc03e395-8fd8-491b-afb9-aba9803297fc', src: 'int_dict', section: 'alpha', stems: Array(3), …}
      // shortdef: (3) ['small white ice crystals formed directly from the water vapor of the air', 'a fall of snow crystals : a mass of snow crystals that have fallen to earth', 'something resembling snow: as']
      // [[Prototype]]
      // 1:  def: [{…}]
      // fl: "verb"
      // hom: 2
      // hwi: {hw: 'snow'}
      // prs: Array(1)
      // 0: mw
      // : "ˈsnō"
      // sound: audio: "snow0001"
      // meta: {id: 'snow:2', uuid: 'e0024770-d5f9-4fc1-8200-4d2e27bb4a54', src: 'int_dict', section: 'alpha', stems: Array(4), …}
      // shortdef: (3) ['to fall or cause to fall in or as snow', 'to cover, shut in, or imprison with or as if with snow', 'to deceive, persuade, or charm with insincere or flattering talk']
      // [[Prototype]]: Object

      // return data;

      // console.log(data1, data2Thesaurus, data3);
      // {dictionaryData: {…}, thesaurusData: {…},
      // data3API: status: "fulfilled" value: {data: Array(1),

      return {
        dictionaryData: data1,
        thesaurusData: data2Thesaurus,
        data3API: data3,
        // dictionaryData: data1.data,
        // thesaurusData: data2Thesaurus.data,
        // data3API: data3.data,
      };
    } catch (error) {
      console.log('catch error', error);
      throw new Error('catch error fetching word data');
    }
  };

  const {
    data: wordData,
    status,
    refetch,
  } = useQuery({
    queryKey: ['wordData'],
    queryFn: fetchWordData,
    refetchOnWindowFocus: false,
    // notifyOnNetworkStatusChange: true
    // refetchOnMount: false,
    enabled: false,
  });

  return { wordData, status, refetch };
};

export default useFetchWordData;
