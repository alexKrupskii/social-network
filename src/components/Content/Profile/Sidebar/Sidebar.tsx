import React from 'react';
import mod from './Sidebar.module.scss'
import UserInfo from './UserInfo/UserInfo';
import Friends from './Friends/Friends';

type ProfileType = {
    sideBarData: SideBarType
}
type SideBarType = {
    userInfoData: Array<UserInfoType>
    friendsData: Array<FriendsItemType>
}
type UserInfoType = {
    id?: number
    avatar: string
    userName: string
    postsCount: number
    followersCount: number
    followingCount: number
}
type FriendsItemType = {
    id?: number
    avatar: string
    userName: string
}

const Sidebar = (props: ProfileType) => {
    let userInfoElements = props.sideBarData.userInfoData
        .map(u => <UserInfo avatar={u.avatar} postsCount={u.postsCount} followersCount={u.followersCount}
                            followingCount={u.followingCount} userName={u.userName}/>)
    return (
        <div className={mod.sideBar}>
            <div className={mod.wrapper}>
                {userInfoElements}
                <Friends friendsData={props.sideBarData.friendsData}/>
            </div>
        </div>
    )
};

export default Sidebar;