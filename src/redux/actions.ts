import {CREATE_POST} from "./types";

export function createPosts(post: string) {
    return {
        type: CREATE_POST,
        payload: post
    }
}