import React from 'react';
import logo from './logo.svg';
import './assets/app.scss';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'

import 'react-reflex/styles.css';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.blue.dark.compact.css';

import LoginView from './views/LoginView';
import HomeView from './views/HomeView';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch >
            <Route path='/login' component={LoginView} />
            <Route exact path='/' render={() => {
              return <Redirect to={{pathname: '/login'}} />
            }} />
            <PrivateRoute path='/dashboard' component={HomeView} />
          </Switch>
        </BrowserRouter>
    </div>
  );
};

const PrivateRoute = ({component: Component, ...rest}) => {
  const token = localStorage.getItem('token')
  return (
    <Route {...rest} render={(props)=>{
      if (true) {
        return <Component {...props}/>
      } else {
        return (<Redirect to={
          {
            pathname: '/login',
            from: props.location.pathname
          }
        }></Redirect>)
      }
    }}/>
  )
}

export default App;