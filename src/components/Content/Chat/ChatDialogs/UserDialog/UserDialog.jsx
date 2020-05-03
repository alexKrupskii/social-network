import React from 'react';
import mod from './UserDialog.module.scss'

const UserDialog = (props) => {
    return (
        <a href='#' className={mod.userDialog} activeClassName={mod.activeLink}>
            <div className={mod.userAva}>
                <img src={props.avatar} alt="" />
            </div>
            <div className={mod.userName}>
                {props.userName}
            </div>
        </a>
    )
};

export default UserDialog;