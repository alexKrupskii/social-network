import React from 'react';
import style from './Chat.module.scss'
import ChatMessages from './ChatMessages/ChatMessages';
import ChatDialogs from "./ChatDialogs/ChatDialogs";
import {ChatPageType} from "../../../redux/state";
import { useState } from "react";
import {MessageHookDataType} from "./../../../redux/state"
import {v1} from "uuid";

type StateType = {
    chatPage: ChatPageType
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void;
    messageHookData: Array<MessageHookDataType>
}

const Chat = (props: StateType) => {

    let messagesData = [
        { id: v1(), avatar: require("./../../../assets/img/robert_ava.jpg"), time: 5 + ":" + 32, message: "Hellow! How are you? I heard you starred in a new movie." },
        { id: v1(), avatar: require("./../../../assets/img/gwyneth_ava.jpg"), time: 5 + ":" + 44, message: "Hellow! I starred in the world blockbuster Avengers!" },
        { id: v1(), avatar: require("./../../../assets/img/robert_ava.jpg"), time: 7 + ":" + 10, message: "This is awesome!" },
        { id: v1(), avatar: require("./../../../assets/img/robert_ava.jpg"), time: 7 + ":" + 44, message: "I'm very happy for you!" },
        { id: v1(), avatar: require("./../../../assets/img/gwyneth_ava.jpg"), time: 8 + ":" + 15, message: "Thank you very much! Very nice to hear!" },
        { id: v1(), avatar: require("./../../../assets/img/robert_ava.jpg"), time: 8 + ":" + 22, message: "I'll be doing a new movie soon, too!" },
        { id: v1(), avatar: require("./../../../assets/img/gwyneth_ava.jpg"), time: 10 + ":" + 20, message: "Cool! And what is it called?" }
    ]

    let [messages, setMessage] = useState(messagesData);

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