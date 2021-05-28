import React from 'react';
import PostForm from "./components/PostForm";
import {FetchedPosts} from "./components/FetchedPosts";
import {Posts} from "./components/Posts";

function App() {
    const posts: number[] = [1, 2, 3];
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
                    <Posts posts={posts}/>
                </div>
                <div className='col'>
                    <h2>Asynchronic posts</h2>
                    <FetchedPosts posts={posts}/>
                </div>
            </div>
        </div>
    );
}

export default App;
