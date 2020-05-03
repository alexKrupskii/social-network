import React from 'react';
import mod from './ChatMessages.module.scss'
import UserMessage from './UserMessage/UserMessage';
import InputMessage from './InputMessage/InputMessage';
import UserMessageTitle from './UserMessageTitle/UserMessageTitle';

const ChatMessages = () => {
    return (
        <div className={mod.messagesWrapper}>
            <div className={mod.userDiscussion}>
                <UserMessageTitle />
                <div className={mod.chatIcons}>
                    <img src="./ico/call.svg" alt="" />
                    <img src="./ico/video-chat.svg" alt="" />
                </div>
            </div>
            <div className={mod.chat}>
                <UserMessage />
            </div>
            <InputMessage />
        </div>
    )
};

export default ChatMessages;