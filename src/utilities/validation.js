import { Auth } from './authentication';
export const validate = (email, username, password1, password2) => {
    let result = {};
    if (Auth.emails.indexOf(email) !== -1) {
        result = { "errors": { "email": "taken" }, "success": false }
    }

    if (email === "") {
        result = { "errors": { "email": "empty" }, "success": false }
    }

    if (/[a-z0-9]+@[a-z0-9]+.com/.test(email) === false && email !== "") {
        result = { "errors": { "email": "invalid" }, "success": false }
    }

    if (Auth.users.indexOf(username) !== -1) {
        result = { "errors": { ...result.errors, "username": "taken" }, "success": false }
    }

    if (username === "") {
        result = { "errors": { ...result.errors, "username": "empty" }, "success": false }
    }

    if (/\s/.test(username) === true && username !== "") {
        result = { "errors": { ...result.errors, "username": "invalid" }, "success": false }
    }

    if (password1 === "") {
        result = { "errors": { ...result.errors, "password1": "empty" }, "success": false }
    }

    if (password2 === "") {
        result = { "errors": { ...result.errors, "password2": "empty" }, "success": false }
    }

    if (password1 !== password2) {
        result = { "errors": { ...result.errors, "password2": "mismatch" }, "success": false }
    }

// CHECK THE ERROR OBJECT

    if (Object.keys(result).length === 0) {
        return { "success": true, "errors": {} }
    }
    else {
        return result;
    }
}

// TODO TEST THE VALIDATION FUNCTION