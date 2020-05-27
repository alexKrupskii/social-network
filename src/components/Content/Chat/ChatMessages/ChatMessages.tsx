import React from 'react';
import style from './ChatMessages.module.scss'
// import UserMessage from './UserMessage/UserMessage';
import InputMessage from './InputMessage/InputMessage';
import UserMessageTitle from './UserMessageTitle/UserMessageTitle';
import { MessagesPageType, MessageDataType } from './../../../../redux/state';
import remove from './../../../../assets/img/ico/remove.svg'

type ChatPageType = {
    messagesPage: MessagesPageType
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void;
    newMessageText: string
    deleteMessage: (id: string) => void
    messages: Array<MessageDataType>
    
}
// type messagesType = {
//     avatar: string
//     time: string | number
//     message: string
//     id: number
// }




const ChatMessages = (props: ChatPageType) => {



    let userMessageTitleElement = props.messagesPage.userMessageTitleData
        .map(t => <UserMessageTitle avatar={t.avatar} userName={t.userName} />)
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
                {props.messages
                    .map(m => <div key={m.id} className={style.chatWrapper}>
                    <div className={style.messageWrapper}>
                        <div className={style.userWrapper}>
                            <img src={m.avatar} alt="" className={style.userAva} />
                            <div className={style.messageTime}>{m.time}</div>
                        </div>
                        <div className={style.message}>
                            {m.message}
                        </div>
                    </div>
                    <button onClick={() => {props.deleteMessage(m.id) }} className={style.deleteMsg}>
                        <img className={style.deleteIcon} src={remove} alt="" />
                    </button>
                </div>)}
                    
            </div>
            <InputMessage addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} newMessageText={props.newMessageText} />
        </div>
    )
};

export default ChatMessages;