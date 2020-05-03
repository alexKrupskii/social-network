import React from 'react';
import mod from './Profile.module.scss'
import Sidebar from './Sidebar/Sidebar';
import Posts from './Posts/Posts';

const Profile = () => {
    return (
        <div className={mod.profile}>
            <Sidebar />
            <Posts />
        </div>           
    )
};

export default Profile;