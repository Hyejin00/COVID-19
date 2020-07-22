import produce from "immer";

const baseState = {
  covidnews: {}
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