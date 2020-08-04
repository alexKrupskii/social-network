import React from 'react';
import style from './ChatMessages.module.scss'
import UserMessage from './UserMessage/UserMessage';
import InputMessage from './InputMessage/InputMessage';
import UserMessageTitle from './UserMessageTitle/UserMessageTitle';
import {DispatchType, MessagesPageType, StoreType} from '../../../../redux/store';
import InputMessageContainer from "./InputMessage/InputMessageContainer";


type ChatPageType = {
    store: StoreType
}

const ChatMessages = (props: ChatPageType) => {
    let state = props.store.getState().chatPage.messagesPage;

    let messagesElements = state.messageData
        .map(m => <UserMessage id={m.id} avatar={m.avatar} time={m.time} message={m.message} />)

    let userMessageTitleElement = state.userMessageTitleData
        .map(t => <UserMessageTitle avatar={t.avatar} userName={t.userName} />);
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
            <InputMessageContainer store={props.store} />
        </div>
    )
};

export default ChatMessages;