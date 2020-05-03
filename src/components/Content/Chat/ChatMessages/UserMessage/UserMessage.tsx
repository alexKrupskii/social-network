import React from 'react';
import mod from './UserMessage.module.scss'

const UserMessage = (props:any) => {
    return (
        <div className={mod.chatWrapper}>
            <div className={mod.userWrapper}>
                <img src={props.avatar} alt="" className={mod.userAva} />
                <div className={mod.messageTime}>{props.time}</div>
            </div>
            <div className={mod.message}>
                {props.message}
            </div>
        </div>
    )
};

export default UserMessage;