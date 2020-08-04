import React, {ChangeEvent, KeyboardEvent} from 'react';
import {DispatchType} from "../../../../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../../../../redux/chat-reducer";
import InputMessage from "./InputMessage";

type InputMessageContainerType = {
    newMessageText: string
    dispatch: DispatchType
}

const InputMessageContainer: React.FC<InputMessageContainerType> = (props) => {

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
       <InputMessage newMessageText={newMessageElement}
                     addMessage={addMessage}
                     onMessageChange={onMessageChange}
                     onKeyPressHandler={onKeyPressHandler}
       />
    )
};
export default InputMessageContainer;