import React from 'react';
import style from './Profile.module.scss'
import Sidebar from './Sidebar/Sidebar';
import Posts from './Posts/Posts';


type PropsType = {

}

const Profile = (props: PropsType) => {

    return (
        <div className={style.profile}>
            <Sidebar />
            <Posts />
        </div>           
    )
};

export default Profile;