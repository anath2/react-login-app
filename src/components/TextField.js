import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({error, type, name, placeholder}) => { 
    const message = {
        email: {
            TAKEN: "email already in use",
            EMPTY: "email empty",
            INVALID: "please enter a vaild email address"
        },
        username: {
            TAKEN: "username already in use",
            EMPTY: "username empty",
            INVALID: "username cannot contain spaces",
        },
        password1: {            
            EMPTY: "password empty",
        }, 
        password2: {            
            EMPTY: "password empty",
            INVALID: "passwords do not match",
        }
    }
    let errorMessage 
    let errorObject = message[name];
    console.log("The error object is", errorObject)
    if (error !== undefined) {
        if (Object.keys(errorObject).indexOf(error) !== -1 ) {
            errorMessage = errorObject[error]
        }
        else {
            errorMessage = "Error"
        }
    }

    return (
        <div className="textField">
            <input type={type} name={name} placeholder={placeholder} className="text" />
            <div className="error-message">
                { errorMessage }
            </div>
        </div>
)};

// TODO: proptype declarations

TextField.prototype = {
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}

export default TextField