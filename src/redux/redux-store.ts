import { createStore, combineReducers } from "redux";
import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {addMessageAC, chatReducer, updateNewMessageTextAC} from "./chat-reducer";

export type DispatchType = (action: ActionsTypes) => void

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof updateNewMessageTextAC>

export type StoreType = {
    dispatch: DispatchType
}
export type RootStateType = {
    chatPage: ChatPageType
    profilePage: ProfilePageType
}

export type ProfilePageType = {
    postData: Array<PostDataType>
    sideBarData: SideBarDataType
    newPostText: string
}
export type ChatPageType = {
    dialogsData: Array<DialogsDataType>
    messagesPage: MessagesPageType

}

export type MessagesPageType = {
    userMessageTitleData: Array<UserMessageTitleDataType>
    newMessageText: string
    messageData: Array<MessageDataType>
}
export type SideBarDataType = {
    userInfoData: Array<UserInfoDataType>
    friendsData: Array<FriendsDataType>}

export type UserInfoDataType = {
    id: number
    avatar: string
    userName: string
    postsCount: number
    followersCount: number
    followingCount: number
}
export type FriendsDataType = {
    id: number
    avatar: string
    userName: string
}
export type PostDataType = {
    id: number
    avatar: string
    userName: string
    time: number | string
    postImg?: string
    text: string
    likesCount: number
    commentCount: number
    repostCount: number
}
export type UserMessageTitleDataType = {
    id: number
    avatar: string
    userName: string
}
export type MessageDataType = {
    id: string
    avatar: string
    time: number | string
    message: string
}
export type DialogsDataType = {
    id: number
    avatar: string
    userName: string
}


const rootReducers = combineReducers({
    profilePage: profileReducer,
    chatPage: chatReducer
});

export type RootReduxStateType = ReturnType<typeof rootReducers>


let storeRedux = createStore(rootReducers);
// @ts-ignore
window.store = storeRedux;
export default storeRedux;
