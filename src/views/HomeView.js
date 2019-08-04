import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import TopBar from '../components/TopBar'
import LeftBar from '../components/LeftBar'
import BottomBar from '../components/BottomBar'
import Panes from '../components/Panes';
import MainPanel from '../components/MainPanel';

import LeftPane from '../components/LeftPane';

import backgroundImage from '../assets/images/summer_background.png'

import {
    treeview
} from '../testdata/testdata'

const HomeView = (props) => {
    return (
        <div>
            <TopBar 
                color={'#d0d0d0'}
                backgroundColor={'rgb(49, 49, 49)'}
            />
            <LeftBar 
                color={'#d0d0d0'}
                backgroundColor={'rgb(49, 49, 49)'}
            />
            <BottomBar 
                color={'white'}
                backgroundColor={'rgb(34, 165, 255)'}
            />
            <Panes 
                mainPanel={<MainPanel 
                    backgroundImage={backgroundImage}
                />}
                leftPanel={<LeftPane 
                    title={treeview.title}
                    structure={treeview.data}
                    width={'auto'}
                />}
            />
        </div>
    )
}

const mapStateTopProps = state => ({

})

const mapActionsToProps = {

}

export default connect(mapStateTopProps, mapActionsToProps)(withRouter(HomeView));