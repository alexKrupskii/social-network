import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Navigation from "./components/Navigation/Navigation";
import {Route} from 'react-router-dom';
import {DispatchType, RootStateType, StoreType} from './redux/store';

type PropsType = {
    store: StoreType
    dispatch: DispatchType
    state: RootStateType
}

const App: React.FC<PropsType> = (props) => {

    return (
        <div className="app">
            <Header/>
            <Navigation/>
            <Content store={props.store}/>
            <Route path='/(music|profile|news|settings)' render={() => <Footer/>}/>
        </div>
    );
};

export default App;


