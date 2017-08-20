import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { showContent } from '../actions'

let Link = ({ dispatch, children, target }) => { return(
    < a 
        onClick={(e) => { e.preventDefault(); dispatch( showContent(target) ); }}
        className="link" 
    > { children } </a>
)}

Link = connect()(Link);

Link.propTypes = {
    target: PropTypes.string.isRequired
}

export default Link