import React from 'react';
import style from './Profile.module.scss'
import Sidebar from './Sidebar/Sidebar';
import Posts from './Posts/Posts';
import { StoreType} from "../../../redux/store";

type PropsType = {
    store: StoreType
}

const Profile = (props: PropsType) => {

    return (
        <div className={style.profile}>
            <Sidebar store={props.store}/>
            <Posts store={props.store}/>
        </div>           
    )
};

export default Profile;