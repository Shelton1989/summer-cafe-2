import React, { Component } from 'react';

import {
    Menu
} from 'semantic-ui-react';

const TopBar = (props) => {
    const {backgroundColor, color} = props
    return (
        <div 
            className='view-bar'
            style={{
                backgroundColor: `${backgroundColor}`,
                color: `${color}`
            }}
        >
            
        </div>
    )
}

export default TopBar