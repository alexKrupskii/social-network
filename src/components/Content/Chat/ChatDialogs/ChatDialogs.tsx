import React from 'react';
import style from './ChatDialogs.module.scss'
import UserDialog from './UserDialog/UserDialog';
import robert from './../../../../assets/img/robert_ava.jpg'
import {StoreType} from "../../../../redux/store";

type ChatType = {
    store: StoreType
}

const ChatDialogs = (props:ChatType) => {
    let state = props.store.getState().chatPage;

    let UserDialogsElement = state.dialogsData
        .map(d => <UserDialog avatar={d.avatar} userName={d.userName}/>);

    return (
        <div className={style.dialogsWrapper}>
            <div className={style.userInfo}>
                <div className={style.userAva}>
                    <img src={robert} alt="" />
                </div>
                <div className={style.userName}>
                    Robert Downey Jr.
                </div>
            </div>
            <div className={style.title}>
                Dialogs
            </div>
            <div className={style.dialogs}>
                {UserDialogsElement}
            </div>
        </div>
    )
};

export default ChatDialogs;