import React from 'react';
import mod from './ChatMessages.module.scss'
import UserMessage from './UserMessage/UserMessage';
import InputMessage from './InputMessage/InputMessage';
import UserMessageTitle from './UserMessageTitle/UserMessageTitle';

type ChatType = {
    messageData: Array<UserMessageType>
}
type UserMessageType = {
    id?: number
    avatar: string
    time: number | string
    message: string
}

const ChatMessages = (props:ChatType) => {

    let UserMessageElements = props.messageData
    .map(m => <UserMessage avatar={m.avatar} time={m.time} message={m.message}/>);

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
                {UserMessageElements}
            </div>
            <InputMessage />
        </div>
    )
};

export default ChatMessages;