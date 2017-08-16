import Auth from './authentication';
export const validate = (email, username, password1, password2) => {
    result = {};
    if (Auth.emails.indexOf(email) !== -1) {
        result = { "errors": { "email": "taken" }, "success": false }
    }

    if (email === "") {
        result = { "errors": { "email": "empty" }, "success": false }
    }

    if (/[a-z0-9]+@[a-z0-9]+.com/.test(email) === false) {
        result = { "errors": { "email": "invalid" }, "success": false }
    }

    if (Auth.users.indexOf(username) !== -1) {
        result = { "errors": { ...result.errors, "username": "taken" }, "success": false }
    }

    if (email === "") {
        result = { "errors": { ...results.errors, "username": "empty" }, "success": false }
    }

    if (/\s/.test(username) === true) {
        result = { "errors": { ...results.errors, "username": "invalid" }, "success": false }
    }

    if (password1 === "") {
        result = { "errors": { ...results.errors, "password1": "empty" }, "success": false }
    }

    if (password2 === "") {
        result = { "errors": { ...results.errors, "password2": "empty" }, "success": false }
    }

    if (password1 !== password2) {
        result = { "errors": { ...results.errors, "password2": "mismatch" }, "success": false }
    }

    if (Object.keys(result).length === 0) {
        return { "success": true, "errror": {} }
    }
    else {
        return result;
    }
}

// TODO TEST THE VALIDATION FUNCTION