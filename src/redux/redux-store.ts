import { createStore, combineReducers } from "redux";
import {profileReducer} from "./profile-reducer";
import {chatReducer} from "./chat-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    chatPage: chatReducer
});

export type RootReduxStateType = ReturnType<typeof reducers>

let storeRedux = createStore(reducers);
export default storeRedux;