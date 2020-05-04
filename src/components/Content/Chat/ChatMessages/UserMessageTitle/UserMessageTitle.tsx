import React from 'react';
import mod from './../ChatMessages.module.scss'

const UserMessageTitle = () => {
    return (
        <div className={mod.userInfo}>
            <div className={mod.userAva}>
                <img src='./img/gwyneth_ava.jpg' alt="" />
            </div>
            <div className={mod.userName}>
                Gwyneth Paltrow
            </div>
        </div>
    )
};

export default UserMessageTitle;