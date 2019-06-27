import React from 'react';
import logo from './logo.svg';
import './assets/app.scss';

import 'semantic-ui-css/semantic.min.css'

import TopBar from './components/TopBar'
import LeftBar from './components/LeftBar'
import BottomBar from './components/BottomBar'

import { 
  ReflexContainer,
  ReflexElement,
  ReflexSplitter
} from 'react-reflex';

import 'react-reflex/styles.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <LeftBar />
      <BottomBar />
      <Panes />
    </div>
  );
};

function Panes() {
  return (
    <div className='panes'>
      <ReflexContainer orientation='vertical'>
        <ReflexElement className='explorer' flex={0.1}>
          <div>Test</div>
        </ReflexElement>
        <ReflexSplitter propagate={true} />
        <ReflexElement className='content' flex={0.9}>
          <ReflexContainer orientation='horizontal'>
            <ReflexElement className='MainPanel' flex={0.8}>
              <div>MainPanel</div>
            </ReflexElement>
            <ReflexSplitter propagate={true} />
            <ReflexElement className='Terminal'>
              <div>Terminal</div>
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>
      </ReflexContainer>
    </div>
  )
}

export default App;
