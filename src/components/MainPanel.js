import React, { Component } from 'react';

const MainPanel = (props) => {
    const {backgroundImage} = props
    return (
        <div 
            className='content' 
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >

        </div>
    )
}

export default MainPanel;