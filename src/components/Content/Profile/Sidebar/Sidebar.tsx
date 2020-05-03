import React from 'react';
import mod from './Sidebar.module.scss'
import UserInfo from './UserInfo/UserInfo';
import Friends from './Friends/Friends';

const Sidebar = () => {
    return (
        <div className={mod.sideBar}>
            <div className={mod.wrapper}>
                <UserInfo />
                <Friends />
            </div>
        </div>
    )
};

export default Sidebar;