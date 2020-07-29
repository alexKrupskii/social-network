import {ActionsTypes, MessagesPageType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const chatReducer = (state: MessagesPageType, action: ActionsTypes) => {
    if (action.type === ADD_MESSAGE) {
        if (state.newMessageText === '') {
        } else {
            let newMessageElement = {
                id: "10",
                avatar: require("./../assets/img/robert_ava.jpg"),
                time: 5 + ":" + 32,
                message: action.newText
            };
            state.messageData.push(newMessageElement);
            state.newMessageText = '';

        }
    }

    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.updateNewMessageText;

    }
    return state;
};