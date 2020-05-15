import React from 'react';
import style from './Navigation.module.scss'
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='container'>
            <div className={style.navBar}>
                <NavLink to='profile' className={style.navBar__item} activeClassName={style.activeLink}>Profile</NavLink>
                <NavLink to='chat' className={style.navBar__item} activeClassName={style.activeLink}>Chat</NavLink>
                <NavLink to='news' className={style.navBar__item} activeClassName={style.activeLink}>News</NavLink>
                <NavLink to='music' className={style.navBar__item} activeClassName={style.activeLink}>Music</NavLink>
                <NavLink to='settings' className={style.navBar__item} activeClassName={style.activeLink}>Settings</NavLink>
            </div>
        </div>
    )
};

export default Navigation;