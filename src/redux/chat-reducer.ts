import {ActionsTypes, ChatPageType} from "./store";
import {v1} from "uuid";

export const ADD_MESSAGE = "ADD-MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogsData: [
        { id: 1, avatar: require("./../assets/img/gwyneth_ava.jpg"), userName: 'Gwyneth Paltrow' },
        { id: 2, avatar: require("./../assets/img/chris_ava.jpg"), userName: 'Chris Evans' },
        { id: 3, avatar: require("./../assets/img/thomas_ava.jpg"), userName: 'Thomas Hiddleston' },
        { id: 4, avatar: require("./../assets/img/chris2_ava.jpg"), userName: 'Chris Hemsworth' },
        { id: 5, avatar: require("./../assets/img/scarlett_ava.jpg"), userName: 'Scarlett Johansson' },
        { id: 6, avatar: require("./../assets/img/mark_ava.jpg"), userName: 'Mark Ruffalo' },
        { id: 7, avatar: require("./../assets/img/zoe_ava.jpg"), userName: 'Zoe Saldana' },
        { id: 8, avatar: require("./../assets/img/tom_ava.jpg"), userName: 'Tom Holland' },
        { id: 9, avatar: require("./../assets/img/chadwick_ava.jpg"), userName: 'Chadwick Boseman' },
        { id: 10, avatar: require("./../assets/img/chris3_ava.jpg"), userName: 'Chris Pratt' },
        { id: 11, avatar: require("./../assets/img/benedict_ava.jpg"), userName: 'Benedict Cumberbatch' }
    ],
    messagesPage: {
        userMessageTitleData: [
            { id: 1, avatar: require("./../assets/img/gwyneth_ava.jpg"), userName: 'Gwyneth Paltrow' },
        ],

        messageData: [
            { id: v1(), avatar: require("./../assets/img/robert_ava.jpg"), time: 5 + ":" + 32, message: "Hellow! How are you? I heard you starred in a new movie." },
            { id: v1(), avatar: require("./../assets/img/gwyneth_ava.jpg"), time: 5 + ":" + 44, message: "Hellow! I starred in the world blockbuster Avengers!" },
            { id: v1(), avatar: require("./../assets/img/robert_ava.jpg"), time: 7 + ":" + 10, message: "This is awesome!" },
            { id: v1(), avatar: require("./../assets/img/robert_ava.jpg"), time: 7 + ":" + 44, message: "I'm very happy for you!" },
            { id: v1(), avatar: require("./../assets/img/gwyneth_ava.jpg"), time: 8 + ":" + 15, message: "Thank you very much! Very nice to hear!" },
            { id: v1(), avatar: require("./../assets/img/robert_ava.jpg"), time: 8 + ":" + 22, message: "I'll be doing a new movie soon, too!" },
            { id: v1(), avatar: require("./../assets/img/gwyneth_ava.jpg"), time: 10 + ":" + 20, message: "Cool! And what is it called?" }
        ],

        newMessageText: ''
    }
};

export const chatReducer = (state: ChatPageType = initialState, action: ActionsTypes): ChatPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.messagesPage.newMessageText) {
                let newMessageElement = {
                    id: "10",
                    avatar: require("./../assets/img/robert_ava.jpg"),
                    time: 5 + ":" + 32,
                    message: action.newText
                };
                state.messagesPage.messageData.push(newMessageElement);
                state.messagesPage.newMessageText = '';
            }
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.messagesPage.newMessageText = action.updateNewMessageText;
            return state;
        default:
            return state;
    }
};

export const addMessageAC = (newText: string) => ({type: ADD_MESSAGE, newText} as const);
export const updateNewMessageTextAC = (updateNewMessageText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    updateNewMessageText
} as const);