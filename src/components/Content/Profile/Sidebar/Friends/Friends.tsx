import React from 'react';
import mod from './Friends.module.scss'
import FriendsItem from './FriendsItem/FriendsItem';
type SideBarType = {
    friendsData: Array<FriendsItemType>
}
type FriendsItemType = {
    id?: number
    avatar: string
    userName: string
}
const Friends = (props: SideBarType) => {
    let friendsElements = props.friendsData
        .map( f => <FriendsItem avatar={f.avatar} userName={f.userName} />)
    return (
        <div className={mod.friendsWrapper}>
            <div className={mod.title}>Friends</div>
            <div className={mod.userWrapper}>
                {friendsElements}
            </div>
        </div>
    )
};

export default Friends;