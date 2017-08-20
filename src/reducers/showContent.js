const showContent = ( state = 'login', action ) => {
    switch(action.type) {
        case 'SHOW_CONTENT':
            return action.content
        default:
            return state
    }
}

export default showContent