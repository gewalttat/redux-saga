import React from 'react';
import {Post} from "./Post";

interface FetchedPostsProps {
    posts: any
}
export const FetchedPosts: React.FC<FetchedPostsProps> = ({posts}) => {
    if(!posts.length) {
        return <button className='btn btn-primary'>Download posts</button>
    }
   return posts.map((post: number) => <Post post={post}/>)
}

export class PostForm {
}