const defaultData = {
	show: false,
}

function reducer(state = defaultData, action) {
	switch (action.type) {
		case 'SHOW_RENAME':
			return Object.assign({}, state, {
				show: true
			})
		
		case 'HIDE_RENAME':
			return Object.assign({}, state, {
				show: false
			})
		
		default:
			return state
	}
}

export default reducer
