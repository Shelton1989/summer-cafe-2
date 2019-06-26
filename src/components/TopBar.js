import React, { Component } from 'react';

import logo from '../logo.svg';

import {
    Dropdown,
    Icon,
    Menu,
} from 'semantic-ui-react';

class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
              <Menu inverted attached='top' secondary>

								<Menu.Item>
									<img src={logo} alt='' />
								</Menu.Item>

								<Dropdown text='File' icon={null} item simple>
									<Dropdown.Menu>
										<Dropdown.Item>
											<Icon name='dropdown' />
											<span className='text'>New</span>

											<Dropdown.Menu>
												<Dropdown.Item>Document</Dropdown.Item>
												<Dropdown.Item>Image</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown.Item>
										<Dropdown.Item>Open</Dropdown.Item>
										<Dropdown.Item>Save...</Dropdown.Item>
										<Dropdown.Item>Edit Permissions</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Export</Dropdown.Header>
										<Dropdown.Item>Share</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<Dropdown text='Edit' icon={null} item simple>
									<Dropdown.Menu>
										<Dropdown.Item>
											<Icon name='dropdown' />
											<span className='text'>New</span>

											<Dropdown.Menu>
												<Dropdown.Item>Document</Dropdown.Item>
												<Dropdown.Item>Image</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown.Item>
										<Dropdown.Item>Open</Dropdown.Item>
										<Dropdown.Item>Save...</Dropdown.Item>
										<Dropdown.Item>Edit Permissions</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Export</Dropdown.Header>
										<Dropdown.Item>Share</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<Dropdown text='Selection' icon={null} item simple>
									<Dropdown.Menu>
										<Dropdown.Item>
											<Icon name='dropdown' />
											<span className='text'>New</span>

											<Dropdown.Menu>
												<Dropdown.Item>Document</Dropdown.Item>
												<Dropdown.Item>Image</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown.Item>
										<Dropdown.Item>Open</Dropdown.Item>
										<Dropdown.Item>Save...</Dropdown.Item>
										<Dropdown.Item>Edit Permissions</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Export</Dropdown.Header>
										<Dropdown.Item>Share</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<Dropdown text='View' icon={null} item simple>
									<Dropdown.Menu>
										<Dropdown.Item>
											<Icon name='dropdown' />
											<span className='text'>New</span>

											<Dropdown.Menu>
												<Dropdown.Item>Document</Dropdown.Item>
												<Dropdown.Item>Image</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown.Item>
										<Dropdown.Item>Open</Dropdown.Item>
										<Dropdown.Item>Save...</Dropdown.Item>
										<Dropdown.Item>Edit Permissions</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Export</Dropdown.Header>
										<Dropdown.Item>Share</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<Dropdown text='Go' icon={null} item simple>
									<Dropdown.Menu>
										<Dropdown.Item>
											<Icon name='dropdown' />
											<span className='text'>New</span>

											<Dropdown.Menu>
												<Dropdown.Item>Document</Dropdown.Item>
												<Dropdown.Item>Image</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown.Item>
										<Dropdown.Item>Open</Dropdown.Item>
										<Dropdown.Item>Save...</Dropdown.Item>
										<Dropdown.Item>Edit Permissions</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Export</Dropdown.Header>
										<Dropdown.Item>Share</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<Dropdown text='Debug' icon={null} item simple>
									<Dropdown.Menu>
										<Dropdown.Item>
											<Icon name='dropdown' />
											<span className='text'>New</span>

											<Dropdown.Menu>
												<Dropdown.Item>Document</Dropdown.Item>
												<Dropdown.Item>Image</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown.Item>
										<Dropdown.Item>Open</Dropdown.Item>
										<Dropdown.Item>Save...</Dropdown.Item>
										<Dropdown.Item>Edit Permissions</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Export</Dropdown.Header>
										<Dropdown.Item>Share</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<Dropdown text='Terminal' icon={null} item simple>
									<Dropdown.Menu>
										<Dropdown.Item>
											<Icon name='dropdown' />
											<span className='text'>New</span>

											<Dropdown.Menu>
												<Dropdown.Item>Document</Dropdown.Item>
												<Dropdown.Item>Image</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown.Item>
										<Dropdown.Item>Open</Dropdown.Item>
										<Dropdown.Item>Save...</Dropdown.Item>
										<Dropdown.Item>Edit Permissions</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Export</Dropdown.Header>
										<Dropdown.Item>Share</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<Dropdown text='Help' icon={null} item simple>
									<Dropdown.Menu>
										<Dropdown.Item>
											<Icon name='dropdown' />
											<span className='text'>New</span>

											<Dropdown.Menu>
												<Dropdown.Item>Document</Dropdown.Item>
												<Dropdown.Item>Image</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown.Item>
										<Dropdown.Item>Open</Dropdown.Item>
										<Dropdown.Item>Save...</Dropdown.Item>
										<Dropdown.Item>Edit Permissions</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Export</Dropdown.Header>
										<Dropdown.Item>Share</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>


								<Menu.Menu inverted position='right'>
									<Menu.Item 
										icon='window minimize'
									/>
									<Menu.Item 
										icon='window restore outline'
									/>
									<Menu.Item 
										icon='close'
									/>
								</Menu.Menu>
							</Menu>
            </div>
        )
    }
}

export default TopBar;