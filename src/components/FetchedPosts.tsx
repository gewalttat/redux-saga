import React from 'react';
import {Post} from "./Post";

export interface post {
    id: string, title: string
}

export interface FetchedPostsProps {
    posts: post[]
}

export const FetchedPosts: React.FC<FetchedPostsProps> = ({posts}) => {
    console.log(typeof posts)
    if(!posts) {
        return <button className='btn btn-primary'>Download posts</button>
    }
    const qq = posts.map((post: post) => <Post post={post}/>)
   return <>{qq}</>
}