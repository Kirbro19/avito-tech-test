import { getStories } from "./NewsActions";

//action type
export const SET_STORY = "SET_STORY";

//action
export const setStory = (stories) => ({
  type: SET_STORY,
  payload: stories,
});

// request
export const getStory = (id) => async (dispatch) => {
  const response = await getStories(id);
  dispatch(setStory(response));
};
