import { connect } from 'react-redux';

import { register } from '../actions'
import RegisterForm from '../components/RegisterForm'

const mapStateToProps = (state) => {
  return {
    errors: state.register.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      let nodeList = e.target.querySelectorAll('input');
      let nodeArray = [...nodeList]
      let [ email, username, password1, password2 ] = nodeArray.map((node) => {
        return (node.value)
      });
      dispatch(register(email, username, password1, password2))
      
    } 
  }
}

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
export default RegisterContainer
