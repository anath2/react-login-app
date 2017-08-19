import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import AppReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(AppReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render( 
    <Provider store={ store }>
        <App />
    </Provider> ,
    document.getElementById('root'));

registerServiceWorker();
