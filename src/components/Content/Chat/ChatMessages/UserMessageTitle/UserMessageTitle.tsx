import React from 'react';
import style from './../ChatMessages.module.scss'

type UserMessageTitleType = {
    avatar: string
    userName: string
}

const UserMessageTitle = (props:UserMessageTitleType) => {
    return (
        <div className={style.userInfo}>
            <div className={style.userAva}>
                <img src={props.avatar} alt="" />
            </div>
            <div className={style.userName}>
                {props.userName}
            </div>
        </div>
    )
};

export default UserMessageTitle;