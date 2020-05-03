import React from 'react';
import mod from './Post.module.scss'

const Post = (props:any) => {
    return (
        <div className={mod.post}>
            <div className={mod.postInfo}>
                <div className={mod.userAva}>
                    <img src='./img/gwyneth_ava.jpg' alt="" />
                </div>
                <div className={mod.info}>
                    <div className={mod.userName}>
                        Gwyneth Paltrow
                    </div>
                    <div className={mod.time}>
                        5 minutes ago
                    </div>
                </div>
            </div>
            <img src='./img/download/gwin.jpg' className={mod.postImg} alt=""/>
            <div className={mod.postText}>
                Hello! My name is Gwyneth! I am an actress in Hollywood. And I starred in the world blockbuster Avengers!
            </div>
            <div className={mod.postLinks}>
                <div className={mod.item}>
                    <div className={mod.item}>
                        <a href='#'><img src="./ico/files_post/like.svg" alt="" className={mod.like} /></a>
                        <div className={mod.itemNum}>14576</div>
                    </div>
                    <div className={mod.item}>
                        <a href='#'><img src="./ico/files_post/chat.svg" alt="" className={mod.comment} /></a>
                        <div className={mod.itemNum} >2880</div>
                    </div>
                </div>
                <div className={mod.item}>
                    <a href='#'><img src="./ico/files_post/links.svg" alt="" className={mod.repost} /></a>
                    <div className={mod.itemNum}>6888</div>
                </div>
            </div>
        </div>
    )
};

export default Post;