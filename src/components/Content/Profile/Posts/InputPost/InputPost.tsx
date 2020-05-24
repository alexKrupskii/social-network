import React from 'react';
import style from './InputPost.module.scss';

type PropsType = {
    addPost: () => void
    updateNewPostText: (newPostText:string|null) => void
}

const InputPost = (props:PropsType) => {

    let newPostElement = React.createRef<HTMLInputElement>();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let newPostText = newPostElement.current && newPostElement.current.value;
            props.updateNewPostText(newPostText);
    };

    return (
        <div className={style.inputPost}>
            <div className={style.title}>New post</div>
            <div className={style.newPost}>
                <input onChange={onPostChange} ref={newPostElement} placeholder='Say something here...' />
            </div>
            <div className={style.addPost}>
                <a href='#' onClick={addPost} className={style.btnPost}>Post</a>
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