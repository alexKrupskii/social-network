import React from 'react';
import style from './Posts.module.scss'
import InputPost from './InputPost/InputPost';
import Post from './Post/Post';
import {PostDataType, DispatchType, StoreType} from '../../../../redux/store'
import InputPostContainer from "./InputPost/InputPostContainer";

type PropsType = {
    store: StoreType
}

const Posts = (props: PropsType) => {

    let state = props.store.getState().profilePage;

    let postElements = state.postData
        .map( p => <Post id={p.id}
                         userName={p.userName}
                         postImg={p.postImg}
                         avatar={p.avatar}
                         time={p.time}
                         text={p.text}
                         likesCount={p.likesCount}
                         commentCount={p.commentCount}
                         repostCount={p.repostCount}/>)
    return (
        <div className={style.posts}>
            <div className={style.wrapper}>
            <InputPostContainer store={props.store}/>
            {postElements}
            </div>
        </div>
    )
};

export default Posts;