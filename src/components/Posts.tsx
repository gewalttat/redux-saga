import React from 'react';
import {Post} from './Post'

interface PostsProps {
    posts: any
}

export const Posts: React.FC<PostsProps> = ({posts}) => {
    if(!posts.length) {
        return <p className='center'>Posts are not available now</p>
    }
    return posts.map((post: number) => <Post post={post}/>)
}