import produce from "immer";

const baseState = {
  covidnews: {},
  areaData: [
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
  ],
  countryData: {
    // 'deathChanged': 0,
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
  }
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
      state.areaData = action.payload;
      break;
    default:
      break;
  }
}, baseState); 

export default reducer;