import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import state, {addMessage, addPost, StateType, subscribe, updateNewMessageText, updateNewPostText} from './redux/state';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     addMessage={addMessage}
                     updateNewPostText={updateNewPostText}
                     updateNewMessageText={updateNewMessageText}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
