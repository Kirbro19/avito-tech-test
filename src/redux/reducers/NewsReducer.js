import { GET_NEWS } from "../actions/NewsActions";

const initialState = {
  news: [],
  isFetching: false,
};

//reducer
export default function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
}
