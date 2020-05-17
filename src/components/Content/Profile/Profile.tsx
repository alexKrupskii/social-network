import React from 'react';
import style from './Profile.module.scss'
import Sidebar from './Sidebar/Sidebar';
import Posts from './Posts/Posts';
import {ProfilePageType} from "../../../redux/state";

type StateType = {
    profilePage: ProfilePageType
    addPost: any
}

const Profile = (props: StateType) => {

    return (
        <div className={style.profile}>
            <Sidebar sideBarData={props.profilePage.sideBarData}/>
            <Posts postData={props.profilePage.postData} addPost={props.addPost}/>
        </div>           
    )
};

export default Profile;