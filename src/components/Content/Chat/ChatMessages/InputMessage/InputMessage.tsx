import React from 'react';
import style from './InputMessage.module.scss';

type PropsType = {
    addMessage: () => void
    updateNewMessageText: (newMessageText: string|undefined) => void;
    newMessageText: string|undefined
}

const InputMessage = (props: PropsType) => {

    let newMessageElement = React.createRef<HTMLInputElement>();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let newText = newMessageElement.current?.value;
        props.updateNewMessageText(newText);
    }

    return (
        <div className={style.inputMessage}>
            <div className={style.emoji}>
                <img src="./ico/files_post/emoji.svg" alt="" />
            </div>
            <input type="text" ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText} placeholder='Type your message...' />
            <div className={style.inputBtn}>
                <button onClick={addMessage} >Send</button>
            </div>
        </div>
    )
};

export default InputMessage;