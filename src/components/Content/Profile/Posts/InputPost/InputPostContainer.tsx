import React, {KeyboardEvent, ChangeEvent} from 'react';
import {DispatchType, StoreType} from '../../../../../redux/store';
import {addPostAC, updateNewPostTextAC} from "../../../../../redux/profile-reducer";
import InputPost from "./InputPost";

type InputPropsContainerType = {
    store: StoreType
}


const InputPostContainer: React.FC<InputPropsContainerType> = (props) => {
    let state = props.store.getState().profilePage;
    let newPostElement = props.store._state.profilePage.newPostText;

    let addPost = () => {
        props.store.dispatch(addPostAC(state.newPostText));
    };

    let onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newText = e.target.value;
        props.store.dispatch(updateNewPostTextAC(newText));
    };

    let onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            addPost()
        }
    };

    return <InputPost newPostText={newPostElement}
                      addPost={addPost}
                      onPostChange={onPostChange}
                      onKeyPressHandler={onKeyPressHandler}
        />

};

export default InputPostContainer;