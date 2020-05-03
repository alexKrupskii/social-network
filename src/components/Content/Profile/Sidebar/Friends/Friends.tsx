import React from 'react';
import mod from './Friends.module.scss'
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = () => {
    return (
        <div className={mod.friendsWrapper}>
            <div className={mod.title}>Friends</div>
            <div className={mod.userWrapper}>
                <FriendsItem />
            </div>
        </div>
    )
};

export default Friends;