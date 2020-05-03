import React from 'react';
import mod from './Posts.module.scss'
import InputPost from './InputPost/InputPost';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div className={mod.posts}>
            <div className={mod.wrapper}>
            <InputPost/>
            <Post />
            <Post />
            <Post />
            <Post />
            </div>
        </div>
    )
};

export default Posts;