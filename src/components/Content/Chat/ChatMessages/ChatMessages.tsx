import React from 'react';
import mod from './ChatMessages.module.scss'
import UserMessage from './UserMessage/UserMessage';
import InputMessage from './InputMessage/InputMessage';
import UserMessageTitle from './UserMessageTitle/UserMessageTitle';


type ChatType = {
    messagesPage: MessagesType
}

type MessagesType = {
    userMessageTitleData: Array<UserMessageTitleType>
    messageData: Array<UserMessageType>
}

type UserMessageTitleType = {
    id?: number
    avatar: string
    userName: string
}

type UserMessageType = {
    id?: number
    avatar: string
    time: number | string
    message: string
}

const ChatMessages = (props:ChatType) => {

    let userMessageElements = props.messagesPage.messageData
    .map(m => <UserMessage avatar={m.avatar} time={m.time} message={m.message}/>);

    let userMessageTitleElement = props.messagesPage.userMessageTitleData
        .map(t => <UserMessageTitle avatar={t.avatar} userName={t.userName}/> )

    return (
        <div className={mod.messagesWrapper}>
            <div className={mod.userDiscussion}>
                {userMessageTitleElement}
                <div className={mod.chatIcons}>
                    <img src="./ico/call.svg" alt="" />
                    <img src="./ico/video-chat.svg" alt="" />
                </div>
            </div>
            <div className={mod.chat}>
                {userMessageElements}
            </div>
            <InputMessage />
        </div>
    )
};

export default ChatMessages;