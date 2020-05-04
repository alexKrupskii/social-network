import React from 'react';
import mod from './UserMessage.module.scss'

const UserMessage = () => {
    return (
        <div className={mod.chatWrapper}>
            <div className={mod.userWrapper}>
                <img src='./img/robert_ava.jpg' alt="" className={mod.userAva} />
                <div className={mod.messageTime}>5:32</div>
            </div>
            <div className={mod.message}>
                Hellow! How are you?
                I heard you starred in a new movie.
            </div>
        </div>
    )
};

export default UserMessage;