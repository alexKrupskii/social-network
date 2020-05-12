import React from 'react';
import mod from './Content.module.scss'
import Chat from './Chat/Chat';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import Profile from "./Profile/Profile";
import {Route} from 'react-router-dom';
import {StateExportType} from './../../redux/state'


const Content = (props: StateExportType) => {
    return (
        <div className='container'>
            <div className={mod.content}>
                <div className={mod.content__page}>
                    <Route path='/profile' render = {()=> <Profile profilePage={props.state.profilePage}/>} />
                    <Route path='/chat' render = {()=> <Chat state={props.state}/>} />
                    <Route path='/news' render = {()=> <News />} />
                    <Route path='/music' render = {()=> <Music />} />
                    <Route path='/settings' render = {()=> <Settings />} />
                </div>
            </div>
        </div>
    )
};

export default Content;