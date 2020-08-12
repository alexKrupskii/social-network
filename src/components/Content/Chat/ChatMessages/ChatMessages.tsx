import React from 'react';
import style from './ChatMessages.module.scss'
import UserMessage from './UserMessage/UserMessage';
import UserMessageTitle from './UserMessageTitle/UserMessageTitle';
import storeRedux from '../../../../redux/redux-store';
import InputMessageContainer from "./InputMessage/InputMessageContainer";



type ChatPageType = {

}

const ChatMessages = (props: ChatPageType) => {
    let state = storeRedux.getState().chatPage.messagesPage;

    let messagesElements = state.messageData
        .map(m => <UserMessage id={m.id} avatar={m.avatar} time={m.time} message={m.message} />);

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
            <InputMessageContainer/>
        </div>
    )
};

export default ChatMessages;