import React from 'react';
import style from './UserInfo.module.scss'
import {Animated} from "react-animated-css";

type UserInfoType = {
    id?: number
    avatar: string
    userName: string
    postsCount: number
    followersCount: number
    followingCount: number
}

const UserInfo = (props: UserInfoType) => {
    return (
        <div className={style.profileWrapper}>
            <div className={style.ava_links}>

                <Animated animationIn="wobble" animationOut="fadeOut" isVisible={true} animationInDelay={400} animationInDuration={1000} >
                <div className={style.userAva}>
                    <img src={props.avatar} alt="" />
                </div>
                </Animated>

                <div className={style.statistic}>
                    <div className={style.statistic__wrapper}>
                        <div className={style.item}>Posts</div>
                        <div className={style.sum}>{props.postsCount}</div>
                    </div>
                    <div className={style.statistic__wrapper}>
                        <div className={style.item}>Followers</div>
                        <div className={style.sum}>{props.followersCount}</div>
                    </div>
                    <div className={style.statistic__wrapper}>
                        <div className={style.item}>Following</div>
                        <div className={style.sum}>{props.followingCount}</div>
                    </div>
                </div>
            </div>
            <div className={style.userName}>{props.userName}</div>
            <div className={style.links}>
                <div className={style.link}>
                    <img src="./ico/social/facebook.svg" className='facebook' alt="" />
                </div>
                <div className={style.link}>
                    <img src="./ico/social/google-plus.svg" className='google-plus' alt="" />
                </div>
                <div className={style.link}>
                    <img src="./ico/social/instagram.svg" className='instagram' alt="" />
                </div>
                <div className={style.link}>
                    <img src="./ico/social/linkedin.svg" className='linkedin' alt="" />
                </div>
                <div className={style.link}>
                    <img src="./ico/social/twitter.svg" className='twitter' alt="" />
                </div>
                <div className={style.link}>
                    <img src="./ico/social/vk.svg" className='vk' alt="" />
                </div>
            </div>
        </div>
    )
};

export default UserInfo;