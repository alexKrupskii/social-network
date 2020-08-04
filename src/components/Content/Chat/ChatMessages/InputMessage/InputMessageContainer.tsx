import React, {ChangeEvent, KeyboardEvent} from 'react';
import {DispatchType, StoreType} from "../../../../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../../../../redux/chat-reducer";
import InputMessage from "./InputMessage";

type InputMessageContainerType = {
    store: StoreType
}

const InputMessageContainer: React.FC<InputMessageContainerType> = (props) => {

    let newMessageElement = props.store.getState().chatPage.messagesPage.newMessageText;

    let addMessage = () => {
        props.store.dispatch(addMessageAC(newMessageElement));
    };

    let onMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newText = event.target.value;
        props.store.dispatch(updateNewMessageTextAC(newText));
    };

    let onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            addMessage()
        }
    };

    return <InputMessage newMessageText={newMessageElement}
                         addMessage={addMessage}
                         onMessageChange={onMessageChange}
                         onKeyPressHandler={onKeyPressHandler}
       />

};
export default InputMessageContainer;