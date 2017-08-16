export const login = (username, password) => {
    return {
        type: 'LOGIN',
        username,
        password
    }
}

export const register = (email, username, password) => {
    return {
        type: "REGISTER",
        email,
        username,
        password,
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}

export const authenticationError = () => {
    return {
        type: "AUTHENTICATION_ERROR"
    }
}
