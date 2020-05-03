import React from 'react';
import mod from './Chat.module.scss'

import ChatMessages from './ChatMessages/ChatMessages';
import ChatDialogs from "./ChatDialogs/ChatDialogs";

const Chat = () => {
    return (
        <div className={mod.chatWrapper}>
            <ChatDialogs />
            <ChatMessages />
        </div>
    )
};

export default Chat;