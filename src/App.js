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
} from 'react-reflex'

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
       <ReflexContainer orientation="vertical">

<ReflexElement className="left-pane">
  <div className="pane-content">
    <label>
      Left Pane (resizable)
    </label>
  </div>
</ReflexElement>

<ReflexSplitter propagate={true}/>

<ReflexElement className="right-pane"
  minSize="200"
  maxSize="800">
  <div className="pane-content">
    <label>
      Right Pane (resizable)
      <br/>
      <br/>
      minSize = 200px
      <br/>
      maxSize = 800px
    </label>
  </div>
</ReflexElement>

</ReflexContainer>
    </div>
  )
}

export default App;
