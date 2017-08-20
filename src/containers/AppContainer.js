import { connect } from 'react-redux'

import App from '../components/App'

const mapStateToProps = (state) => {
    return {
        showContent: state.showContent
    }
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer