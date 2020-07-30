import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store, {RootStateType} from "./redux/store";
import {Provider} from "react-redux";
import storeRedux from './redux/redux-store';

let rerenderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={storeRedux}>
                    <App dispatch={store.dispatch.bind(store)}
                        store={store}
                        state={state}
                    />
                </Provider>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});
