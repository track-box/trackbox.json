const defaultData = {
	show: false,
	message: ""
}

function snackbar(state = defaultData, action) {
	switch (action.type) {
		case 'SHOW_SNACKBAR':
			return Object.assign({}, state, {
				show: true,
				message: action.message	
			})
		
		case 'HIDE_SNACKBAR':
			return Object.assign({}, state, {
				show: false
			})

		default:
			return state
	}
}

export default snackbar
