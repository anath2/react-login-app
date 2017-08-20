import { combineReducers } from 'redux'

import authenticate from './authenticate'
import register from './register'
import showContent from './showContent'

const AppReducer = combineReducers({
    authenticate, 
    register,
    showContent
})

export default AppReducer