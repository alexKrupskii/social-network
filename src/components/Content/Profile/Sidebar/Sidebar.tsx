import React from 'react';
import style from './Sidebar.module.scss'
import UserInfo from './UserInfo/UserInfo';
import Friends from './Friends/Friends';
import {SideBarDataType} from "../../../../redux/state";

type ProfilePageType = {
    sideBarData: SideBarDataType
}

const Sidebar = (props: ProfilePageType) => {

    let userInfoElements = props.sideBarData.userInfoData
        .map(u => <UserInfo avatar={u.avatar} postsCount={u.postsCount} followersCount={u.followersCount}
                            followingCount={u.followingCount} userName={u.userName}/>)
    return (
        <div className={style.sideBar}>
            <div className={style.wrapper}>
                {userInfoElements}
                <Friends friendsData={props.sideBarData.friendsData}/>
            </div>
        </div>
    )
};

export default Sidebar;