function auth(state={jwt: false},action) {
    switch (action.type) {
        case 'register':
            return {
                jwt: !state.jwt
            }
        default:
            return state
    }
}

export default auth