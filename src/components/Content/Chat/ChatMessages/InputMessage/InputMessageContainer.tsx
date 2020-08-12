import React, {ChangeEvent, KeyboardEvent} from 'react';

import {addMessageAC, updateNewMessageTextAC} from "../../../../../redux/chat-reducer";
import InputMessage from "./InputMessage";
import {connect} from "react-redux";
import {DispatchType, RootReduxStateType} from "../../../../../redux/redux-store";

const mapStateToProps = (state: RootReduxStateType) => {
    return {
        newMessageText: state.chatPage.messagesPage.newMessageText

    }
};

const mapDispatchTopProps = (dispatch: DispatchType) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        onMessageChange: (event: ChangeEvent<HTMLInputElement>) => {
            let newText = event.target.value;
            dispatch(updateNewMessageTextAC(newText));
        },
        onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.charCode === 13) {
                dispatch(addMessageAC())
            }
        }
    }
};

const InputMessageContainer = connect(mapStateToProps, mapDispatchTopProps)(InputMessage);

export default InputMessageContainer;