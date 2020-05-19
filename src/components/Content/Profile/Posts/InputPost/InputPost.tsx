import React, {ChangeEventHandler, MouseEventHandler} from 'react';
import style from './InputPost.module.scss'

type AddPostType = {
    addPost: any
}

const InputPost = (props:any) => {

    type OnChange = {
        onChange: void
    }

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        props.updateNewPostText();
    }

    return (
        <div className={style.inputPost}>
            <div className={style.title}>New post</div>
            <div className={style.newPost}>
                <input onChange={onPostChange} value={props.newPostText} placeholder='Say something here...' />
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