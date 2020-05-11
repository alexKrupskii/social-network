import React, { useState } from 'react';
import mod from './Post.module.scss'

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

const Post = (props: PostType) => {

    let [likesCount, setLikesCount] = useState(0)

    let changeLikesCount = () => {
        setLikesCount(likesCount + 1)
    }

    

    return (
        <div className={mod.post}>
            <div className={mod.postInfo}>
                <div className={mod.userAva}>
                    <img src={props.avatar} alt="" />
                </div>
                <div className={mod.info}>
                    <div className={mod.userName}>
                        {props.userName}
                    </div>
                    <div className={mod.time}>
                        {props.time}
                    </div>
                </div>
            </div>
            <img src={props.postImg} className={mod.postImg} alt=""/>
            <div className={mod.postText}>
                {props.text}
            </div>
            <div className={mod.postLinks}>
                <div className={mod.item}>
                    <div className={mod.item}>
                        <a onClick={()=> changeLikesCount()}><img src="./ico/files_post/like.svg" alt="" className={mod.like} /></a>
                        <div className={mod.itemNum}>{likesCount}</div>
                    </div>
                    <div className={mod.item}>
                        <a href='#'><img src="./ico/files_post/chat.svg" alt="" className={mod.comment} /></a>
                        <div className={mod.itemNum}>{props.commentCount}</div>
                    </div>
                </div>
                <div className={mod.item}>
                    <a href='#'><img src="./ico/files_post/links.svg" alt="" className={mod.repost} /></a>
                    <div className={mod.itemNum}>{props.repostCount}</div>
                </div>
            </div>
        </div>
    )
};

export default Post;