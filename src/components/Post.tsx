import React from 'react';

interface PostProps {
    post: number
}

export const Post: React.FC<PostProps> = ({post}) => {
    return <div className='card'>
        <div className='card-body'>
            <h5 className='card-title'>Title here {post}</h5>
        </div>
    </div>
}