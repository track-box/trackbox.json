const defaultData = {
	show: false,
}

function addGoal(state = defaultData, action) {
	switch (action.type) {
		case 'SHOW_ADD_GOAL':
			return Object.assign({}, state, {
				show: true
			})
		
		case 'HIDE_ADD_GOAL':
			return Object.assign({}, state, {
				show: false
			})

		default:
			return state
	}
}

export default addGoal
