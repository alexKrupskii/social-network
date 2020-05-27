import React from 'react';
import style from './Profile.module.scss'
import Sidebar from './Sidebar/Sidebar';
import Posts from './Posts/Posts';
import {ProfilePageType} from "../../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText:string ) => void
}

const Profile = (props: PropsType) => {

    return (
        <div className={style.profile}>
            <Sidebar sideBarData={props.profilePage.sideBarData}/>
            <Posts postData={props.profilePage.postData} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.profilePage.newPostText}/>
        </div>           
    )
};

export default Profile;