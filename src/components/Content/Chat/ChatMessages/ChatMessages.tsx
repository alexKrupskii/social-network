import React from 'react';
import style from './ChatMessages.module.scss'
import UserMessage from './UserMessage/UserMessage';
import InputMessage from './InputMessage/InputMessage';
import UserMessageTitle from './UserMessageTitle/UserMessageTitle';
import {DispatchType, MessagesPageType} from '../../../../redux/store';
import InputMessageContainer from "./InputMessage/InputMessageContainer";


type ChatPageType = {
    messagesPage: MessagesPageType
    newMessageText: string
    dispatch: DispatchType
}

const ChatMessages = (props: ChatPageType) => {

    let messagesElements = props.messagesPage.messageData
        .map(m => <UserMessage id={m.id} avatar={m.avatar} time={m.time} message={m.message} />)

    let userMessageTitleElement = props.messagesPage.userMessageTitleData
        .map(t => <UserMessageTitle avatar={t.avatar} userName={t.userName} />)
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
                {messagesElements}  
            </div>
            <InputMessageContainer dispatch={props.dispatch}
                          newMessageText={props.newMessageText} />
        </div>
    )
};

export default ChatMessages;