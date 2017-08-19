import React from 'react'

const TextField = ({error, type, name, placeholder}) => { 
    const messages = {
        TAKEN: " is already in use",
        EMPTY: "is empty",
        INVALID: "is not valid"
    }
    let errorMessage 

    if (error !== undefined) {
        if (Object.keys(messages).indexOf(error) !== -1 ) {
            errorMessage = "Field " + messages[error]
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

export default TextField