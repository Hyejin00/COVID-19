import produce from "immer";

  //추후에 스토리지로 들어갈 관심목록 리스트
  const AREA_NAME_PUBLIC = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주']
  // const AREA_NAME_PUBLIC = ['검역', '제주', '경남', '경북', '전남', '전북', '충남', '충북', '강원', '경기', '세종', '울산', '대전', '광주', '인천', '대구', '부산', '서울']
  
const baseState = {
  loading: true,
  covidnews: {},
  areaData: {},
  countryData: {},
  myAreaData: [],
  stateFocus : '서울',
  myArea:['서울']
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
      action.payload[0].map((area, i) => {
        state.areaData[AREA_NAME_PUBLIC[i]]=area
      })
      
      const myList = []
      state.myArea.forEach(area => {
        myList.push(state.areaData[area]);
      });
      state.myAreaData = myList;
      break;
    case 'FETCH_MYAREA':
      state.myArea = action.payload;
      break;
    case 'FETCH_AREANAME':
      state.myArea = action.payload;
      break;
    case 'SET_STATE_FOCUS':
      state.stateFocus = action.payload;
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