import React from 'react';
import style from './Content.module.scss'
import Chat from './Chat/Chat';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import Profile from "./Profile/Profile";
import {Route} from 'react-router-dom';
import {DispatchType, RootStateType} from './../../redux/state';

type PropsType = {
    state: RootStateType
    dispatch: DispatchType
}

const Content = (props: PropsType) => {
    return (
        <div className='container'>
            <div className={style.content}>
                <div className={style.content__page}>
                    <Route path='/profile' render = {()=> <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}/>} />
                    <Route path='/chat' render = {()=> <Chat
                        chatPage={props.state.chatPage}
                        dispatch={props.dispatch}/>} />
                    <Route path='/news' render = {()=> <News />} />
                    <Route path='/music' render = {()=> <Music />} />
                    <Route path='/settings' render = {()=> <Settings />} />
                </div>
            </div>
        </div>
    )
};

export default Content;