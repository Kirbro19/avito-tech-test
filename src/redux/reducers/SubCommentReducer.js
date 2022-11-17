import { GET_SUB_COMMENT } from "../actions/SubCommentActions";

const initialState = {
  subComments: [],
  isFetching: false,
};

//reducer
export default function SubCommentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUB_COMMENT:
      const result = {
        ...state,
        subComments: [...state.subComments, ...action.payload],
      };
      return result;
      const ids = action.payload?.map((item) => item.id);
      const newComments = action.payload.filter(
        (item) => !ids.includes(item.id)
      );

      if (newComments.length) {
        return state.concat(newComments);
      }

      return {
        ...state,
        subComments: action.subComments,
      };
    default:
      return state;
  }
}
