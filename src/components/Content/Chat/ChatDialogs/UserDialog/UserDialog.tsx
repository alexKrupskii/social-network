import React from 'react';
import mod from './UserDialog.module.scss'

type UserDialogsType = {
    id?: number
    avatar: string
    userName: string
}
const UserDialog = (props:UserDialogsType) => {
    return (
        <a href='#' className={mod.userDialog} >
            <div className={mod.userAva}>
                <img src={props.avatar} alt="" />
            </div>
            <div className={mod.userName}>
                {props.userName}
            </div>
        </a>
    )
};

export default UserDialog;