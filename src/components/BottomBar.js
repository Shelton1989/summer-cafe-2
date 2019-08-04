import React, { Component } from 'react';

import {
    Menu
} from 'semantic-ui-react';

const BottomBar = (props) => {
    const {color, backgroundColor} = props
    return (
        <div 
            className='activity-bar'
            style={{backgroundColor: `${backgroundColor}`, color: `${color}`}}
        >
            
        </div>
    )
}

export default BottomBar;