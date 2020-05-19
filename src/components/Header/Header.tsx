import React from 'react';
import style from './Header.module.scss';
import robert from './../../assets/img/robert_ava.jpg';

const Header = () => {
    return (
        <div className={style.wrapper}>
            <div className='container'>
                <div className={style.header}>
                    <div className={style.header__logo}>
                        <a href="">Social Network</a>
                    </div>
                    <div className={style.header__right}>
                        <div className={style.header_nav}>
                            <div className={style.ico_item}>
                                <a href="#"><img src="./ico/home.svg" alt="" /></a>
                            </div>
                            <div className={style.ico_item}>
                                <a href="#"><img src="./ico/chat.svg" alt="" /></a>
                            </div>
                            <div className={style.ico_item}>
                                <a href="#"><img src="./ico/friends.svg" alt="" /></a>
                            </div>
                            <div className={style.ico_item}>
                                <a href="#"><img src="./ico/notifications.svg" alt="" /></a>
                            </div>
                        </div>
                        <a href='' className={style.user_name}>Robert</a>
                        <div className={style.userAva}>
                            <img src={robert} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;