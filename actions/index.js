import axios from 'axios';

const NEWS_API = "https://openapi.naver.com/v1/search/news.json";
const NEWS_ID = "dVWdGSs2FWC3OwDyBPI_";
const NEWS_PW = "0Ja5lIgz1N";

const COVID_API_COUNTRY = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson";
const COVID_API_AREA = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?";
const COVID_SERVICE_KEY = decodeURIComponent("x6dJYBesyJASIb%2Fp267HqOfG6XBiBrfgntc7M2Ih8WPpxISF6Q%2FTpuMO3f4ab2VfKVDQc1orY0mq38ZCl0AI0A%3D%3D");

const today = new Date();

function yyyymmdd(dateIn) {
  var yyyy = dateIn.getFullYear();
  var mm = dateIn.getMonth() + 1; // getMonth() is zero-based
  var dd = dateIn.getDate() - 1;
  return String(10000 * yyyy + 100 * mm + dd); // Leading zeros for mm and dd
}

const date = yyyymmdd(today);

const getCOVIDCountry = async() =>{
  return await axios.get(COVID_API_COUNTRY,{
    params:{
      serviceKey: COVID_SERVICE_KEY,
      pageNo: '1',
      numOfRows: '10',
      startCreateDt: date,
      endCreateDt: date
    }
  })
}

const getCOVIDCountryYesterday = async() =>{
  return await axios.get(COVID_API_COUNTRY,{
    params:{
      serviceKey: COVID_SERVICE_KEY,
      pageNo: '1',
      numOfRows: '10',
      startCreateDt: date*1-1,
      endCreateDt: date*1-1
    }
  })
}

export function fetchCOVIDCountry(){
  return (dispatch) => {
    try{
      getCOVIDCountryYesterday().then((resYesterday)=>{
        getCOVIDCountry().then((res)=>{
          const result = res.data.response.body.items.item; 
          const resultYesterday = resYesterday.data.response.body.items.item; 
          result.decideCntChanged = result.decideCnt - resultYesterday.decideCnt
          result.clearCntChanged = result.clearCnt - resultYesterday.clearCnt
          result.careCntChanged = result.careCnt - resultYesterday.careCnt
          result.deathCntChanged = result.deathCnt - resultYesterday.deathCnt
          dispatch({type: 'FETCH_COVID_COUNTRY', payload: result})
        });
      });
    }catch(error){
    }
  }
}

const getCOVIDArea = async() =>{
  return await axios.get(COVID_API_AREA,{
    params:{
      serviceKey: COVID_SERVICE_KEY,
      pageNo: '1',
      numOfRows: '10',
      startCreateDt: date,
      endCreateDt: date
    }
  })
}

export function fetchCOVIDArea(){
  return (dispatch) => {
    dispatch({ type: 'START_LOADING' });
    try{
      getCOVIDArea().then((res)=>{
        dispatch({type: 'FETCH_COVID_AREA', payload: res.data.response.body.items.item})
      });
    }catch(error){
      console.log("에러!!!", error)
    }finally{
      dispatch({ type: 'END_LOADING' });
    }
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

export function setPage({pageNo}){
  return async (dispatch) => {
    try{
      dispatch({type: 'SET_PAGE', payload: pageNo})
    }catch(error){
      console.error(error);
    }
  }
}