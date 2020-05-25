import React from 'react';
import style from './Chat.module.scss'
import ChatMessages from './ChatMessages/ChatMessages';
import ChatDialogs from "./ChatDialogs/ChatDialogs";
import {ChatPageType} from "../../../redux/state";

type StateType = {
    chatPage: ChatPageType
    addMessage: () => void
    updateNewMessageText: (newMessageText: string|undefined) => void;
}

const Chat = (props: StateType) => {
    return (
        <div className={style.chatWrapper}>
            <ChatDialogs dialogsData={props.chatPage.dialogsData}/>
            <ChatMessages messagesPage={props.chatPage.messagesPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} newMessageText={props.chatPage.messagesPage.newMessageText}/>
        </div>
    )
};

export default Chat;