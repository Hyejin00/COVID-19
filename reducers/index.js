import produce from "immer";

const baseState = {
  covidnews: {},
  myArea: [
    {
      areaName:'경기도',
      confirmedNum: 20,
    },
    {
      areaName:'서울',
      confirmedNum: 25,
    },
    {
      areaName:'부안',
      confirmedNum: 0,
    },
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
    default:
      break;
  }
}, baseState); 

export default reducer;