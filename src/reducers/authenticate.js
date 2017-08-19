import { Auth } from '../utilities/authentication'

const authenticate = (state = { error: null }, action) => {
    switch (action.type) {
        case "LOGIN":
            if (Auth.users.indexOf(action.username) !== -1 && Auth.passwords.indexOf(action.password) !== -1) {
                return { error: null, authenticated: true }
            } else {
                return { error: "AUTH_ERROR", authenticated: false }
            }

        case "LOGOUT":
            return state

        default:
            return state
    }
}

export default authenticate

