import React from 'react';
import mod from './InputMessage.module.scss';

const InputMessage = (props:any) => {
    return (
        <div className={mod.inputMessage}>
            <div className={mod.emoji}>
                <img src="./ico/files_post/emoji.svg" alt="" />
            </div>
            <input type="text" placeholder='Type your message...' />
            <div className={mod.inputBtn}>
                <a href="#" >Send</a>
            </div>
        </div>
    )
};

export default InputMessage;