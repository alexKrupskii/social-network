import React from 'react';
import style from './Chat.module.scss'
import ChatMessages from './ChatMessages/ChatMessages';
import ChatDialogs from "./ChatDialogs/ChatDialogs";
import {ChatPageType, DispatchType, StoreType} from "../../../redux/store";

type PropsType = {
    store: StoreType
}

const Chat = (props: PropsType) => {

    return (
        <div className={style.chatWrapper}>
            <ChatDialogs store={props.store}/>
            <ChatMessages store={props.store}/>
        </div>
    )
};

export default Chat;