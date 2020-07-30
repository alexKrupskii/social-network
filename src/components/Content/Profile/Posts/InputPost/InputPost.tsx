import React, {KeyboardEvent, ChangeEvent} from 'react';
import style from './InputPost.module.scss';
import {DispatchType} from '../../../../../redux/store';
import {addPostAC, updateNewPostTextAC} from "../../../../../redux/profile-reducer";

type PropsType = {
    newPostText: string
    dispatch: DispatchType
}


const InputPost = (props:PropsType) => {

    let newPostElement = props.newPostText

    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText));
    };

    let onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newText = e.target.value;
        props.dispatch(updateNewPostTextAC(newText));
    };

    let onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            addPost()
        }
    }

    return (
        <div className={style.inputPost}>
            <div className={style.title}>New post</div>
            <div className={style.newPost}>
                <input onChange={onPostChange} onKeyPress={onKeyPressHandler} value={newPostElement} placeholder='Say something here...' />
            </div>
            <div className={style.addPost}>
                <button onClick={addPost} className={style.btnPost}>Post</button>
                <div className={style.addFile}>
                    <a href='#' className={style.item}>
                        <img src="./ico/files_post/emoji.svg" alt="" />
                        <div className={style.titleItem}>Emoji</div>
                    </a>
                    <a href='#' className={style.item}>
                        <img src="./ico/files_post/image.svg" alt="" />
                        <div className={style.titleItem}>Picture</div>
                    </a>
                    <a href='#' className={style.item}>
                        <img src="./ico/files_post/video.svg" alt="" />
                        <div className={style.titleItem}>Video</div>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default InputPost;