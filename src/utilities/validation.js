import { Auth } from './authentication';
export const validate = (email, username, password1, password2) => {
    let errors = {}

    if (Auth.emails.indexOf(email) !== -1) {
        errors = { email: "TAKEN" } 
    }

    if (email === "") {
        errors =  { ...errors, email: "EMPTY" } 
    }

    if (/[a-z0-9]+@[a-z0-9]+.com/.test(email) === false && email !== "") {
        errors = { ...errors , email: "INVALID" } 
    }

    if (Auth.users.indexOf(username) !== -1) {
        errors = { ...errors , username: "TAKEN" }
    }

    if (username === "") {
        errors = { ...errors, username: "EMPTY" }
    }

    if (/\s/.test(username) === true && username !== "") {
        errors = { ...errors, username: "INVALID" }
    }

    if (password1 === "") {
        errors = { ...errors, password1: "EMPTY" }
    }

    if (password2 === "") {
        errors = { ...errors, password2: "EMPTY" }
    }

    if (password1 !== password2) {
        errors = { ...errors, password2: "INVALID" }
    }
    
    return errors
}

// TODO TEST THE VALIDATION FUNCTION