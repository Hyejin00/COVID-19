import produce from "immer";

  //추후에 스토리지로 들어갈 관심목록 리스트
  const AREA_NAME_PUBLIC = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주']
  // const AREA_NAME_PUBLIC = ['검역', '제주', '경남', '경북', '전남', '전북', '충남', '충북', '강원', '경기', '세종', '울산', '대전', '광주', '인천', '대구', '부산', '서울']
  
const baseState = {
  loading: true,
  covidnews: {},
  areaData: {
    "전국": {
      "지역이름": "전국",
      "확진자수": 14092,
      "격리해제수": 12866,
      "사망자수": 298,
      "십만명당발생율": 27.18,
      "지역별확진자비율": "",
      "전일대비": 113
    },
    "서울": {
        "지역이름": "서울",
        "확진자수": 1558,
        "격리해제수": 1381,
        "사망자수": 11,
        "십만명당발생율": 16.01,
        "지역별확진자비율": 11.06,
        "전일대비": 11
      },
    "부산": {
        "지역이름": "부산",
        "확진자수": 166,
        "격리해제수": 151,
        "사망자수": 3,
        "십만명당발생율": 4.87,
        "지역별확진자비율": 1.18,
        "전일대비": 5
      },
    "대구": {
        "지역이름": "대구",
        "확진자수": 6939,
        "격리해제수": 6732,
        "사망자수": 191,
        "십만명당발생율": 284.8,
        "지역별확진자비율": 49.24,
        "전일대비": 0
      },
    "인천": {
        "지역이름": "인천",
        "확진자수": 380,
        "격리해제수": 357,
        "사망자수": 2,
        "십만명당발생율": 12.85,
        "지역별확진자비율": 2.7,
        "전일대비": 0
      },
    "광주": {
        "지역이름": "광주",
        "확진자수": 202,
        "격리해제수": 119,
        "사망자수": 2,
        "십만명당발생율": 13.87,
        "지역별확진자비율": 1.43,
        "전일대비": 0
      },
    "대전": {
        "지역이름": "대전",
        "확진자수": 166,
        "격리해제수": 146,
        "사망자수": 2,
        "십만명당발생율": 11.26,
        "지역별확진자비율": 1.18,
        "전일대비": 0
      },
    "울산": {
        "지역이름": "울산",
        "확진자수": 58,
        "격리해제수": 53,
        "사망자수": 1,
        "십만명당발생율": 5.06,
        "지역별확진자비율": 0.41,
        "전일대비": 1
      },
    "세종": {
        "지역이름": "세종",
        "확진자수": 50,
        "격리해제수": 50,
        "사망자수": 0,
        "십만명당발생율": 14.61,
        "지역별확진자비율": 0.35,
        "전일대비": 0
      },
    "경기": {
        "지역이름": "경기",
        "확진자수": 1501,
        "격리해제수": 1266,
        "사망자수": 29,
        "십만명당발생율": 11.33,
        "지역별확진자비율": 10.65,
        "전일대비": 14
      },
    "강원": {
        "지역이름": "강원",
        "확진자수": 72,
        "격리해제수": 62,
        "사망자수": 3,
        "십만명당발생율": 4.67,
        "지역별확진자비율": 0.51,
        "전일대비": 0
      },
    "충북": {
        "지역이름": "충북",
        "확진자수": 72,
        "격리해제수": 67,
        "사망자수": 0,
        "십만명당발생율": 4.5,
        "지역별확진자비율": 0.51,
        "전일대비": 0
      },
    "충남": {
        "지역이름": "충남",
        "확진자수": 187,
        "격리해제수": 182,
        "사망자수": 0,
        "십만명당발생율": 8.81,
        "지역별확진자비율": 1.33,
        "전일대비": 0
      },
    "전북": {
        "지역이름": "전북",
        "확진자수": 39,
        "격리해제수": 30,
        "사망자수": 0,
        "십만명당발생율": 2.15,
        "지역별확진자비율": 0.28,
        "전일대비": 0
      },
    "전남": {
        "지역이름": "전남",
        "확진자수": 36,
        "격리해제수": 24,
        "사망자수": 0,
        "십만명당발생율": 1.93,
        "지역별확진자비율": 0.26,
        "전일대비": 1
      },
    "경북": {
        "지역이름": "경북",
        "확진자수": 1396,
        "격리해제수": 1339,
        "사망자수": 54,
        "십만명당발생율": 52.43,
        "지역별확진자비율": 9.91,
        "전일대비": 0
      },
    "경남": {
        "지역이름": "경남",
        "확진자수": 158,
        "격리해제수": 145,
        "사망자수": 0,
        "십만명당발생율": 4.7,
        "지역별확진자비율": 1.12,
        "전일대비": 0
      },
    "제주": {
        "지역이름": "제주",
        "확진자수": 26,
        "격리해제수": 19,
        "사망자수": 0,
        "십만명당발생율": 3.88,
        "지역별확진자비율": 0.18,
        "전일대비": 0
      },
    "업데이트날짜":{
        "업데이트날짜": " 07.25. 00시"
    }
  },
  countryData: {},
  myAreaData: [],
  stateFocus : '서울',
  myArea:['서울'],
  day6:[]
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
    // case 'FETCH_COVID_AREA':
    //   action.payload[0].map((area, i) => {
    //     state.areaData[AREA_NAME_PUBLIC[i]]=area
    //   })
    //   state.areaData["전국"] = action.payload[1];
    //   const myList = []
    //   state.myArea.forEach(area => {
    //     myList.push(state.areaData[area]);
    //   });
    //   state.myAreaData = myList;
    //   break;
    case 'FETCH_COVID_AREA':
      const myList = []
      console.log(state.myAreaData)
      state.myArea.forEach(area => {
        myList.push(state.areaData[area]);
      });
      state.myAreaData = myList;
      break;
    case 'FETCH_6DAYS_AREA':

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