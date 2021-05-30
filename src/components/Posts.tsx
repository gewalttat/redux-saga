import React from 'react';
import {Post} from './Post';
import {connect} from 'react-redux';

interface PostsProps {
    syncPosts: [{
        id: string,
        title: string
    }]
}

// @ts-ignore
const Posts: React.FC<PostsProps> = ({syncPosts}) => {
    console.log(typeof syncPosts)
    console.log(syncPosts)
    if (!syncPosts?.length) {
        return <p className='center'>Posts are not available now</p>
    }
    return syncPosts.map((post: any) => <Post post={post.id}/>)
}

const mapStateToProps = (state: any) => {
    console.log(state);
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps)(Posts);