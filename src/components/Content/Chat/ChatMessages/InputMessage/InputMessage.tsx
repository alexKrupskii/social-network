import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './InputMessage.module.scss';
import {addMessageAC, DispatchType, updateNewMessageTextAC} from "../../../../../redux/state";

type PropsType = {
    newMessageText: string
    dispatch: DispatchType
}



const InputMessage = (props: PropsType) => {

    let newMessageElement = props.newMessageText;

    let addMessage = () => {
        props.dispatch(addMessageAC(props.newMessageText));
    };

    let onMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newText = event.target.value;
        props.dispatch(updateNewMessageTextAC(newText));
    };

    let onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            addMessage()
        }
    };

    return (
        <div className={style.inputMessage}>
            <div className={style.emoji}>
                <img src="./ico/files_post/emoji.svg" alt="" />
            </div>
            <input type="text"
                   onKeyPress={onKeyPressHandler}
                   onChange={onMessageChange}
                   value={newMessageElement}
                   placeholder='Type your message...' />
            <div className={style.inputBtn}>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
};

export default InputMessage;