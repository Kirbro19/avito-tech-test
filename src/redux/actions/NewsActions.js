import axios from "axios";
import { API_URL } from "../../constants/constants";

//action type
export const GET_NEWS = "GET_NEWS";

//action
export const setNews = (news) => ({
  type: GET_NEWS,
  payload: news,
});

// request
export const getNews = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `${API_URL}newstories.json?orderBy=%22$key%22&limitToFirst=${100}` // fix:
    );
    const result = response.data;
    let news = await Promise.all(
      result.map(async (id) => {
        const resp = await getStories(id);
        return resp;
      })
    );
    dispatch(setNews(news));
  };
};

export const getStories = async (id) => {
  const response = await axios.get(`${API_URL}item/${id}.json?print=pretty`);
  const result = response.data;
  return result;
};
