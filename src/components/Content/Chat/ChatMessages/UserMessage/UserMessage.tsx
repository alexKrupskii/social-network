import React from 'react';
import style from './UserMessage.module.scss'
import removeMessage from "./../../../../../assets/img/ico/remove.svg";
import {MessageDataType} from "../../../../../redux/redux-store";

const UserMessage = (props: MessageDataType) => {


    return (
        <div className={style.chatWrapper}>
            <div className={style.messageWrapper}>
                <div className={style.userWrapper}>
                    <img src={props.avatar} alt="" className={style.userAva} />
                    <div className={style.messageTime}>{props.time}</div>
                </div>
                <div className={style.message}>
                    {props.message}
                </div>
            </div>
            <div className={style.deleteMsg}>
                    <img className={style.deleteIcon} src={removeMessage} alt=""/>
            </div>
        </div>
    )
};

export default UserMessage;