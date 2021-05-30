import { CREATE_POST, FETCH_POSTS } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  fetchedPosts: [],
};

export const postsReducer = (
  state = initialState,
  action: PayloadAction<never>
) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: state.posts.concat([action.payload]) };
    case FETCH_POSTS:
      return { ...state, fetchedPosts: action.payload };
    default:
      return state;
  }
};
