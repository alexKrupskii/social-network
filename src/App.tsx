import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Navigation from "./components/Navigation/Navigation";
import {Route} from 'react-router-dom';



type PropsType = {

}

const App: React.FC<PropsType> = (props) => {

    return (
        <div className="app">
            <Header/>
            <Navigation/>
            <Content/>
            <Route path='/(music|profile|news|settings)' render={() => <Footer/>}/>
        </div>
    );
};

export default App;


