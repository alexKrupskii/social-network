import React from 'react';
import mod from './InputPost.module.scss'

const InputPost = (props:any) => {
    return (
        <div className={mod.inputPost}>
            <div className={mod.title}>New post</div>
            <div className={mod.newPost}>
                <input placeholder='Say something here...' />
            </div>
            <div className={mod.addPost}>
                <a href='#' className={mod.btnPost}>Post</a>
                <div className={mod.addFile}>
                    <a href='#' className={mod.item}>
                        <img src="./ico/files_post/emoji.svg" alt="" />
                        <div className={mod.titleItem}>Emoji</div>
                    </a>
                    <a href='#' className={mod.item}>
                        <img src="./ico/files_post/image.svg" alt="" />
                        <div className={mod.titleItem}>Picture</div>
                    </a>
                    <a href='#' className={mod.item}>
                        <img src="./ico/files_post/video.svg" alt="" />
                        <div className={mod.titleItem}>Video</div>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default InputPost;