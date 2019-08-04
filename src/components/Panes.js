import React, { Component } from 'react';

import { 
    ReflexContainer,
    ReflexElement,
    ReflexSplitter
  } from 'react-reflex';

function Panes(props) {
    return (
      <div className='panes'>
        <ReflexContainer orientation='vertical'>
          <ReflexElement className='explorer' flex={0.1}>
            {props.leftPanel}
          </ReflexElement>
          <ReflexSplitter propagate={true} />
          <ReflexElement className='content' flex={0.9}>
          {props.mainPanel}
            {/* <ReflexContainer orientation='horizontal'>
              <ReflexElement className='MainPanel' flex={0.8}>
                
              </ReflexElement>
              <ReflexSplitter propagate={true} />
              <ReflexElement className='Terminal'>
                <div>Terminal</div>
              </ReflexElement>
            </ReflexContainer> */}
          </ReflexElement>
        </ReflexContainer>
      </div>
    )
}

export default Panes;