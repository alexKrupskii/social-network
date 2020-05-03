import React from 'react';
import mod from './Navigation.module.scss'
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='container'>
            <div className={mod.navBar}>
                <NavLink to='profile' className={mod.navBar__item} activeClassName={mod.activeLink}>Profile</NavLink>
                <NavLink to='chat' className={mod.navBar__item} activeClassName={mod.activeLink}>Chat</NavLink>
                <NavLink to='news' className={mod.navBar__item} activeClassName={mod.activeLink}>News</NavLink>
                <NavLink to='music' className={mod.navBar__item} activeClassName={mod.activeLink}>Music</NavLink>
                <NavLink to='settings' className={mod.navBar__item} activeClassName={mod.activeLink}>Settings</NavLink>
            </div>
        </div>
    )
};

export default Navigation;