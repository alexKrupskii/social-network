import React from 'react';
import style from './Chat.module.scss'
import ChatMessages from './ChatMessages/ChatMessages';
import ChatDialogs from "./ChatDialogs/ChatDialogs";
import {ChatPageType} from "../../../redux/state";
import { useState } from "react";
import {MessageHookDataType} from "./../../../redux/state"

type StateType = {
    chatPage: ChatPageType
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void;
    messageHookData: Array<MessageHookDataType>
}

const Chat = (props: StateType) => {

    let [messages, setMessage] = useState(props.chatPage.messagesPage.messageData);

    function deleteMessage (id: string) {
        let filteredMessage = messages.filter(m => m.id != id)
        setMessage(filteredMessage);
    }

    return (
        <div className={style.chatWrapper}>
            <ChatDialogs dialogsData={props.chatPage.dialogsData}/>
            <ChatMessages messages={messages}
                          deleteMessage={deleteMessage}
                          messagesPage={props.chatPage.messagesPage}
                          addMessage={props.addMessage}
                          updateNewMessageText={props.updateNewMessageText}
                          newMessageText={props.chatPage.messagesPage.newMessageText}/>
        </div>
    )
};

export default Chat;