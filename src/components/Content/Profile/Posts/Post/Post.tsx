import React, { useState } from 'react';
import style from './Post.module.scss';

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

    let [likesCount, setLikesCount] = useState(0);

    let changeLikesCount = () => {
        setLikesCount(likesCount + 1)
    };


    return (
        <div className={style.post}>
            <div className={style.postInfo}>
                <div className={style.userAva}>
                    <img src={props.avatar} alt="" />
                </div>
                <div className={style.info}>
                    <div className={style.userName}>
                        {props.userName}
                    </div>
                    <div className={style.time}>
                        {props.time}
                    </div>
                </div>
            </div>
            <img src={props.postImg} className={style.postImg} alt="" />
            <div className={style.postText}>
                {props.text}
            </div>
            <div className={style.postLinks}>
                <div className={style.itemLeft}>
                    <div className={style.itemLink}>
                        <button type="button"
                                disabled={likesCount >= 1 }
                                onClick={changeLikesCount}><img src="./ico/files_post/like.svg" alt=""
                                                                className={style.like} />
                        </button>
                        <div className={style.itemNum}>{likesCount}</div>
                    </div>
                    <div className={style.itemLink}>
                        <button><img src="./ico/files_post/chat.svg" alt="" className={style.comment} /></button>
                        <div className={style.itemNum}>{props.commentCount}</div>
                    </div>
                </div>
                <div className={style.itemRight}>
                    <div className={style.itemLink}>
                        <button><img src="./ico/files_post/links.svg" alt="" className={style.repost} /></button>
                        <div className={style.itemNum}>{props.repostCount}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Post;