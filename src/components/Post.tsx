import React from 'react';

interface PostProps {
    post: {
        id: string,
        title: string
    }
}

export const Post: React.FC<PostProps> = ({post}) => {
    console.log(post)
    return <div className='card'>
        <div className='card-body'>
            <h5 className='card-title'>{post}</h5>
        </div>
    </div>
}