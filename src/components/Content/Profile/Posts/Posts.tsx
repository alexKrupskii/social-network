import React from 'react';
import mod from './Posts.module.scss'
import InputPost from './InputPost/InputPost';
import Post from './Post/Post';


type ProfileType = {
    postData: Array<PostType>
}
type PostType = {
    id: number
    avatar: string
    userName: string
    time: number | string
    postImg?: string
    text: string
    likesCount: number
    commentCount: number
    repostCount: number
}

const Posts = (props: ProfileType) => {

    let postElements = props.postData
        .map( p => <Post userName={p.userName} postImg={p.postImg} avatar={p.avatar} time={p.time} text={p.text} likesCount={p.likesCount} commentCount={p.commentCount} repostCount={p.repostCount}/>)

    return (
        <div className={mod.posts}>
            <div className={mod.wrapper}>
            <InputPost/>
            {postElements}
            </div>
        </div>
    )
};

export default Posts;