import React from 'react';
import mod from './UserDialog.module.scss'

const UserDialog = () => {
    return (
        <a href='#' className={mod.userDialog} >
            <div className={mod.userAva}>
                <img src='./img/gwyneth_ava.jpg' alt="" />
            </div>
            <div className={mod.userName}>
                Gwyneth Paltrow
            </div>
        </a>
    )
};

export default UserDialog;