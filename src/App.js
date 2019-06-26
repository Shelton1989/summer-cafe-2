import React from 'react';
import logo from './logo.svg';
import './assets/app.scss';

import 'semantic-ui-css/semantic.min.css'

import TopBar from './components/TopBar'

function App() {
  return (
    <div className="App">
      <TopBar />
    </div>
  );
}

export default App;
