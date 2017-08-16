import validate from '../utilities/validation';

const register = (state = { "error": null }, action) => {
    switch (action.type) {
        case 'REGISTER':
            let result = validate(action.email, action.username, action.password1, action.password2);
            if (validate(result.success)) {
                return { ...state, success: true }
            }
            else {
                return { ...result.error, success: false }
            }
        default:
            return { "error": "unknown", success: false }
    }
}

// TODO VALIDATE AND TEST THE REDUCER