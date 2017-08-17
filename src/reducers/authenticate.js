import Auth from '../utilities/authentication'

export const authenticate = (action, state = { "error": null, "authenticated": false }) => {
    switch (action.type) {
        case "LOGIN":
            if (Auth.users.indexOf(action.username) !== -1 && Auth.passwords.indexOf(action.password) !== -1) {
                return { ...state, "authenticated": true }
            } else {
                return { "error": "authenticationError", "authenticated": false }
            }

        case "LOGOUT":
            return state

        default:
            return { ...state, "error": "unknown" }

    }
}


