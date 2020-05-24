import React from 'react';
import style from './InputMessage.module.scss';

type PropsType = {
    addMessage: () => void
    updateNewMessageText: (newMessageText: string|null) => void;
}

const InputMessage = (props: PropsType) => {

    let newMessageElement = React.createRef<HTMLInputElement>();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let newMessageText = newMessageElement.current && newMessageElement.current.value;
        props.updateNewMessageText(newMessageText);
    }

    return (
        <div className={style.inputMessage}>
            <div className={style.emoji}>
                <img src="./ico/files_post/emoji.svg" alt="" />
            </div>
            <input type="text" ref={newMessageElement} onChange={onMessageChange} placeholder='Type your message...' />
            <div className={style.inputBtn}>
                <a onClick={addMessage} href="#" >Send</a>
            </div>
        </div>
    )
};

export default InputMessage;