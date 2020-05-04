import React from 'react';
import mod from './ChatDialogs.module.scss'
import UserDialog from './UserDialog/UserDialog';

const ChatDialogs = () => {
    return (
        <div className={mod.dialogsWrapper}>
            <div className={mod.userInfo}>
                <div className={mod.userAva}>
                    <img src="./img/robert_ava.jpg" alt="" />
                </div>
                <div className={mod.userName}>
                    Robert Downey Jr.
                </div>
            </div>
            <div className={mod.title}>
                Dialogs
            </div>
            <div className={mod.dialogs}>
                <UserDialog />
                <UserDialog />
                <UserDialog />
                <UserDialog />
                <UserDialog />
                <UserDialog />
                <UserDialog />
                <UserDialog />
                <UserDialog />
                <UserDialog />
                <UserDialog />
            </div>
        </div>
    )
};

export default ChatDialogs;