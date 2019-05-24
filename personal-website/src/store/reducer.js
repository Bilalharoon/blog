import * as ActionTypes from "./ActionTypes";

const initialState = {
  posts: [],
  NumOfPages: undefined,
  logedIn: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET:
      return {
        ...initialState,
        posts: action.payload
      };
    case ActionTypes.LOGINGIN:
      return {
        ...initialState,
        logedIn: action.payloadx
      };
  }

  return state;
};

export default reducer;
