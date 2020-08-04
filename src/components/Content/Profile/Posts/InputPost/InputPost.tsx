import React, {KeyboardEvent, ChangeEvent} from 'react';
import style from './InputPost.module.scss';

type InputPropsType = {
    newPostText: string
    addPost: () => void
    onPostChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void
}

const InputPost: React.FC<InputPropsType> = (props) => {
    return (
        <div className={style.inputPost}>
            <div className={style.title}>New post</div>
            <div className={style.newPost}>
                <input onChange={props.onPostChange} onKeyPress={props.onKeyPressHandler} value={props.newPostText} placeholder='Say something here...' />
            </div>
            <div className={style.addPost}>
                <button onClick={props.addPost} className={style.btnPost}>Post</button>
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