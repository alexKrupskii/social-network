import React, {KeyboardEvent, ChangeEvent} from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../../../redux/profile-reducer";
import InputPost from "./InputPost";
import {connect} from "react-redux";
import {DispatchType, RootReduxStateType} from "../../../../../redux/redux-store";



const mapStateToProps = (state: RootReduxStateType) => {
    return {
        newPostText: state.profilePage.newPostText,
        profilePage: state.profilePage
    }
};

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        onPostChange: (e: ChangeEvent<HTMLInputElement>) => {
            let newText = e.target.value;
            dispatch(updateNewPostTextAC(newText));
        },
        onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.charCode === 13) {
                dispatch(addPostAC());
            }
        }
    }
};

const InputPostContainer = connect(mapStateToProps, mapDispatchToProps)(InputPost);

export default InputPostContainer;