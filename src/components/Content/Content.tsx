import React from 'react';
import mod from './Content.module.scss'
import Chat from './Chat/Chat';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import Profile from "./Profile/Profile";
import { Route } from 'react-router-dom';

const Content = () => {
    return (
        <div className='container'>
            <div className={mod.content}>
                <div className={mod.content__page}>
                    <Route path='/profile' render = {()=> <Profile />} />
                    <Route path='/chat' render = {()=> <Chat />} />
                    <Route path='/news' render = {()=> <News />} />
                    <Route path='/music' render = {()=> <Music />} />
                    <Route path='/settings' render = {()=> <Settings />} />
                </div>
            </div>
        </div>
    )
};

export default Content;