import React from 'react';
import mod from './Content.module.scss'
import { Route } from 'react-router-dom';

const Content = () => {
    return (
        <div className='container'>
            <div className={mod.content}>
                <div className={mod.content__page}>

                </div>
            </div>
        </div>
    )
};

export default Content;