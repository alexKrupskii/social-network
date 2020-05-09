import React from 'react';
import mod from './ChatDialogs.module.scss'
import UserDialog from './UserDialog/UserDialog';

type ChatType = {
    dialogsData: Array<UserDialogsType>
}

type UserDialogsType = {
    id?: number
    avatar: string
    userName: string
}

const ChatDialogs = (props:ChatType) => {

    let UserDialogsElement = props.dialogsData
        .map(d => <UserDialog avatar={d.avatar} userName={d.userName}/>);

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
                {UserDialogsElement}
            </div>
        </div>
    )
};

export default ChatDialogs;