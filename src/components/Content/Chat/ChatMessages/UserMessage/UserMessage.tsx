import React from 'react';
import style from './UserMessage.module.scss';

type UserMessageType = {
    avatar: string
    time: string|number
    message: string|null
}


const UserMessage = (props:UserMessageType) => {
    return (
        <div className={style.chatWrapper}>
            <div className={style.userWrapper}>
                <img src={props.avatar} alt="" className={style.userAva} />
                <div className={style.messageTime}>{props.time}</div>
            </div>
            <div className={style.message}>
                {props.message}
            </div>
        </div>
    )
};

export default UserMessage;