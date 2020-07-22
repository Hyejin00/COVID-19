import axios from 'axios';

const NEWS_API = "https://openapi.naver.com/v1/search/news.json";
const NEWS_ID = "dVWdGSs2FWC3OwDyBPI_";
const NEWS_PW = "0Ja5lIgz1N";

const COVID_API = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson";
const COVID_SERVICE_KEY = decodeURIComponent("x6dJYBesyJASIb%2Fp267HqOfG6XBiBrfgntc7M2Ih8WPpxISF6Q%2FTpuMO3f4ab2VfKVDQc1orY0mq38ZCl0AI0A%3D%3D");

const getCOVID = async() =>{
  return await axios.get(COVID_API,{
    params:{
      serviceKey: COVID_SERVICE_KEY,
      pageNo: '1',
      numOfRows: '10',
      startCreateDt: '20200722',
      endCreateDt: '20200722'
    }
  })
}

export function fetchCOVIDCountry(){
  return (dispatch) => {
    getCOVID().then((res)=>{
      console.log(res.data.response.body.items.item);
      dispatch({type: 'FETCH_COVID_COUNTRY', payload: res.data.response.body.items.item})
    });
  }
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