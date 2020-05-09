import React from 'react';
import mod from './UserInfo.module.scss'

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
        <div className={mod.profileWrapper}>
            <div className={mod.ava_links}>
                <div className={mod.userAva}>
                    <img src={props.avatar} alt="" />
                </div>
                <div className={mod.statistic}>
                    <div className={mod.statistic__wrapper}>
                        <div className={mod.item}>Posts</div>
                        <div className={mod.sum}>{props.postsCount}</div>
                    </div>
                    <div className={mod.statistic__wrapper}>
                        <div className={mod.item}>Followers</div>
                        <div className={mod.sum}>{props.followersCount}</div>
                    </div>
                    <div className={mod.statistic__wrapper}>
                        <div className={mod.item}>Following</div>
                        <div className={mod.sum}>{props.followingCount}</div>
                    </div>
                </div>
            </div>
            <div className={mod.userName}>{props.userName}</div>
            <div className={mod.links}>
                <div className={mod.link}>
                    <img src="./ico/social/facebook.svg" className='facebook' alt="" />
                </div>
                <div className={mod.link}>
                    <img src="./ico/social/google-plus.svg" className='google-plus' alt="" />
                </div>
                <div className={mod.link}>
                    <img src="./ico/social/instagram.svg" className='instagram' alt="" />
                </div>
                <div className={mod.link}>
                    <img src="./ico/social/linkedin.svg" className='linkedin' alt="" />
                </div>
                <div className={mod.link}>
                    <img src="./ico/social/twitter.svg" className='twitter' alt="" />
                </div>
                <div className={mod.link}>
                    <img src="./ico/social/vk.svg" className='vk' alt="" />
                </div>
            </div>
        </div>
    )
};

export default UserInfo;