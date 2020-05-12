import React from 'react';
import mod from './Profile.module.scss'
import Sidebar from './Sidebar/Sidebar';
import Posts from './Posts/Posts';
import { ProfilePageType} from "../../../redux/state";

type StateType = {
    profilePage: ProfilePageType
}

const Profile = (props: StateType) => {
    debugger
    return (
        <div className={mod.profile}>
            <Sidebar sideBarData={props.profilePage.sideBarData}/>
            <Posts postData={props.profilePage.postData}/>
        </div>           
    )
};

export default Profile;