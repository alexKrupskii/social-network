import React from 'react';
import style from './Chat.module.scss'
import ChatMessages from './ChatMessages/ChatMessages';
import ChatDialogs from "./ChatDialogs/ChatDialogs";

type PropsType = {

}

const Chat = (props: PropsType) => {

    return (
        <div className={style.chatWrapper}>
            <ChatDialogs />
            <ChatMessages />
        </div>
    )
};

export default Chat;