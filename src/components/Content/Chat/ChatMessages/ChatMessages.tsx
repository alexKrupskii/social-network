import React from 'react';
import style from './ChatMessages.module.scss'
import UserMessage from './UserMessage/UserMessage';
import InputMessage from './InputMessage/InputMessage';
import UserMessageTitle from './UserMessageTitle/UserMessageTitle';
import {MessagesPageType} from './../../../../redux/state';

type ChatPageType = {
    messagesPage: MessagesPageType
    addMessage: () => void
    updateNewMessageText: (newMessageText: string|null) => void;
}

const ChatMessages = (props:ChatPageType) => {

    let userMessageElements = props.messagesPage.messageData
    .map(m => <UserMessage avatar={m.avatar} time={m.time} message={m.message}/>);

    let userMessageTitleElement = props.messagesPage.userMessageTitleData
        .map(t => <UserMessageTitle avatar={t.avatar} userName={t.userName}/> )
    return (
        <div className={style.messagesWrapper}>
            <div className={style.userDiscussion}>
                {userMessageTitleElement}
                <div className={style.chatIcons}>
                    <img src="./ico/call.svg" alt="" />
                    <img src="./ico/video-chat.svg" alt="" />
                </div>
            </div>
            <div className={style.chat}>
                {userMessageElements}
            </div>
            <InputMessage addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>
        </div>
    )
};

export default ChatMessages;