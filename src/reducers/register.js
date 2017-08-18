import { validate } from '../utilities/validation';

export const register = (action, state = { "error": {} }) => {
    switch (action.type) {
        case 'REGISTER':
            let result = validate(action.email, action.username, action.password1, action.password2);
            return result
        default:
            return { "errors": "unknown", success: false }
    }
}

// TODO VALIDATE AND TEST THE REDUCER