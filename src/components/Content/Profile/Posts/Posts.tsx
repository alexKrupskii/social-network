import React from 'react';
import style from './Posts.module.scss'
import Post from './Post/Post';
import InputPostContainer from "./InputPost/InputPostContainer";
import storeRedux from "../../../../redux/redux-store";


type PropsType = {

}

const Posts = (props: PropsType) => {

    let state = storeRedux.getState().profilePage;

    let postElements = state.postData
        .map( p => <Post
                         key={p.id}
                         id={p.id}
                         userName={p.userName}
                         postImg={p.postImg}
                         avatar={p.avatar}
                         time={p.time}
                         text={p.text}
                         likesCount={p.likesCount}
                         commentCount={p.commentCount}
                         repostCount={p.repostCount}/>);
    return (
        <div className={style.posts}>
            <div className={style.wrapper}>
            <InputPostContainer />
            {postElements}
            </div>
        </div>
    )
};

export default Posts;