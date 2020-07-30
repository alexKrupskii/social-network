import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Navigation from "./components/Navigation/Navigation";
import {Route} from 'react-router-dom';
import {DispatchType, StoreType, RootStateType} from './redux/store';

type PropsType = {
    store: StoreType
    state: RootStateType
    dispatch: DispatchType
}
const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState();
    return (
        <div className="app">
            <Header/>
            <Navigation/>
            <Content state={state}
                     dispatch={props.dispatch}/>
            <Route path='/(music|profile|news|settings)' render={() => <Footer/>}/>
        </div>
    );
};

export default App;


