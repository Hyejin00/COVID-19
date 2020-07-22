import axios from 'axios';

const NEWS_API = "https://openapi.naver.com/v1/search/news.json";
const NEWS_ID = "dVWdGSs2FWC3OwDyBPI_";
const NEWS_PW = "0Ja5lIgz1N";
const NEWS_HEADER = {
  'X-Naver-Client-Id': NEWS_ID,
  'X-Naver-Client-Secret': NEWS_PW
}

export function fetchCOVIDNews(){
  return async (dispatch) => {
    try{
      const result = await axios(NEWS_API, 
        {
          params: {
            query: "코로나",
            display: 50,
            start: 1,
            sort: "sim"
          },
          headers: {
            'X-Naver-Client-Id': NEWS_ID,
            'X-Naver-Client-Secret': NEWS_PW
          }
        }
        );
      dispatch({type: 'FETCH_COVID_NEWS', payload: result.data.items})
    }catch(error){
      console.error(error);
    }
  }
}