import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Navigation from "./components/Navigation/Navigation";
import {Route} from 'react-router-dom';
import {StateExportType} from './redux/state';





const App = (props: StateExportType ) => {
    return (
        <div className="app">
            <Header/>
            <Navigation/>
            <Content state={props.state} />
            <Route path='/(music|profile|news|settings)' render={() => <Footer/>}/>
        </div>
    );
};

export default App;


