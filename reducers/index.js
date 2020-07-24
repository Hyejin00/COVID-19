import produce from "immer";

  //추후에 스토리지로 들어갈 관심목록 리스트
  const myArea = ['서울', '제주', '충남'];
  // const AREA_NAME_TODAY = ['전국', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주']
  const AREA_NAME_PUBLIC = ['검역', '제주', '경남', '경북', '전남', '전북', '충남', '충북', '강원', '경기', '세종', '울산', '대전', '광주', '인천', '대구', '부산', '서울']

const baseState = {
  loading: true,
  covidnews: {},
  areaData: {
    // {
    //   "createDt": "2020-07-22 10:52:29.546",
    //   "deathCnt": 11,
    //   "defCnt": 1514,
    //   "gubun": "서울",
    //   "gubunCn": "首尔",
    //   "gubunEn": "Seoul",
    //   "incDec": 16,
    //   "isolClearCnt": 1346,
    //   "isolIngCnt": 157,
    //   "localOccCnt": 16,
    //   "overFlowCnt": 0,
    //   "qurRate": 15.55,
    //   "seq": 3163,
    //   "stdDay": "2020년 07월 22일 00시",
    //   "updateDt": "null",
    // }
  },
  countryData: {
    // "accDefRate": 0.9439441754,
    // "accExamCnt": 1492071,
    // "accExamCompCnt": 1470320,
    // "careCnt": 884,
    // "clearCnt": 12698,
    // "createDt": "2020-07-22 10:27:17.21",
    // "deathCnt": 297,
    // "decideCnt": 13879,
    // "examCnt": 21751,
    // "resutlNegCnt": 1456441,
    // "seq": 207,
    // "stateDt": 20200722,
    // "stateTime": "00:00",
    // "updateDt": "null",
  },
  myAreaData: [],
  curPage : 0,
  // todayData : {
  //   // "서울": {
  //   //   "격리해제수": 1361,
  //   //   "사망자수": 11,
  //   //   "십만명당발생율": 15.68,
  //   //   "지역별확진자비율": 10.95,
  //   //   "지역이름": "서울",
  //   //   "확진자수": 1526,
  //   // },
  //   // "세종": {
  //   //   "격리해제수": 50,
  //   //   "사망자수": 0,
  //   //   "십만명당발생율": 14.61,
  //   //   "지역별확진자비율": 0.36,
  //   //   "지역이름": "세종",
  //   //   "확진자수": 50,
  //   // },
  // }
};

const reducer = produce((state, action) => {
  switch(action.type){
    case 'FETCH_COVID_NEWS':
      state.covidnews = {};
      action.payload.forEach(cnews => {
        state.covidnews[cnews.title] = cnews;
      });
      break;
    case 'FETCH_COVID_COUNTRY':
      state.countryData = action.payload;
      break;
    case 'FETCH_COVID_AREA':
      action.payload.map((area, i) => {
        state.areaData[AREA_NAME_PUBLIC[i]]=area
      })
      
      const myList = []
      myArea.forEach(area => {
        myList.push(state.areaData[area]);
      });
      state.myAreaData = myList;
      break;
    // case 'FETCH_TODAY_COVID':
    //   var data = action.payload[0];
    //   data.map((area, i) => {
    //     state.todayData[AREA_NAME_TODAY[i]]=area;
    //   })
    //   state.todayData.timestamp = action.payload[1]["업데이트날짜"];
    //   console.log(state.todayData)
    //   const myList = []
    //   myArea.forEach(area => {
    //     myList.push(state.todayData[area]);
    //   });
    //   state.myAreaData = myList;
    //   break;
    case 'SET_PAGE':
      state.curPage = action.payload;
      break;
    case 'START_LOADING':
            state.loading = true;
            break;
    case 'END_LOADING':
        state.loading = false;
        break;
    default:
      break;
  }
}, baseState); 

export default reducer;