import React, { Component } from 'react';

import { TreeView } from 'devextreme-react';

const LeftPane = (props) => {
    return (
        <div>
            <div className="pane-top-bar" >
                {props.title}
            </div>
            <TreeView 
                items={props.structure}
                width={props.width}
            />
        </div>
    )
}

export default LeftPane;