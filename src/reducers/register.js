import { validate } from '../utilities/validation';

export const register = (state = { errors: {} }, action) => {
    switch (action.type) {
        case 'REGISTER':
            // validation function returns an error object with Field - Error as key value pair
            // It returns an empty object if inputs are valid
            let errors = validate(action.email, action.username, action.password1, action.password2);
            // Check the error object
            if (Object.keys(errors).length === 0) {
                return { errors: { ...errors }, success: true }
            }
            else {
                return { errors: { ...errors }, success: false}
            }
        default:
            return { errors: {}, success: false }
    }
}

export default register