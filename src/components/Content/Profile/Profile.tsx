import React from 'react';
import mod from './Profile.module.scss'
import Sidebar from './Sidebar/Sidebar';
import Posts from './Posts/Posts';
import {StateExportType} from "../../../redux/state";

const Profile = (props: StateExportType) => {
    return (
        <div className={mod.profile}>
            <Sidebar sideBarData={props.state.profilePage.sideBarData}/>
            <Posts postData={props.state.profilePage.postData}/>
        </div>           
    )
};

export default Profile;