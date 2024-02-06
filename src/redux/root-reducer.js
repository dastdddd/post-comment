import { combineReducers } from "redux";
import { likeReducer } from "./reducers/like-reducer";
import { commentsReducer } from "./reducers/comment-reducer";

export const rootReducer = combineReducers ({
  like: likeReducer,
  comments: commentsReducer,
})