import { connect } from 'react-redux'

import { login } from '../actions'
import LoginForm from '../components/LoginForm'

const mapStateToProps = (state) => {
  return {
    error: state.authenticate.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      let nodeList = e.target.querySelectorAll('input');
      let nodeArray = [...nodeList];
      let [ username, password ] = nodeArray.map((node) => {
        return node.value
      });
      dispatch(login(username, password))
      
      nodeArray.forEach((node) => {
        node.value = ""
      });
    }
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)
export default LoginContainer
