const defaultData = {
	show: false,
	saving: true,
	title: "Saving..."
}

function reducer(state = defaultData, action) {
	switch (action.type) {
		case 'SHOW_SAVE':
			return Object.assign({}, state, {
				show: true,
				saving: true,
				title: "Saving..."
			})
			
		case 'DONE_SAVE':
			return Object.assign({}, state, {
				saving: false,
				title: "Done!"
			})
		
		case 'HIDE_SAVE':
			return Object.assign({}, state, {
				show: false
			})
		
		default:
			return state
	}
}

export default reducer
