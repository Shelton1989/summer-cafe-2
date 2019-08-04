import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk'

import { createStore, compose, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import reducer from './reducers/reducers'

const defaultState = {}

const store = createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk)
    // compose(
    //     applyMiddleware(thunk),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
