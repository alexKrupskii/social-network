import React from 'react';
import style from './Sidebar.module.scss'
import UserInfo from './UserInfo/UserInfo';
import Friends from './Friends/Friends';
import {SideBarDataType, StoreType} from "../../../../redux/store";

type ProfilePageType = {

    store: StoreType
}

const Sidebar = (props: ProfilePageType) => {

    let userInfoElements = props.store._state.profilePage.sideBarData.userInfoData
        .map(u => <UserInfo avatar={u.avatar} postsCount={u.postsCount} followersCount={u.followersCount}
                            followingCount={u.followingCount} userName={u.userName}/>)
    return (
        <div className={style.sideBar}>
            <div className={style.wrapper}>
                {userInfoElements}
                <Friends friendsData={props.store.getState().profilePage.sideBarData.friendsData}/>
            </div>
        </div>
    )
};

export default Sidebar;