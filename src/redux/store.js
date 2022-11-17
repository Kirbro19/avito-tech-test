import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import NewsReducer from "./reducers/NewsReducer";
import StoryReducer from "./reducers/StoryReducer";
import SubCommentReducer from "./reducers/SubCommentReducer";
import CommentsReducer from "./reducers/CommentsReducer";

const rootReducer = combineReducers({
  News: NewsReducer,
  Story: StoryReducer,
  Comments: CommentsReducer,
  SubComment: SubCommentReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
