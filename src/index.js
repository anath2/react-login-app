import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import AppContainer from './containers/AppContainer'
import AppReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(AppReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render( <AppContainer store={ store } /> , document.getElementById('root'));

registerServiceWorker();
