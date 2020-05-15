import React from 'react';
import style from './InputMessage.module.scss';

const InputMessage = (props:any) => {
    return (
        <div className={style.inputMessage}>
            <div className={style.emoji}>
                <img src="./ico/files_post/emoji.svg" alt="" />
            </div>
            <input type="text" placeholder='Type your message...' />
            <div className={style.inputBtn}>
                <a href="#" >Send</a>
            </div>
        </div>
    )
};

export default InputMessage;