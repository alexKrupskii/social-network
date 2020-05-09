import React from 'react';
import mod from './../ChatMessages.module.scss'

type UserMessageTitleType = {
    avatar: string
    userName: string
}

const UserMessageTitle = (props:UserMessageTitleType) => {
    return (
        <div className={mod.userInfo}>
            <div className={mod.userAva}>
                <img src={props.avatar} alt="" />
            </div>
            <div className={mod.userName}>
                {props.userName}
            </div>
        </div>
    )
};

export default UserMessageTitle;