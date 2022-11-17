import { SET_STORY } from "../actions/StoryActions";

const initialState = {
  stories: [],
  isFetching: false,
};

//reducer
export default function StoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STORY:
      return {
        ...state,
        stories: action.payload,
      };
    default:
      return state;
  }
}
