import React from 'react';
import {Post} from "./Post";
import {useDispatch} from 'react-redux';
import { fetchPosts } from '../redux/actions';

export interface post {
    id: string, title: string
}

export interface FetchedPostsProps {
    posts: post[]
}

export const FetchedPosts: React.FC<FetchedPostsProps> = ({posts}) => {
    const dispatch = useDispatch();

    if(!posts) {
        return <button className='btn btn-primary' onClick={() => dispatch(fetchPosts())}>Download posts</button>
    }
    const qq = posts.map((post: post) => <Post post={post}/>)
   return <>{qq}</>
}