import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'normalize.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppContainer from './containers/AppContainer'
import AppReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(AppReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <MuiThemeProvider >
                <Route path="/" component={AppContainer} />            
            </MuiThemeProvider>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

// TODO : Simplify the index.js file