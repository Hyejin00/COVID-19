import axios from 'axios';

const NEWS_API = "https://openapi.naver.com/v1/search/news.json";
const NEWS_ID = "dVWdGSs2FWC3OwDyBPI_";
const NEWS_PW = "0Ja5lIgz1N";

// const COVID_API = "http://openapi.data.go.kr/openapi/service/rest/Covid19/";
// const COVID_SERVICE_KEY = "x6dJYBesyJASIb%2Fp267HqOfG6XBiBrfgntc7M2Ih8WPpxISF6Q%2FTpuMO3f4ab2VfKVDQc1orY0mq38ZCl0AI0A%3D%3D";

// export function fetchCOVID(){
//   return async (dispatch) => {
//     try{
//       const instance = await axios.create({
//         baseURL: COVID_API,
//         withCredentials: false,
//         headers: {
//           'Access-Control-Allow-Origin' : '*',
//           'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//           }
//       });
//       const result = await instance.get('getCovid19InfStateJson?serviceKey=x6dJYBesyJASIb%2Fp267HqOfG6XBiBrfgntc7M2Ih8WPpxISF6Q%2FTpuMO3f4ab2VfKVDQc1orY0mq38ZCl0AI0A%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20200722&endCreateDt=20200722', 
//         {

//         }
//         );
//       console.log("결과!",result)
//       dispatch({type: 'FETCH_COVID', payload: result.data})
//     }catch(error){
//       console.error(error);
//     }
//   }
// }

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