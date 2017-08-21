import { connect } from 'react-redux'

import App from '../components/App'

const mapStateToProps = ( state ) => {
    return {
        authenticated: state.authenticate.authenticated
    }
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer