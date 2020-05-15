import React from 'react';
import style from './UserDialog.module.scss'

type UserDialogsType = {
    id?: number
    avatar: string
    userName: string
}
const UserDialog = (props:UserDialogsType) => {
    return (
        <a href='#' className={style.userDialog} >
            <div className={style.userAva}>
                <img src={props.avatar} alt="" />
            </div>
            <div className={style.userName}>
                {props.userName}
            </div>
        </a>
    )
};

export default UserDialog;