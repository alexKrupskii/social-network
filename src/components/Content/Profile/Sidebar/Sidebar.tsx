import React from 'react';
import mod from './Sidebar.module.scss'
import UserInfo from './UserInfo/UserInfo';
import Friends from './Friends/Friends';
import {SideBarDataType,} from "../../../../redux/state";


type StateType = {
    profilePage: ProfilePageType
}
type ProfilePageType = {
    sideBarData: SideBarDataType
}

const Sidebar = (props: ProfilePageType) => {

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