import React from 'react'

const TextField = ({error={}, type, name, placeholder}) => { return (
    <div class="textField">
        <input type={type} name={name} placeholder={placeholder} className="text" />
        <div className="error-message">{error}</div>
    </div>
)};

// TODO: proptype declarations

export default TextField