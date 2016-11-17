const defaultData = {
	show: false,
}

function reducer(state = defaultData, action) {
	switch (action.type) {
		case 'SHOW_LOADING':
			return Object.assign({}, state, {
				show: true,
			})
		
		case 'HIDE_LOADING':
			return Object.assign({}, state, {
				show: false
			})
		
		default:
			return state
	}
}

export default reducer
