import React, { Component } from 'react';

import {
    Menu
} from 'semantic-ui-react';

export default class BottomBar extends Component {
    render() {
        return (
            <div>
                <Menu color={'blue'} className="bottom-bar" inverted secondary>

                    <Menu.Item className='bottom-item' name='master*' icon='code branch' />
                    <Menu.Item className='bottom-item' icon='refresh' />
                    <Menu.Item className='bottom-item' name='0' icon='window close' />
                    <Menu.Item className='bottom-item' name='1' icon='warning sign' />

                    <Menu.Menu position='right'>
                        <Menu.Item className='bottom-item' name='Spaces: 4' />
                        <Menu.Item className='bottom-item' name='UTF-8' />
                        <Menu.Item className='bottom-item' name='CRLF' />
                        <Menu.Item className='bottom-item' name='JavaScript' />
                        <Menu.Item className='bottom-item' name='Prettier' />
                        <Menu.Item className='bottom-item' name='Formatting' icon='close' />
                        <Menu.Item className='bottom-item' icon='smile' />
                        <Menu.Item className='bottom-item' icon='bell' />
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}