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
    'confirmedNum': 10909,
    'confirmedNumChanged': 23,
    'release': 9632,
    'releaseChanged': 173,
    'underExam': 28245,
    'underExamChanged': 11,
    'death': 256,
    'deathChanged': 0,
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
    default:
      break;
  }
}, baseState); 

export default reducer;