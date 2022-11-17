import { GET_COMMENTS } from "../actions/CommentsActions";

const initialState = {
  comments: [],
  isFetching: false,
};

//reducer
export default function CommentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    default:
      return state;
  }
}
