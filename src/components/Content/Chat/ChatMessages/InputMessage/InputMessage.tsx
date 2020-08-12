import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './InputMessage.module.scss';

export type InputMessageType = {
    newMessageText: string
    onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void
    onMessageChange: (event: ChangeEvent<HTMLInputElement>) => void
    addMessage: () => void
}

const InputMessage: React.FC<InputMessageType> = (props) => {

    return (
        <div className={style.inputMessage}>
            <div className={style.emoji}>
                <img src="./ico/files_post/emoji.svg" alt="" />
            </div>
            <input type="text"
                   onKeyPress={props.onKeyPressHandler}
                   onChange={props.onMessageChange}
                   value={props.newMessageText}
                   placeholder='Type your message...' />
            <div className={style.inputBtn}>
                <button onClick={props.addMessage}>Send</button>
            </div>
        </div>
    )
};

export default InputMessage;