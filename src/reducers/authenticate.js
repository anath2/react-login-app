import Auth from '../utilities/authentication'

export default authenticate = (state = { "error": null, "authenticated": false }, action) => {
    switch (action.type) {
        case "LOGIN":
            if (Auth.users.indexOf(action.username) !== -1 && Auth.password.indexOf(action.password) !== -1) {
                return { ...state, "authenticated": true }
            } else {
                return { "error": "authenticationError", "authenticated": false }
            }

        case "LOGOUT":
            return { "error": null }

        default:
            return { "error": "unknown" }

    }
}

// TODO : TEST THE REDUCER

