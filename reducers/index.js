import produce from "immer";

  //추후에 스토리지로 들어갈 관심목록 리스트
  const myArea = ['서울', '제주', '충남'];

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
  myAreaData: [
    
  ],
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
  myAreaData: [

  ],
  curPage : 0
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
      // console.log(action.payload.length) 19
      const areaName = ['검역', '제주', '경남', '경북', '전남', '전북', '충남', '충북', '강원', '경기', '세종', '울산', '대전', '광주', '인천', '대구', '부산', '서울', '합계']
      action.payload.map((area, i) => {
        state.areaData[areaName[i]]=area
      })
      
      const myList = []
      myArea.forEach(area => {
        myList.push(state.areaData[area]);
      });
      state.myAreaData = myList;
      break;
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