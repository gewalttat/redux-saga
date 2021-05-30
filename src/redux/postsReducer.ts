import {CREATE_POST} from "./types";
import { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action: PayloadAction<never>) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat([action.payload])}
        default: return state
    }
    return state
}