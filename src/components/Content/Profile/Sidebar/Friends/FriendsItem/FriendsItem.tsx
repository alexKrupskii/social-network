import React from 'react';
import style from './../Friends.module.scss'

type FriendsItemType = {
    id: number
    avatar: string
    userName: string
}

const FriendsItem = (props: FriendsItemType) => {
    return (
        <div className={style.user} key={props.id}>
            <img src={props.avatar} alt="" className={style.userAva} />
            <div className={style.userName}>{props.userName}</div>
        </div>
    )
};

export default FriendsItem;