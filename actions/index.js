import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const NEWS_API = "https://openapi.naver.com/v1/search/news.json";
const NEWS_ID = "dVWdGSs2FWC3OwDyBPI_";
const NEWS_PW = "0Ja5lIgz1N";

const AREA_API_KEY = "AIzaSyCDk2U3E-OQl-t1v5QSvl960Ob5b947pK8";
const AREA_NAME_API = "https://maps.googleapis.com/maps/api/geocode/json";

const COVID_API_COUNTRY = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson";
const COVID_API_AREA = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?";
const COVID_SERVICE_KEY = decodeURIComponent("x6dJYBesyJASIb%2Fp267HqOfG6XBiBrfgntc7M2Ih8WPpxISF6Q%2FTpuMO3f4ab2VfKVDQc1orY0mq38ZCl0AI0A%3D%3D");

// const TODAY_COVID_URL = "https://livecorona.co.kr/data/koreaRegionalData.js";

const today = new Date();

const yyyymmdd = (dateIn) => {
  var yyyy = dateIn.getFullYear();
  var mm = dateIn.getMonth() + 1; // getMonth() is zero-based
  var dd = dateIn.getDate() -1;
  return String(10000 * yyyy + 100 * mm + dd); // Leading zeros for mm and dd
}

const date = yyyymmdd(today);

// const getTodayCOVID = async() =>{
//   return await axios.get(TODAY_COVID_URL)
// }



const getAreaName = async (lat, lon) => {
  return await axios.get(AREA_NAME_API,{
    params:{
      key: AREA_API_KEY,
      latlng: `${lat},${lon}`,
      language: 'ko'
    }
  })

}

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

// export function fetchTodayCOVID(){
//   return (dispatch) => {
//     try{
//       getTodayCOVID().then((res)=>{
//         var result = []
//         var jsonData = JSON.parse(res.data.split('= ')[1]);
//         result.push(jsonData.slice(0,18));
//         result.push(jsonData[18]);
//         dispatch({type: 'FETCH_TODAY_COVID', payload: result})
//       });
//     }catch(error){
//     }
//   }
// }

const nameFilter = (name) => {
  switch(name){
    case '경기도':
      return '경기'
    case '서울특별시':
      return '서울'
    case '강원도':
      return '강원'
    case '인천광역시':
      return '인천'
    case '충청북도':
      return '충북'
    case '대전광역시':
      return '대전'
    case '세종특별자치시':
      return '세종'
    case '충청남도':
      return '충남'
    case '전라북도':
      return '전북'
    case '광주광역시':
      return '광주'
    case '전라남도':
      return '전남'
    case '경상북도':
      return '경북'
    case '대구광역시':
      return '대구'
    case '울산광역시':
      return '울산'
    case '부산광역시':
      return '부산'
    case '경상남도':
      return '경남'
    case '제주특별자치도':
      return '제주'
    default:
      return '서울'
  }
}

export function fetchMyAreaData (lat,lng) {
  let init = []
  return (dispatch) => {
    AsyncStorage.getItem('MyArea').then(data =>{
      if(data === '[]' || !data){
        init = ['서울'];
      }else{
        init = JSON.parse(data);
      }
      console.log('Area',init);
      getAreaName(lat,lng).then((res)=>{
        const area_name = res.data.results[0]["address_components"][3]["long_name"];
        init.splice(0,0,nameFilter(area_name));
        dispatch({type:'FETCH_MYAREA', payload: init});
      });
    });
  }
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

export function setStateFocus(area){
  return async (dispatch) => {
    try{
      dispatch({type: 'SET_STATE_FOCUS', payload: area})
    }catch(error){
      console.error(error);
    }
  }
}