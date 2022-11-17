import axios from "axios";
import { API_URL } from "../../constants/constants";

//action type
export const GET_SUB_COMMENT = "GET_SUB_COMMENT";

//action
export const setSubComment = (subComments) => ({
  type: GET_SUB_COMMENT,
  payload: subComments,
});

export const getSubComment = (kids) => async (dispatch) => {
  if (!kids) return;
  const response = await Promise.all(
    kids.map(async (kid) => {
      const response = await axios.get(
        `${API_URL}item/${kid}.json?print=pretty`
      );
      const resultComments = response.data;
      return resultComments;
    })
  );
  const resultGetId = response;
  dispatch(setSubComment(resultGetId));
  return;

  const resultChildId = resultGetId;

  if (resultChildId) {
    const loadSubComments = async (resultChildId) => {
      const result = await Promise.all(
        resultChildId.map(async (id) => {
          const response = await axios.get(
            `${API_URL}item/${id}.json?print=pretty`
          );
          const resultChildComments = response.data;
          return resultChildComments;
        })
      );
      return result;
    };

    const getResult = await loadSubComments(resultChildId);
    dispatch(setSubComment(getResult));
  }
  return null;
};