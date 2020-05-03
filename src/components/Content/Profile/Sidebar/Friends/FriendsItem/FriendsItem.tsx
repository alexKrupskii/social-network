import React from 'react';
import mod from './../Friends.module.scss'

const FriendsItem = (props:any) => {
    return (
        <div className={mod.user}>
            <img src={props.avatar} alt="" className={mod.userAva} />
            <div className={mod.userName}>{props.userName}</div>
        </div>
    )
};

export default FriendsItem;