import React from 'react';
import style from './Chat.module.scss'
import ChatMessages from './ChatMessages/ChatMessages';
import ChatDialogs from "./ChatDialogs/ChatDialogs";
import {ChatPageType, DispatchType} from "../../../redux/state";

type PropsType = {
    chatPage: ChatPageType
    dispatch: DispatchType
}

const Chat = (props: PropsType) => {

    return (
        <div className={style.chatWrapper}>
            <ChatDialogs dialogsData={props.chatPage.dialogsData}/>
            <ChatMessages messagesPage={props.chatPage.messagesPage}
                          dispatch={props.dispatch}
                          newMessageText={props.chatPage.messagesPage.newMessageText}/>
        </div>
    )
};

export default Chat;