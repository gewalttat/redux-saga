import React from 'react';
import PostForm from "./components/PostForm";
import {FetchedPosts} from "./components/FetchedPosts";
import Posts from "./components/Posts";
import {post} from './components/FetchedPosts';

function App() {

    const post: post[] = [];

    return (
        <div className="container pt-3">
            <div className='row'>
                <div className='col'>
                    <PostForm/>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h2>Synchronic posts</h2>
                    <Posts/>
                </div>
                <div className='col'>
                    <h2>Asynchronic posts</h2>
                    <FetchedPosts posts={post}/>
                </div>
            </div>
        </div>
    );
}

export default App;
