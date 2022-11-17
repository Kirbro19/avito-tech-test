import axios from "axios";
import { API_URL } from "../../constants/constants";

//action type
export const GET_COMMENTS = "GET_COMMENTS";

//action
export const setComments = (comments) => ({
  type: GET_COMMENTS,
  comments,
});

export const getComments = (id) => async (dispatch) => {
  const response = await axios.get(
    `${API_URL}item/${id}.json?print=pretty`
  );
  const result = response.data;

  if (result.kids) {
    const comments = await parseComment(result.kids);
    dispatch(setComments(comments));
  }
};

const parseComment = async (commentsIds) => {
  const result = await Promise.all(
    commentsIds.map(async (commentId) => {
      const response = await axios.get(
        `${API_URL}item/${commentId}.json?print=pretty`
      );
      const resultComments = response.data;
      return resultComments;
    })
  );
  return result;
};
