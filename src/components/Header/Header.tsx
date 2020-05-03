import React from 'react';
import mod from './Header.module.scss'

const Header = () => {
    return (
        <div className={mod.wrapper}>
            <div className='container'>
                <div className={mod.header}>
                    <div className={mod.header__logo}>
                        <a href="">Social Network</a>
                    </div>
                    <div className={mod.header__right}>
                        <div className={mod.header_nav}>
                            <div className={mod.ico_item}>
                                <a href="#"></a>
                            </div>
                            <div className={mod.ico_item}>
                                <a href="#"><img src="./ico/chat.svg" alt="" /></a>
                            </div>
                            <div className={mod.ico_item}>
                                <a href="#"><img src="./ico/friends.svg" alt="" /></a>
                            </div>
                            <div className={mod.ico_item}>
                                <a href="#"><img src="./ico/notifications.svg" alt="" /></a>
                            </div>
                        </div>
                        <a href='' className={mod.user_name}>Robert</a>
                        <div className={mod.userAva}>
                            <img src="./img/robert_ava.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;