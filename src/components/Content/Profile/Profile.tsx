import React from 'react';
import style from './Profile.module.scss'
import Sidebar from './Sidebar/Sidebar';
import Posts from './Posts/Posts';
import {ProfilePageType, DispatchType} from "../../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: DispatchType
}

const Profile = (props: PropsType) => {

    return (
        <div className={style.profile}>
            <Sidebar sideBarData={props.profilePage.sideBarData}/>
            <Posts postData={props.profilePage.postData} dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>
        </div>           
    )
};

export default Profile;