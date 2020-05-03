import React from 'react';
import mod from './../ChatMessages.module.scss'

const UserMessageTitle = () => {
    return (
        <div className={mod.userInfo}>
            <div className={mod.userAva}>
                <img alt="" />
            </div>
            <div className={mod.userName}>

            </div>
        </div>
    )
};

export default UserMessageTitle;