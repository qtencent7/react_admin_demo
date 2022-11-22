function layout(state={collapse: false},action) {

    switch (action.type) {
        case 'change_collapse':
            return {
                collapse: !state.collapse,
                data: action.data,
            }
        default:
            return state
    }
}

export default layout