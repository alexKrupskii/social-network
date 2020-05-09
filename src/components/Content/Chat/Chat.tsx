import React from 'react';
import mod from './Chat.module.scss'
import ChatMessages from './ChatMessages/ChatMessages';
import ChatDialogs from "./ChatDialogs/ChatDialogs";
import {StateExportType} from "../../../redux/state";



const Chat = (props: StateExportType) => {
    return (
        <div className={mod.chatWrapper}>
            <ChatDialogs dialogsData={props.state.chatPage.dialogsData}/>
            <ChatMessages messageData={props.state.chatPage.messageData}/>
        </div>
    )
};

export default Chat;