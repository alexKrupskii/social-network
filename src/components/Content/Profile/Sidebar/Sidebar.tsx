import React from 'react';
import style from './Sidebar.module.scss'
import UserInfo from './UserInfo/UserInfo';
import Friends from './Friends/Friends';

import storeRedux from "../../../../redux/redux-store";

type ProfilePageType = {


}

const Sidebar = (props: ProfilePageType) => {

    let userInfoElements = storeRedux.getState().profilePage.sideBarData.userInfoData
        .map(u => <UserInfo key={u.id} avatar={u.avatar} postsCount={u.postsCount} followersCount={u.followersCount}
                            followingCount={u.followingCount} userName={u.userName}/>)
    return (
        <div className={style.sideBar}>
            <div className={style.wrapper}>
                {userInfoElements}
                <Friends friendsData={storeRedux.getState().profilePage.sideBarData.friendsData}/>
            </div>
        </div>
    )
};

export default Sidebar;