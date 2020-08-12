import React from 'react';
import style from './Friends.module.scss'
import FriendsItem from './FriendsItem/FriendsItem';
type SideBarType = {
    friendsData: Array<FriendsItemType>
}
type FriendsItemType = {
    id: number
    avatar: string
    userName: string
}
const Friends = (props: SideBarType) => {
    let friendsElements = props.friendsData
        .map( f => <FriendsItem key={f.id} id={f.id} avatar={f.avatar} userName={f.userName} />);
    return (
        <div className={style.friendsWrapper}>
            <div className={style.title}>Friends</div>
            <div className={style.userWrapper}>
                {friendsElements}
            </div>
        </div>
    )
};

export default Friends;