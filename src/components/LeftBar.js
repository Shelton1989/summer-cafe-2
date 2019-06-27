import React, { Component } from 'react';

import {
    Menu
} from 'semantic-ui-react';

export default class LeftBar extends Component {
    render() {
        return (
            <div>
                <Menu secondary inverted className='side-nav' borderless icon vertical>
                    <Menu.Item className='side-item' icon='file outline'></Menu.Item>
                    <Menu.Item className='side-item' icon='search'></Menu.Item>
                    <Menu.Item className='side-item' icon='bug'></Menu.Item>
                    <Menu.Item className='side-item' icon='external square'></Menu.Item>
                    <Menu.Item className='side-item' icon='github'></Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item icon="test"></Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}