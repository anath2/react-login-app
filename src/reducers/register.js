import { validate } from '../utilities/validation';

export const register = (state = { "error": {} }, action) => {
    switch (action.type) {
        case 'REGISTER':
            let result = validate(action.email, action.username, action.password1, action.password2);
            return result
        default:
            return { "errors": "unknown", success: false }
    }
}

export default register