import React, {KeyboardEvent, ChangeEvent} from 'react';
import {DispatchType} from '../../../../../redux/store';
import {addPostAC, updateNewPostTextAC} from "../../../../../redux/profile-reducer";
import InputPost from "./InputPost";

type InputPropsContainerType = {
    newPostText: string
    dispatch: DispatchType
}


const InputPostContainer: React.FC<InputPropsContainerType> = (props) => {

    let newPostElement = props.newPostText;

    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText));
    };

    let onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newText = e.target.value;
        props.dispatch(updateNewPostTextAC(newText));
    };

    let onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            addPost()
        }
    };

    return (
        <InputPost newPostText={newPostElement}
                   addPost={addPost}
                   onPostChange={onPostChange}
                   onKeyPressHandler={onKeyPressHandler}
        />
    )
};

export default InputPostContainer;