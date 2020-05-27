import React from 'react';
import style from './Posts.module.scss'
import InputPost from './InputPost/InputPost';
import Post from './Post/Post';
import {PostDataType} from './../../../../redux/state'

type ProfileType = {
    postData: Array<PostDataType>
    addPost: () => void
    updateNewPostText: (newText:string) => void
    newPostText: string
}

const Posts = (props: ProfileType) => {

    let postElements = props.postData
        .map( p => <Post id={p.id} userName={p.userName} postImg={p.postImg} avatar={p.avatar} time={p.time} text={p.text} likesCount={p.likesCount} commentCount={p.commentCount} repostCount={p.repostCount}/>)
        

    return (
        <div className={style.posts}>
            <div className={style.wrapper}>
            <InputPost addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText}/>
            {postElements}
            </div>
        </div>
    )
};

export default Posts;