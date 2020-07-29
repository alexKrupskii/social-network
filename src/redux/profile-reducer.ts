import {ActionsTypes, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    if (action.type === ADD_POST) {
        if (state.newPostText) {
            let newPostElement = {
                id: 1,
                userName: 'Gwyneth Paltrow',
                avatar: require("./../assets/img/gwyneth_ava.jpg"),
                time: 10 + ':' + 22,
                likesCount: 0,
                commentCount: 0,
                repostCount: 0,
                text: action.newText,
                postImg: ""
            };
            state.postData.unshift(newPostElement);
            state.newPostText = '';

        }
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText =  action.updateNewPostText;

    }
    return state;
};
