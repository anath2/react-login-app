import { combineReducers } from 'redux'

import authenticate from './authenticate'
import register from './register'

const AppReducer = combineReducers({
    authenticate, 
    register
})

export default AppReducer