import React, { Component } from 'react';

import logo from '../logo.svg';

import {
    Dropdown,
    Icon,
    Menu,
} from 'semantic-ui-react';

const TopBar = (props) => {
	const {backgroundColor, color} = props
	return (
		<div 
			style={{backgroundColor: `${backgroundColor}`, color: `${color}`}} 
			className="tool-bar"
		>
		  
		</div>
	)
}

export default TopBar;