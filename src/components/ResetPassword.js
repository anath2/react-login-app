import React from 'react';

export default function ResetForm() { return(
  <div className="wrapper"> 
    <h3 className="heading"> reset account </h3>
    <form className="form"> 
      <input className="text"  placeholder="Email" type="text" />
      <button className="button"> send reset link </button>
    </form> 
  </div> 
)}
